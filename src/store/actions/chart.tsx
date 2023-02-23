import axiosInstance from '../../axios.config'
import {
  GetDailyTxns,
  GetDailyTxnsRequest,
  GetChartsError,
  GetTokenTransfer,
  GetTokenTransferRequest,
  GetNewAddress,
  GetNewAddressRequest,
  AverageBlockSize,
  AverageBlockSizeRequest,
  AverageBlockTime,
  AverageBlockTimeRequest,
  AverageGasPrice,
  AverageGasPriceRequest,
  TotalGasPrice,
  TotalGasPriceRequest,
  BlockReward,
  BlockRewardRequest,
  GetPendingTxns,
  GetPendingTxnsRequest,
  GetTxnFee,
  GetTxnFeeRequest,
  GetUtil,
  GetUtilRequest,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getDailyTxns = () => async (dispatch: Dispatch<GetDailyTxnsRequest | GetDailyTxns | GetChartsError>) => {
  try {
    dispatch({
      type: 'GET_DAILY_TRANSACTIONS_REQUEST',
      payload: true,
    } as GetDailyTxnsRequest)
    var today = new Date()
    var txnsCntArrays = []
    var currentTime = Math.round(today.getTime() / 1000)
    var Daytime = 86400
    const lastTimestamp = currentTime - 365 * Daytime
    const response = await axiosInstance.get<any>(`${BackendURL}/dailytxn`)

    for (let i = 0; i < response.data.txnsCntArray.length; i++) {
      txnsCntArrays.push([(lastTimestamp + Daytime * i) * 1000, response.data.txnsCntArray[i]])
    }
    dispatch({
      type: 'GET_DAILY_TRANSACTIONS',
      payload: txnsCntArrays,
    } as GetDailyTxns)
  } catch (error: any) {
    dispatch({
      type: 'GET_CHARTS_ERROR',
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as GetChartsError)
  }
}

export const getTokenTransfer =
  () => async (dispatch: Dispatch<GetTokenTransferRequest | GetTokenTransfer | GetChartsError>) => {
    try {
      dispatch({
        type: 'GET_TOKEN_TRANSFER_REQUEST',
        payload: true,
      } as GetTokenTransferRequest)
      var today = new Date()
      var tokenArrays = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 365 * Daytime
      const response = await axiosInstance.get<any>(`${BackendURL}/erc20txns`)
      for (let i = 0; i < response.data.tokenArray.length; i++) {
        tokenArrays.push([(lastTimestamp + Daytime * i) * 1000, response.data.tokenArray[i]])
      }
      dispatch({
        type: 'GET_TOKEN_TRANSFER',
        payload: tokenArrays,
      } as GetTokenTransfer)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const getNewAddress =
  () => async (dispatch: Dispatch<GetNewAddressRequest | GetNewAddress | GetChartsError>) => {
    try {
      dispatch({
        type: 'GET_NEW_ADDRESS_REQUEST',
        payload: true,
      } as GetNewAddressRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/address`)
      dispatch({
        type: 'GET_NEW_ADDRESS',
        payload: response.data.txnsCntArray,
      } as GetNewAddress)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const averageBlockSize =
  () => async (dispatch: Dispatch<AverageBlockSizeRequest | AverageBlockSize | GetChartsError>) => {
    try {
      dispatch({
        type: 'AVERAGE_BLOCK_SIZE_REQUEST',
        payload: true,
      } as AverageBlockSizeRequest)
      var today = new Date()
      var averageblock = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 365 * Daytime
      const response = await axiosInstance.get<any>(`${BackendURL}/blocksize`)
      for (let i = 0; i < response.data.averageblock.length; i++) {
        averageblock.push([(lastTimestamp + Daytime * i) * 1000, response.data.averageblock[i]])
      }
      dispatch({
        type: 'AVERAGE_BLOCK_SIZE',
        payload: averageblock,
      } as AverageBlockSize)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const averageBlockTime =
  () => async (dispatch: Dispatch<AverageBlockTimeRequest | AverageBlockTime | GetChartsError>) => {
    try {
      dispatch({
        type: 'AVERAGE_BLOCK_TIME_REQUEST',
        payload: true,
      } as AverageBlockTimeRequest)

      var today = new Date()
      var blocktime = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 365 * Daytime

      const response = await axiosInstance.get<any>(`${BackendURL}/blocktime`)

      for (let i = 0; i < response.data.blocktime.length; i++) {
        blocktime.push([(lastTimestamp + Daytime * i) * 1000, response.data.blocktime[i]])
      }
      dispatch({
        type: 'AVERAGE_BLOCK_TIME',
        payload: blocktime,
      } as AverageBlockTime)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const averageGasPrice =
  () => async (dispatch: Dispatch<AverageGasPriceRequest | AverageGasPrice | GetChartsError>) => {
    try {
      dispatch({
        type: 'AVERAGE_GAS_PRICE_REQUEST',
        payload: true,
      } as AverageGasPriceRequest)

      var today = new Date()
      var gasprice = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 365 * Daytime

      const response = await axiosInstance.get<any>(`${BackendURL}/gasprice`)
      for (let i = 0; i < response.data.gasprice.length; i++) {
        gasprice.push([
          (lastTimestamp + Daytime * i) * 1000,
          response.data.gasprice[i][0],
          response.data.gasprice[i][1],
          response.data.gasprice[i][2],
        ])
      }
      dispatch({
        type: 'AVERAGE_GAS_PRICE',
        payload: gasprice,
      } as AverageGasPrice)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const totalGasPrice =
  () => async (dispatch: Dispatch<TotalGasPriceRequest | TotalGasPrice | GetChartsError>) => {
    try {
      dispatch({
        type: 'TOTAL_GAS_PRICE_REQUEST',
        payload: true,
      } as TotalGasPriceRequest)

      var today = new Date()
      var totalgas = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 365 * Daytime

      const response = await axiosInstance.get<any>(`${BackendURL}/totalgas`)

      for (let i = 0; i < response.data.totalgas.length; i++) {
        totalgas.push([(lastTimestamp + Daytime * i) * 1000, response.data.totalgas[i]])
      }

      dispatch({
        type: 'TOTAL_GAS_PRICE',
        payload: totalgas,
      } as TotalGasPrice)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const blockCountReward = () => async (dispatch: Dispatch<BlockRewardRequest | BlockReward | GetChartsError>) => {
  try {
    dispatch({
      type: 'BLOCK_REWARD_REQUEST',
      payload: true,
    } as BlockRewardRequest)

    var today = new Date()
    var totalblockreward = []
    var currentTime = Math.round(today.getTime() / 1000)
    var Daytime = 86400
    const lastTimestamp = currentTime - 365 * Daytime

    const response = await axiosInstance.get<any>(`${BackendURL}/blockreward`)
    for (let i = 0; i < response.data.totalblockreward.length; i++) {
      totalblockreward.push([(lastTimestamp + Daytime * i) * 1000, response.data.totalblockreward[i]])
    }

    dispatch({
      type: 'BLOCK_REWARD',
      payload: totalblockreward,
    } as BlockReward)
  } catch (error: any) {
    dispatch({
      type: 'GET_CHARTS_ERROR',
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as GetChartsError)
  }
}

export const getPendingTxnMin =
  () => async (dispatch: Dispatch<GetPendingTxnsRequest | GetPendingTxns | GetChartsError>) => {
    try {
      dispatch({
        type: 'GET_PENDING_TRANSACTIONS_REQUEST',
        payload: true,
      } as GetPendingTxnsRequest)

      var today = new Date()
      var minpendingtxns = []
      var currentTime = Math.round(today.getTime() / 1000)
      var Daytime = 86400
      const lastTimestamp = currentTime - 4 * Daytime

      const response = await axiosInstance.get<any>(`${BackendURL}/pendingtxn`)

      for (let i = 0; i < response.data.minpendingtxns.length; i++) {
        minpendingtxns.push([(lastTimestamp + 60 * i) * 1000, response.data.minpendingtxns[i]])
      }

      dispatch({
        type: 'GET_PENDING_TRANSACTIONS',
        payload: minpendingtxns,
      } as GetPendingTxns)
    } catch (error: any) {
      dispatch({
        type: 'GET_CHARTS_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetChartsError)
    }
  }

export const dailyTxnFee = () => async (dispatch: Dispatch<GetTxnFeeRequest | GetTxnFee | GetChartsError>) => {
  try {
    dispatch({
      type: 'GET_TRANSACTION_FEE_REQUEST',
      payload: true,
    } as GetTxnFeeRequest)

    var today = new Date()
    var dailytxnfees = []
    var currentTime = Math.round(today.getTime() / 1000)
    var Daytime = 86400
    const lastTimestamp = currentTime - 365 * Daytime

    const response = await axiosInstance.get<any>(`${BackendURL}/transactionfee`)
    for (let i = 0; i < response.data.dailytxnfees.length; i++) {
      dailytxnfees.push([(lastTimestamp + Daytime * i) * 1000, response.data.dailytxnfees[i]])
    }

    dispatch({
      type: 'GET_TRANSACTION_FEE',
      payload: dailytxnfees,
    } as GetTxnFee)
  } catch (error: any) {
    dispatch({
      type: 'GET_CHARTS_ERROR',
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as GetChartsError)
  }
}

export const getUtilization = () => async (dispatch: Dispatch<GetUtilRequest | GetUtil | GetChartsError>) => {
  try {
    dispatch({
      type: 'GET_UTILIZATION_REQUEST',
      payload: true,
    } as GetUtilRequest)

    var today = new Date()
    var utilization = []
    var currentTime = Math.round(today.getTime() / 1000)
    var Daytime = 86400
    const lastTimestamp = currentTime - 365 * Daytime

    const response = await axiosInstance.get<any>(`${BackendURL}/utilization`)

    for (let i = 0; i < response.data.utilization.length; i++) {
      utilization.push([(lastTimestamp + Daytime * i) * 1000, response.data.utilization[i]])
    }
    dispatch({
      type: 'GET_UTILIZATION',
      payload: utilization,
    } as GetUtil)
  } catch (error: any) {
    dispatch({
      type: 'GET_CHARTS_ERROR',
      payload: {
        status: error.response.status,
        statusText: error.response.statusText,
      },
    } as GetChartsError)
  }
}
