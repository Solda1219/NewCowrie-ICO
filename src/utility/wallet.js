// Set of helper functions to facilitate wallet setup

// import { BASE_BSC_SCAN_URL, BASE_ERC_SCAN_URL } from "config";
import { BASE_BSC_SCAN_URL, ETHEREUM_MAINNET_CHAINID, BINANCE_SMART_CHAINID } from "config";
import { nodes } from "./getRpcUrl";
/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (chainId) => {
  const provider = window.ethereum;

  if (provider) {
    // const chainId = parseInt(chainId, 10);
    try {
      if (chainId === BINANCE_SMART_CHAINID)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Binance Smart Chain Mainnet",
              nativeCurrency: {
                name: "BNB",
                symbol: "bnb",
                decimals: 18,
              },
              rpcUrls: nodes.bsc,
              blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
            },
          ],
        });
      else
        await provider.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`           
            },
          ],
        });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    if (chainId === BINANCE_SMART_CHAINID)
      console.error(
        "Can't setup the BSC network on metamask because window.ethereum is undefined"
      );
    else
      console.error(
        "Can't setup the ETH network on metamask because window.ethereum is undefined"
      );

    return false;
  }
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  tokenImage
) => {
  const tokenAdded = await window.ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  return tokenAdded;
};
