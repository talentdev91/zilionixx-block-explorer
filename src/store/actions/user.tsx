import axios from 'axios'
import {
  CreateTxnNoteRequest,
  CreateTxnNoteSuccess,
  CreateTxnNoteError,
  ListAllTxnNoteRequest,
  ListAllTxnNoteSuccess,
  ListAllTxnNoteError,
  EditTxnNoteRequest,
  EditTxnNoteSuccess,
  EditTxnNoteError,
  DeleteTxnNoteRequest,
  DeleteTxnNoteSuccess,
  DeleteTxnNoteError,
  CreateAddressNoteRequest,
  CreateAddressNoteSuccess,
  CreateAddressNoteError,
  ListAllAddressNoteRequest,
  ListAllAddressNoteSuccess,
  ListAllAddressNoteError,
  EditAddressNoteRequest,
  EditAddressNoteSuccess,
  EditAddressNoteError,
  DeleteAddressNoteRequest,
  DeleteAddressNoteSuccess,
  DeleteAddressNoteError,
  CreateWatchAddressRequest,
  CreateWatchAddressSuccess,
  CreateWatchAddressError,
  EditWatchAddressRequest,
  EditWatchAddressSuccess,
  EditWatchAddressError,
  DeleteWatchAddressRequest,
  DeleteWatchAddressSuccess,
  DeleteWatchAddressError,
  ListAllWatchAddressRequest,
  ListAllWatchAddressSuccess,
  ListAllWatchAddressError,
  CreateIgnoreTokenRequest,
  CreateIgnoreTokenSuccess,
  CreateIgnoreTokenError,
  EditIgnoreTokenRequest,
  EditIgnoreTokenSuccess,
  EditIgnoreTokenError,
  DeleteIgnoreTokenRequest,
  DeleteIgnoreTokenSuccess,
  DeleteIgnoreTokenError,
  ListAllIgnoreTokenRequest,
  ListAllIgnoreTokenSuccess,
  ListAllIgnoreTokenError,
  CreateCustomAbiRequest,
  CreateCustomAbiSuccess,
  CreateCustomAbiError,
  EditCustomAbiRequest,
  EditCustomAbiSuccess,
  EditCustomAbiError,
  DeleteCustomAbiRequest,
  DeleteCustomAbiSuccess,
  DeleteCustomAbiError,
  ListAllCustomAbiRequest,
  ListAllCustomAbiSuccess,
  ListAllCustomAbiError,
  GetUserOverviewRequest,
  GetUserOverviewSuccess,
  GetUserOverviewError,
  GetUserProfileRequest,
  GetUserProfileSuccess,
  GetUserProfileError,
  EditUserProfileRequest,
  EditUserProfileSuccess,
  EditUserProfileError,
  CreateApiKeyRequest,
  CreateApiKeySuccess,
  CreateApiKeyError,
  EditApiKeyRequest,
  EditApiKeySuccess,
  EditApiKeyError,
  DeleteApiKeyRequest,
  DeleteApiKeySuccess,
  DeleteApiKeyError,
  ListAllApiKeyRequest,
  ListAllApiKeySuccess,
  ListAllApiKeyError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

const getHeader = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('jwtToken')}`,
    },
  }
}

export const createTxnNote =
  (username: string, txnHash: string, txnNote: string) =>
  async (dispatch: Dispatch<CreateTxnNoteRequest | CreateTxnNoteSuccess | CreateTxnNoteError>) => {
    const req = {
      name: username,
      txnHash: txnHash,
      txnNote: txnNote,
    }

    try {
      dispatch({
        type: 'CREAETE_TXN_NOTE_REQUEST',
        payload: { req: req },
      } as CreateTxnNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/txnNote/create`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { txnNotes, txnNote, totalCount } = response.data
        dispatch({
          type: 'CREAETE_TXN_NOTE_SUCCESS',
          payload: {
            txnNotes: txnNotes,
            totalCount: totalCount,
            txnNote: txnNote,
          },
        } as CreateTxnNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_TXN_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as CreateTxnNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_TXN_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateTxnNoteError)
    }
  }

