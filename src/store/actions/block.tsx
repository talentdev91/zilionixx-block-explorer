import axiosInstance from '../../axios.config'
import {
  GetLatestChainInfoRequest,
  GetLatestChainInfoFail,
  GetLatestChainInfo,
  GetLatestTenBlocksRequest,
  GetLatestTenBlocksFail,
  GetLatestTenBlocks,
  GetAllBlocksRequest,
  GetAllBlocksFail,
  GetAllBlocks,
  GetBlockDetailRequest,
  GetBlockDetailFail,
  GetBlockDetail,
  GetBlockTransactionsRequest,
  GetBlockTransactionsFail,
  GetBlockTransactions,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getAllBlocks =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetAllBlocksRequest | GetAllBlocks | GetAllBlocksFail>) => {
    try {
      dispatch({
        type: 'GET_All_BLOCKS_REQUEST',
      } as GetAllBlocksRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/block/allBlocks/${page}/${rowsPerPage}`)
      const { blocks, totalBlocksCnt, blockReward } = response.data

      dispatch({
        type: 'GET_ALL_BLOCKS',
        payload: {
          blocks: blocks,
          totalBlocksCnt: totalBlocksCnt,
          blockReward: blockReward,
        },
      } as GetAllBlocks)
    } catch (error: any) {
      dispatch({
        type: 'GET_ALL_BLOCKS_FAIL',
        payload: {
          error: 'error.response.err',
        },
      } as GetAllBlocksFail)
    }
  }

export const getBlockDetail =
  (blockNumber: any) => async (dispatch: Dispatch<GetBlockDetailRequest | GetBlockDetail | GetBlockDetailFail>) => {
    try {
      dispatch({
        type: 'GET_BLOCK_DETAIL_REQUEST',
      } as GetBlockDetailRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/block/blockDetail/${blockNumber}`)
      const { block, InternalTxns, blockReward, lastBlockNumber } = response.data

      dispatch({
        type: 'GET_BLOCK_DETAIL',
        payload: {
          block: block,
          txnlength: InternalTxns.length,
          blockReward: blockReward,
          lastBlockNumber: lastBlockNumber,
        },
      } as GetBlockDetail)
    } catch (error: any) {
      dispatch({
        type: 'GET_BLOCK_DETAIL_FAIL',
        payload: {
          error: 'error.response.err',
        },
      } as GetBlockDetailFail)
    }
  }

export const getLatestTenBlocks =
  () => async (dispatch: Dispatch<GetLatestTenBlocksRequest | GetLatestTenBlocks | GetLatestTenBlocksFail>) => {
    try {
      dispatch({
        type: 'GET_LATEST_TEN_BLOCKS_REQUEST',
      } as GetLatestTenBlocksRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/block/latestTenBlocks`)
      const { blocks, blockReward } = response.data
      let latestTenBlocks = []

      for (let i = 0; i < blocks.length; i++) {
        let latestBlock = {
          blockNumber: 0,
          blockAge: 0,
          validateAccount: '',
          transactionCount: 0,
          blockTme: 0,
          blockReward: 0,
        }
        latestBlock.blockAge = Math.floor(Date.now() / 1000) - blocks[i].timestamp
        latestBlock.blockNumber = blocks[i].number
        latestBlock.validateAccount = blocks[i].miner
        latestBlock.transactionCount = blocks[i].transactions.length
        latestTenBlocks.push(latestBlock)
      }

      dispatch({
        type: 'GET_LATEST_TEN_BLOCKS',
        payload: { latestTenBlocks: latestTenBlocks, blockReward: blockReward },
      } as GetLatestTenBlocks)
    } catch (error: any) {
      dispatch({
        type: 'GET_LATEST_TEN_BLOCKS_FAIL',
        payload: {
          error: 'error.response.err',
        },
      } as GetLatestTenBlocksFail)
    }
  }

export const getBlockTransactions =
  (page: any, rowsPerPage: any, blocknumber: any) =>
  async (dispatch: Dispatch<GetBlockTransactionsRequest | GetBlockTransactions | GetBlockTransactionsFail>) => {
    try {
      dispatch({
        type: 'GET_BLOCK_TRANSACTIONS_REQUEST',
      } as GetBlockTransactionsRequest)

      const response = await axiosInstance.get<any>(
        `${BackendURL}/block/getBlockTransactions/${blocknumber}/${page}/${rowsPerPage}`,
      )
      const { txns, txnstimestamp, totalTxnsCnt, blockConfirmation } = response.data

      dispatch({
        type: 'GET_BLOCK_TRANSACTIONS',
        payload: {
          txns: txns,
          txnstimestamp: txnstimestamp,
          totalTxnsCnt: totalTxnsCnt,
          blockConfirmation: blockConfirmation,
        },
      } as GetBlockTransactions)
    } catch (error: any) {
      dispatch({
        type: 'GET_BLOCK_TRANSACTIONS_FAIL',
        payload: {
          error: 'error.response.err',
        },
      } as GetBlockTransactionsFail)
    }
  }

export const getLatestChainInfo =
  () => async (dispatch: Dispatch<GetLatestChainInfoRequest | GetLatestChainInfo | GetLatestChainInfoFail>) => {
    try {
      dispatch({
        type: 'GET_LATEST_CHAIN_INFO_REQUEST',
      } as GetLatestChainInfoRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/block/getLatestChainInfo`)
      const { latestChainInfo } = response.data

      dispatch({
        type: 'GET_LATEST_CHAIN_INFO',
        payload: {
          latestChainInfo: latestChainInfo,
        },
      } as GetLatestChainInfo)
    } catch (error: any) {
      dispatch({
        type: 'GET_LATEST_CHAIN_INFO_FAIL',
        payload: {
          error: 'error.response.err',
        },
      } as GetLatestChainInfoFail)
    }
  }
