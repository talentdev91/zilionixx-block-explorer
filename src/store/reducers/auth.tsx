import { AppActionTypes } from '../actions/action.types'
import isEmpty from '../validation/is-empty'

const initialState: AuthState = {
  loadingLogin: false,
  isAuthenticated: false,
  confirm: 0,
  user: {},
  status: false,
  error: '',
}

export interface AuthState {
  loadingLogin: boolean
  isAuthenticated: boolean
  confirm: number
  status: any
  user: any
  error: any
}

const authReducer = (state: AuthState = initialState, action: AppActionTypes): AuthState => {
  switch (action.type) {
    case 'GET_REGIST_REQUEST':
      return {
        ...state,
        status: false,
        error: '',
      }
    case 'REGISTER_USER':
      return {
        ...state,
        status: action.payload.status,
      }
    case 'GET_LOGIN_REQUEST':
      return {
        ...state,
        loadingLogin: true,
        isAuthenticated: false,
        confirm: 0,
        user: {},
        status: false,
        error: '',
      }
    case 'SET_CURRENT_USER':
      return {
        ...state,
        loadingLogin: true,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload.user,
        confirm: 0,
      }

    case 'AUTH_ERROR':
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default authReducer
