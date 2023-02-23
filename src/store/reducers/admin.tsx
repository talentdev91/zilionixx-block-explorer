import { AppActionTypes } from '../actions/action.types'

const initialState: AdminState = {
  requestLogStatisticsData: {},
  requestLogStatisticsLoading: false,
  requestLogStatisticsError: '',
  extractRouterLoading: false,
  extractRouterSuccess: false,

  requestFeedbackData: {},
  requestFeedbackCount: 0,
  requestFeedbackError: '',
  requestFeedbackLoading: false,
  requestFeedbackSuccess: false,

  feedbackStatus: null,
  sendMessageError: '',
  deleteMessageError: '',

  nameTaggingData: {},
  nameTaggingCount: 0,
  nameTaggingError: '',
  nameTaggingLoading: false,
  nameTaggingSuccess: false,

  addTokenInfoLoading: false,
  addTokenInfoSuccess: false,
  TokenInfoError: '',
  
  getTokenInfoLoading: false,
  tokenInfoList: [],
  tokenInfoCount: 0,

  getTokenLoading: false,
  tokenList: [],
  tokenCount: 0,

  updateTokenInfoLoading: false,
  updateTokenInfoSuccess: false,

  updateTokenStateLoading: false,
  updateTokenStateSuccess: false,
}

export interface AdminState {
  requestLogStatisticsData: object
  requestLogStatisticsLoading: boolean
  requestLogStatisticsError: string
  extractRouterLoading: boolean
  extractRouterSuccess: boolean

  requestFeedbackData: object
  requestFeedbackCount: number
  requestFeedbackError: string
  requestFeedbackLoading: boolean
  requestFeedbackSuccess: boolean

  feedbackStatus: string
  sendMessageError: string
  deleteMessageError: string

  nameTaggingData: object
  nameTaggingCount: number
  nameTaggingError: string
  nameTaggingLoading: boolean
  nameTaggingSuccess: boolean

  addTokenInfoLoading: boolean
  addTokenInfoSuccess: boolean
  TokenInfoError: string

  getTokenInfoLoading: boolean
  tokenInfoList: any
  tokenInfoCount: number

  getTokenLoading: boolean
  tokenList: any
  tokenCount: number

  updateTokenInfoLoading: boolean,
  updateTokenInfoSuccess: boolean,

  updateTokenStateLoading: boolean,
  updateTokenStateSuccess: boolean,
}