export const listAllTxnNotes =
  (username: string, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<ListAllTxnNoteRequest | ListAllTxnNoteSuccess | ListAllTxnNoteError>) => {
    const req = {
      name: username,
      pageNum: page,
      pageSize: rowsPerPage,
    }

    try {
      dispatch({
        type: 'LIST_ALL_TXN_NOTE_REQUEST',
        payload: { req: req },
      } as ListAllTxnNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/txnNote/list`, req, getHeader())

      const { success, totalCount } = response.data
      if (success === true) {
        const { txnNotes } = response.data
        dispatch({
          type: 'LIST_ALL_TXN_NOTE_SUCCESS',
          payload: {
            txnNotes: txnNotes,
            totalCount: totalCount,
          },
        } as ListAllTxnNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_TXN_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as ListAllTxnNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_TXN_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllTxnNoteError)
    }
  }
export const getOneTxnNote =
  (username: string, txnHash: string) =>
  async (dispatch: Dispatch<ListAllTxnNoteRequest | ListAllTxnNoteSuccess | ListAllTxnNoteError>) => {
    const req = {
      name: username,
      txnHash: txnHash,
    }

    try {
      dispatch({
        type: 'LIST_ALL_TXN_NOTE_REQUEST',
        payload: { req: req },
      } as ListAllTxnNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/txnNote/getOneTxnNote`, req, {
        headers: {
          Authorization: `${localStorage.getItem('jwtToken')}`,
        },
      })

      const { success } = response.data
      if (success === true) {
        const { txnNotes, txnNote } = response.data
        dispatch({
          type: 'LIST_ALL_TXN_NOTE_SUCCESS',
          payload: {
            txnNotes: txnNotes,
            txnNote: txnNote,
          },
        } as ListAllTxnNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_TXN_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as ListAllTxnNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_TXN_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllTxnNoteError)
    }
  }
export const editTxnNote =
  (username: string, txnHash: string, txnNote: string) =>
  async (dispatch: Dispatch<EditTxnNoteRequest | EditTxnNoteSuccess | EditTxnNoteError>) => {
    const req = {
      name: username,
      txnHash: txnHash,
      txnNote: txnNote,
    }

    try {
      dispatch({
        type: 'EDIT_TXN_NOTE_REQUEST',
        payload: { req: req },
      } as EditTxnNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/txnNote/edit`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { txnNotes, txnNote } = response.data
        dispatch({
          type: 'EDIT_TXN_NOTE_SUCCESS',
          payload: {
            txnNotes: txnNotes,
            txnNote: txnNote,
          },
        } as EditTxnNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_TXN_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as EditTxnNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_TXN_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as EditTxnNoteError)
    }
  }

export const deleteTxnNote =
  (username: string, txnHash: string) =>
  async (dispatch: Dispatch<DeleteTxnNoteRequest | DeleteTxnNoteSuccess | DeleteTxnNoteError>) => {
    const req = {
      name: username,
      txnHash: txnHash,
    }

    try {
      dispatch({
        type: 'DELETE_TXN_NOTE_REQUEST',
        payload: { req: req },
      } as DeleteTxnNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/txnNote/delete`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { txnNotes, txnNote, totalCount } = response.data
        dispatch({
          type: 'DELETE_TXN_NOTE_SUCCESS',
          payload: {
            txnNotes: txnNotes,
            txnNote: txnNote,
            totalCount: totalCount,
          },
        } as DeleteTxnNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_TXN_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as DeleteTxnNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_TXN_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteTxnNoteError)
    }
  }

// watch addres action goes here
export const createWatchAddress =
  (
    username: string,
    watchAddress: string,
    watchAddressNote: string,
    notifyOption: string,
    trackERC20Option: boolean,
    page: number,
  ) =>
  async (dispatch: Dispatch<CreateWatchAddressRequest | CreateWatchAddressSuccess | CreateWatchAddressError>) => {
    const req = {
      name: username,
      watchAddress: watchAddress,
      watchAddressNote: watchAddressNote,
      notifyOption: notifyOption,
      trackERC20Option: trackERC20Option,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'CREAETE_WATCH_ADDRESS_REQUEST',
        payload: { req: req },
      } as CreateWatchAddressRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressWatchList/create`, req, getHeader())

      const { success } = response.data
      if (success === true) {
        const { addressWatchLists } = response.data
        dispatch({
          type: 'CREAETE_WATCH_ADDRESS_SUCCESS',
          payload: {
            addressWatchLists: addressWatchLists,
          },
        } as CreateWatchAddressSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_WATCH_ADDRESS_ERROR',
          payload: {
            error: error,
          },
        } as CreateWatchAddressError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_WATCH_ADDRESS_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateWatchAddressError)
    }
  }

export const listAllWatchAddresss =
  (username: string, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<ListAllWatchAddressRequest | ListAllWatchAddressSuccess | ListAllWatchAddressError>) => {
    const req = {
      name: username,
      pageNum: page,
      pageSize: rowsPerPage,
    }

    try {
      dispatch({
        type: 'LIST_ALL_WATCH_ADDRESS_REQUEST',
        payload: { req: req },
      } as ListAllWatchAddressRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressWatchList/list`, req, {
        headers: {
          Authorization: `${localStorage.getItem('jwtToken')}`,
        },
      })

      const { success, totalCount } = response.data
      if (success === true) {
        const { addressWatchLists } = response.data
        dispatch({
          type: 'LIST_ALL_WATCH_ADDRESS_SUCCESS',
          payload: {
            addressWatchLists: addressWatchLists,
            totalCount: totalCount,
          },
        } as ListAllWatchAddressSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_WATCH_ADDRESS_ERROR',
          payload: {
            error: error,
          },
        } as ListAllWatchAddressError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_WATCH_ADDRESS_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllWatchAddressError)
    }
  }
