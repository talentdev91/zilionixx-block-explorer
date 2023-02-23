import axiosInstance from '../../axios.config'
import { EpochError, GetEpochs, GetEpochDetail, GetEpochsRequest, GetEpochDetailsRequest } from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getEpochs =
  (page: any, rowsPerPage: any, sortStatus: any) =>
  async (dispatch: Dispatch<GetEpochsRequest | GetEpochs | EpochError>) => {
    try {
      dispatch({
        type: 'GET_EPOCHS_REQUEST',
      } as GetEpochsRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/epochs`, {
        params: {
          page: page,
          rowsPerPage: rowsPerPage,
          sortStatus: sortStatus,
        },
      })

      const { epochs, totalEpochCnt } = response.data

      dispatch({
        type: 'GET_EPOCHS',
        payload: {
          epochs: epochs,
          totalEpochCnt: totalEpochCnt,
        },
      } as GetEpochs)
    } catch (error: any) {
      dispatch({
        type: 'EPOCH_ERROR',
        payload: {
          error: 'error',
        },
      } as EpochError)
    }
  }

export const getEpochDetails =
  (epochNumber: any) => async (dispatch: Dispatch<GetEpochDetailsRequest | GetEpochDetail | EpochError>) => {
    try {
      dispatch({
        type: 'GET_EPOCHS_DETAILS_REQUEST',
      } as GetEpochDetailsRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/epoch/${epochNumber}`)
      const { epoch, lastEpochNumber } = response.data

      dispatch({
        type: 'GET_EPOCH_DETAIL',
        payload: {
          epoch: epoch,
          lastEpochNumber: lastEpochNumber,
        },
      } as GetEpochDetail)
    } catch (error: any) {
      dispatch({
        type: 'EPOCH_ERROR',
        payload: {
          error: 'error',
        },
      } as EpochError)
    }
  }
