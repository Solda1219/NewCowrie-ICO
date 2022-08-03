import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { ConnectorNames } from "@pancakeswap-v3/uikit";
// import Web3 from "web3";
import getNodeUrl from "./getRpcUrl";

const POLLING_INTERVAL = 12000;
const rpcUrl = getNodeUrl;
const chainId={};
chainId.bsc = parseInt(process.env.REACT_APP_BSC_CHAIN_ID, 10);
chainId.erc = parseInt(process.env.REACT_APP_ERC_CHAIN_ID, 10);

const injected = {
  bsc: new InjectedConnector({ supportedChainIds: [chainId.bsc] }),
  erc: new InjectedConnector({ supportedChainIds: [chainId.erc] }),
};

const walletconnect = {
  bsc: new WalletConnectConnector({
    rpc: { [chainId.bsc]: rpcUrl.bsc() },
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
  }),
  erc: new WalletConnectConnector({
    rpc: { [chainId.erc]: rpcUrl.erc() },
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
  }),
};

const bscConnector = new BscConnector({ supportedChainIds: [chainId.bsc] });

export const connectorsByName = {
  bsc: {
    [ConnectorNames.Injected]: injected.bsc,
    [ConnectorNames.WalletConnect]: walletconnect.bsc,
    [ConnectorNames.BSC]: bscConnector,
  },
  erc: {
    [ConnectorNames.Injected]: injected.erc,
    [ConnectorNames.WalletConnect]: walletconnect.erc,
  },
};

export const getLibrary = (provider) => {
  return provider;
};
