import type { Chain } from '../../types/chain.js'

export const wrapChain = (chain: Chain, apiKey: string) => ({
    ...chain,
    custom: { ...chain.custom, apiKey },
})
