import { AppActionTypes } from '../actions/action.types'

const initialState: ValidatorState = {
  validatorsTopLeaderboard: [],
  validatorsTopLeaderboardCnt: 0,
  error: {},
  loading: false,
}

export interface ValidatorState {
  validatorsTopLeaderboard: any
  validatorsTopLeaderboardCnt: number
  loading: boolean
  error: any
}

const validatorReducer = (state: ValidatorState = initialState, action: AppActionTypes): ValidatorState => {
  switch (action.type) {
    case 'GET_VALIDATORS_TOP_LEADERBOARD_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_VALIDATORS_TOP_LEADERBOARD':
      return {
        ...state,
        validatorsTopLeaderboard: action.payload.validatorsTopLeaderboard,
        validatorsTopLeaderboardCnt: action.payload.validatorsTopLeaderboardCnt,
        loading: false,
      }

    case 'VALIDATOR_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default validatorReducer
