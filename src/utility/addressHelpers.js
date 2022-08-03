import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'

export const getAddress = (address,chainId) => {
  return address[chainId]
}

export const getNewCowrieAddress = (chainId) => {
  return getAddress(tokens.newcowrie.address, chainId)
}

export const getPresaleTokenAddress = (chainId) => {
  return getAddress(tokens.presale.address, chainId)
}

export const getPresaleContractAddress = (chainId) => {
  return getAddress(addresses.presale, chainId)
}

export const getSwapContractAddress = (chainId) => {
  return getAddress(addresses.swap, chainId)
}

export const getMulticallAddress = (chainId) => {
  return getAddress(addresses.multiCall ,chainId)
}

