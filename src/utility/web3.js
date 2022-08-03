import Web3 from 'web3'
//import { HttpProviderOptions } from 'web3-core-helpers'
import getRpcUrl from 'utility/getRpcUrl'
import { ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";

const RPC_URL_BSC =  getRpcUrl.bsc()
const RPC_URL_ETH =  getRpcUrl.erc()
const httpProviderBSC = new Web3.providers.HttpProvider(RPC_URL_BSC, { timeout: 10000 })
const web3NoAccountBSC = new Web3(httpProviderBSC)
const httpProviderETH = new Web3.providers.HttpProvider(RPC_URL_ETH, { timeout: 10000 })
const web3NoAccountETH = new Web3(httpProviderETH)

const getWeb3NoAccount = (chainID) => {
  if(chainID === ETHEREUM_MAINNET_CHAINID)
    return web3NoAccountETH
  if(chainID === BINANCE_SMART_CHAINID)
    return web3NoAccountBSC
  return null;
}

export { getWeb3NoAccount }
export default web3NoAccountBSC
