import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Activity } from 'react-feather'
import React from 'react'

export default function ConnectWallet() {
  const { active, account, connector, activate, error, deactivate } = useWeb3React()
  const supportedChainIds = [
    137, // matic
    80001, // matic testnet
  ]

  const injected = new InjectedConnector({
    supportedChainIds,
  })
  return error ? (
    <div
      className="flex items-center justify-center px-4 py-2 font-semibold text-black border rounded bg-opacity-80 border-red bg-red hover:bg-opacity-100"
    >
      <div className="mr-1">
        <Activity className="w-4 h-4" />
      </div>
      {error instanceof UnsupportedChainIdError ? 'You are on the wrong network' : 'Error'}
    </div>
  ) : (
      account ?
        <div>{account}</div> :
        <button
          id="connect-wallet"
          onClick={() => activate(injected)}
        >
          Connect to a wallet
        </button>
      )
}
