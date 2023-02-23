import { authInstance } from '../../axios.config'
import axios from 'axios'
import {
  GetRequestLogStatisticsRequest,
  GetRequestLogStatisticsSuccess,
  GetRequestLogStatisticsError,
  GetRequestLogStatisticsAnalyzeRequest,
  GetRequestLogStatisticsAnalyzeError,
  GetRequestLogStatisticsAnalyzeSuccess,
  GetFeedbacksRquest,
  GetFeedbacks,
  GetFeedbacksError,
  GetNameTaggingRquest,
  GetNameTagging,
  GetNameTaggingError,
  GetTokenRequest,
  GetTokenSuccess,
  GetTokenError,
  UpdateTokenStateRequest,
  UpdateTokenStateSuccess,
  UpdateTokenStateError,
  UpdateTokenInfoRequest,
  UpdateTokenInfoSuccess,
  UpdateTokenInfoError,
  AddTokenInfoRequest,
  AddTokenInfoSuccess,
  AddTokenInfoError,
  SendMessageRequest,
  SendMessageSuccess,
  SendMessageError,
  DeleteMessageRequest,
  DeleteMessageSuccess,
  DeleteMessageError,
  GetTokenInfoRequest,
  GetTokenInfoSuccess,
  GetTokenInfoError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

// const getHeader = () => {
//   return {
//     headers: {
//       Authorization: `${localStorage.getItem('jwtToken')}`,
//     },
//   }
// }

export const getRequestLogStatistics =
  () =>
  async (
    dispatch: Dispatch<GetRequestLogStatisticsRequest | GetRequestLogStatisticsSuccess | GetRequestLogStatisticsError>,
  ) => {
    try {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_REQUEST',
        payload: {},
      } as GetRequestLogStatisticsRequest)

      const response = await authInstance.get<any>(`${BackendURL}/admin/listUserActivity`)

      const { success } = response.data
      if (success === true) {
        const { data } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_SUCCESS',
          payload: {
            data: data,
          },
        } as GetRequestLogStatisticsSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ERROR',
          payload: {
            error: error,
          },
        } as GetRequestLogStatisticsError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ERROR',
        payload: {
          error: error.message,
        },
      } as GetRequestLogStatisticsError)
    }
  }

