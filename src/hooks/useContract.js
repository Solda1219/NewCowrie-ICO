import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getBep20Contract,
  getPresaleContract,
  getPresaleTokenContract,
  getNewCowrieTokenContract,
  getSwapContract,
  } from 'utility/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address, chainId) => {
  const web3 = useWeb3(chainId)
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useNewCowrieToken = (chainId) => {
  const web3 = useWeb3(chainId)
  return useMemo(() => getNewCowrieTokenContract(chainId, web3), [web3, chainId])
}

export const usePresaleContract = (chainId) => {
  const web3 = useWeb3(chainId)
  return useMemo(() => getPresaleContract(chainId, web3), [web3, chainId])
}

export const usePresaleToken = (chainId) => {
  const web3 = useWeb3(chainId)
  return useMemo(() => getPresaleTokenContract(chainId, web3), [web3, chainId])
}

export const useSwapContract = (chainId) => {
  const web3 = useWeb3(chainId)
  return useMemo(() => getSwapContract(chainId, web3), [web3, chainId])
}