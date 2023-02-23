import { AppActionTypes } from '../actions/action.types'

const initialState: ChartState = {
  txnsCntArrays: [],
  newAddresses: [],
  averageblock: [],
  tokenArrays: [],
  minpendingtxns: [],
  gasprice: [],
  totalgas: [],
  blocktime: [],
  totalblockreward: [],
  dailytxnfees: [],
  utilization: [],
  error: {},
  loading: false,
}

export interface ChartState {
  txnsCntArrays: any
  tokenArrays: any
  newAddresses: any
  averageblock: any
  blocktime: any
  gasprice: any
  totalgas: any
  totalblockreward: any
  minpendingtxns: any
  dailytxnfees: any
  utilization: any
  loading: boolean
  error: any
}

const chartReducer = (state: ChartState = initialState, action: AppActionTypes): ChartState => {
  switch (action.type) {
    case 'GET_DAILY_TRANSACTIONS_REQUEST':
    case 'GET_NEW_ADDRESS_REQUEST':
    case 'AVERAGE_BLOCK_SIZE_REQUEST':
    case 'AVERAGE_BLOCK_TIME_REQUEST':
    case 'AVERAGE_GAS_PRICE_REQUEST':
    case 'TOTAL_GAS_PRICE_REQUEST':
    case 'BLOCK_REWARD_REQUEST':
    case 'GET_PENDING_TRANSACTIONS_REQUEST':
    case 'GET_TRANSACTION_FEE_REQUEST':
    case 'GET_UTILIZATION_REQUEST':
    case 'GET_TOKEN_TRANSFER_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_DAILY_TRANSACTIONS':
      return {
        ...state,
        txnsCntArrays: action.payload,
        loading: false,
      }
    case 'GET_TOKEN_TRANSFER':
      return {
        ...state,
        tokenArrays: action.payload,
        loading: false,
      }
    case 'GET_NEW_ADDRESS':
      return {
        ...state,
        newAddresses: action.payload,
        loading: false,
      }
    case 'AVERAGE_BLOCK_SIZE':
      return {
        ...state,
        averageblock: action.payload,
        loading: false,
      }
    case 'AVERAGE_BLOCK_TIME':
      return {
        ...state,
        blocktime: action.payload,
        loading: false,
      }
    case 'AVERAGE_GAS_PRICE':
      return {
        ...state,
        gasprice: action.payload,
        loading: false,
      }
    case 'TOTAL_GAS_PRICE':
      return {
        ...state,
        totalgas: action.payload,
        loading: false,
      }
    case 'BLOCK_REWARD':
      return {
        ...state,
        totalblockreward: action.payload,
        loading: false,
      }
    case 'GET_PENDING_TRANSACTIONS':
      return {
        ...state,
        minpendingtxns: action.payload,
        loading: false,
      }
    case 'GET_TRANSACTION_FEE':
      return {
        ...state,
        dailytxnfees: action.payload,
        loading: false,
      }
    case 'GET_UTILIZATION':
      return {
        ...state,
        utilization: action.payload,
        loading: false,
      }
    case 'GET_CHARTS_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default chartReducer
