import { AppActionTypes } from '../actions/action.types'

const initialState: TokenState = {
  topvalues: [],
  topTokensByUniqueTotals: [],
  topAccountsByTxnCountAndGasUsed: [],
  topTxnvalues: [],
  toptokens: [],
  error: {},
  loadingTopToken: true,
  loadingNetwork: true,
  totaltxns: 0,
  totalZnx: 0,
  loading: true,
  loadingOverview: true,
}

export interface TokenState {
  topvalues: any
  topTokensByUniqueTotals: any
  topAccountsByTxnCountAndGasUsed: any
  topTxnvalues: any
  loadingTopToken: boolean
  loadingNetwork: boolean
  loading: boolean
  loadingOverview: boolean
  toptokens: any
  totaltxns: any
  totalZnx: any
  error: any
}

const tokenReducer = (state: TokenState = initialState, action: AppActionTypes): TokenState => {
  switch (action.type) {
    case 'GET_TOPSTATIC_OVERVIEW_SUCCESS':
      return {
        ...state,
        topvalues: action.payload.topvalues,
        toptokens: action.payload.toptoken,
        loadingOverview: action.payload.loadingOverview,
      }

    case 'GET_TOKEN_STATISTICS_SUCCESS':
      return {
        ...state,
        topTokensByUniqueTotals: action.payload.toptokens,
        loadingTopToken: action.payload.loading,
      }
    case 'GET_NETWORK_STATICS_SUCCESS':
      return {
        ...state,
        topAccountsByTxnCountAndGasUsed: action.payload.topnetworks,
        loadingNetwork: action.payload.loading,
      }
    case 'GET_TXN_STATICS_SUCCESS':
      return {
        ...state,
        topTxnvalues: action.payload.toptxns,
        totaltxns: action.payload.totaltxns,
        totalZnx: action.payload.totalZnx,
        loading: action.payload.loading,
      }
    case 'GET_TOPSTATIC_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default tokenReducer
