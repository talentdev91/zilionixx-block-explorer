import { AppActionTypes } from '../actions/action.types'

const initialState: ContactusState = {
  status: false,
}

export interface ContactusState {
  status: any
}

const contactusReducer = (state: ContactusState = initialState, action: AppActionTypes): ContactusState => {
  switch (action.type) {
    case 'REQUEST_CONTACTUS_GENERAL_INQUIRY_SUCCESS':
      return {
        status: action.payload.status,
      }
    case 'REQUEST_CONTACTUS_GENERAL_INQUIRY_ERROR':
      return {
        status: action.payload.status,
      }
    case 'REQUEST_CONTACTUS_SUPPORT_SUCCESS':
      return {
        status: action.payload.status,
      }
    case 'REQUEST_CONTACTUS_SUPPORT_ERROR':
      return {
        status: action.payload.status,
      }
    case 'REQUEST_CONTACTUS_NAMETAGGING_SUCCESS':
      return {
        status: action.payload.status,
      }
    case 'REQUEST_CONTACTUS_NAMETAGGING_ERROR':
      return {
        status: action.payload.status,
      }
    default:
      return state
  }
}

export default contactusReducer
