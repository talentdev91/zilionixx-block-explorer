import { AppActionTypes } from '../actions/action.types'

const initialState: AddressState = {
  loadingTopAccounts: false,
  loading: true,
  loadingContract: true,
  accounts: {},
  accountTxnsCnt: [],
  totalBalance: 0,
  txns: [],
  transactionCnt: 0,
  addressInfo: {},
  internalTransactions: [],
  internalTransactionsCount: 0,
  loadingInternalTransactions: true,
  erc20TokenTransactoins: [],
  erc721TokenTransactoins: [],
  contractInfo: [],
  error: {},
  readContract: [],
  writeContract: [],
  metamaskAddress: '',
  metamaskConnected: false,
  loadingWriteContract: true,
  loadingReadContract: true,
  abi: [],
  tabs: [],
  erc20TransactionsCount: 0,
  loadingErc20Transactions: true,
  erc721TransactionsCount: 0,
  loadingErc721Transactions: true,
  events: [],
  loadingEvents: true,
  contractIsVerified: false,
  contractIsExist: false,
  loadingAnalytics: false,
  balanceHistory: [],
  txnCountsHistory: [],
  txnHistoryTotal: [],
  txnHistoryBySender: [],
  txnHistoryByReceiver: [],
  txnFeeUsed: [],
  txnFeeSpent: [],
  transfersSent: [],
  transfersReceived: [],
  totalTokenTransfersCount: [],
  tokenContractsCount: [],
  outBoundCount: [],
  inBoundCount: [],
  uniqueAddressSent: [],
  uniqueAddressReceived: [],
  maxBalance: 0,
  maxTime: 0,
  minBalance: 0,
  minTime: 0,
  analyticsError: '',
}

export interface AddressState {
  loadingTopAccounts: boolean
  loading: any
  loadingContract: boolean
  accounts: any
  accountTxnsCnt: any
  totalBalance: any
  txns: any
  transactionCnt: any
  addressInfo: any
  internalTransactions: any
  internalTransactionsCount: any
  loadingInternalTransactions: any
  erc20TokenTransactoins: any
  erc20TransactionsCount: any
  loadingErc20Transactions: any
  erc721TokenTransactoins: any
  erc721TransactionsCount: any
  loadingErc721Transactions: any
  events: any
  loadingEvents: any
  contractInfo: any
  error: any
  readContract: any
  writeContract: any
  metamaskAddress: any
  metamaskConnected: boolean
  loadingWriteContract: boolean
  loadingReadContract: boolean
  abi: any
  tabs: any
  contractIsVerified: boolean
  contractIsExist: boolean
  loadingAnalytics: boolean
  balanceHistory: any
  txnCountsHistory: any
  analyticsError: string
  txnHistoryTotal: any
  txnHistoryBySender: any
  txnHistoryByReceiver: any
  txnFeeUsed: any
  txnFeeSpent: any
  transfersSent: any
  transfersReceived: any
  totalTokenTransfersCount: any
  tokenContractsCount: any
  outBoundCount: any
  inBoundCount: any
  uniqueAddressSent: any
  uniqueAddressReceived: any
  maxBalance: number
  maxTime: number
  minBalance: number
  minTime: number
}

