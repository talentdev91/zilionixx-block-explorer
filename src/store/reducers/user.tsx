import { AppActionTypes } from '../actions/action.types'

const initialState: UserState = {
  loadingOverview: false,
  overviewError: '',
  name: '',
  email: '',
  addressWatchListAlertCnt: 0,
  txnNotesCnt: 0,
  addressTagsCnt: 0,
  emailLimitCnt: 0,
  totalBalance: 0,
  lastLogin: null,
  loadingProfile: false,
  profileError: '',
  loadingEditProfile: false,
  editProfileMsg: '',
  editProfileError: '',

  txnNoteRequest: {},
  txnNoteSuccessResponse: [],
  txnNoteLoading: false,
  txnNoteError: '',
  txnNoteTotalCount: 0,
  txnNoteChangeCode: 0,
  txnNote: {},

  addressNoteRequest: {},
  addressNoteSuccessResponse: [],
  addressNote: {},
  addressNoteLoading: false,
  addressNoteError: '',
  addressNoteTotalCount: 0,
  addressNoteMsg: '',

  apiKeyRequest: {},
  apiKeySuccessResponse: [],
  apiKey: {},
  apiKeyLoading: false,
  apiKeyError: '',
  apiKeyTotalCount: 0,
  apiKeyMsg: '',

  watchAddressRequest: {},
  watchAddressSuccessResponse: [],
  watchAddress: {},
  watchAddressLoading: false,
  watchAddressError: '',
  watchAddressTotalCount: 0,
  watchAddressMsg: '',

  ignoreTokenRequest: {},
  ignoreTokenSuccessResponse: [],
  ignoreTokenLoading: false,
  ignoreTokenError: '',
  ignoreTokenTotalCount: 0,
  ignoreTokenChangeCode: 0,

  customAbiRequest: {},
  customAbiSuccessResponse: [],
  customAbiLoading: false,
  customAbiError: '',
  customAbiTotalCount: 0,
  customAbiChangeCode: 0,
}

export interface UserState {
  loadingOverview: boolean
  overviewError: string
  name: string
  email: string
  addressWatchListAlertCnt: number
  txnNotesCnt: number
  addressTagsCnt: number
  emailLimitCnt: number
  totalBalance: number
  lastLogin: any
  loadingProfile: boolean
  profileError: string
  loadingEditProfile: boolean
  editProfileMsg: string
  editProfileError: string

  txnNoteRequest: object
  txnNoteSuccessResponse: object
  txnNoteLoading: boolean
  txnNoteError: string
  txnNoteTotalCount: Number
  txnNoteChangeCode: number
  txnNote: Object

  addressNoteRequest: object
  addressNoteSuccessResponse: object
  addressNote: object
  addressNoteLoading: boolean
  addressNoteError: string
  addressNoteTotalCount: Number
  addressNoteMsg: string

  apiKeyRequest: object
  apiKeySuccessResponse: object
  apiKey: object
  apiKeyLoading: boolean
  apiKeyError: string
  apiKeyTotalCount: number
  apiKeyMsg: string

  watchAddressRequest: object
  watchAddressSuccessResponse: object
  watchAddress: Object
  watchAddressLoading: boolean
  watchAddressError: string
  watchAddressTotalCount: Number
  watchAddressMsg: string

  ignoreTokenRequest: object
  ignoreTokenSuccessResponse: object
  ignoreTokenLoading: boolean
  ignoreTokenError: string
  ignoreTokenTotalCount: Number
  ignoreTokenChangeCode: number


  customAbiRequest: object
  customAbiSuccessResponse: object
  customAbiLoading: boolean
  customAbiError: string
  customAbiTotalCount: Number
  customAbiChangeCode: number
}

