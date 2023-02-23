import { AppActionTypes } from '../actions/action.types'

const initialState: TokenState = {
  searchResult: [],
  error: {},
  loading: false,
}

export interface TokenState {
  searchResult: any
  loading: boolean
  error: any
}

const tokenReducer = (state: TokenState = initialState, action: AppActionTypes): TokenState => {
  switch (action.type) {
    case 'GET_SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_SEARCH':
      return {
        ...state,
        searchResult: action.payload.searchResult,
        loading: false,
      }

    case 'GET_SEARCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default tokenReducer
