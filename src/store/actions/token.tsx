import axiosInstance from '../../axios.config'
import { createBrowserHistory } from 'history'
import {
  TokenError,
  ERC20SearchTransactionError,
  GetErc20Token,
  GetErc20TokenSearch,
  GetErc20TokenKeyword,
  GetErc20TransactionKeyword,
  GetErc20Transfer,
  GetErc20TokensRequest,
  GetErc20TransactionsRequest,
  GetErc20TransfersRequest,
  GetTokenDetailRequest,
  GetTokenDetailResponse,
  GetTokenDetailInfoRequest,
  GetTokenDetailInfo,
  GetTokenDetailError,
  GetTopTokenHoldersError,
  CreateToken,
  DeleteToken,
  UpdateToken,
  GetTokenInfo,
  UpdateManytokenSuccess,
  GetConfirmTokenInfoRequest,
  GetConfirmTokenInfo,
  Get721TokenSuccess,
  Get721TransferSuccess,
  GetErc20TokenHolders,
  GetErc20TopTokenHolders,
  GetErc20TopTokenHoldersRequest,
  Get721TokenRequest,
  TokenDetailAnalyzeRequest,
  TokenDetailAnalyzeSuccess,
  TokenDetailAnalyzeError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'
export const browserHistory = createBrowserHistory()

export const createTokenInfo = (data: any, address: any) => async (dispatch: Dispatch<TokenError>) => {
  try {
    const response = await axiosInstance.post<any>(`${BackendURL}/createtokeninfo`, data)
    if (response.data.success) {
      window.alert('Created Token information successfully')
      browserHistory.push(`/token/${address}`)
      window.location.reload()
    }
    // window.location.reload()
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const addedTokenInfos = (idArr: any) => async (dispatch: Dispatch<UpdateManytokenSuccess | TokenError>) => {
  try {
    const response = await axiosInstance.put<any>(`${BackendURL}/updateManyToken`, idArr)
    if (response.data.message) {
      window.alert(response.data.message)
    }
    dispatch({
      type: 'UPDATE_MANY_TOKEN_SUCCESS',
      payload: {
        success: true,
      },
    } as UpdateManytokenSuccess)
    // window.location.reload()
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const getTokenInfo = () => async (dispatch: Dispatch<GetTokenInfo | TokenError>) => {
  try {
    const response = await axiosInstance.get<any>(`${BackendURL}/getTokenInfo`)
    const { tokenInfo } = response.data
    console.log('here is gettokenInfo page', tokenInfo)
    dispatch({
      type: 'GET_TOKEN_INFO_SUCCESS',
      payload: {
        tokenInfo: tokenInfo,
      },
    } as GetTokenInfo)
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const getConfirmTokenInfo = () => async (dispatch: Dispatch<GetConfirmTokenInfoRequest | GetConfirmTokenInfo | TokenError>) => {
  try {
    dispatch({
      type: 'GET_CONFIRM_TOKEN_INFO_SUCCESS_REQUEST',
      payload: {
        error: 'error',
        loadingConfirmInfo: true,
      },
    } as GetConfirmTokenInfoRequest)

    const response = await axiosInstance.get<any>(`${BackendURL}/getConfirmTokenInfo`)
    const { tokenInfo, tokenInfoCount } = response.data

    dispatch({
      type: 'GET_CONFIRM_TOKEN_INFO_SUCCESS',
      payload: {
        tokenInfo: tokenInfo,
        tokenInfoCount: tokenInfoCount,
        loadingConfirmInfo: false,
      },
    } as GetConfirmTokenInfo)
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'Get tokenInfo failed',
      },
    } as TokenError)
  }
}

export const createToken = (data: any) => async (dispatch: Dispatch<CreateToken | TokenError>) => {
  try {
    const response = await axiosInstance.post<any>(`${BackendURL}/createtokeninfo`, data)
    dispatch({
      type: 'CREATE_TOKEN_SUCCESS',
      payload: {
        success: response.data.success,
      },
    } as CreateToken)
    // window.location.reload()
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const updateToken = (data: any) => async (dispatch: Dispatch<UpdateToken | TokenError>) => {
  try {
    const response = await axiosInstance.put<any>(`${BackendURL}/updateToken`, data)
    dispatch({
      type: 'UPDATE_TOKEN_SUCCESS',
      payload: {
        success: response.data.success,
      },
    } as UpdateToken)
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const deleteToken = (id: any) => async (dispatch: Dispatch<DeleteToken | TokenError>) => {
  try {
    const response = await axiosInstance.delete<any>(`${BackendURL}/deleteToken/${id}`)
    dispatch({
      type: 'DELETE_TOKEN_SUCCESS',
      payload: {
        success: response.data.success,
      },
    } as DeleteToken)
    // window.location.reload()
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const getAdmintoken = () => async (dispatch: Dispatch<GetErc20TokensRequest | GetErc20Token | TokenError>) => {
  try {
    dispatch({
      type: 'GET_ERC20_TOKENS_REQUEST',
    } as GetErc20TokensRequest)
    const response = await axiosInstance.get<any>(`${BackendURL}/tokens/gettoken`)
    const { erc20tokens, totalErc20Cnt } = response.data
    dispatch({
      type: 'GET_ERC20_TOKEN',
      payload: {
        erc20tokens: erc20tokens,
        totalErc20Cnt: totalErc20Cnt,
      },
    } as GetErc20Token)
  } catch (error: any) {
    dispatch({
      type: 'TOKEN_ERROR',
      payload: {
        error: 'error',
      },
    } as TokenError)
  }
}

export const getErc20Tokens =
  (page: any, rowsPerPage: any) => async (dispatch: Dispatch<GetErc20TokensRequest | GetErc20Token | TokenError>) => {
    try {
      dispatch({
        type: 'GET_ERC20_TOKENS_REQUEST',
      } as GetErc20TokensRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tokens/${page}/${rowsPerPage}`)
      const { erc20tokens, totalErc20Cnt } = response.data
      dispatch({
        type: 'GET_ERC20_TOKEN',
        payload: {
          erc20tokens: erc20tokens,
          totalErc20Cnt: totalErc20Cnt,
        },
      } as GetErc20Token)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const getErc20TokensSearch =
  (keyword: any, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetErc20TokensRequest | GetErc20TokenSearch | TokenError>) => {
    try {
      dispatch({
        type: 'GET_ERC20_TOKENS_REQUEST',
      } as GetErc20TokensRequest)

      const response = await axiosInstance.get<any>(
        `${BackendURL}/erc20Tokens/search/${keyword}/${page}/${rowsPerPage}`,
      )
      const { data, totalCnt } = response.data
      dispatch({
        type: 'GET_ERC20_TOKEN_SEARCH',
        payload: {
          erc20tokensSearch: data,
          totalErc20Cnt: totalCnt,
        },
      } as GetErc20TokenSearch)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const getErc20TokensKeyword =
  (keyword: any) => async (dispatch: Dispatch<GetErc20TokensRequest | GetErc20TokenKeyword | TokenError>) => {
    try {
      const response = await axiosInstance.post<any>(`${BackendURL}/erc20Tokens/search`, { keyword: keyword })
      const { data } = response.data
      dispatch({
        type: 'GET_ERC20_TOKEN_KEYWORD',
        payload: {
          erc20tokensKeyword: data,
        },
      } as GetErc20TokenKeyword)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const getErc20TransactionsKeyword =
  (page: any, rowsPerPage: any, address: any, keyword: any) => async (dispatch: Dispatch<GetErc20TransactionsRequest | GetErc20TransactionKeyword | ERC20SearchTransactionError>) => {
    try {
      dispatch({
        type: 'GET_ERC20_TRANSACTION_SEARCH_REQUEST',
      } as GetErc20TransactionsRequest)

      const response = await axiosInstance.post<any>(`${BackendURL}/erc20Tokens/searchTransaction`, {page: page, rowsPerPage: rowsPerPage,  tokenAddress: address, keyword: keyword })
      if (response.data.success) {
        const { tokenTransfers, totalQuantity, transferCnt, tabs } = response.data

        dispatch({
          type: 'GET_ERC20_TRANSACTION_SEARCH_KEYWORD',
          payload: {
            transferCnt: transferCnt,
            tokenTransfers: tokenTransfers,
            loadingTokenDetail: false,
            totalQuantity: totalQuantity,
            tabs: tabs,
          },
        } as GetErc20TransactionKeyword)
      }
    } catch (error: any) {
      dispatch({
        type: 'Get_ERC20_TRANSACTION_SEARCH_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as ERC20SearchTransactionError)
    }
  }

export const getTokenDetailbyTokenAddress =
  (page: any, rowsPerPage: any, tokenAddress: any) =>
  async (dispatch: Dispatch<GetTokenDetailRequest | GetTokenDetailResponse | GetTokenDetailError>) => {
    try {
      dispatch({
        type: 'GET_TOKEN_DETAIL_REQUEST',
      } as GetTokenDetailRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tokendetail/${page}/${rowsPerPage}/${tokenAddress}`)
      if (response.data.success) {
        const { tokenTransfers, tabs } = response.data
          
        dispatch({
          type: 'GET_TOKEN_DETAIL_RESPONSE',
          payload: {
            tokenTransfers: tokenTransfers,
            tabs: tabs,
          },
        } as GetTokenDetailResponse)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKEN_DETAIL_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetTokenDetailError)
    }
  }

export const getTokenDetailInfobyTokenAddress =
  (tokenAddress: any) =>
  async (dispatch: Dispatch<GetTokenDetailInfoRequest | GetTokenDetailInfo | GetTokenDetailError>) => {
    try {
      dispatch({
        type: 'GET_TOKEN_DETAIL_INFO_REQUEST',
      } as GetTokenDetailInfoRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tokendetailinfo/${tokenAddress}`)
      if (response.data.success) {
        const { transferCnt, tokenHoldersCnt, tokenName, totalSupply, decimals, tokenType, tokenSymbol, profileInfo } =
          response.data

        dispatch({
          type: 'GET_TOKEN_DETAIL_INFO',
          payload: {
            tokenHoldersCnt: tokenHoldersCnt,
            transferCnt: transferCnt,
            tokenName: tokenName,
            totalSupply: totalSupply,
            decimals: decimals,
            tokenType: tokenType,
            tokenSymbol: tokenSymbol,
            profileInfo: profileInfo,
          },
        } as GetTokenDetailInfo)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKEN_DETAIL_ERROR',
        payload: {
          status: error.response.status,
          statusText: error.response.statusText,
        },
      } as GetTokenDetailError)
    }
  }  

export const getErc20TopTokenHolders =
  (showCount: any, tokenAddress: any) =>
  async (dispatch: Dispatch<GetErc20TopTokenHoldersRequest | GetErc20TopTokenHolders | GetTopTokenHoldersError>) => {
    try {
      dispatch({
        type: 'GET_ERC20_TOPTOKEN_HOLDERS_REQUEST',
      } as GetErc20TopTokenHoldersRequest)
      
      const response = await axiosInstance.get<any>(`${BackendURL}/topTokenHolders/${showCount}/${tokenAddress}`)
      if (response.data.success) {
        const { tokenHolders, totalTokenSupply, selTokenSupply, tokenHolderCount, topHoldertokenName } = response.data

        dispatch({
          type: 'GET_ERC20_TOP_TOKEN_HOLDERS',
          payload: {
            topTokenHolders: tokenHolders,
            totalTokenSupply: totalTokenSupply,
            selTokenSupply: selTokenSupply,
            tokenHolderCount: tokenHolderCount,
            topHoldertokenName: topHoldertokenName,
            loading: false,
          },
        } as GetErc20TopTokenHolders)
      }
      
    } catch (error: any) {
      dispatch({
        type: 'GET_TOP_TOKEN_HOLDERS_ERROR',
        payload: {
          status: error.response.status
        },
      } as GetTopTokenHoldersError)
    }
  }

export const getErc20TokenHoldersbyTokenAddress =
  (page: any, rowsPerPage: any, tokenAddress: any, tokenType: any) =>
  async (dispatch: Dispatch<GetErc20TokenHolders | GetTokenDetailError>) => {
    try {
      const response = await axiosInstance.get<any>(`${BackendURL}/tokenHolders/${page}/${rowsPerPage}/${tokenAddress}/${tokenType}`)
      const { tokenHolders, holdersCnt } = response.data

      dispatch({
        type: 'GET_ERC20_TOKEN_HOLDERS',
        payload: {
          tokenHolders: tokenHolders,
          holdersCnt: holdersCnt,
          loading: false,
        },
      } as GetErc20TokenHolders)
    } catch (error: any) {}
  }

export const getErc20Transfers =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetErc20TransfersRequest | GetErc20Transfer | TokenError>) => {
    try {
      dispatch({
        type: 'GET_ERC_20_TRANSFERS_REQUEST',
      } as GetErc20TransfersRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tokentxns/${page}/${rowsPerPage}`)
      const { erc20transfers, erc20TransferCnt } = response.data

      dispatch({
        type: 'GET_ERC20_TRANSFER',
        payload: {
          erc20transfers: erc20transfers,
          erc20TransferCnt: erc20TransferCnt,
        },
      } as GetErc20Transfer)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const getNftToken =
  (page: any, rowsPerPage: any) => async (dispatch: Dispatch<Get721TokenSuccess | Get721TokenRequest | TokenError>) => {
    try {
      dispatch({
        type: 'GET_NFT_TOKENS_REQUEST',
        payload: {},
      } as Get721TokenRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/token-erc721/${page}/${rowsPerPage}`)
      const { erc721Tokens, totalErc721TokenCnt } = response.data
      dispatch({
        type: 'GET_NFT_TOKENS_SUCCESS',
        payload: {
          erc721Tokens: erc721Tokens,
          totalErc721TokenCnt: totalErc721TokenCnt,
        },
      } as Get721TokenSuccess)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const getErc721Transfers =
  (page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<GetErc20TransfersRequest | Get721TransferSuccess | TokenError>) => {
    try {
      dispatch({
        type: 'GET_ERC_20_TRANSFERS_REQUEST',
      } as GetErc20TransfersRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/erc721Transfer/${page}/${rowsPerPage}`)
      const { erc721transfers, erc721TransferCnt } = response.data
      dispatch({
        type: 'GET_NFT_TOKEN_TRANSFER_SUCCESS',
        payload: {
          erc721transfers: erc721transfers,
          erc721TransferCnt: erc721TransferCnt,
        },
      } as Get721TransferSuccess)
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_ERROR',
        payload: {
          error: 'error',
        },
      } as TokenError)
    }
  }

export const GetTokenDetailAnalytics =
  (address: any) =>
  async (dispatch: Dispatch<TokenDetailAnalyzeRequest | TokenDetailAnalyzeSuccess | TokenDetailAnalyzeError>) => {
    try {
      dispatch({
        type: 'TOKEN_DETAIL_ANALYZE_REQUEST',
      } as TokenDetailAnalyzeRequest)

      const response = await axiosInstance.get(`${BackendURL}/tokendetail/analyze/${address}`)

      const success = response.data.success

      if (success) {
        const {
          tokenTransferAmount,
          tokenTransferCount,
          tokenTransferUniqueSenders,
          tokenTransferUniqueReceivers,
          tokenTransferUniqueTotals,
        } = response.data.data

        dispatch({
          type: 'TOKEN_DETAIL_ANALYZE_SUCCESS',
          payload: {
            tokenTransferAmount: tokenTransferAmount,
            tokenTransferCount: tokenTransferCount,
            tokenTransferUniqueSenders: tokenTransferUniqueSenders,
            tokenTransferUniqueReceivers: tokenTransferUniqueReceivers,
            tokenTransferUniqueTotals: tokenTransferUniqueTotals,
          },
        } as TokenDetailAnalyzeSuccess)
      } else {
        const { error } = response.data.error
        dispatch({
          type: 'TOKEN_DETAIL_ANALYZE_ERROR',
          payload: {
            error: error,
          },
        } as TokenDetailAnalyzeError)
      }
    } catch (error: any) {
      dispatch({
        type: 'TOKEN_DETAIL_ANALYZE_ERROR',
        payload: {
          error: error,
        },
      } as TokenDetailAnalyzeError)
    }
  }