const adminReducer = (state: AdminState = initialState, action: AppActionTypes): AdminState => {
  switch (action.type) {
    case 'GET_TOKEN_REQUEST':
      return {
        ...state,
        getTokenLoading: true,
        TokenInfoError: '',
      }
    case 'GET_TOKEN_SUCCESS':
      return {
        ...state,
        getTokenLoading: false,
        tokenList: action.payload.token,
        tokenCount: action.payload.totalCount,
        TokenInfoError: '',
      }
    case 'GET_TOKEN_ERROR':
      return {
        ...state,
        getTokenLoading: false,
        TokenInfoError: action.payload.error
      }

    case 'GET_TOKENINFO_REQUEST':
      return {
        ...state,
        getTokenInfoLoading: true,
        TokenInfoError: '',
      }
    case 'GET_TOKENINFO_SUCCESS':
      return {
        ...state,
        getTokenInfoLoading: false,
        tokenInfoList: action.payload.tokenInfo,
        tokenInfoCount: action.payload.totalCount,
        TokenInfoError: '',
      }
    case 'GET_TOKENINFO_ERROR':
      return {
        ...state,
        getTokenInfoLoading: false,
        TokenInfoError: action.payload.error
      }

    case 'UPDATE_TOKEN_STATE_REQUEST':
      return {
        ...state,
        updateTokenStateLoading: true,
        updateTokenStateSuccess: false,
        TokenInfoError: '',
      }
    case 'UPDATE_TOKEN_STATE_SUCCESS':
      return {
        ...state,
        updateTokenStateLoading: false,
        updateTokenStateSuccess: true,
        TokenInfoError: '',
      }
    case 'UPDATE_TOKEN_STATE_ERROR':
      return {
        ...state,
        updateTokenStateLoading: false,
        updateTokenStateSuccess: false,
        TokenInfoError: action.payload.error,
      }

    case 'UPDATE_TOKEN_INFORMATION_REQUEST':
      return {
        ...state,
        updateTokenInfoLoading: true,
        updateTokenInfoSuccess: false,
        TokenInfoError: '',
      }
    case 'UPDATE_TOKEN_INFORMATION_SUCCESS':
      return {
        ...state,
        updateTokenInfoLoading: false,
        updateTokenInfoSuccess: true,
        TokenInfoError: '',
      }
    case 'UPDATE_TOKEN_INFORMATION_ERROR':
      return {
        ...state,
        updateTokenInfoLoading: false,
        updateTokenInfoSuccess: false,
        TokenInfoError: action.payload.error,
      }

    case 'ADD_TOKEN_INFO_REQUEST':
      return {
        ...state,
        addTokenInfoLoading: true,
        addTokenInfoSuccess: false,
        TokenInfoError: '',
      }
    case 'ADD_TOKEN_INFO_SUCCESS':
      return {
        ...state,
        addTokenInfoLoading: false,
        addTokenInfoSuccess: true,
        TokenInfoError: '',
      }
    case 'ADD_TOKEN_INFO_ERROR':
      return {
        ...state,
        addTokenInfoLoading: false,
        addTokenInfoSuccess: false,
        TokenInfoError: action.payload.error,
      }

    case 'GET_REQUEST_LOG_STATISTICS_REQUEST':
      return {
        ...state,
        requestLogStatisticsLoading: true,
        requestLogStatisticsError: '',
      }

    case 'GET_REQUEST_LOG_STATISTICS_SUCCESS':
      return {
        ...state,
        requestLogStatisticsLoading: false,
        requestLogStatisticsError: '',
        requestLogStatisticsData: action.payload.data,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ERROR':
      return {
        ...state,
        requestLogStatisticsLoading: false,
        requestLogStatisticsError: action.payload.error,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_REQUEST':
      return {
        ...state,
        extractRouterLoading: true,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR':
      return {
        ...state,
        extractRouterLoading: false,
        extractRouterSuccess: false,
      }

    case 'GET_REQUEST_LOG_STATISTICS_ANALYZE_SUCCESS':
      return {
        ...state,
        extractRouterLoading: false,
        extractRouterSuccess: true,
      }
    case 'GET_FEEDBACKS_REQUEST':
      return {
        ...state,
        requestFeedbackLoading: true,
      }
    case 'GET_FEEDBACKS':
      return {
        ...state,
        requestFeedbackData: action.payload.data,
        requestFeedbackCount: action.payload.totalCount,
        requestFeedbackLoading: false,
        requestFeedbackSuccess: true,
      }
    case 'GET_FEEDBACKS_ERROR':
        return {
          ...state,
          nameTaggingLoading: false,
        }

    case 'GET_NAME_TAGGING_REQUEST':
      return {
        ...state,
        nameTaggingLoading: true,
      }
    case 'GET_NAME_TAGGING':
      return {
        ...state,
        nameTaggingData: action.payload.data,
        nameTaggingCount: action.payload.totalCount,
        nameTaggingLoading: false,
        nameTaggingSuccess: true,
      }
    case 'GET_NAME_TAGGING_ERROR':
        return {
          ...state,
          nameTaggingLoading: false,
        } 

    case 'SEND_MESSAGE_REQUEST':
      return {
        ...state,
        feedbackStatus: null
      }
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        feedbackStatus: action.payload.status
      }
    case 'SEND_MESSAGE_ERROR':
      return {
        ...state,
        sendMessageError: action.payload.error,
        feedbackStatus: null
      }
    case 'DELETE_MESSAGE_REQUEST':
      return {
        ...state,
        feedbackStatus: null,
      }
    case 'DELETE_MESSAGE_SUCCESS':
      return {
        ...state,
        feedbackStatus: action.payload.status
      }
    case 'DELETE_MESSAGE_ERROR':
      return {
        ...state,
        deleteMessageError: action.payload.error,
        feedbackStatus: null,
      }
    default:
      return state
  }
}

export default adminReducer
