import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
// import { ethers } from 'ethers'
// import BigNumber from 'bignumber.js'
// import { useAppDispatch } from 'state'
// import { updateUserAllowance } from 'state/actions'
import { approve } from 'utility/callHelpers'
import { useMasterchef, useCake, useSousChef, useLottery, useCakeVaultContract } from './useContract'


// Approve a Farm
export const useApprove = (lpContract) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, masterChefContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}
