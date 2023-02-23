import axiosInstance from '../../axios.config'
import { GetValidatorsTopLeaderboardRequest, GetValidatorsTopLeaderboard, ValidatorError } from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getValidatorsTopLeaderboard =
  (page: any, rowsPerPage: any, sortStatus: any) =>
  async (dispatch: Dispatch<GetValidatorsTopLeaderboardRequest | GetValidatorsTopLeaderboard | ValidatorError>) => {
    try {
      dispatch({
        type: 'GET_VALIDATORS_TOP_LEADERBOARD_REQUEST',
      } as GetValidatorsTopLeaderboardRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/validator`, {
        params: {
          page: page,
          rowsPerPage: rowsPerPage,
          sortStatus: sortStatus,
        },
      })

      const { validatorsTopLeaderboard, validatorsTopLeaderboardCnt } = response.data

      dispatch({
        type: 'GET_VALIDATORS_TOP_LEADERBOARD',
        payload: {
          validatorsTopLeaderboard: validatorsTopLeaderboard,
          validatorsTopLeaderboardCnt: validatorsTopLeaderboardCnt,
        },
      } as GetValidatorsTopLeaderboard)
    } catch (error: any) {
      dispatch({
        type: 'VALIDATOR_ERROR',
        payload: {
          error: 'error',
        },
      } as ValidatorError)
    }
  }