const userReducer = (state: UserState = initialState, action: AppActionTypes): UserState => {
  switch (action.type) {
    case 'CREAETE_TXN_NOTE_REQUEST':
      return {
        ...state,
        txnNoteLoading: true,
        txnNoteError: '',
        txnNoteRequest: action.payload.req,
      }

    case 'CREAETE_TXN_NOTE_SUCCESS':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: '',
        txnNoteSuccessResponse: action.payload.txnNotes,
        txnNoteChangeCode: 1,
        txnNote: action.payload.txnNote,
        txnNoteTotalCount: action.payload.totalCount,
      }

    case 'CREAETE_TXN_NOTE_ERROR':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: action.payload.error,
      }

    case 'EDIT_TXN_NOTE_REQUEST':
      return {
        ...state,
        txnNoteLoading: true,
        txnNoteError: '',
        txnNoteRequest: action.payload.req,
      }

    case 'EDIT_TXN_NOTE_SUCCESS':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: '',
        txnNoteSuccessResponse: action.payload.txnNotes,
        txnNoteChangeCode: 2,
        txnNote: action.payload.txnNote,
      }

    case 'EDIT_TXN_NOTE_ERROR':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: action.payload.error,
      }

    case 'DELETE_TXN_NOTE_REQUEST':
      return {
        ...state,
        txnNoteLoading: true,
        txnNoteError: '',
        txnNoteRequest: action.payload.req,
      }

    case 'DELETE_TXN_NOTE_SUCCESS':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: '',
        txnNoteSuccessResponse: action.payload.txnNotes,
        txnNoteChangeCode: 3,
        txnNote: action.payload.txnNote,
        txnNoteTotalCount: action.payload.totalCount,
      }

    case 'DELETE_TXN_NOTE_ERROR':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: action.payload.error,
      }

    case 'LIST_ALL_TXN_NOTE_REQUEST':
      return {
        ...state,
        txnNoteLoading: true,
        txnNoteError: '',
        txnNoteRequest: action.payload.req,
      }

    case 'LIST_ALL_TXN_NOTE_SUCCESS':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: '',
        txnNoteSuccessResponse: action.payload.txnNotes,
        txnNote: action.payload.txnNote,
        txnNoteTotalCount: action.payload.totalCount,
      }

    case 'LIST_ALL_TXN_NOTE_ERROR':
      return {
        ...state,
        txnNoteLoading: false,
        txnNoteError: action.payload.error,
      }

    case 'CREAETE_ADDRESS_NOTE_REQUEST':
      return {
        ...state,
        addressNoteLoading: true,
        addressNoteError: '',
        addressNoteRequest: action.payload.req,
        addressNoteMsg: '',
      }

    case 'CREAETE_ADDRESS_NOTE_SUCCESS':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: '',
        addressNoteSuccessResponse: action.payload.addressNotes,
        addressNote: action.payload.addressNote,
        addressNoteTotalCount: action.payload.totalCount,
        addressNoteMsg: action.payload.msg,
      }

    case 'CREAETE_ADDRESS_NOTE_ERROR':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: action.payload.error,
      }

    case 'EDIT_ADDRESS_NOTE_REQUEST':
      return {
        ...state,
        addressNoteLoading: true,
        addressNoteError: '',
        addressNoteRequest: action.payload.req,
        addressNoteMsg: '',
      }

    case 'EDIT_ADDRESS_NOTE_SUCCESS':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: '',
        addressNoteSuccessResponse: action.payload.addressNotes,
        addressNote: action.payload.addressNote,
        addressNoteMsg: action.payload.msg,
      }

    case 'EDIT_ADDRESS_NOTE_ERROR':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: action.payload.error,
      }

    case 'DELETE_ADDRESS_NOTE_REQUEST':
      return {
        ...state,
        addressNoteLoading: true,
        addressNoteError: '',
        addressNoteRequest: action.payload.req,
        addressNoteMsg: '',
      }

    case 'DELETE_ADDRESS_NOTE_SUCCESS':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: '',
        addressNoteSuccessResponse: action.payload.addressNotes,
        addressNote: action.payload.addressNote,
        addressNoteTotalCount: action.payload.totalCount,
        addressNoteMsg: action.payload.msg,
      }

    case 'DELETE_ADDRESS_NOTE_ERROR':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: action.payload.error,
      }

    case 'LIST_ALL_ADDRESS_NOTE_REQUEST':
      return {
        ...state,
        addressNoteLoading: true,
        addressNoteError: '',
        addressNoteRequest: action.payload.req,
        addressNoteTotalCount: 0,
        addressNoteMsg: '',
      }

    case 'LIST_ALL_ADDRESS_NOTE_SUCCESS':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: '',
        addressNoteSuccessResponse: action.payload.addressNotes,
        addressNote: action.payload.addressNote,
        addressNoteTotalCount: action.payload.totalCount,
      }

    case 'LIST_ALL_ADDRESS_NOTE_ERROR':
      return {
        ...state,
        addressNoteLoading: false,
        addressNoteError: action.payload.error,
      }

    // api key reducing

    case 'CREAETE_API_KEY_REQUEST':
      return {
        ...state,
        apiKeyLoading: true,
        apiKeyError: '',
        apiKeyRequest: action.payload.req,
      }

    case 'CREAETE_API_KEY_SUCCESS':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: '',
        apiKeySuccessResponse: action.payload.apiKeys,
        apiKeyTotalCount: action.payload.totalCount,
      }

    case 'CREAETE_API_KEY_ERROR':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: action.payload.error,
      }

    case 'EDIT_API_KEY_REQUEST':
      return {
        ...state,
        apiKeyLoading: true,
        apiKeyError: '',
        apiKeyRequest: action.payload.req,
      }

    case 'EDIT_API_KEY_SUCCESS':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: '',
        apiKeySuccessResponse: action.payload.apiKeys,
      }

    case 'EDIT_API_KEY_ERROR':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: action.payload.error,
      }

    case 'DELETE_API_KEY_REQUEST':
      return {
        ...state,
        apiKeyLoading: true,
        apiKeyError: '',
      }

    case 'DELETE_API_KEY_SUCCESS':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: '',
        apiKeySuccessResponse: action.payload.apiKeys,
        apiKeyTotalCount: action.payload.totalCount,
      }

    case 'DELETE_API_KEY_ERROR':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: action.payload.error,
      }

    case 'LIST_ALL_API_KEY_REQUEST':
      return {
        ...state,
        apiKeyLoading: true,
        apiKeyError: '',
        apiKeyRequest: action.payload.req,
        apiKeyTotalCount: 0,
      }

    case 'LIST_ALL_API_KEY_SUCCESS':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: '',
        apiKeySuccessResponse: action.payload.apiKeys,
        apiKeyTotalCount: action.payload.totalCount,
      }

    case 'LIST_ALL_API_KEY_ERROR':
      return {
        ...state,
        apiKeyLoading: false,
        apiKeyError: action.payload.error,
      }

    // watch address reducing
    case 'CREAETE_WATCH_ADDRESS_REQUEST':
      return {
        ...state,
        watchAddressLoading: true,
        watchAddressError: '',
        watchAddressSuccessResponse: [],
      }

    case 'CREAETE_WATCH_ADDRESS_SUCCESS':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: '',
        watchAddressSuccessResponse: action.payload.addressWatchLists,
      }

    case 'CREAETE_WATCH_ADDRESS_ERROR':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: action.payload.error,
      }

    case 'EDIT_WATCH_ADDRESS_REQUEST':
      return {
        ...state,
        watchAddressLoading: true,
        watchAddressError: '',
        watchAddress: {},
        watchAddressMsg: '',
      }

    case 'EDIT_WATCH_ADDRESS_SUCCESS':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: '',
        watchAddressSuccessResponse: action.payload.addressWatchLists,
        watchAddress: action.payload.addressWatchList,
        watchAddressMsg: action.payload.msg,
      }

    case 'EDIT_WATCH_ADDRESS_ERROR':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: action.payload.error,
      }

    case 'DELETE_WATCH_ADDRESS_REQUEST':
      return {
        ...state,
        watchAddressLoading: true,
        watchAddressError: '',
        watchAddressSuccessResponse: [],
        watchAddressMsg: '',
      }

    case 'DELETE_WATCH_ADDRESS_SUCCESS':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: '',
        watchAddressSuccessResponse: action.payload.addressWatchLists,
        watchAddress: action.payload.addressWatchList,
        watchAddressMsg: action.payload.msg,
      }

    case 'DELETE_WATCH_ADDRESS_ERROR':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: action.payload.error,
      }

    case 'LIST_ALL_WATCH_ADDRESS_REQUEST':
      return {
        ...state,
        watchAddressLoading: true,
        watchAddressError: '',
        watchAddressMsg: '',
        watchAddress: {},
        watchAddressSuccessResponse: action.payload.addressWatchLists,
        watchAddressTotalCount: 0,
      }

    case 'LIST_ALL_WATCH_ADDRESS_SUCCESS':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: '',
        watchAddressSuccessResponse: action.payload.addressWatchLists,
        watchAddressTotalCount: action.payload.totalCount,
        watchAddress: action.payload.addressWatchList,
      }

    case 'LIST_ALL_WATCH_ADDRESS_ERROR':
      return {
        ...state,
        watchAddressLoading: false,
        watchAddressError: action.payload.error,
      }

    // ignore token reducing
    case 'CREAETE_IGNORE_TOKEN_REQUEST':
      return {
        ...state,
        ignoreTokenLoading: true,
        ignoreTokenError: '',
        ignoreTokenRequest: action.payload.req,
      }

    case 'CREAETE_IGNORE_TOKEN_SUCCESS':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: '',
        ignoreTokenChangeCode: 1,
        ignoreTokenSuccessResponse: action.payload.tokenNotes,
      }

    case 'CREAETE_IGNORE_TOKEN_ERROR':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: action.payload.error,
      }

    case 'EDIT_IGNORE_TOKEN_REQUEST':
      return {
        ...state,
        ignoreTokenLoading: true,
        ignoreTokenError: '',
        ignoreTokenRequest: action.payload.req,
      }

    case 'EDIT_IGNORE_TOKEN_SUCCESS':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: '',
        ignoreTokenChangeCode: 2,
        ignoreTokenSuccessResponse: action.payload.tokenNotes,
      }

    case 'EDIT_IGNORE_TOKEN_ERROR':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: action.payload.error,
      }

    case 'DELETE_IGNORE_TOKEN_REQUEST':
      return {
        ...state,
        ignoreTokenLoading: true,
        ignoreTokenError: '',
        ignoreTokenRequest: action.payload.req,
      }

    case 'DELETE_IGNORE_TOKEN_SUCCESS':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: '',
        ignoreTokenChangeCode: 3,
        ignoreTokenSuccessResponse: action.payload.tokenNotes,
      }

    case 'DELETE_IGNORE_TOKEN_ERROR':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: action.payload.error,
      }

    case 'LIST_ALL_IGNORE_TOKEN_REQUEST':
      return {
        ...state,
        ignoreTokenLoading: true,
        ignoreTokenError: '',
        ignoreTokenRequest: action.payload.req,
        ignoreTokenTotalCount: 0,
      }

    case 'LIST_ALL_IGNORE_TOKEN_SUCCESS':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: '',
        ignoreTokenSuccessResponse: action.payload.tokenNotes,
        ignoreTokenTotalCount: action.payload.totalCount,
      }

    case 'LIST_ALL_IGNORE_TOKEN_ERROR':
      return {
        ...state,
        ignoreTokenLoading: false,
        ignoreTokenError: action.payload.error,
      }

    // custom abi reducing
    case 'CREAETE_CUSTOM_ABI_REQUEST':
      return {
        ...state,
        customAbiLoading: true,
        customAbiError: '',
        customAbiRequest: action.payload.req,
      }

    case 'CREAETE_CUSTOM_ABI_SUCCESS':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: '',
        customAbiChangeCode: 1,
        customAbiSuccessResponse: action.payload.customABI,
      }

    case 'CREAETE_CUSTOM_ABI_ERROR':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: action.payload.error,
      }

    case 'EDIT_CUSTOM_ABI_REQUEST':
      return {
        ...state,
        customAbiLoading: true,
        customAbiError: '',
        customAbiRequest: action.payload.req,
      }

    case 'EDIT_CUSTOM_ABI_SUCCESS':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: '',
        customAbiChangeCode: 2,
        customAbiSuccessResponse: action.payload.customABI,
      }

    case 'EDIT_CUSTOM_ABI_ERROR':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: action.payload.error,
      }

    case 'DELETE_CUSTOM_ABI_REQUEST':
      return {
        ...state,
        customAbiLoading: true,
        customAbiError: '',
        customAbiRequest: action.payload.req,
      }

    case 'DELETE_CUSTOM_ABI_SUCCESS':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: '',
        customAbiChangeCode: 3,
        customAbiSuccessResponse: action.payload.customABI,
      }

    case 'DELETE_CUSTOM_ABI_ERROR':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: action.payload.error,
      }

    case 'LIST_ALL_CUSTOM_ABI_REQUEST':
      return {
        ...state,
        customAbiLoading: true,
        customAbiError: '',
        customAbiRequest: action.payload.req,
        customAbiTotalCount: 0,
      }

    case 'LIST_ALL_CUSTOM_ABI_SUCCESS':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: '',
        customAbiSuccessResponse: action.payload.customABI,
        customAbiTotalCount: action.payload.totalCount,
      }

    case 'LIST_ALL_CUSTOM_ABI_ERROR':
      return {
        ...state,
        customAbiLoading: false,
        customAbiError: action.payload.error,
      }

    case 'GET_USER_OVERVIEW_REQUEST':
      return {
        ...state,
        loadingOverview: true,
        overviewError: '',
      }

    case 'GET_USER_OVERVIEW_SUCCESS':
      return {
        ...state,
        loadingOverview: false,
        overviewError: '',
        name: action.payload.name,
        email: action.payload.email,
        addressWatchListAlertCnt: action.payload.addressWatchListAlertCnt,
        txnNotesCnt: action.payload.txnNotesCnt,
        addressTagsCnt: action.payload.addressTagsCnt,
        emailLimitCnt: action.payload.emailLimitCnt,
        totalBalance: action.payload.totalBalance,
        lastLogin: action.payload.lastLogin,
      }

    case 'GET_USER_OVERVIEW_ERROR':
      return {
        ...state,
        overviewError: action.payload.error,
      }

    case 'GET_USER_PROFILE_REQUEST':
      return {
        ...state,
        loadingProfile: true,
        profileError: '',
      }

    case 'GET_USER_PROFILE_SUCCESS':
      return {
        ...state,
        loadingProfile: false,
        name: action.payload.name,
        email: action.payload.email,
      }

    case 'GET_USER_PROFILE_ERROR':
      return {
        ...state,
        profileError: action.payload.error,
      }

    case 'EDIT_USER_PROFILE_REQUEST':
      return {
        ...state,
        loadingEditProfile: true,
        editProfileError: '',
        editProfileMsg: '',
      }

    case 'EDIT_USER_PROFILE_SUCCESS':
      return {
        ...state,
        loadingEditProfile: false,
        editProfileMsg: action.payload.message,
      }

    case 'EDIT_USER_PROFILE_ERROR':
      return {
        ...state,
        editProfileError: action.payload.error,
      }

    default:
      return state
  }
}

export default userReducer
