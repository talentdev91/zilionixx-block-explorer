import { createBrowserHistory } from 'history'
import axios from 'axios'
import {
    RequestContactusGeneralInquirySuccess,
    RequestContactusGeneralInquiryError,
    RequestContactusSupportError,
    RequestContactusSupportSuccess,
    RequestContactusNametaggingSuccess,
    RequestContactusNametaggingError
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'
export const browserHistory = createBrowserHistory()

export const requestGeneralInquiry = (name: string, email: string, message: string) => async (dispatch: Dispatch<RequestContactusGeneralInquirySuccess | RequestContactusGeneralInquiryError>) => {
    const req = {
        type: 1,
        data: {
            name: name,
            email: email,
            message: message,
        },
    }
    try {
        const response = await axios.post<any>(`${BackendURL}/feedback/save`, req)
        const { success } = response.data
        if (success === true) {
            dispatch({
                type: 'REQUEST_CONTACTUS_GENERAL_INQUIRY_SUCCESS',
                payload: {
                    status: success,
                },
            } as RequestContactusGeneralInquirySuccess)
        } else {
            dispatch({
                type: 'REQUEST_CONTACTUS_GENERAL_INQUIRY_ERROR',
                payload: {
                    status: success,
                },
            } as RequestContactusGeneralInquiryError)
        }
    } catch (error: any) {
        dispatch({
            type: 'REQUEST_CONTACTUS_GENERAL_INQUIRY_ERROR',
            payload: {
                status: false,
            },
        } as RequestContactusGeneralInquiryError)
    }
}
export const requestSupport = (name: string, email: string, message: string) => async (dispatch: Dispatch<RequestContactusSupportSuccess | RequestContactusSupportError>) => {
    const req = {
        type: 2,
        data: {
            name: name,
            email: email,
            message: message,
        },
    }
    try {
        const response = await axios.post<any>(`${BackendURL}/feedback/save`, req)
        const { success } = response.data
        if (success === true) {
            dispatch({
                type: 'REQUEST_CONTACTUS_SUPPORT_SUCCESS',
                payload: {
                    status: success,
                },
            } as RequestContactusSupportSuccess)
        } else {
            dispatch({
                type: 'REQUEST_CONTACTUS_SUPPORT_ERROR',
                payload: {
                    status: success,
                },
            } as RequestContactusSupportError)
        }
    } catch (error: any) {
        dispatch({
            type: 'REQUEST_CONTACTUS_SUPPORT_ERROR',
            payload: {
                status: false,
            },
        } as RequestContactusSupportError)
    }
}

export const requestNametagging = (type: number, name: string, email: string, comName: string, comSite: string, selectValue: string, link: string, comment: string, nameTag: object) => async (dispatch: Dispatch<RequestContactusNametaggingSuccess | RequestContactusNametaggingError>) => {
    try {
        const req = {
            type: type,
            data: {
                name: name,
                email: email,
                comName: comName,
                comSite: comSite,
                selectValue: selectValue,
                link: link,
                comment: comment,
                nameTag: nameTag,
                isApprove: false,
            }
        }
        const response = await axios.post<any>(`${BackendURL}/feedback/save`, req)
        const { success } = response.data
        if (success === true) {
            dispatch({
                type: 'REQUEST_CONTACTUS_NAMETAGGING_SUCCESS',
                payload: {
                    status: success,
                },
            } as RequestContactusNametaggingSuccess)
        } else {
            dispatch({
                type: 'REQUEST_CONTACTUS_NAMETAGGING_ERROR',
                payload: {
                    status: success,
                },
            } as RequestContactusNametaggingError)
        }
    } catch (error: any) {
        dispatch({
            type: 'REQUEST_CONTACTUS_NAMETAGGING_ERROR',
            payload: {
                status: false,
            },
        } as RequestContactusNametaggingError)
    }
}