import { AppActionTypes } from '../actions/action.types'

const initialState: TokenState = {
  erc20tokens: [],
  erc20tokensSearch: [],
  erc20tokensKeyword: [],
  totalQuantity: 0,
  tokenSymbol: '',
  profileInfo: [],
  totalErc20Cnt: 0,
  error: {},
  loading: false,
  requestToken20Status: false,
  requestToken20SearchStatus: false,
  requestTransactionSearchStatus: false,
  loadingDefault: true,
  erc20TransferCnt: 0,
  totalSupply: 0,
  decimals: 18,
  erc20transfers: [],
  tokenTransfers: [],
  requestToken20TransferStatus: false,
  tokenHolders: [],
  topTokenHolders: [],
  holdersCnt: 0,
  tokenName: [],
  getTokenInfos: [],
  getConfirm20Infos: [],
  tokenInfoCount: 0,
  loadingConfirmInfo: false,
  erc721Tokens: [],
  requestToken721Status: false,
  totalErc721TokenCnt: 0,
  erc721TransferCnt: 0,
  erc721transfer: [],
  status: false,
  createSuccess: false,
  updateSuccess: false,
  manySuccess: false,
  msg: '',
  loadingHolders: true,
  tabs: [],
  tokenType: '',
  loadingErc20Transfer: false,
  loadingErc721TopTokens: false,
  loadingErc721Transfer: false,
  requestToken721TransferStatus: false,
  loadingTokenDetail: false,
  transferCnt: 0,
  // token detail analytics
  loadingTokenDetailAnalyze: false,
  tokenDetailAnalyzeError: '',
  tokenTransferAmount: [],
  tokenTransferCount: [],
  tokenTransferUniqueSenders: [],
  tokenTransferUniqueReceivers: [],
  tokenTransferUniqueTotals: [],
  //token holder
  totalTokenSupply: 0,
  selTokenSupply: 0,
  tokenHolderCount: 0,
  topHoldertokenName: "",
  loadingTokenDetailTransfers: false
}

export interface TokenState {
  erc20tokens: any
  erc20tokensSearch: any
  erc20tokensKeyword: any
  totalQuantity: any
  profileInfo: any
  tokenSymbol: any
  loading: boolean
  requestToken20Status: boolean
  requestToken20SearchStatus: boolean
  requestTransactionSearchStatus: boolean
  error: any
  totalErc20Cnt: any
  erc20transfers: any
  erc20TransferCnt: any
  tokenTransfers: any
  requestToken20TransferStatus: any
  tokenHolders: any
  topTokenHolders: any
  holdersCnt: number
  tokenName: any
  totalSupply: any
  decimals: any
  status: boolean
  createSuccess: boolean
  updateSuccess: boolean
  manySuccess: boolean
  getTokenInfos: any
  erc721Tokens: any
  requestToken721Status: boolean
  getConfirm20Infos: any
  tokenInfoCount: number
  loadingConfirmInfo: boolean
  totalErc721TokenCnt: any
  erc721TransferCnt: any
  erc721transfer: any
  msg: any
  loadingHolders: boolean
  tabs: any
  tokenType: string
  loadingDefault: boolean
  loadingErc20Transfer: boolean
  loadingErc721TopTokens: boolean
  loadingErc721Transfer: boolean
  requestToken721TransferStatus: boolean
  loadingTokenDetail: boolean
  transferCnt: number
  //token detail analytics tab
  loadingTokenDetailAnalyze: boolean
  tokenDetailAnalyzeError: string
  tokenTransferAmount: any
  tokenTransferCount: any
  tokenTransferUniqueSenders: any
  tokenTransferUniqueReceivers: any
  tokenTransferUniqueTotals: any
  //token holder
  totalTokenSupply: any
  selTokenSupply: any
  tokenHolderCount: any
  topHoldertokenName: any
  loadingTokenDetailTransfers: boolean
}

