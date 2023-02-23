import { AppActionTypes } from '../actions/action.types'

const initialState: TransactionState = {
  txns: [],
  pendingtxns: [],
  txnstimestamp: [],
  blockConfirmation: [],
  totalTxnsCnt: 0,
  transactions: [],
  intervalID: null,
  latestTransactions: [],
  txnsCntArray: [],
  internalTxns: [],
  requestInternalTxns: false,
  transaction: {},
  txBlockConfirmation: 0,
  txTimestamp: 0,
  txLogsCnt: 0,
  totalCounts: 0,
  error: {},
  loading: false,
  loadingLatestTxns: false,
  loadingPendingTxns: false,
}

export interface TransactionState {
  txns: any
  txnstimestamp: any
  totalTxnsCnt: any
  blockConfirmation: any
  transactions: any
  latestTransactions: any
  intervalID: any
  txnsCntArray: any
  transaction: any
  pendingtxns: any
  txBlockConfirmation: any
  txTimestamp: any
  txLogsCnt: any
  internalTxns: any
  requestInternalTxns: any
  totalCounts: any
  loading: boolean
  error: any
  loadingLatestTxns: boolean
  loadingPendingTxns: boolean
}

const transactionReducer = (state: TransactionState = initialState, action: AppActionTypes): TransactionState => {
  switch (action.type) {
    case 'GET_ALL_TRANSACTIONS_REQUEST':
    case 'GET_PENDING_TRANSACTIONS_REQUEST':
      return {
        ...state,
        loadingPendingTxns: true,
      }
    case 'GET_ZNXHISTORY_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_LATEST_TRANSACTIONS_REQUEST':
      return {
        ...state,
        loadingLatestTxns: true,
      }
    case 'GET_TXDETAIL_BY_TXHASH_REQUEST':
    case 'GET_INTERNAL_TXNS_REQUEST':
      return {
        ...state,
        loading: true,
        requestInternalTxns: false,
      }

    case 'GET_ALL_TRANSACTIONS':
    case 'GET_BLOCK_TRANSACTIONS':
      return {
        ...state,
        txns: action.payload.txns,
        txnstimestamp: action.payload.txnstimestamp,
        blockConfirmation: action.payload.blockConfirmation,
        totalTxnsCnt: action.payload.totalTxnsCnt,
        loading: false,
      }

    case 'GET_TRANSACTION_DETAIL':
      return {
        ...state,
        transaction: action.payload.transaction,
        txBlockConfirmation: action.payload.blockConfirmation,
        txTimestamp: action.payload.timestamp,
        txLogsCnt: action.payload.txLogsCnt,
        loading: false,
      }

    case 'GET_PENDING_TRANSACTIONS':
      return {
        ...state,
        pendingtxns: action.payload.pendingtxns,
        totalTxnsCnt: action.payload.totalTxnsCnt,
        loadingPendingTxns: false,
      }

    case 'GET_ZNXHISTORY':
      return {
        ...state,
        txnsCntArray: action.payload,
        loading: false,
      }

    case 'GET_LATEST_TRANSACTIONS':
      return {
        ...state,
        latestTransactions: action.payload.latestTenTransactions,
        intervalID: action.payload.intervalID,
        loadingLatestTxns: false,
      }

    case 'GET_INTERNAL_TXNS':
      return {
        ...state,
        internalTxns: action.payload.internalTxns,
        totalCounts: action.payload.totalCounts,
        loading: false,
        requestInternalTxns: true,
      }

    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
        loadingPendingTxns: false,
      }

    default:
      return state
  }
}

export default transactionReducer