export const extractRouter =
  () =>
  async (
    dispatch: Dispatch<
      | GetRequestLogStatisticsAnalyzeRequest
      | GetRequestLogStatisticsAnalyzeError
      | GetRequestLogStatisticsAnalyzeSuccess
    >,
  ) => {
    console.log('extractRouter Action part')
    try {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_REQUEST',
        payload: {},
      } as GetRequestLogStatisticsAnalyzeRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/extractRouter`)

      const { success } = response.data
      if (success === true) {
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_SUCCESS',
          payload: {},
        } as GetRequestLogStatisticsAnalyzeSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR',
          payload: {
            error: error,
          },
        } as GetRequestLogStatisticsAnalyzeError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR',
        payload: {
          error: error.message,
        },
      } as GetRequestLogStatisticsAnalyzeError)
    }
  }

export const getFeedbacks =
  (page: any, rowsPerPage: any, type: number) =>
  async (
    dispatch: Dispatch<
      GetFeedbacksRquest | DeleteMessageRequest | SendMessageRequest | GetFeedbacks | GetFeedbacksError
    >,
  ) => {
    try {
      dispatch({
        type: 'GET_FEEDBACKS_REQUEST',
      } as GetFeedbacksRquest)

      dispatch({
        type: 'SEND_MESSAGE_REQUEST',
      } as SendMessageRequest)

      dispatch({
        type: 'DELETE_MESSAGE_REQUEST',
      } as DeleteMessageRequest)
      const response = await axios.get<any>(`${BackendURL}/admin/listAllUserFeedback/${type}/${page}/${rowsPerPage}`)

      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_FEEDBACKS',
          payload: {
            data: data.feedbacks,
            totalCount: data.totalCount,
          },
        } as GetFeedbacks)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_FEEDBACKS_ERROR',
          payload: {
            error: error,
          },
        } as GetFeedbacksError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_FEEDBACKS_ERROR',
        payload: {
          error: error.message,
        },
      } as GetFeedbacksError)
    }
  }

export const getNameTagging =
  (page: any, rowsPerPage: any, type: number) =>
  async (
    dispatch: Dispatch<
      GetNameTaggingRquest | DeleteMessageRequest | SendMessageRequest | GetNameTagging | GetNameTaggingError
    >,
  ) => {
    try {
      dispatch({
        type: 'GET_NAME_TAGGING_REQUEST',
      } as GetNameTaggingRquest)

      const response = await axios.get<any>(`${BackendURL}/admin/listAllUserFeedback/${type}/${page}/${rowsPerPage}`)
      const { success } = response.data
      
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_NAME_TAGGING',
          payload: {
            data: data.feedbacks,
            totalCount: data.totalCount,
          },
        } as GetNameTagging)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_NAME_TAGGING_ERROR',
          payload: {
            error: error,
          },
        } as GetNameTaggingError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_NAME_TAGGING_ERROR',
        payload: {
          error: error.message,
        },
      } as GetNameTaggingError)
    }
  }

export const addTokenInfo =
  (email: string, name: string, tokenAddress: string, officialUrl: string, logoIcon: string, description: string, officialEmailAdd: string, blog: string, reddit: string, 
    slack: string, facebook: string, twitter: string, bitcointalk: string, github: string, telegram: string, whitepaper: string, priceData: string, comments: string ) =>
  async (dispatch: Dispatch<AddTokenInfoRequest | AddTokenInfoSuccess | AddTokenInfoError>) => {
    const req = {
      email: email,
      name: name,
      tokenAddress: tokenAddress,
      officialUrl: officialUrl,
      logoIcon: logoIcon,
      description: description,
      officialEmailAdd: officialEmailAdd,
      blog: blog,
      reddit: reddit,
      slack: slack,
      facebook: facebook,
      twitter: twitter,
      bitcointalk: bitcointalk,
      github: github,
      telegram: telegram,
      whitepaper: whitepaper,
      priceData: priceData,
      comments: comments,
    }

    try {
      dispatch({
        type: 'ADD_TOKEN_INFO_REQUEST',
      } as AddTokenInfoRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/addTokenInfo`, req)
      const { success } = response.data

      if (success) {
        dispatch({
          type: 'ADD_TOKEN_INFO_SUCCESS',
          payload: {
            status: '1',
          },
        } as AddTokenInfoSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'ADD_TOKEN_INFO_ERROR',
          payload: {
            error: error,
          },
        } as AddTokenInfoError)
      }
    } catch (error: any) {
      dispatch({
        type: 'ADD_TOKEN_INFO_ERROR',
        payload: {
          error: error.message,
        },
      } as AddTokenInfoError)
    }
  }

export const getTokenInfo =
  (page: any, rowsPerPage: any, address: any) =>
  async (
    dispatch: Dispatch< GetTokenInfoRequest | GetTokenInfoSuccess | GetTokenInfoError >,
  ) => {
    try {
      dispatch({
        type: 'GET_TOKENINFO_REQUEST',
      } as GetTokenInfoRequest)

      const response = await axios.get<any>(`${BackendURL}/admin/getTokenInfo/${page}/${rowsPerPage}/${address}`)
      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_TOKENINFO_SUCCESS',
          payload: {
            tokenInfo: data.tokenInfo,
            totalCount: data.totalCount,
          },
        } as GetTokenInfoSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_TOKENINFO_ERROR',
          payload: {
            error: error,
          },
        } as GetTokenInfoError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKENINFO_ERROR',
        payload: {
          error: error.message,
        },
      } as GetTokenInfoError)
    }
  }

export const getAllToken =
  (page: any, rowsPerPage: any) =>
  async (
    dispatch: Dispatch< GetTokenRequest | GetTokenSuccess | GetTokenError >,
  ) => {
    try {
      dispatch({
        type: 'GET_TOKEN_REQUEST',
      } as GetTokenRequest)

      const response = await axios.get<any>(`${BackendURL}/admin/getAllToken/${page}/${rowsPerPage}`)
      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'GET_TOKEN_SUCCESS',
          payload: {
            token: data.token,
            totalCount: data.totalCount,
          },
        } as GetTokenSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_TOKEN_ERROR',
          payload: {
            error: error,
          },
        } as GetTokenError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKEN_ERROR',
        payload: {
          error: error.message,
        },
      } as GetTokenError)
    }
  }

