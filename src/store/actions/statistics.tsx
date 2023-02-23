import axiosInstance from '../../axios.config'
import {
  GetTopStaticsOverview,
  GetTopStaticsError,
  GetTokenStatisticsSuccess,
  GetNetworkStatics,
  GetTxnStatics,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getTopOverview = () => async (dispatch: Dispatch<GetTopStaticsOverview | GetTopStaticsError>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/topvalues`)

    const { topvalues, topTokensByUniqueTotals } = response.data

    if (response.data.success) {
      dispatch({
        type: 'GET_TOPSTATIC_OVERVIEW_SUCCESS',
        payload: {
          topvalues: topvalues,
          toptoken: topTokensByUniqueTotals,
          loadingOverview: false,
        },
      } as GetTopStaticsOverview)
    }
  } catch (error: any) {
    dispatch({
      type: 'GET_TOPSTATIC_ERROR',
      payload: {
        error: 'error',
      },
    } as GetTopStaticsError)
  }
}

export const getTopToken = () => async (dispatch: Dispatch<GetTokenStatisticsSuccess | GetTopStaticsError>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/stat/token`)

    const { topTokensByUniqueTotals } = response.data

    if (response.data.success) {
      dispatch({
        type: 'GET_TOKEN_STATISTICS_SUCCESS',
        payload: {
          toptokens: topTokensByUniqueTotals,
          loading: false,
        },
      } as GetTokenStatisticsSuccess)
    }
  } catch (error: any) {
    dispatch({
      type: 'GET_TOPSTATIC_ERROR',
      payload: {
        error: 'error',
      },
    } as GetTopStaticsError)
  }
}

export const getTopNetwork = () => async (dispatch: Dispatch<GetNetworkStatics | GetTopStaticsError>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/stat/network`)

    const { topAccountsByTxnCountAndGasUsed } = response.data

    if (response.data.success) {
      dispatch({
        type: 'GET_NETWORK_STATICS_SUCCESS',
        payload: {
          topnetworks: topAccountsByTxnCountAndGasUsed,
          loading: false,
        },
      } as GetNetworkStatics)
    }
  } catch (error: any) {
    dispatch({
      type: 'GET_TOPSTATIC_ERROR',
      payload: {
        error: 'error',
      },
    } as GetTopStaticsError)
  }
}

export const getTopTxns = () => async (dispatch: Dispatch<GetTxnStatics | GetTopStaticsError>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/topTxns`)

    const { topTxnvalues, totaltxns, totalZnx } = response.data

    dispatch({
      type: 'GET_TXN_STATICS_SUCCESS',
      payload: {
        toptxns: topTxnvalues,
        totaltxns: totaltxns,
        totalZnx: totalZnx,
        loading: false,
      },
    } as GetTxnStatics)
  } catch (error: any) {
    dispatch({
      type: 'GET_TOPSTATIC_ERROR',
      payload: {
        error: 'error',
      },
    } as GetTopStaticsError)
  }
}
