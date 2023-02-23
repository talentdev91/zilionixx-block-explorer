import { createBrowserHistory } from 'history'

import axiosInstance from '../../axios.config'
import { GetSearch, GetSearchRequest, GetSearchError } from './action.types'
import { Dispatch } from 'redux'

import { BackendURL } from '../../config/config'
export const browserHistory = createBrowserHistory()

export const getSearchreResults =
  (searchIndex: any) => async (dispatch: Dispatch<GetSearchRequest | GetSearch | GetSearchError>) => {
    try {
      const response = await axiosInstance.get<any>(`${BackendURL}/search`, {
        params: {
          searchIndex: searchIndex,
        },
      })

      const { searchResult } = response.data

      if (searchResult) {
        browserHistory.push(`/${searchResult.type}/${searchResult.searchResult}`)
        window.location.reload()
      } else {
        browserHistory.push('/search')
        window.location.reload()
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_SEARCH_ERROR',
        payload: {
          error: 'error',
        },
      } as GetSearchError)
    }
  }
