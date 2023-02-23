import { AppActionTypes } from '../actions/action.types'

const initialState: PriceState = {
  ZNXPriceSuccessResponse: 0,
  ZNXPriceChange: '+0%',
  ZNXPriceDiff: 0,
  ZNXPriceLoading: false,
  ZNXPriceError: '',

  BTCPriceSuccessResponse: 0,
  BTCPriceLoading: false,
  BTCPriceError: '',

  TOKENPriceSuccessResponse: 2,
  TOKENPriceLoading: false,
  TOKENPriceError: ''
}

export interface PriceState {
  ZNXPriceSuccessResponse: number
  ZNXPriceChange: string
  ZNXPriceDiff: number
  ZNXPriceLoading: boolean
  ZNXPriceError: string

  BTCPriceSuccessResponse: number
  BTCPriceLoading: boolean
  BTCPriceError: string

  TOKENPriceSuccessResponse: number
  TOKENPriceLoading: boolean
  TOKENPriceError: string
}

const priceReducer = (state: PriceState = initialState, action: AppActionTypes): PriceState => {
  switch (action.type) {
    case 'GET_TOKEN_PRICE_REQUEST':
      return {
        ...state,
        TOKENPriceLoading: true,
        TOKENPriceError: '',
        TOKENPriceSuccessResponse: action.payload.TOKENPrice,
      }

    case 'GET_TOKEN_PRICE_SUCCESS':
      return {
        ...state,
        TOKENPriceLoading: false,
        TOKENPriceError: '',
        TOKENPriceSuccessResponse: action.payload.TOKENPrice,
      }

    case 'GET_TOKEN_PRICE_ERROR':
      return {
        ...state,
        TOKENPriceLoading: false,
        TOKENPriceError: action.payload.error,
        TOKENPriceSuccessResponse: action.payload.TOKENPrice,
      }

    case 'GET_ZNX_PRICE_REQUEST':
      return {
        ...state,
        ZNXPriceLoading: true,
        ZNXPriceError: '',
      }

    case 'GET_ZNX_PRICE_SUCCESS':
      return {
        ...state,
        ZNXPriceLoading: false,
        ZNXPriceError: '',
        ZNXPriceSuccessResponse: action.payload.ZNXPrice,
        ZNXPriceChange: action.payload.ZNXPriceChange,
        ZNXPriceDiff: action.payload.PriceDiff,
      }

    case 'GET_ZNX_PRICE_ERROR':
      return {
        ...state,
        ZNXPriceLoading: false,
        ZNXPriceError: action.payload.error,
        ZNXPriceSuccessResponse: action.payload.ZNXPrice,
        ZNXPriceChange: action.payload.ZNXPriceChange,
        ZNXPriceDiff: action.payload.PriceDiff,
      }

    case 'GET_BTC_PRICE_REQUEST':
      return {
        ...state,
        BTCPriceLoading: true,
        BTCPriceError: '',
      }

    case 'GET_BTC_PRICE_SUCCESS':
      return {
        ...state,
        BTCPriceLoading: false,
        BTCPriceError: '',
        BTCPriceSuccessResponse: action.payload.BTCPrice,
      }

    case 'GET_BTC_PRICE_ERROR':
      return {
        ...state,
        BTCPriceLoading: false,
        BTCPriceError: action.payload.error,
      }

    default:
      return state
  }
}

export default priceReducer
