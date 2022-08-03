import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import {
  // ConnectorNames,
  connectorLocalStorageKey,
} from "@pancakeswap-v3/uikit";
import { connectorsByName } from "utility/web3React";
import { setupNetwork } from "utility/wallet";
import { useSnackbar } from "notistack";
import { ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";
// import { profileClear } from "state/profile";
// import { useAppDispatch } from "state";

const useAuth = (network) => {
  // const dispatch = useAppDispatch();
  const { activate, deactivate } = useWeb3React();
  const { enqueueSnackbar } = useSnackbar();
  const login = useCallback((connectorID) => {

    if (network === ETHEREUM_MAINNET_CHAINID) {
      const connector = connectorsByName.erc[connectorID];
      if (connector) {
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            console.log(network, "ETHEREUM_MAINNET_CHAINID");
            const hasSetup = await setupNetwork(ETHEREUM_MAINNET_CHAINID);
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              enqueueSnackbar("No provider was found", {
                variant: "error",
              });
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector;
                walletConnector.walletConnectProvider = null;
              }
              enqueueSnackbar("Please authorize to access your account", {
                variant: "error",
              });
            } else {
              enqueueSnackbar(error.message, {
                variant: "error",
              });
            }
          }
        });
      } else {
        enqueueSnackbar("The connector config is wrong", {
          variant: "error",
        });
      }
    } else {
      const connector = connectorsByName.bsc[connectorID];
      if (connector) {
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork(BINANCE_SMART_CHAINID);
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              enqueueSnackbar("No provider was found", {
                variant: "error",
              });
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector;
                walletConnector.walletConnectProvider = null;
              }
              enqueueSnackbar("Please authorize to access your account", {
                variant: "error",
              });
            } else {
              enqueueSnackbar(error.message, {
                variant: "error",
              });
            }
          }
        });
      } else {
        enqueueSnackbar("The connector config is wrong", {
          variant: "error",
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    // dispatch(profileClear());
    deactivate();
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