export const getOneWatchAddress =
  (username: string, address: string) =>
  async (dispatch: Dispatch<ListAllWatchAddressRequest | ListAllWatchAddressSuccess | ListAllWatchAddressError>) => {
    const req = {
      name: username,
      watchAddress: address,
    }
    try {
      dispatch({
        type: 'LIST_ALL_WATCH_ADDRESS_REQUEST',
        payload: { req: req },
      } as ListAllWatchAddressRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressWatchList/getOneWatchAddress`, req, {
        headers: {
          Authorization: `${localStorage.getItem('jwtToken')}`,
        },
      })
      const { success } = response.data
      if (success === true) {
        const { addressWatchList } = response.data
        dispatch({
          type: 'LIST_ALL_WATCH_ADDRESS_SUCCESS',
          payload: {
            addressWatchList: addressWatchList,
          },
        } as ListAllWatchAddressSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_WATCH_ADDRESS_ERROR',
          payload: {
            error: error,
          },
        } as ListAllWatchAddressError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_WATCH_ADDRESS_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllWatchAddressError)
    }
  }

export const editWatchAddress =
  (username: string, watchAddress: string, watchAddressNote: string, notifyOption: number, trackERC20Option: boolean) =>
  async (dispatch: Dispatch<EditWatchAddressRequest | EditWatchAddressSuccess | EditWatchAddressError>) => {
    const req = {
      name: username,
      watchAddress: watchAddress,
      watchAddressNote: watchAddressNote,
      notifyOption: notifyOption,
      trackERC20Option: trackERC20Option,
    }

    try {
      dispatch({
        type: 'EDIT_WATCH_ADDRESS_REQUEST',
        payload: { req: req },
      } as EditWatchAddressRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressWatchList/edit`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { addressWatchList } = response.data
        dispatch({
          type: 'EDIT_WATCH_ADDRESS_SUCCESS',
          payload: {
            addressWatchList: addressWatchList,
            msg: 'edit',
          },
        } as EditWatchAddressSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_WATCH_ADDRESS_ERROR',
          payload: {
            error: error,
          },
        } as EditWatchAddressError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_WATCH_ADDRESS_ERROR',
        payload: {
          error: error.message,
        },
      } as EditWatchAddressError)
    }
  }

