import { createBrowserHistory } from 'history'
import axiosInstance from '../../axios.config'
import { Signup, AuthError, SetCurrentUser, GetLoginSuccess, GetLoginReqest, GetRegistRequest } from './action.types'
import { Dispatch } from 'redux'
import jwt_decode from 'jwt-decode'
import { BackendURL } from '../../config/config'
import setAuthToken from '../../utils/setAuthToken'
import axios from 'axios'
export const browserHistory = createBrowserHistory()

export const registerUser = (data: any) => async (dispatch: Dispatch<Signup | AuthError | GetRegistRequest>) => {
  try {
    dispatch({
      type: 'GET_REGIST_REQUEST',
      payload: {
        loading: true,
        status: false,
        error: '',
      },
    } as GetRegistRequest)
    const response = await axios.post<any>(`${BackendURL}/auth/register`, data)
    const { success } = response.data
    if (success) {
      dispatch({
        type: 'REGISTER_USER',
        payload: {
          status: success,
        },
      } as Signup)
    } else {
      const { error } = response.data
      dispatch({
        type: 'AUTH_ERROR',
        payload: {
          error: error,
        },
      } as AuthError)
    }
  } catch (error: any) {
    dispatch({
      type: 'AUTH_ERROR',
      payload: {
        error: error,
      },
    } as AuthError)
  }
}
export const loginUser =
  (data: any) => async (dispatch: Dispatch<GetLoginReqest | GetLoginSuccess | SetCurrentUser | AuthError>) => {
    try {
      dispatch({
        type: 'GET_LOGIN_REQUEST',
        payload: {
          loading: true,
          isAuthenticated: false,
          confirm: 0,
          user: {},
          error: '',
        },
      } as GetLoginReqest)
      const response = await axiosInstance.post<any>(`${BackendURL}/auth/login`, data)
      const { success} = response.data

      if (success === true) {
        const {  token, confirmed } = response.data
        localStorage.setItem('jwtToken', token)
        const decoded = jwt_decode(token)
        // browserHistory.push(`/myaccount`)
        dispatch({
          type: 'GET_LOGIN_SUCCESS',
          payload: {
            loading: false,
            user: decoded,
            confirm: confirmed,
            isAuthenticated: true,
          },
        } as GetLoginSuccess)

        dispatch({
          type: 'SET_CURRENT_USER',
          payload: {
            user: decoded,
            confirm: confirmed,
          },
        } as SetCurrentUser)
      } else {
        dispatch({
          type: 'AUTH_ERROR',
          payload: {
            error: 'error',
            isAuthenticated: false,
          },
        } as AuthError)
      }

    } catch (error: any) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: {
          error: 'error',
        },
      } as AuthError)
    }
  }

export const logoutUser = () => async (dispatch: Dispatch<SetCurrentUser>) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to {} which will set isAuthenticated to false
  dispatch({
    type: 'SET_CURRENT_USER',
    payload: {}
  } as SetCurrentUser)
}
