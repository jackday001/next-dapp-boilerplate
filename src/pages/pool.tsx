import { ChainId, CurrencyAmount, JSBI, NATIVE, Pair } from '@sushiswap/core-sdk'
import React, { useMemo } from 'react'
import Container from '../layouts/Default/Container'
import Head from 'next/head'
import ConnectWallet from 'src/components/ConnectWallet'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'

export default function Pool() {
  const { account } = useWeb3React()

  return (
    <Container id="pool-page" className="py-4 space-y-6 md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Pool</title>
      </Head>
      <div className="p-4 mb-3 space-y-3">
          My Liquidity Positions
      </div>
			<div className="p-4 space-y-4 rounded bg-dark-900">
        <div className="grid grid-flow-row gap-3">
          <ConnectWallet />
        </div>
      </div>
    </Container>
  )
}
