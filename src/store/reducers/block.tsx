import { AppActionTypes } from '../actions/action.types'

const initialState: BlockState = {
  latestChainInfo: {},
  intervalID: null,
  latestBlocks: [],
  blocks: [],
  block: [],
  totalBlocksCnt: 0,
  blockReward: [],
  latestTenBlockReward: [],
  lastBlockNumber: 0,
  txnlength: 0,
  loading: false,
  loadingLatestBlocks: false,
  error: {},
}

export interface BlockState {
  lastBlockNumber: any
  intervalID: any
  latestTenBlockReward: any
  latestChainInfo: any
  latestBlocks: any
  blocks: any
  totalBlocksCnt: any
  blockReward: any
  block: any
  txnlength: any
  loading: boolean
  loadingLatestBlocks: boolean
  error: any
}

const blockReducer = (state: BlockState = initialState, action: AppActionTypes): BlockState => {
  switch (action.type) {
    case 'GET_LATEST_TEN_BLOCKS_REQUEST':
      return {
        ...state,
        loadingLatestBlocks: true,
      }
    case 'GET_All_BLOCKS_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'GET_BLOCK_DETAIL_REQUEST':
    case 'GET_BLOCK_TRANSACTIONS_REQUEST':
    case 'GET_LATEST_CHAIN_INFO_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_BLOCK_DETAIL':
      return {
        ...state,
        block: action.payload.block,
        txnlength: action.payload.txnlength,
        blockReward: action.payload.blockReward,
        lastBlockNumber: action.payload.lastBlockNumber,
        loading: false,
      }

    case 'GET_ALL_BLOCKS':
      return {
        ...state,
        blocks: action.payload.blocks,
        totalBlocksCnt: action.payload.totalBlocksCnt,
        blockReward: action.payload.blockReward,
        loading: false,
      }
    case 'GET_ALL_BLOCKS_FAIL':
      return {
        ...state,
        loading: false,
      }
    case 'GET_LATEST_TEN_BLOCKS':
      return {
        ...state,
        latestBlocks: action.payload.latestTenBlocks,
        intervalID: action.payload.intervalID,
        latestTenBlockReward: action.payload.blockReward,
        loadingLatestBlocks: false,
      }

    case 'GET_LATEST_CHAIN_INFO':
      return {
        ...state,
        latestChainInfo: action.payload.latestChainInfo,
        loading: false,
      }

    case 'GET_LATEST_CHAIN_INFO_FAIL':
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }

    default:
      return state
  }
}

export default blockReducer
