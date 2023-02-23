import axiosInstance from '../../axios.config'
import {
  GetTopAccountsRquest,
  GetTopAccountsFail,
  GetTopAccounts,
  AddressErrorType,
  GetAddressDetailInfoRequest,
  GetAddressDetailInfo,
  UpdateAddressRequest,
  UpdateAddressInfo,
  UpdateAddressError,
  GetContractInfoSuccess,
  GetReadContractInfo,
  GetReadContractInfoError,
  GetMetamaskConnected,
  GetWriteContractInfo,
  GetWriteContractInfoError,
  GetMetamaskDisConnected,
  GetAddressInternalTxns,
  GetAddressErc20Txns,
  GetAddressErc721Txns,
  GetAddressEvents,
  ContractNotVerified,
  ContractNotExist,
  GetContractInfoRequest,
  GetReadContractRequest,
  GetAddressDetailAnalyticsRequest,
  GetAddressDetailAnalyticsSuccess,
  GetAddressDetailAnalyticsError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getContractInfo =
  (address: any) =>
  async (
    dispatch: Dispatch<
      GetContractInfoRequest | GetContractInfoSuccess | ContractNotVerified | ContractNotExist | AddressErrorType
    >,
  ) => {
    try {
      dispatch({
        type: 'GET_CONTRACT_INFO_REQUEST',
        payload: {
          contractInfo: null,
          loading: true,
          error: null,
          contractIsVerified: false,
          contractIsExist: false,
        },
      } as GetContractInfoRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/address/contractinfo/${address}`)

      if (response.data.success) {
        dispatch({
          type: 'GET_CONTRACT_INFO_SUCCESS',
          payload: {
            contractInfo: response.data.contract,
            loading: false,
            error: null,
            contractIsVerified: true,
            contractIsExist: true,
          },
        } as GetContractInfoSuccess)
      } else {
        if (response.status === 204) {
          dispatch({
            type: 'CONTRACT_NOT_VERIFIED',
            payload: {
              contractInfo: null,
              contractIsVerified: false,
              contractIsExist: true,
              error: response.data.error,
              loading: false,
            },
          } as ContractNotVerified)
        } else if (response.status === 404) {
          dispatch({
            type: 'CONTRACT_NOT_EXIST',
            payload: {
              contractInfo: null,
              contractIsVerified: false,
              contractIsExist: false,
              error: response.data.error,
              loading: false,
            },
          } as ContractNotExist)
        }
      }
    } catch (error: any) {
      dispatch({
        type: 'ADDRESS_ERROR',
        payload: {
          error: 'error',
        },
      } as AddressErrorType)
    }
  }

export const getReadContractInfo =
  (address: any) =>
  async (dispatch: Dispatch<GetReadContractRequest | GetReadContractInfo | GetReadContractInfoError>) => {
    try {
      const response = await axiosInstance.post<any>(`${BackendURL}/address/readContract/${address}`)

      if (response.data.success) {
        dispatch({
          type: 'GET_READ_CONTRACT',
          payload: {
            readContract: response.data.result,
            loading: false,
          },
        } as GetReadContractInfo)
      } else {
        dispatch({
          type: 'GET_READ_CONTRACT_ERROR',
          payload: {
            error: response.data.error,
            loading: false,
          },
        } as GetReadContractInfoError)
      }
    } catch (error: any) {}
  }

export const getWriteContractInfo =
  (address: any) => async (dispatch: Dispatch<GetWriteContractInfo | GetWriteContractInfoError>) => {
    try {
      const response = await axiosInstance.post<any>(`${BackendURL}/address/writeContract/${address}`)

      if (response.data.success) {
        dispatch({
          type: 'GET_WRITE_CONTRACT',
          payload: {
            writeContract: response.data.result,
            abi: response.data.abi,
            loading: false,
          },
        } as GetWriteContractInfo)
      } else {
        dispatch({
          type: 'GET_WRITE_CONTRACT_ERROR',
          payload: {
            error: response.data.error,
            loading: false,
            abi: [],
          },
        } as GetWriteContractInfoError)
      }
    } catch (error: any) {}
  }

export const getMetamaskDisConnected = () => async (dispatch: Dispatch<GetMetamaskDisConnected>) => {
  try {
    dispatch({
      type: 'GET_METAMASK_DISCONNECTED',
      payload: {
        account: '',
        isMetamaskConnected: false,
      },
    } as GetMetamaskDisConnected)
  } catch (error: any) {}
}

export const getMetamaskConnected = () => async (dispatch: Dispatch<GetMetamaskConnected>) => {
  try {
    var accounts = []
    if (window.ethereum) {
      accounts = await window.ethereum.send('eth_requestAccounts')
    }
    if (accounts.result.length > 0) {
      dispatch({
        type: 'GET_METAMASK_CONNECTED',
        payload: {
          account: accounts.result[0],
          isMetamaskConnected: true,
        },
      } as GetMetamaskConnected)
    }
  } catch (error: any) {}
}

export const getTopAccountsByBalance =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetTopAccountsRquest | GetTopAccounts | GetTopAccountsFail>) => {
    try {
      dispatch({
        type: 'GET_TOP_ACCOUNTS_BY_BALANCE_REQUEST',
      } as GetTopAccountsRquest)

      const response = await axiosInstance.get<any>(`${BackendURL}/address/topAccountsByBalance/${page}/${rowsPerPage}`)

      const { accounts, accountTxnsCnt, totalBalance } = response.data

      dispatch({
        type: 'GET_TOP_ACCOUNTS_BY_BALANCE',
        payload: {
          accounts: accounts,
          accountTxnsCnt: accountTxnsCnt,
          totalBalance: totalBalance,
        },
      } as GetTopAccounts)
    } catch (error: any) {
      dispatch({
        type: 'GET_TOP_ACCOUNTS_BY_BALANCE_FAIL',
        payload: {
          error: 'error',
        },
      } as GetTopAccountsFail)
    }
  }

export const getAddressDetailInfo =
  (address: any) =>
  async (dispatch: Dispatch<GetAddressDetailInfoRequest | GetAddressDetailInfo | AddressErrorType>) => {
    try {
      dispatch({
        type: 'GET_ADDRESS_DETAIL_INFO_REQUEST',
      } as GetAddressDetailInfoRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/address/addressInfo/${address}`)

      const { txns, transactionCnt, addressInfo, erc20TokenTransactoins, erc20TokenTxnstimestamp, tabs } = response.data

      dispatch({
        type: 'GET_ADDRESS_DETAIL_INFO',
        payload: {
          addressInfo: addressInfo,
          txns: txns,
          transactionCnt: transactionCnt,
          erc20TokenTransactoins: erc20TokenTransactoins,
          erc20TokenTxnstimestamp: erc20TokenTxnstimestamp,
          tabs: tabs,
        },
      } as GetAddressDetailInfo)
    } catch (error: any) {
      dispatch({
        type: 'ADDRESS_ERROR',
        payload: {
          error: 'error',
        },
      } as AddressErrorType)
    }
  }

export const getAddressInternalTxns =
  (address: any) => async (dispatch: Dispatch<GetAddressInternalTxns | AddressErrorType>) => {
    try {
      const response = await axiosInstance.get<any>(`${BackendURL}/address/internalTxns/${address}`)

      if (response.data.success) {
        const { internalTransactions, count } = response.data

        dispatch({
          type: 'GET_ADDRESS_INTERNAL_TXNS',
          payload: {
            internalTransactions: internalTransactions,
            count: count,
            loading: false,
          },
        } as GetAddressInternalTxns)
      }
    } catch (error: any) {
      dispatch({
        type: 'ADDRESS_ERROR',
        payload: {
          error: 'error',
        },
      } as AddressErrorType)
    }
  }

export const getAddressErc20Txns =
  (address: any) => async (dispatch: Dispatch<GetAddressErc20Txns | AddressErrorType>) => {
    try {
      const response = await axiosInstance.get<any>(`${BackendURL}/address/erc20Txns/${address}`)

      if (response.data.success) {
        const { erc20TokenTransactoins, count } = response.data

        dispatch({
          type: 'GET_ADDRESS_ERC20_TXNS',
          payload: {
            erc20TokenTransactoins: erc20TokenTransactoins,
            count: count,
            loading: false,
          },
        } as GetAddressErc20Txns)
      }
    } catch (error: any) {
      dispatch({
        type: 'ADDRESS_ERROR',
        payload: {
          error: 'error',
        },
      } as AddressErrorType)
    }
  }

export const getAddressErc721Txns =
  (address: any) => async (dispatch: Dispatch<GetAddressErc721Txns | AddressErrorType>) => {
    try {
      const response = await axiosInstance.get<any>(`${BackendURL}/address/erc721Txns/${address}`)

      if (response.data.success) {
        const { erc721TokenTransactoins, count } = response.data

        dispatch({
          type: 'GET_ADDRESS_ERC721_TXNS',
          payload: {
            erc721TokenTransactoins: erc721TokenTransactoins,
            count: count,
            loading: false,
          },
        } as GetAddressErc721Txns)
      }
    } catch (error: any) {
      dispatch({
        type: 'ADDRESS_ERROR',
        payload: {
          error: 'error',
        },
      } as AddressErrorType)
    }
  }

export const getAddressEvents = (address: any) => async (dispatch: Dispatch<GetAddressEvents | AddressErrorType>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/address/events/${address}`)

    if (response.data.success) {
      const { events } = response.data

      dispatch({
        type: 'GET_ADDRESS_EVENTS',
        payload: {
          events: events,
          loading: false,
        },
      } as GetAddressEvents)
    }
  } catch (error: any) {
    dispatch({
      type: 'ADDRESS_ERROR',
      payload: {
        error: 'error',
      },
    } as AddressErrorType)
  }
}

export const updateAddress =
  (data: any) => async (dispatch: Dispatch<UpdateAddressRequest | UpdateAddressInfo | UpdateAddressError>) => {
    try {
      dispatch({
        type: 'UPDATE_ADDRESS_REQUEST',
      } as UpdateAddressRequest)

      const postData = await axiosInstance.post(`${BackendURL}/address/admin/create`, data)

      dispatch({
        type: 'UPDATE_ADDRESS_INFO',
        payload: {
          postData: postData,
        },
      } as UpdateAddressInfo)
    } catch (error: any) {}
  }

export const GetAddressDetailAnalytics =
  (address: any) =>
  async (
    dispatch: Dispatch<
      GetAddressDetailAnalyticsRequest | GetAddressDetailAnalyticsSuccess | GetAddressDetailAnalyticsError
    >,
  ) => {
    var req = {
      address: address,
    }

    console.log('req', req)
    try {
      dispatch({
        type: 'GET_ADDRESS_ANALYTICS_REQUEST',
      } as GetAddressDetailAnalyticsRequest)

      // const responseBalance = await axiosInstance.post(`${BackendURL}/address/statistics/balance`, req)
      // const responseTxns = await axiosInstance.post(`${BackendURL}/address/statistics/txns`, req)
      // const responseTxnFees = await axiosInstance.post(`${BackendURL}/address/statistics/txnFees`, req)

      // const successBalance = responseBalance.data.success
      // const successTxns = responseTxns.data.success
      // const successTxnFees = responseTxnFees.data.success

      const response = await axiosInstance.post(`${BackendURL}/address/statistics/all`, req)

      const success = response.data.success

      if (success) {
        const { balanceHistory, txnCountsHistory, maxBalance, maxTime, minBalance, minTime } = response.data.data
        const { txnHistoryTotal, txnHistoryBySender, txnHistoryByReceiver } = response.data.data
        const { txnFeeUsed, txnFeeSpent } = response.data.data
        const { transfersSent, transfersReceived } = response.data.data
        const {
          totalTokenTransfersCount,
          tokenContractsCount,
          outBoundCount,
          inBoundCount,
          uniqueAddressSent,
          uniqueAddressReceived,
        } = response.data.data

        dispatch({
          type: 'GET_ADDRESS_ANALYTICS_SUCCESS',
          payload: {
            balanceHistory: balanceHistory,
            txnCountsHistory: txnCountsHistory,
            txnHistoryTotal: txnHistoryTotal,
            txnHistoryBySender: txnHistoryBySender,
            txnHistoryByReceiver: txnHistoryByReceiver,
            txnFeeUsed: txnFeeUsed,
            txnFeeSpent: txnFeeSpent,
            transfersSent: transfersSent,
            transfersReceived: transfersReceived,
            totalTokenTransfersCount: totalTokenTransfersCount,
            tokenContractsCount: tokenContractsCount,
            outBoundCount: outBoundCount,
            inBoundCount: inBoundCount,
            uniqueAddressSent: uniqueAddressSent,
            uniqueAddressReceived: uniqueAddressReceived,
            maxBalance: maxBalance,
            maxTime: maxTime,
            minBalance: minBalance,
            minTime: minTime,
          },
        } as GetAddressDetailAnalyticsSuccess)
      } else {
        const { error } = response.data.error
        dispatch({
          type: 'GET_ADDRESS_ANALYTICS_ERROR',
          payload: {
            error: error,
          },
        } as GetAddressDetailAnalyticsError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_ADDRESS_ANALYTICS_ERROR',
        payload: {
          error: error,
        },
      } as GetAddressDetailAnalyticsError)
    }
  }
