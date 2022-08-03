import { useEffect } from 'react'
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-v3/uikit'
import useAuth from 'hooks/useAuth'
import { useSelector } from "react-redux";
import { ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";

const _binanceChainListener = async () =>
  new Promise((resolve) =>
    Object.defineProperty(window, 'BinanceChain', {
      get() {
        return this.bsc
      },
      set(bsc) {
        this.bsc = bsc
        resolve()
      },
    }),
  )

const useEagerConnect = () => {

  const network = useSelector((state) => state.network.chainId);
  const { login } = useAuth(network);
  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey);
    if (connectorId) {
      console.log(connectorId);
      if (network === BINANCE_SMART_CHAINID) {
        const isConnectorBinanceChain = connectorId === ConnectorNames.BSC
        const isBinanceChainDefined = Reflect.has(window, 'BinanceChain')

        // Currently BSC extension doesn't always inject in time.
        // We must check to see if it exists, and if not, wait for it before proceeding.
        if (isConnectorBinanceChain && !isBinanceChainDefined) {
          _binanceChainListener().then(() => login(connectorId))

          return
        }
      }

      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