export const deleteWatchAddress =
  (username: string, watchAddress: string) =>
  async (dispatch: Dispatch<DeleteWatchAddressRequest | DeleteWatchAddressSuccess | DeleteWatchAddressError>) => {
    const req = {
      name: username,
      watchAddress: watchAddress,
    }

    try {
      dispatch({
        type: 'DELETE_WATCH_ADDRESS_REQUEST',
        payload: { req: req },
      } as DeleteWatchAddressRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressWatchList/delete`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { addressWatchList } = response.data
        dispatch({
          type: 'DELETE_WATCH_ADDRESS_SUCCESS',
          payload: {
            addressWatchList: addressWatchList,
            msg: 'delete',
          },
        } as DeleteWatchAddressSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_WATCH_ADDRESS_ERROR',
          payload: {
            error: error,
          },
        } as DeleteWatchAddressError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_WATCH_ADDRESS_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteWatchAddressError)
    }
  }

export const createIgnoreToken =
  (username: string, token: string, tokenNote: string, page: number) =>
  async (dispatch: Dispatch<CreateIgnoreTokenRequest | CreateIgnoreTokenSuccess | CreateIgnoreTokenError>) => {
    const req = {
      name: username,
      token: token,
      tokenNote: tokenNote,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'CREAETE_IGNORE_TOKEN_REQUEST',
        payload: { req: req },
      } as CreateIgnoreTokenRequest)

      const response = await axios.post<any>(`${BackendURL}/user/tokenIgnoreList/create`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { tokenNotes } = response.data
        dispatch({
          type: 'CREAETE_IGNORE_TOKEN_SUCCESS',
          payload: {
            tokenNotes: tokenNotes,
          },
        } as CreateIgnoreTokenSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_IGNORE_TOKEN_ERROR',
          payload: {
            error: error,
          },
        } as CreateIgnoreTokenError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_IGNORE_TOKEN_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateIgnoreTokenError)
    }
  }

export const listAllIgnoreTokens =
  (username: string, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<ListAllIgnoreTokenRequest | ListAllIgnoreTokenSuccess | ListAllIgnoreTokenError>) => {
    const req = {
      name: username,
      pageNum: page,
      pageSize: rowsPerPage,
    }

    try {
      dispatch({
        type: 'LIST_ALL_IGNORE_TOKEN_REQUEST',
        payload: { req: req },
      } as ListAllIgnoreTokenRequest)

      const response = await axios.post<any>(`${BackendURL}/user/tokenIgnoreList/list`, req, getHeader())

      const { success, totalCount } = response.data
      if (success === true) {
        const { tokenNotes } = response.data

        dispatch({
          type: 'LIST_ALL_IGNORE_TOKEN_SUCCESS',
          payload: {
            tokenNotes: tokenNotes,
            totalCount: totalCount,
          },
        } as ListAllIgnoreTokenSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_IGNORE_TOKEN_ERROR',
          payload: {
            error: error,
          },
        } as ListAllIgnoreTokenError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_IGNORE_TOKEN_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllIgnoreTokenError)
    }
  }

export const editIgnoreToken =
  (username: string, token: string, tokenNote: string, page: number) =>
  async (dispatch: Dispatch<EditIgnoreTokenRequest | EditIgnoreTokenSuccess | EditIgnoreTokenError>) => {
    const req = {
      name: username,
      token: token,
      tokenNote: tokenNote,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'EDIT_IGNORE_TOKEN_REQUEST',
        payload: { req: req },
      } as EditIgnoreTokenRequest)

      const response = await axios.post<any>(`${BackendURL}/user/tokenIgnoreList/edit`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { tokenNotes } = response.data
        dispatch({
          type: 'EDIT_IGNORE_TOKEN_SUCCESS',
          payload: {
            tokenNotes: tokenNotes,
          },
        } as EditIgnoreTokenSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_IGNORE_TOKEN_ERROR',
          payload: {
            error: error,
          },
        } as EditIgnoreTokenError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_IGNORE_TOKEN_ERROR',
        payload: {
          error: error.message,
        },
      } as EditIgnoreTokenError)
    }
  }

export const deleteIgnoreToken =
  (username: string, token: string, page: number) =>
  async (dispatch: Dispatch<DeleteIgnoreTokenRequest | DeleteIgnoreTokenSuccess | DeleteIgnoreTokenError>) => {
    const req = {
      name: username,
      token: token,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'DELETE_IGNORE_TOKEN_REQUEST',
        payload: { req: req },
      } as DeleteIgnoreTokenRequest)

      const response = await axios.post<any>(`${BackendURL}/user/tokenIgnoreList/delete`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { tokenNotes } = response.data
        dispatch({
          type: 'DELETE_IGNORE_TOKEN_SUCCESS',
          payload: {
            tokenNotes: tokenNotes,
          },
        } as DeleteIgnoreTokenSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_IGNORE_TOKEN_ERROR',
          payload: {
            error: error,
          },
        } as DeleteIgnoreTokenError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_IGNORE_TOKEN_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteIgnoreTokenError)
    }
  }

export const createCustomAbi =
  (username: string, contractName: string, contractAddress: string, abi: string, page: number) =>
  async (dispatch: Dispatch<CreateCustomAbiRequest | CreateCustomAbiSuccess | CreateCustomAbiError>) => {
    const req = {
      name: username,
      contractName: contractName,
      contractAddress: contractAddress,
      abi: abi,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'CREAETE_CUSTOM_ABI_REQUEST',
        payload: { req: req },
      } as CreateCustomAbiRequest)


      const response = await axios.post<any>(`${BackendURL}/user/customABIs/create`, req, getHeader())

      const { success } = response.data
      if (success === true) {
        const { customABIs } = response.data
        dispatch({
          type: 'CREAETE_CUSTOM_ABI_SUCCESS',
          payload: {
            customABI: customABIs,
          },
        } as CreateCustomAbiSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_CUSTOM_ABI_ERROR',
          payload: {
            error: error,
          },
        } as CreateCustomAbiError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_CUSTOM_ABI_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateCustomAbiError)
    }
  }

export const listAllCustomAbis =
  (username: string, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<ListAllCustomAbiRequest | ListAllCustomAbiSuccess | ListAllCustomAbiError>) => {
    const req = {
      name: username,
      pageNum: page,
      pageSize: rowsPerPage,
    }

    try {
      dispatch({
        type: 'LIST_ALL_CUSTOM_ABI_REQUEST',
        payload: { req: req },
      } as ListAllCustomAbiRequest)

      const response = await axios.post<any>(`${BackendURL}/user/customABIs/list`, req, getHeader())


      const { success, totalCount } = response.data
      if (success === true) {
        const { customABIs } = response.data
        dispatch({
          type: 'LIST_ALL_CUSTOM_ABI_SUCCESS',
          payload: {
            customABI: customABIs,
            totalCount: totalCount,
          },
        } as ListAllCustomAbiSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_CUSTOM_ABI_ERROR',
          payload: {
            error: error,
          },
        } as ListAllCustomAbiError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_CUSTOM_ABI_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllCustomAbiError)
    }
  }

export const editCustomAbi =
  (username: string, contractName: string, contractAddress: string, abi: string, page: number) =>
  async (dispatch: Dispatch<EditCustomAbiRequest | EditCustomAbiSuccess | EditCustomAbiError>) => {
    const req = {
      name: username,
      contractName: contractName,
      abi: abi,
      contractAddress: contractAddress,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'EDIT_CUSTOM_ABI_REQUEST',
        payload: { req: req },
      } as EditCustomAbiRequest)


      const response = await axios.post<any>(`${BackendURL}/user/customABIs/edit`, req, getHeader())

      const { success } = response.data
      if (success === true) {
        const { customABIs } = response.data
        dispatch({
          type: 'EDIT_CUSTOM_ABI_SUCCESS',
          payload: {
            customABI: customABIs,
          },
        } as EditCustomAbiSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_CUSTOM_ABI_ERROR',
          payload: {
            error: error,
          },
        } as EditCustomAbiError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_CUSTOM_ABI_ERROR',
        payload: {
          error: error.message,
        },
      } as EditCustomAbiError)
    }
  }

export const deleteCustomAbi =
  (username: string, contractAddress: string, page: number) =>
  async (dispatch: Dispatch<DeleteCustomAbiRequest | DeleteCustomAbiSuccess | DeleteCustomAbiError>) => {
    const req = {
      name: username,
      contractAddress: contractAddress,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'DELETE_CUSTOM_ABI_REQUEST',
        payload: { req: req },
      } as DeleteCustomAbiRequest)


      const response = await axios.post<any>(`${BackendURL}/user/customABIs/delete`, req, getHeader())

      const { success } = response.data
      if (success === true) {
        const { customABIs } = response.data
        dispatch({
          type: 'DELETE_CUSTOM_ABI_SUCCESS',
          payload: {
            customABI: customABIs,
          },
        } as DeleteCustomAbiSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_CUSTOM_ABI_ERROR',
          payload: {
            error: error,
          },
        } as DeleteCustomAbiError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_CUSTOM_ABI_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteCustomAbiError)
    }
  }

export const createAddressNote =
  (username: string, address: string, nameTag: string, privateNote: string, page: number) =>
  async (dispatch: Dispatch<CreateAddressNoteRequest | CreateAddressNoteSuccess | CreateAddressNoteError>) => {
    const req = {
      name: username,
      address: address,
      nameTag: nameTag,
      addressNote: privateNote,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'CREAETE_ADDRESS_NOTE_REQUEST',
        payload: { req: req },
      } as CreateAddressNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressNote/create`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { addressNotes, addressNote, totalCount, msg } = response.data
        dispatch({
          type: 'CREAETE_ADDRESS_NOTE_SUCCESS',
          payload: {
            addressNotes: addressNotes,
            addressNote: addressNote,
            totalCount: totalCount,
            msg: msg,
          },
        } as CreateAddressNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_ADDRESS_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as CreateAddressNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_ADDRESS_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateAddressNoteError)
    }
  }

export const listAllAddressNotes =
  (username: string, page: any, rowsPerPage: any) =>
  async (dispatch: Dispatch<ListAllAddressNoteRequest | ListAllAddressNoteSuccess | ListAllAddressNoteError>) => {
    const req = {
      name: username,
      pageNum: page,
      pageSize: rowsPerPage,
    }

    try {
      dispatch({
        type: 'LIST_ALL_ADDRESS_NOTE_REQUEST',
        payload: { req: req },
      } as ListAllAddressNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressNote/list`, req, getHeader())

      const { success, totalCount } = response.data
      if (success === true) {
        const { addressNotes } = response.data
        dispatch({
          type: 'LIST_ALL_ADDRESS_NOTE_SUCCESS',
          payload: {
            addressNotes: addressNotes,
            totalCount: totalCount,
          },
        } as ListAllAddressNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_ADDRESS_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as ListAllAddressNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_ADDRESS_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllAddressNoteError)
    }
  }
export const getOneAddressNote =
  (username: string, address: string) =>
  async (dispatch: Dispatch<ListAllAddressNoteRequest | ListAllAddressNoteSuccess | ListAllAddressNoteError>) => {
    const req = {
      name: username,
      address: address,
    }
    try {
      dispatch({
        type: 'LIST_ALL_ADDRESS_NOTE_REQUEST',
        payload: { req: req },
      } as ListAllAddressNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressNote/getOneAddressNote`, req, {
        headers: {
          Authorization: `${localStorage.getItem('jwtToken')}`,
        },
      })
      const { success } = response.data
      if (success === true) {
        const { addressNote } = response.data
        dispatch({
          type: 'LIST_ALL_ADDRESS_NOTE_SUCCESS',
          payload: {
            addressNote: addressNote,
          },
        } as ListAllAddressNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_ADDRESS_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as ListAllAddressNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_ADDRESS_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllAddressNoteError)
    }
  }

export const editAddressNote =
  (username: string, address: string, nameTag: string, addressNote: string, page: number) =>
  async (dispatch: Dispatch<EditAddressNoteRequest | EditAddressNoteSuccess | EditAddressNoteError>) => {
    const req = {
      name: username,
      address: address,
      nameTag: nameTag,
      addressNote: addressNote,
      pageNum: page,
    }

    try {
      dispatch({
        type: 'EDIT_ADDRESS_NOTE_REQUEST',
        payload: { req: req },
      } as EditAddressNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressNote/edit`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { addressNotes, addressNote, msg } = response.data
        dispatch({
          type: 'EDIT_ADDRESS_NOTE_SUCCESS',
          payload: {
            addressNotes: addressNotes,
            addressNote: addressNote,
            msg: msg,
          },
        } as EditAddressNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_ADDRESS_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as EditAddressNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_ADDRESS_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as EditAddressNoteError)
    }
  }

export const deleteAddressNote =
  (username: string, address: string) =>
  async (dispatch: Dispatch<DeleteAddressNoteRequest | DeleteAddressNoteSuccess | DeleteAddressNoteError>) => {
    const req = {
      name: username,
      address: address,
    }

    try {
      dispatch({
        type: 'DELETE_ADDRESS_NOTE_REQUEST',
        payload: { req: req },
      } as DeleteAddressNoteRequest)

      const response = await axios.post<any>(`${BackendURL}/user/addressNote/delete`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { addressNotes, addressNote, totalCount, msg } = response.data
        dispatch({
          type: 'DELETE_ADDRESS_NOTE_SUCCESS',
          payload: {
            addressNotes: addressNotes,
            addressNote: addressNote,
            totalCount: totalCount,
            msg: msg,
          },
        } as DeleteAddressNoteSuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_ADDRESS_NOTE_ERROR',
          payload: {
            error: error,
          },
        } as DeleteAddressNoteError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_ADDRESS_NOTE_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteAddressNoteError)
    }
  }

export const getUserOverview =
  (name: string) =>
  async (dispatch: Dispatch<GetUserOverviewRequest | GetUserOverviewSuccess | GetUserOverviewError>) => {
    try {
      var req = {
        name: name,
      }
      dispatch({
        type: 'GET_USER_OVERVIEW_REQUEST',
        payload: {},
      } as GetUserOverviewRequest)

      const response = await axios.post<any>(`${BackendURL}/user/overview`, req, getHeader())

      console.log('response', response)
      if (response.data.success) {
        const {
          name,
          email,
          addressWatchListAlertCnt,
          txnNotesCnt,
          addressTagsCnt,
          emailLimitCnt,
          totalBalance,
          lastLogin,
        } = response.data
        console.log('email', email)
        dispatch({
          type: 'GET_USER_OVERVIEW_SUCCESS',
          payload: {
            name: name,
            email: email,
            addressWatchListAlertCnt: addressWatchListAlertCnt,
            txnNotesCnt: txnNotesCnt,
            addressTagsCnt: addressTagsCnt,
            emailLimitCnt: emailLimitCnt,
            totalBalance: totalBalance,
            lastLogin: lastLogin,
          },
        } as GetUserOverviewSuccess)
      } else {
        const { error } = response.data

        dispatch({
          type: 'GET_USER_OVERVIEW_ERROR',
          payload: {
            error: error,
          },
        } as GetUserOverviewError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_USER_OVERVIEW_ERROR',
        payload: {
          error: error,
        },
      } as GetUserOverviewError)
    }
  }

export const getAccountSetting =
  (name: string) => async (dispatch: Dispatch<GetUserProfileRequest | GetUserProfileSuccess | GetUserProfileError>) => {
    try {
      var req = {
        name: name,
      }
      dispatch({
        type: 'GET_USER_PROFILE_REQUEST',
        payload: {},
      } as GetUserProfileRequest)

      const response = await axios.post<any>(`${BackendURL}/user/overview`, req, getHeader())

      if (response.data.success) {
        const { name, email } = response.data
        dispatch({
          type: 'GET_USER_PROFILE_SUCCESS',
          payload: {
            name: name,
            email: email,
          },
        } as GetUserProfileSuccess)
      } else {
        const { error } = response.data

        dispatch({
          type: 'GET_USER_PROFILE_ERROR',
          payload: {
            error: error,
          },
        } as GetUserProfileError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_USER_PROFILE_ERROR',
        payload: {
          error: error,
        },
      } as GetUserProfileError)
    }
  }

export const editAccountSetting =
  (name: string, email: string, oldPassword: string, password: string, passwordConfirm: string) =>
  async (dispatch: Dispatch<EditUserProfileRequest | EditUserProfileSuccess | EditUserProfileError>) => {
    try {
      var req = {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        oldPassword: oldPassword,
      }
      dispatch({
        type: 'EDIT_USER_PROFILE_REQUEST',
        payload: {},
      } as EditUserProfileRequest)

      const response = await axios.post<any>(`${BackendURL}/user/profile/update`, req, getHeader())

      if (response.data.succeed) {
        const { message } = response.data
        dispatch({
          type: 'EDIT_USER_PROFILE_SUCCESS',
          payload: {
            message: message,
          },
        } as EditUserProfileSuccess)
      } else {
        const { error } = response.data
        console.log(error)

        dispatch({
          type: 'EDIT_USER_PROFILE_ERROR',
          payload: {
            error: error,
          },
        } as EditUserProfileError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_USER_PROFILE_ERROR',
        payload: {
          error: error,
        },
      } as EditUserProfileError)
    }
  }

export const createApiKey =
  (username: string, apiKeyName: string) =>
  async (dispatch: Dispatch<CreateApiKeyRequest | CreateApiKeySuccess | CreateApiKeyError>) => {
    const req = {
      name: username,
      apiKeyName: apiKeyName,
    }

    try {
      dispatch({
        type: 'CREAETE_API_KEY_REQUEST',
        payload: { req: req },
      } as CreateApiKeyRequest)

      const response = await axios.post<any>(`${BackendURL}/user/apikeys/create`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { apiKeys, totalCount } = response.data
        dispatch({
          type: 'CREAETE_API_KEY_SUCCESS',
          payload: {
            apiKeys: apiKeys,
            totalCount: totalCount,
          },
        } as CreateApiKeySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'CREAETE_API_KEY_ERROR',
          payload: {
            error: error,
          },
        } as CreateApiKeyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'CREAETE_API_KEY_ERROR',
        payload: {
          error: error.message,
        },
      } as CreateApiKeyError)
    }
  }

export const listAllApiKeys =
  (username: string) =>
  async (dispatch: Dispatch<ListAllApiKeyRequest | ListAllApiKeySuccess | ListAllApiKeyError>) => {
    const req = {
      name: username,
    }

    try {
      dispatch({
        type: 'LIST_ALL_API_KEY_REQUEST',
        payload: { req: req },
      } as ListAllApiKeyRequest)

      const response = await axios.post<any>(`${BackendURL}/user/apikeys/list`, req, getHeader())

      const { success } = response.data
      if (success === true) {
        const { apiKeys, totalCount } = response.data
        dispatch({
          type: 'LIST_ALL_API_KEY_SUCCESS',
          payload: {
            apiKeys: apiKeys,
            totalCount: totalCount,
          },
        } as ListAllApiKeySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_API_KEY_ERROR',
          payload: {
            error: error,
          },
        } as ListAllApiKeyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_API_KEY_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllApiKeyError)
    }
  }
export const getOneApiKey =
  (username: string, apiKeyName: string) =>
  async (dispatch: Dispatch<ListAllApiKeyRequest | ListAllApiKeySuccess | ListAllApiKeyError>) => {
    const req = {
      name: username,
      apiKeyName: apiKeyName,
    }

    try {
      dispatch({
        type: 'LIST_ALL_API_KEY_REQUEST',
        payload: { req: req },
      } as ListAllApiKeyRequest)

      const response = await axios.post<any>(`${BackendURL}/user/apikeys/getOneApiKey`, req, {
        headers: {
          Authorization: `${localStorage.getItem('jwtToken')}`,
        },
      })

      const { success } = response.data
      if (success === true) {
        const { apiKeys } = response.data
        dispatch({
          type: 'LIST_ALL_API_KEY_SUCCESS',
          payload: {
            apiKeys: apiKeys,
          },
        } as ListAllApiKeySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'LIST_ALL_API_KEY_ERROR',
          payload: {
            error: error,
          },
        } as ListAllApiKeyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'LIST_ALL_API_KEY_ERROR',
        payload: {
          error: error.message,
        },
      } as ListAllApiKeyError)
    }
  }
export const editApiKey =
  (username: string, apiKey: string, apiKeyName: string) =>
  async (dispatch: Dispatch<EditApiKeyRequest | EditApiKeySuccess | EditApiKeyError>) => {
    const req = {
      name: username,
      apiKey: apiKey,
      apiKeyName: apiKeyName,
    }

    try {
      dispatch({
        type: 'EDIT_API_KEY_REQUEST',
        payload: { req: req },
      } as EditApiKeyRequest)

      const response = await axios.post<any>(`${BackendURL}/user/apikeys/edit`, req, getHeader())
      console.log(response)
      const { success } = response.data
      if (success === true) {
        const { apiKeys } = response.data
        dispatch({
          type: 'EDIT_API_KEY_SUCCESS',
          payload: {
            apiKeys: apiKeys,
          },
        } as EditApiKeySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'EDIT_API_KEY_ERROR',
          payload: {
            error: error,
          },
        } as EditApiKeyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'EDIT_API_KEY_ERROR',
        payload: {
          error: error.message,
        },
      } as EditApiKeyError)
    }
  }

export const deleteApiKey =
  (username: string, apiKey: string) =>
  async (dispatch: Dispatch<DeleteApiKeyRequest | DeleteApiKeySuccess | DeleteApiKeyError>) => {
    const req = {
      name: username,
      apiKey: apiKey,
    }

    try {
      dispatch({
        type: 'DELETE_API_KEY_REQUEST',
        payload: { req: req },
      } as DeleteApiKeyRequest)

      const response = await axios.post<any>(`${BackendURL}/user/apikeys/delete`, req, getHeader())
      const { success } = response.data
      if (success === true) {
        const { apiKeys, totalCount } = response.data
        dispatch({
          type: 'DELETE_API_KEY_SUCCESS',
          payload: {
            apiKeys: apiKeys,
            totalCount: totalCount,
          },
        } as DeleteApiKeySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'DELETE_API_KEY_ERROR',
          payload: {
            error: error,
          },
        } as DeleteApiKeyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'DELETE_API_KEY_ERROR',
        payload: {
          error: error.message,
        },
      } as DeleteApiKeyError)
    }
  }
