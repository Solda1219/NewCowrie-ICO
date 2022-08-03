import {fetchFullSaleStatus} from 'utility/tokenBalance'
import { ETHEREUM_MAINNET_CHAINID } from "config";
import {getBalanceNumber} from 'utility/formatBalance'
export const updateSaleStatus3=(chainId, account) => {
    return  async (dispatch, getState) => 
    {
      let temp = await fetchFullSaleStatus(chainId,account);
      let sold =getBalanceNumber(temp.sale[0],9) - getBalanceNumber(temp.sale[1],9);
      sold = sold/getBalanceNumber(temp.sale[0],9)*100;
      const result ={
        price: chainId===ETHEREUM_MAINNET_CHAINID ? 7500:300 ,
        ethBalance: getBalanceNumber(temp.base),
        prsBalance: getBalanceNumber(temp.tokens[1],9),
        newcowBalance: getBalanceNumber(temp.tokens[0],9),
        totalSupply: getBalanceNumber(temp.sale[0],9),
        remainSupply: getBalanceNumber(temp.sale[1],9),
        sold:sold,
        live:temp.sale[2]
      }
      dispatch({ type: 'UPDATE_SALE_STATUS', newStatus: result })
    }
}

