import axiosInstance from '../../axios.config'
import {
  GetAllTransactionsType,
  TransactionErrorType,
  GetZnxHistory,
  GetLatestTransactions,
  GetTransactionDetail,
  GetPendingTransactions,
  GetAllTransactionsRequest,
  GetPendingTransactionsRequest,
  GetZnxHistoryRequest,
  GetLatestTransactionsRequest,
  GetTxDetailByTxHashRequest,
  GetInternalTxnsRquest,
  GetInternalTxns,
  GetInternalTxnsFail,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getAllTransactions =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetAllTransactionsRequest | GetAllTransactionsType | TransactionErrorType>) => {
    try {
      dispatch({
        type: 'GET_ALL_TRANSACTIONS_REQUEST',
      } as GetAllTransactionsRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tx/allTransactions/${page}/${rowsPerPage}`)
      const { txns, txnstimestamp, totalTxnsCnt, blockConfirmation } = response.data

      dispatch({
        type: 'GET_ALL_TRANSACTIONS',
        payload: {
          txns: txns,
          txnstimestamp: txnstimestamp,
          totalTxnsCnt: totalTxnsCnt,
          blockConfirmation: blockConfirmation,
        },
      } as GetAllTransactionsType)
    } catch (error: any) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: {
          error: 'error',
        },
      } as TransactionErrorType)
    }
  }

export const getPendingTransactions =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetPendingTransactionsRequest | GetPendingTransactions | TransactionErrorType>) => {
    try {
      dispatch({
        type: 'GET_PENDING_TRANSACTIONS_REQUEST',
      } as GetPendingTransactionsRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tx/pendingTransactions/${page}/${rowsPerPage}`)

      const { txns, totalTxnsCnt } = response.data
      dispatch({
        type: 'GET_PENDING_TRANSACTIONS',
        payload: {
          pendingtxns: txns,
          totalTxnsCnt: totalTxnsCnt,
        },
      } as GetPendingTransactions)
    } catch (error: any) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: {
          error: 'error',
        },
      } as TransactionErrorType)
    }
  }

export const getZnxHistory =
  () => async (dispatch: Dispatch<GetZnxHistoryRequest | GetZnxHistory | TransactionErrorType>) => {
    try {
      dispatch({
        type: 'GET_ZNXHISTORY_REQUEST',
        payload: true,
      } as GetZnxHistoryRequest)

      var today = new Date()
      var txnsCntArray = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 15 * Daytime

      const response = await axiosInstance.get<any>(`${BackendURL}/tx/transactionHistory`)

      for (let i = 0; i < response.data.txnsCntArray.length; i++) {
        txnsCntArray.push([(lastTimestamp + Daytime * i) * 1000, response.data.txnsCntArray[i]])
      }

      dispatch({
        type: 'GET_ZNXHISTORY',
        payload: txnsCntArray,
      } as GetZnxHistory)
    } catch (error: any) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: {
          error: 'error',
        },
      } as TransactionErrorType)
    }
  }
export const getLatestTransactions =
  () => async (dispatch: Dispatch<GetLatestTransactionsRequest | GetLatestTransactions | TransactionErrorType>) => {
    try {
      dispatch({
        type: 'GET_LATEST_TRANSACTIONS_REQUEST',
        payload: true,
      } as GetLatestTransactionsRequest)
      const response = await axiosInstance.get<any>(`${BackendURL}/tx/latestTenTxns`)
      const txns = response.data.txns
      let latestTenTransactions = []
      for (let i = 0; i < txns.length; i++) {
        let latestTransaction = {
          txHash: '',
          txAge: 0,
          from: '',
          to: '',
          value: 0,
        }
        latestTransaction.txHash = txns[i].hash
        latestTransaction.from = txns[i].from
        latestTransaction.to = txns[i].to
        latestTransaction.value = txns[i].value / Math.pow(10, 18)
        latestTransaction.txAge = Math.floor(Date.now() / 1000) - txns[i].timestamp
        latestTenTransactions.push(latestTransaction)
      }
      dispatch({
        type: 'GET_LATEST_TRANSACTIONS',
        payload: { latestTenTransactions: latestTenTransactions },
      } as GetLatestTransactions)
    } catch (error: any) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: {
          error: 'error',
        },
      } as TransactionErrorType)
    }
  }

export const getTxDetailByTxHash =
  (txHash: any) =>
  async (dispatch: Dispatch<GetTxDetailByTxHashRequest | GetTransactionDetail | TransactionErrorType>) => {
    try {
      dispatch({
        type: 'GET_TXDETAIL_BY_TXHASH_REQUEST',
        payload: true,
      } as GetTxDetailByTxHashRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tx/transactionDetail/${txHash}`)
      const { transaction, blockConfirmation, timestamp } = response.data
      dispatch({
        type: 'GET_TRANSACTION_DETAIL',
        payload: {
          transaction: transaction,
          blockConfirmation: blockConfirmation,
          timestamp: timestamp,
          txLogsCnt: transaction.logs.length,
        },
      } as GetTransactionDetail)
    } catch (error: any) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: {
          error: 'error',
        },
      } as TransactionErrorType)
    }
  }

export const getInternalTransactions =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetInternalTxnsRquest | GetInternalTxns | GetInternalTxnsFail>) => {
    try {
      dispatch({
        type: 'GET_INTERNAL_TXNS_REQUEST',
      } as GetInternalTxnsRquest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tx/internalTransactions/${page}/${rowsPerPage}`)

      const { internalTxns, totalCounts } = response.data

      dispatch({
        type: 'GET_INTERNAL_TXNS',
        payload: {
          internalTxns: internalTxns,
          totalCounts: totalCounts,
        },
      } as GetInternalTxns)
    } catch (error: any) {
      dispatch({
        type: 'GET_INTERNAL_TXNS_FAIL',
        payload: {
          error: 'error',
        },
      } as GetInternalTxnsFail)
    }
  }
