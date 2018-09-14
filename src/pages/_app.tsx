import '../styles/index.css'

import { Fragment, FunctionComponent } from 'react'
import { useEffect } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ReactGA from 'react-ga'
import { Web3ReactProvider } from '@web3-react/core'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import store, { persistor } from '../state'
import DefaultLayout from '../layouts/Default'
import { getLibrary } from '../utils'

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Guard: FunctionComponent
    Layout: FunctionComponent
    Provider: FunctionComponent
  }
}) {
  const { pathname, query } = useRouter()

  useEffect(() => {
    ReactGA.pageview(`${pathname}${query}`)
  }, [pathname, query])

  const Provider = Component.Provider || Fragment
  const Layout = Component.Layout || DefaultLayout
  const Guard = Component.Guard || Fragment

  return (
    <Fragment>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ReduxProvider store={store}>
          <PersistGate loading={<div>loading</div>} persistor={persistor}>
            <Provider>
              <Layout>
                <Guard>
                  <Component {...pageProps} />
                </Guard>
              </Layout>
            </Provider>
          </PersistGate>
        </ReduxProvider>
      </Web3ReactProvider>
    </Fragment>
  )
}

export default MyApp