const tokenReducer = (state: TokenState = initialState, action: AppActionTypes): TokenState => {
  switch (action.type) {
    case 'GET_ERC_20_TRANSFERS_REQUEST':
      return {
        ...state,
        loadingErc20Transfer: true,
        requestToken20TransferStatus: false,
        requestToken721TransferStatus: false,
      }
    case 'GET_NFT_TOKENS_REQUEST':
      return {
        ...state,
        loadingErc721TopTokens: true,
        requestToken721Status: false,
      }
    case 'GET_TOKEN_INFO_SUCCESS':
      return {
        ...state,
        getTokenInfos: action.payload.tokenInfo,
        status: false,
        updateSuccess: false,
        createSuccess: false,
      }

    case 'GET_CONFIRM_TOKEN_INFO_SUCCESS_REQUEST':
      return {
        ...state,
        loadingConfirmInfo: true,
      }
    case 'GET_CONFIRM_TOKEN_INFO_SUCCESS':
      return {
        ...state,
        getConfirm20Infos: action.payload.tokenInfo,
        tokenInfoCount: action.payload.tokenInfoCount,
        loadingConfirmInfo: false,
        status: false,
        updateSuccess: false,
        createSuccess: false,
      }
    case 'TOKEN_ERROR':
      return {
        ...state,
        error: action.payload,
        loadingConfirmInfo: false,
        loading: false,
        loadingErc20Transfer: false,
        loadingErc721TopTokens: false,
      }
    case 'UPDATE_MANY_TOKEN_SUCCESS':
      return {
        ...state,
        manySuccess: action.payload.success,
      }
    case 'GET_ERC20_TOKENS_REQUEST':
      return {
        ...state,
        loading: true,
        requestToken20SearchStatus: false,
        requestToken20Status: false,
      }
    case 'GET_ERC20_TOKEN':
      return {
        ...state,
        erc20tokens: action.payload.erc20tokens,
        totalErc20Cnt: action.payload.totalErc20Cnt,
        requestToken20Status: true,
        loading: false,
        status: false,
        updateSuccess: false,
        createSuccess: false,
      }
    case 'GET_ERC20_TOKEN_SEARCH':
      return {
        ...state,
        erc20tokensSearch: action.payload.erc20tokensSearch,
        totalErc20Cnt: action.payload.totalErc20Cnt,
        requestToken20SearchStatus: true,
        status: false,
        updateSuccess: false,
        createSuccess: false,
      }
    case 'GET_ERC20_TOKEN_KEYWORD':
      return {
        ...state,
        erc20tokensKeyword: action.payload.erc20tokensKeyword,
      }
    case 'GET_ERC20_TRANSACTION_SEARCH_REQUEST':
      return {
        ...state,
        loadingTokenDetailTransfers: true,
      }
    case 'GET_ERC20_TRANSACTION_SEARCH_KEYWORD':
      return {
        ...state,
        tokenTransfers: action.payload.tokenTransfers,
        transferCnt: action.payload.transferCnt,
        loadingTokenDetailTransfers: false,
        totalQuantity: action.payload.totalQuantity,
        tabs: action.payload.tabs,
      }
    case 'Get_ERC20_TRANSACTION_SEARCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loadingTokenDetailTransfers: false,
      }
    case 'GET_NFT_TOKENS_SUCCESS':
      return {
        ...state,
        loadingErc721TopTokens: false,
        erc721Tokens: action.payload.erc721Tokens,
        totalErc721TokenCnt: action.payload.totalErc721TokenCnt,
        requestToken721Status: true,
      }

    case 'GET_NFT_TOKEN_TRANSFER_SUCCESS':
      return {
        ...state,
        erc721transfer: action.payload.erc721transfers,
        erc721TransferCnt: action.payload.erc721TransferCnt,
        requestToken721TransferStatus: true,
        loading: false,
      }
    case 'GET_TOKEN_DETAIL_REQUEST':
      return {
        loadingTokenDetail: true,
        ...state,
      }
    case 'GET_TOKEN_DETAIL_RESPONSE':
      return {
        ...state,
        tokenTransfers: action.payload.tokenTransfers,
        tabs: action.payload.tabs,
        loadingTokenDetail: false,
        loadingDefault: false,
      }
    case 'GET_TOKEN_DETAIL_INFO_REQUEST':
      return {
        loadingTokenDetail: true,
        ...state,
      }
    case 'GET_TOKEN_DETAIL_INFO':
      return {
        ...state,
        //tokenTransfers: action.payload.tokenTransfers,
        // tokenHolders: action.payload.tokenHolders,
        holdersCnt: action.payload.tokenHoldersCnt,
        tokenName: action.payload.tokenName,
        totalSupply: action.payload.totalSupply,
        decimals: action.payload.decimals,
        transferCnt: action.payload.transferCnt,
        tokenType: action.payload.tokenType,
        tokenSymbol: action.payload.tokenSymbol,
        profileInfo: action.payload.profileInfo,
        loadingTokenDetail: false,
        loadingDefault: false,
      }
    case 'GET_TOKEN_DETAIL_ERROR':
      return {
        ...state,
        error: action.payload,
        loadingTokenDetail: false,
      }
    case 'GET_ERC20_TRANSFER':
      return {
        ...state,
        erc20transfers: action.payload.erc20transfers,
        erc20TransferCnt: action.payload.erc20TransferCnt,
        loadingErc20Transfer: false,
        requestToken20TransferStatus: true,
      }
    case 'CREATE_TOKEN_SUCCESS':
      return {
        ...state,
        createSuccess: action.payload.success,
      }
    case 'UPDATE_TOKEN_SUCCESS':
      return {
        ...state,
        updateSuccess: action.payload.success,
      }
    case 'DELETE_TOKEN_SUCCESS':
      return {
        ...state,
        status: action.payload.success,
      }
    case 'GET_ERC20_TOPTOKEN_HOLDERS_REQUEST':
      return {
        ...state,
        loadingHolders: true,
      }
    case 'GET_ERC20_TOP_TOKEN_HOLDERS':
      return {
        ...state,
        totalTokenSupply: action.payload.totalTokenSupply,
        selTokenSupply: action.payload.selTokenSupply,
        tokenHolderCount: action.payload.tokenHolderCount,
        topTokenHolders: action.payload.topTokenHolders,
        topHoldertokenName: action.payload.topHoldertokenName,
        loadingHolders: false,
      }
    case 'GET_TOP_TOKEN_HOLDERS_ERROR':
      return {
        ...state,
        error: action.payload,
        loadingHolders: false,
      }
    case 'GET_ERC20_TOKEN_HOLDERS':
      return {
        ...state,
        tokenHolders: action.payload.tokenHolders,
        holdersCnt: action.payload.holdersCnt,
        loadingHolders: action.payload.loadingHolders,
      }
    case 'TOKEN_DETAIL_ANALYZE_REQUEST':
      return {
        ...state,
        loadingTokenDetailAnalyze: true,
        tokenDetailAnalyzeError: '',
      }
    case 'TOKEN_DETAIL_ANALYZE_SUCCESS':
      return {
        ...state,
        loadingTokenDetailAnalyze: true,
        tokenTransferAmount: action.payload.tokenTransferAmount,
        tokenTransferCount: action.payload.tokenTransferCount,
        tokenTransferUniqueSenders: action.payload.tokenTransferUniqueSenders,
        tokenTransferUniqueReceivers: action.payload.tokenTransferUniqueReceivers,
        tokenTransferUniqueTotals: action.payload.tokenTransferUniqueTotals,
      }
    case 'TOKEN_DETAIL_ANALYZE_ERROR':
      return {
        ...state,
        loadingTokenDetailAnalyze: true,
        tokenDetailAnalyzeError: action.payload.error,
      }
    default:
      return state
  }
}

export default tokenReducer