const addressReducer = (state: AddressState = initialState, action: AppActionTypes): AddressState => {
  switch (action.type) {
    case 'GET_TOP_ACCOUNTS_BY_BALANCE_REQUEST':
      return {
        ...state,
        loadingTopAccounts: true,
      }
    case 'GET_ADDRESS_DETAIL_INFO_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_TOP_ACCOUNTS_BY_BALANCE':
      return {
        ...state,
        accounts: action.payload.accounts,
        accountTxnsCnt: action.payload.accountTxnsCnt,
        totalBalance: action.payload.totalBalance,
        loadingTopAccounts: false,
      }
    case 'GET_CONTRACT_INFO_SUCCESS':
      return {
        ...state,
        contractInfo: action.payload.contractInfo,
        loadingContract: action.payload.loading,
        contractIsVerified: action.payload.contractIsVerified,
        contractIsExist: action.payload.contractIsExist,
      }

    case 'CONTRACT_NOT_VERIFIED':
      return {
        ...state,
        contractInfo: action.payload.contractInfo,
        loadingContract: action.payload.loading,
        contractIsVerified: action.payload.contractIsVerified,
        contractIsExist: action.payload.contractIsExist,
      }

    case 'CONTRACT_NOT_EXIST':
      return {
        ...state,
        contractInfo: action.payload.contractInfo,
        loadingContract: action.payload.loading,
        contractIsExist: action.payload.contractIsExist,
      }

    case 'GET_ADDRESS_DETAIL_INFO':
      return {
        ...state,
        addressInfo: action.payload.addressInfo,
        txns: action.payload.txns,
        transactionCnt: action.payload.transactionCnt,
        erc20TokenTransactoins: action.payload.erc20TokenTransactoins,
        loading: false,
        tabs: action.payload.tabs,
      }

    case 'ADDRESS_ERROR':
    case 'GET_TOP_ACCOUNTS_BY_BALANCE_FAIL':
      return {
        ...state,
        error: action.payload,
        loadingTopAccounts: false,
      }
    case 'GET_READ_CONTRACT':
      return {
        ...state,
        loadingReadContract: false,
        readContract: action.payload.readContract,
      }
    case 'GET_WRITE_CONTRACT':
      return {
        ...state,
        loadingWriteContract: false,
        writeContract: action.payload.writeContract,
        abi: action.payload.abi,
      }
    case 'GET_METAMASK_CONNECTED':
      return {
        ...state,
        metamaskAddress: action.payload.account,
        metamaskConnected: action.payload.isMetamaskConnected,
      }
    case 'GET_METAMASK_DISCONNECTED':
      return {
        ...state,
        metamaskAddress: action.payload.account,
        metamaskConnected: action.payload.isMetamaskConnected,
      }
    case 'GET_ADDRESS_INTERNAL_TXNS':
      return {
        ...state,
        internalTransactions: action.payload.internalTransactions,
        internalTransactionsCount: action.payload.count,
        loadingInternalTransactions: action.payload.loading,
      }
    case 'GET_ADDRESS_ERC20_TXNS':
      return {
        ...state,
        erc20TokenTransactoins: action.payload.erc20TokenTransactoins,
        erc20TransactionsCount: action.payload.count,
        loadingErc20Transactions: action.payload.loading,
      }
    case 'GET_ADDRESS_ERC721_TXNS':
      return {
        ...state,
        erc721TokenTransactoins: action.payload.erc721TokenTransactoins,
        erc721TransactionsCount: action.payload.count,
        loadingErc721Transactions: action.payload.loading,
      }
    case 'GET_ADDRESS_EVENTS':
      return {
        ...state,
        events: action.payload.events,
        loadingEvents: action.payload.loading,
      }
    case 'GET_ADDRESS_ANALYTICS_REQUEST':
      return {
        ...state,
        loadingAnalytics: true,
      }
    case 'GET_ADDRESS_ANALYTICS_SUCCESS':
      return {
        ...state,
        loadingAnalytics: false,
        balanceHistory: action.payload.balanceHistory,
        txnCountsHistory: action.payload.txnCountsHistory,
        txnHistoryTotal: action.payload.txnHistoryTotal,
        txnHistoryBySender: action.payload.txnHistoryBySender,
        txnHistoryByReceiver: action.payload.txnHistoryByReceiver,
        txnFeeUsed: action.payload.txnFeeUsed,
        txnFeeSpent: action.payload.txnFeeSpent,
        transfersSent: action.payload.transfersSent,
        transfersReceived: action.payload.transfersReceived,
        totalTokenTransfersCount: action.payload.totalTokenTransfersCount,
        tokenContractsCount: action.payload.tokenContractsCount,
        outBoundCount: action.payload.outBoundCount,
        inBoundCount: action.payload.inBoundCount,
        uniqueAddressSent: action.payload.uniqueAddressSent,
        uniqueAddressReceived: action.payload.uniqueAddressReceived,
        maxBalance: action.payload.maxBalance,
        maxTime: action.payload.maxTime,
        minBalance: action.payload.minBalance,
        minTime: action.payload.minTime,
      }
    case 'GET_ADDRESS_ANALYTICS_ERROR':
      return {
        ...state,
        loadingAnalytics: false,
        analyticsError: action.payload.error,
      }

    default:
      return state
  }
}

export default addressReducer
