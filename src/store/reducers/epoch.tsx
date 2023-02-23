import { AppActionTypes } from '../actions/action.types'

const initialState: TokenState = {
  epochs: [],
  epoch: [],
  totalEpochCnt: 0,
  lastEpochNumber: 0,
  error: {},
  loading: true,
}

export interface TokenState {
  epochs: any
  epoch: any
  loading: boolean
  error: any
  totalEpochCnt: any
  lastEpochNumber: any
}

const tokenReducer = (state: TokenState = initialState, action: AppActionTypes): TokenState => {
  switch (action.type) {
    case 'GET_EPOCHS_REQUEST':
    case 'GET_EPOCHS_DETAILS_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_EPOCH_DETAIL':
      return {
        ...state,
        epoch: action.payload.epoch,
        lastEpochNumber: action.payload.lastEpochNumber,
        loading: false,
      }

    case 'GET_EPOCHS':
      return {
        ...state,
        epochs: action.payload.epochs,
        totalEpochCnt: action.payload.totalEpochCnt,
        loading: false,
      }

    case 'EPOCH_ERROR':
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