export const updateTokenInfo =
  (tokenInfoID: any, tokenAddress: any) =>
  async (
    dispatch: Dispatch< UpdateTokenInfoRequest | UpdateTokenInfoSuccess | UpdateTokenInfoError >,
  ) => {
    try {
      const req = {
        tokenInfoID: tokenInfoID,
        tokenAddress: tokenAddress
      }

      dispatch({
        type: 'UPDATE_TOKEN_INFORMATION_REQUEST',
      } as UpdateTokenInfoRequest)

      const response = await axios.post<any>(`${BackendURL}/admin/updateTokenInfo/`, req)
      const { success } = response.data
      if (success) {
        const { data } = response.data
        dispatch({
          type: 'UPDATE_TOKEN_INFORMATION_SUCCESS',
          payload: {
            status: '3',
          },
        } as UpdateTokenInfoSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'UPDATE_TOKEN_INFORMATION_ERROR',
          payload: {
            error: error,
          },
        } as UpdateTokenInfoError)
      }
    } catch (error: any) {
      dispatch({
        type: 'UPDATE_TOKEN_INFORMATION_ERROR',
        payload: {
          error: error.message,
        },
      } as UpdateTokenInfoError)
    }
  }

export const updateTokenState =
  (tokenAddress: any) =>
  async (
    dispatch: Dispatch< UpdateTokenStateRequest | UpdateTokenStateSuccess | UpdateTokenStateError >,
  ) => {
    try {
      const req = {
        tokenAddress: tokenAddress
      }

      dispatch({
        type: 'UPDATE_TOKEN_STATE_REQUEST',
      } as UpdateTokenStateRequest)

      const response = await axios.post<any>(`${BackendURL}/admin/updateTokenState/`, req)
      const { success } = response.data
      if (success) {
        dispatch({
          type: 'UPDATE_TOKEN_STATE_SUCCESS',
          payload: {
            status: '2',
          },
        } as UpdateTokenStateSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'UPDATE_TOKEN_STATE_ERROR',
          payload: {
            error: error,
          },
        } as UpdateTokenStateError)
      }
    } catch (error: any) {
      dispatch({
        type: 'UPDATE_TOKEN_STATE_ERROR',
        payload: {
          error: error.message,
        },
      } as UpdateTokenStateError)
    }
  }

export const sendMessage =
  (id: string, response: string) =>
  async (dispatch: Dispatch<SendMessageRequest | SendMessageSuccess | SendMessageError>) => {
    const req = {
      id: id,
      response: response,
    }
    try {
      dispatch({
        type: 'SEND_MESSAGE_REQUEST',
      } as SendMessageRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/sendFeedbackResponseEmailToUser`, req)

      const { success } = response.data
      if (success) {
        dispatch({
          type: 'SEND_MESSAGE_SUCCESS',
          payload: {
            status: '1',
          },
        } as SendMessageSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'SEND_MESSAGE_ERROR',
          payload: {
            error: error,
          },
        } as SendMessageError)
      }
    } catch (error: any) {
      dispatch({
        type: 'SEND_MESSAGE_ERROR',
        payload: {
          error: error.message,
        },
      } as SendMessageError)
    }
  }

export const deleteMessage =
  (selected: string) =>
  async (dispatch: Dispatch<DeleteMessageRequest | DeleteMessageSuccess | DeleteMessageError>) => {
    const req = {
      ids: selected,
    }

    try {
      dispatch({
        type: 'DELETE_MESSAGE_REQUEST',
      } as DeleteMessageRequest)

      const response = await authInstance.post<any>(`${BackendURL}/admin/closeUserFeedbacks`, req)

      const { success } = response.data
      if (success) {
        dispatch({
          type: 'DELETE_MESSAGE_SUCCESS',
          payload: {
            status: '2',
          },
        } as DeleteMessageSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_MESSAGE_ERROR',
          payload: {
            error: error,
          },
        } as DeleteMessageError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_MESSAGE_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteMessageError)
    }
  }
