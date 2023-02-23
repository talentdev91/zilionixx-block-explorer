import axiosInstance from '../../axios.config'
import {
  GetZNXPriceRequest,
  GetZNXPriceSuccess,
  GetZNXPriceError,
  GetBTCPriceRequest,
  GetBTCPriceSuccess,
  GetBTCPriceError,
  GetTOKENPriceRequest,
  GetTOKENPriceSuccess,
  GetTOKENPriceError,
} from './action.types'
import { Dispatch } from 'redux'
import { priceApiEndPoints, ZNXPriceData } from '../../common/consts'

export const getTokenPrice =
  () => async (dispatch: Dispatch<GetTOKENPriceRequest | GetTOKENPriceSuccess | GetTOKENPriceError>) => {
    try {
      dispatch({
        type: 'GET_TOKEN_PRICE_REQUEST',
        payload: {
          TOKENPrice: 2,
        },
      } as GetTOKENPriceRequest)

      dispatch({
        type: 'GET_TOKEN_PRICE_SUCCESS',
        payload: {
          TOKENPrice: 2,
        },
      } as GetTOKENPriceSuccess)
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKEN_PRICE_ERROR',
        payload: {
          TOKENPrice: 2,
          error: error.message,
        },
      } as GetTOKENPriceError)
    }
  }

export const getZNXPrice =
  () => async (dispatch: Dispatch<GetZNXPriceRequest | GetZNXPriceSuccess | GetZNXPriceError>) => {
    try {
      dispatch({
        type: 'GET_ZNX_PRICE_REQUEST',
        payload: {},
      } as GetZNXPriceRequest)

      const response = await axiosInstance.post<any>(priceApiEndPoints.ZNX.api, priceApiEndPoints.ZNX.req)

      console.log(response)
      const { Success } = response.data
      if (Success === true) {
        const { Data } = response.data
        dispatch({
          type: 'GET_ZNX_PRICE_SUCCESS',
          payload: {
            ZNXPrice: Data.Price || ZNXPriceData.PRICE,
            ZNXPriceChange: Data.Percent || ZNXPriceData.PERCENT,
            ZNXPriceDiff: Data.PriceDiff || ZNXPriceData.PRICE_DIFF,
          },
        } as GetZNXPriceSuccess)
      } else {
        const { Error } = response.data
        dispatch({
          type: 'GET_ZNX_PRICE_ERROR',
          payload: {
            error: Error.Msg,
            ZNXPrice: ZNXPriceData.PRICE,
            ZNXPriceChange: ZNXPriceData.PERCENT,
            ZNXPriceDiff: ZNXPriceData.PRICE_DIFF,
          },
        } as GetZNXPriceError)
      }

      //temporary dispatch without api, will be replaced after api integrated

      // dispatch({
      //   type: 'GET_ZNX_PRICE_SUCCESS',
      //   payload: {
      //     ZNXPrice: 1.187,
      //     ZNXPriceChange: 9.45,
      //   },
      // } as GetZNXPriceSuccess)
    } catch (error: any) {
      dispatch({
        type: 'GET_ZNX_PRICE_ERROR',
        payload: {
          error: error.message,
          ZNXPrice: ZNXPriceData.PRICE,
          ZNXPriceChange: ZNXPriceData.PERCENT,
          ZNXPriceDiff: ZNXPriceData.PRICE_DIFF,
        },
      } as GetZNXPriceError)
    }
  }

export const getBTCPrice =
  () => async (dispatch: Dispatch<GetBTCPriceRequest | GetBTCPriceSuccess | GetBTCPriceError>) => {
    try {
      dispatch({
        type: 'GET_BTC_PRICE_REQUEST',
        payload: {},
      } as GetBTCPriceRequest)

      // fetch btc data
      axiosInstance
        .get(priceApiEndPoints.BTC.api)
        .then(function (response: any) {
          // handle success
          console.log(response.data.data.amount)
          let btcToUsd = response.data.data.amount
          dispatch({
            type: 'GET_BTC_PRICE_SUCCESS',
            payload: {
              BTCPrice: btcToUsd,
            },
          } as GetBTCPriceSuccess)
        })
        .catch(function (error: any) {
          // handle error
          dispatch({
            type: 'GET_BTC_PRICE_ERROR',
            payload: {
              error: error.message,
            },
          } as GetBTCPriceError)
        })
    } catch (error: any) {
      dispatch({
        type: 'GET_BTC_PRICE_ERROR',
        payload: {
          error: error.message,
        },
      } as GetBTCPriceError)
    }
  }
