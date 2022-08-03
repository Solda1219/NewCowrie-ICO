import BigNumber from 'bignumber.js'
import { getWeb3NoAccount } from 'utility/web3'

import { getPresaleContractAddress, getNewCowrieAddress, getPresaleTokenAddress } from './addressHelpers'
import presaleABI from 'config/abi/presale.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utility/multicall'

export const fetchSaleStatus = async (chainId) => {
  const presaleContractAddress = getPresaleContractAddress(chainId)

  const calls = [
    {
      address: presaleContractAddress,
      name: 'icoAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'remainIcoAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'icoLive',
      params: [],
    },
  ];
  try {
    const res = await multicall(chainId, presaleABI, calls)
    const ret = [BigNumber(res[0]).toJSON(), BigNumber(res[1]).toJSON(), res[2][0]];
    return ret
  } catch {
    return [0, 0, false];
  }

}

export const fetchTokenBalances = async (chainId, account) => {
  if (!account) return [0, 0];
  const newcowrieAddress = getNewCowrieAddress(chainId)
  const presaleTokenAddress = getPresaleTokenAddress(chainId)
  const calls = [
    {
      address: newcowrieAddress,
      name: 'balanceOf',
      params: [account],
    },
    {
      address: presaleTokenAddress,
      name: 'balanceOf',
      params: [account],
    }
  ];


  try {
    const rawTokenBalances = await multicall(chainId, erc20ABI, calls)
    const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
      return new BigNumber(tokenBalance).toJSON()
    })
    return parsedTokenBalances
  } catch {
    return [0, 0];
  }
}

export const fetchBnbBalance = async (chainId, account) => {
  if (!account) return 0;
  try {
    const web3 = getWeb3NoAccount(chainId)

    const walletBalance = await web3.eth.getBalance(account)
    return new BigNumber(walletBalance).toJSON()
  } catch {
    return 0;
  }
}

export const fetchFullSaleStatus = async (chainId, account) => {
  const sale = await fetchSaleStatus(chainId);
  const tokens = await fetchTokenBalances(chainId, account);
  const base = await fetchBnbBalance(chainId, account);
  return { sale, tokens, base }
}
export default fetchBnbBalance
