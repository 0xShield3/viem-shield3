import {
  Shield3ConnectionError,
  Shield3PolicyViolationError,
} from '../../errors/shield3Errors.js'
import type { TransactionSerializable } from '../../types/transaction.js'
import { serializeTransaction } from '../../utils/transaction/serializeTransaction.js'

function parsePolicyResults(response: any) {
  const blockedPolicyNames =
    response.result.transaction.workflow_results.policyResults
      .filter(
        (policy: any) =>
          policy.policyDecision.toLowerCase() === 'block' ||
          policy.policyDecision.toLowerCase() === 'mfa',
      )
      .map((policy: any) => policy.name)
  return JSON.stringify(blockedPolicyNames)
}

async function callShield3(
  apiKey: string,
  serializedUnsigned: any,
  fromAddress: string,
  chainId: string,
) {
  // const apiKey = process.env.SHIELD3_API_KEY
  const data = JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_simulateTransaction',
    params: [serializedUnsigned, fromAddress],
    id: 42,
  })

  const url = `https://rpc.shield3.com/v3/0x${chainId}/rpc?apiKey=${apiKey}`
  const headers = { 'Content-Type': 'application/json' }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: data,
    })
    if (!response.ok) {
      throw new Shield3ConnectionError('Could not connect to Shield3', {
        response: response.json(),
      })
    }
    const responseData = await response.json()
    console.log(responseData)
    if (responseData.result.decision !== 'Allow') {
      throw new Shield3PolicyViolationError(
        `Policy violation(s): ${parsePolicyResults(responseData)}`,
      )
    }
    return responseData
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fortifySendTransaction<
  PreppedTx extends TransactionSerializable & { from: string },
>(populated_tx: PreppedTx, apiKey: string): Promise<any> {
  // if (process.env.SHIELD3_API_KEY === null) {
  //   console.log(
  //     "Your Shield3 api key is undefined. Add SHIELD3_API_KEY=your-api-key to your .env file in your project's root directory for added protection. Then run 'cd ./node_modules/viem && yarn run configure_shield3'",
  //   )
  //   return
  // }

  const serializedUnsigned = serializeTransaction(populated_tx) // Assuming serializeTransaction exists and is compatible with this usage.
  return await callShield3(
    apiKey,
    serializedUnsigned,
    populated_tx.from.toString(),
    populated_tx.chainId!.toString(16),
  )
}

export async function fortifySerializedTransaction(
  SerializedTransaction: string,
  ChaindId: string,
  fromAddress: string,
): Promise<any> {
  // const serializedTx = '0xf86c808504a817c80082520894c0ffee254729296a45a3885639ac7e10f9d54979b872386f26fc100008025a0b5e8b0f569de0c29e3e1b8c9d8618e73903c28a5a83f8cfd0f6f8cd10b8db79a071e2baa5a6f1b23839ece2762ca0b5a8e1b3b7c1b2b8322a70a2fc68af50e21ba';

  if (process.env.SHIELD3_API_KEY === undefined) {
    console.log(
      "Your Shield3 api key is undefined. Add SHIELD3_API_KEY=your-api-key to your .env.local file in your project's root directory for added protection.",
    )
    return
  }
  return await callShield3('tmp', SerializedTransaction, fromAddress, ChaindId)
}

// ____________________________________________

// import axios from 'axios'
// import { serializeTransaction } from '../../../src/index.js'
// import {
//   Shield3ConnectionError,
//   Shield3PolicyViolationError,
// } from '../../errors/shield3Errors.js'
// import {getShield3ApiKey} from '../../shield3/getShield3Key.js'

// function parsePolicyResults(response: any) {
//   const blockedPolicyNames =
//     response.data.result.transaction.workflow_results.policyResults
//       .filter(
//         (policy: any) =>
//           policy.policyDecision.toLowerCase() === 'block' ||
//           policy.policyDecision.toLowerCase() === 'mfa',
//       )
//       .map((policy: any) => policy.name)
//   return JSON.stringify(blockedPolicyNames)
// }

// async function callShield3(
//   serializedUnsigned: any,
//   fromAddress: string,
//   chainId: string,
// ) {
//   const key=getShield3ApiKey()
//   const data = JSON.stringify({
//     jsonrpc: '2.0',
//     method: 'eth_simulateTransaction',
//     params: [serializedUnsigned, fromAddress],
//     id: 42,
//   })

//   const config = {
//     method: 'post',
//     url: `https://rpc.shield3.com/v3/0x${chainId}/rpc?apiKey=${key}`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: data,
//   }

//   try {
//     const response = await axios(config)
//     if (response.status !== 200) {
//       throw new Shield3ConnectionError('Could not connect to Shield3', {
//         response: response.data,
//       })
//     }
//     if (response.data.result.decision !== 'Allow') {
//       throw new Shield3PolicyViolationError(
//         `Policy violation(s): ${parsePolicyResults(response)}`,
//       )
//     }
//     return response
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }

// export async function fortifySendTransaction(populated_tx: any) {
//   // This function takes in a preparedTransaction, or an already serialized one as a string.
//   const key=getShield3ApiKey()
//   if (key === undefined) {
//     console.log(
//       "Your Shield3 api key is undefined. Add VITE_SHIELD3_API_KEY=your-api-key to your .env.local file in your project's root directory for added protection.",
//     )
//     return
//   }
//   let serializedUnsigned: string
//   if (populated_tx.Type !== 'string') {
//     serializedUnsigned = serializeTransaction(populated_tx)
//   } else {
//     serializedUnsigned = populated_tx
//   }
//   return await callShield3(
//     serializedUnsigned,
//     populated_tx.from.toString(),
//     populated_tx.chainId.toString(16),
//   )
// }

// export async function fortifySerializedTransaction(populated_tx: any) {
//   // This function takes in a preparedTransaction, or an already serialized one as a string.
//   const key=getShield3ApiKey()
//   if (key === undefined) {
//     console.log(
//       "Your Shield3 api key is undefined. Add VITE_SHIELD3_API_KEY=your-api-key to your .env.local file in your project's root directory for added protection.",
//     )
//     return
//   }
//   let serializedUnsigned: string
//   if (populated_tx.Type !== 'string') {
//     serializedUnsigned = serializeTransaction(populated_tx)
//   } else {
//     serializedUnsigned = populated_tx
//   }
//   return await callShield3(
//     serializedUnsigned,
//     populated_tx.from.toString(),
//     populated_tx.chainId.toString(16),
//   )
// }
// // Example usage:
// // callShield3Api('0x1', '0xf86925808307a12094...', '0x01B2f8877f3e8F366eF4D4F48230949123733897');
