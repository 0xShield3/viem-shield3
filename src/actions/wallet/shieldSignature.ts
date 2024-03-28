import axios from 'axios'
import { serializeTransaction } from '../../../src/index.js'
// import type { BaseError } from '../../errors/base.js'
import {
  Shield3ConnectionError,
  Shield3PolicyViolationError,
} from '../../errors/shield3Errors.js'

function parsePolicyResults(response: any) {
  const blockedPolicyNames =
    response.data.result.transaction.workflow_results.policyResults
      .filter(
        (policy: any) =>
          policy.policyDecision.toLowerCase() === 'block' ||
          policy.policyDecision.toLowerCase() === 'mfa',
      )
      .map((policy: any) => policy.name)
  return JSON.stringify(blockedPolicyNames)
}

async function callShield3(
  serializedUnsigned: any,
  fromAddress: string,
  chainId: string,
) {
  //   const apiKey = 'SsrNa315DU2O37cYzmQK36d7ABpBcFg2aynDlyWh'
  const apiKey = import.meta.env.VITE_SHIELD3_API_KEY
  const data = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_simulateTransaction',
    params: [serializedUnsigned, fromAddress],
    id: 42,
  })

  const config = {
    method: 'post',
    url: `https://rpc.shield3.com/v3/0x${chainId}/rpc?apiKey=${apiKey}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  try {
    const response = await axios(config)
    if (response.status !== 200) {
      throw new Shield3ConnectionError('Could not connect to Shield3', {
        response: response.data,
      })
    }
    if (response.data.result.decision !== 'Allow') {
      throw new Shield3PolicyViolationError(
        `Policy violation(s): ${parsePolicyResults(response)}`,
      )
    }
    return response // Return the response data
  } catch (error) {
    console.error(error)
    throw error // Rethrow the error to handle it in the calling function
  }
}

export async function fortifyTransaction(populated_tx: any) {
  // This function takes in a preparedTransaction, or an already serialized one as a string.
  let serializedUnsigned: string
  if (populated_tx.Type !== 'string') {
    serializedUnsigned = serializeTransaction(populated_tx)
  } else {
    serializedUnsigned = populated_tx
  }
  return await callShield3(
    serializedUnsigned,
    populated_tx.from.toString(),
    populated_tx.chainId.toString(16),
  )
}

// Example usage:
// callShield3Api('0x1', '0xf86925808307a12094...', '0x01B2f8877f3e8F366eF4D4F48230949123733897');
