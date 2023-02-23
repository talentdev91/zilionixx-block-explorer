import axiosInstance from '../../axios.config'
import {
  GetTokenApproval,
  GetTokenApprovalRequest,
  GetTokenApprovalError,
  GetByteToOpcodeRequest,
  GetByteToOpcode,
  GetByteToOpcodeError,
  GetTxnDataRequest,
  GetTxnData,
  GetTxnDataError,
  PushSingleSoldityVerifyRequest,
  GetSingleSolidityContractVerifySuccess,
  GetSingleSolidityContractVerifyError,
  PushStandardJsonSoldityVerifyRequest,
  GetStandardJsonSolidityContractVerifySuccess,
  GetStandardJsonSolidityContractVerifyError,
} from './action.types'
import { Dispatch } from 'redux'
import { BackendURL } from '../../config/config'

export const getTokenAproval =
  (page: any, rowsPerPage: any, address: any) =>
  async (dispatch: Dispatch<GetTokenApprovalRequest | GetTokenApproval | GetTokenApprovalError>) => {
    try {
      dispatch({
        type: 'GET_TOKEN_APPROVAL_REQUEST',
      } as GetTokenApprovalRequest)

      const response = await axiosInstance.get<any>(`${BackendURL}/tokenApprovals`, {
        params: {
          fromAddress: address,
          page: page,
          rowsPerPage: rowsPerPage,
        },
      })
      const { erc20ApprovalTxns, count, success } = response.data
      dispatch({
        type: 'GET_TOKEN_APPROVAL',
        payload: {
          erc20ApprovalTxns: erc20ApprovalTxns,
          count: count,
          status: success,
        },
      } as GetTokenApproval)
    } catch (error: any) {
      dispatch({
        type: 'GET_TOKEN_APPROVAL_ERROR',
        payload: {
          error: 'error',
        },
      } as GetTokenApprovalError)
    }
  }

export const getByteToOpcode =
  (bytecode: string) => async (dispatch: Dispatch<GetByteToOpcodeRequest | GetByteToOpcode | GetByteToOpcodeError>) => {
    try {
      dispatch({
        type: 'GET_BYTE_TO_OPCODE_REQUEST',
      } as GetByteToOpcodeRequest)

      const response = await axiosInstance.post<any>(`${BackendURL}/web3/byteToOpcode`, {
        params: { bytecode: bytecode },
      })

      const { decodeData } = response.data

      dispatch({
        type: 'GET_BYTE_TO_OPCODE',
        payload: {
          decodeData: decodeData,
        },
      } as GetByteToOpcode)
    } catch (error: any) {
      dispatch({
        type: 'GET_BYTE_TO_OPCODE_ERROR',
        payload: { error: 'error' },
      } as GetByteToOpcodeError)
    }
  }

export const getTxnData =
  (rawTxHex: string) => async (dispatch: Dispatch<GetTxnDataRequest | GetTxnData | GetTxnDataError>) => {
    try {
      dispatch({
        type: 'GET_TXN_DATA_REQUEST',
      } as GetTxnDataRequest)
      const response = await axiosInstance.post<any>(`${BackendURL}/web3/broadcastTx`, {
        params: { rawTxHex: rawTxHex },
      })

      const { txReceipt } = response.data

      dispatch({
        type: 'GET_TXN_DATA',
        payload: {
          txReceipt: txReceipt,
        },
      } as GetTxnData)
    } catch (error: any) {
      dispatch({
        type: 'GET_TXN_DATA_ERROR',
        payload: { error: 'error' },
      } as GetTxnDataError)
    }
  }

export const verifySingleSolidity =
  (
    address: string,
    compiler: string,
    optimization: string,
    sourceCode: string,
    library1Name: string,
    library1Address: string,
    library2Name: string,
    library2Address: string,
    library3Name: string,
    library3Address: string,
    library4Name: string,
    library4Address: string,
    library5Name: string,
    library5Address: string,
    library6Name: string,
    library6Address: string,
    library7Name: string,
    library7Address: string,
    library8Name: string,
    library8Address: string,
    library9Name: string,
    library9Address: string,
    library10Name: string,
    library10Address: string,
    optimizerRuns: string,
    evmVersion: string,
    licenseType: string,
    constructorArguments: string,
  ) =>
  async (
    dispatch: Dispatch<
      PushSingleSoldityVerifyRequest | GetSingleSolidityContractVerifySuccess | GetSingleSolidityContractVerifyError
    >,
  ) => {
    console.log('Action for single verify called')

    const req = {
      address: address,
      compiler: compiler,
      optimization: optimization,
      sourceCode: sourceCode,
      optimizerRuns: optimizerRuns,
      evmVersion: evmVersion,
      licenseType: licenseType,
      constructorArguments: constructorArguments,
      library1Name: library1Name,
      library1Address: library1Address,
      library2Name: library2Name,
      library2Address: library2Address,
      library3Name: library3Name,
      library3Address: library3Address,
      library4Name: library4Name,
      library4Address: library4Address,
      library5Name: library5Name,
      library5Address: library5Address,
      library6Name: library6Name,
      library6Address: library6Address,
      library7Name: library7Name,
      library7Address: library7Address,
      library8Name: library8Name,
      library8Address: library8Address,
      library9Name: library9Name,
      library9Address: library9Address,
      library10Name: library10Name,
      library10Address: library10Address,
    }
    try {
      dispatch({
        type: 'PUSH_SINGLE_SOLIDITY_VERIFY_REQUEST',
        payload: { req: req },
      } as PushSingleSoldityVerifyRequest)

      const response = await axiosInstance.post<any>(`${BackendURL}/contract/verifyContract/solidity/single`, req)

      const { success } = response.data
      if (success === true) {
        const {
          abi,
          contractName,
          bytecode,
          constructorArguments,
          txn,
          address,
          compilerVersion,
          optimization,
          optimizerRuns,
          contractNames,
        } = response.data
        dispatch({
          type: 'GET_SINGLE_SOLIDITY_VERIFY_SUCCESS',
          payload: {
            abi: abi,
            contractName: contractName,
            bytecode: bytecode,
            constructorArguments: constructorArguments,
            txn: txn,
            address: address,
            compilerVersion: compilerVersion,
            optimization: optimization,
            optimizerRuns: optimizerRuns,
            contractNames: contractNames,
          },
        } as GetSingleSolidityContractVerifySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_SINGLE_SOLIDITY_VERIFY_ERROR',
          payload: {
            error: error,
          },
        } as GetSingleSolidityContractVerifyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_SINGLE_SOLIDITY_VERIFY_ERROR',
        payload: {
          error: error.message,
        },
      } as GetSingleSolidityContractVerifyError)
    }
  }

export const verifyStandardJsonSolidity =
  (address: string, compiler: string, constructorArguments: string) =>
  async (
    dispatch: Dispatch<
      | PushStandardJsonSoldityVerifyRequest
      | GetStandardJsonSolidityContractVerifySuccess
      | GetStandardJsonSolidityContractVerifyError
    >,
  ) => {
    console.log('Action for single verify called')

    const req = {
      address: address,
      compiler: compiler,
      constructorArguments: constructorArguments,
    }
    try {
      dispatch({
        type: 'PUSH_STANDARD_JSON_SOLIDITY_VERIFY_REQUEST',
        payload: { req: req },
      } as PushStandardJsonSoldityVerifyRequest)

      const response = await axiosInstance.post<any>(`${BackendURL}/contract/verifyContract/solidity/standardJson`, req)

      const { success } = response.data
      if (success === true) {
        const {
          abi,
          contractName,
          bytecode,
          constructorArguments,
          txn,
          address,
          compilerVersion,
          optimization,
          optimizerRuns,
          contractNames,
        } = response.data
        dispatch({
          type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_SUCCESS',
          payload: {
            abi: abi,
            contractName: contractName,
            bytecode: bytecode,
            constructorArguments: constructorArguments,
            txn: txn,
            address: address,
            compilerVersion: compilerVersion,
            optimization: optimization,
            optimizerRuns: optimizerRuns,
            contractNames: contractNames,
          },
        } as GetStandardJsonSolidityContractVerifySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR',
          payload: {
            error: error,
          },
        } as GetStandardJsonSolidityContractVerifyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR',
        payload: {
          error: error.message,
        },
      } as GetStandardJsonSolidityContractVerifyError)
    }
  }

export const verifyMultipleSolidity =
  (address: string, compiler: string, constructorArguments: string) =>
  async (
    dispatch: Dispatch<
      | PushStandardJsonSoldityVerifyRequest
      | GetStandardJsonSolidityContractVerifySuccess
      | GetStandardJsonSolidityContractVerifyError
    >,
  ) => {
    console.log('Action for single verify called')

    const req = {
      address: address,
      compiler: compiler,
      constructorArguments: constructorArguments,
    }
    try {
      dispatch({
        type: 'PUSH_STANDARD_JSON_SOLIDITY_VERIFY_REQUEST',
        payload: { req: req },
      } as PushStandardJsonSoldityVerifyRequest)

      const response = await axiosInstance.post<any>(`${BackendURL}/contract/verifyContract/solidity/standardJson`, req)

      const { success } = response.data
      if (success === true) {
        const {
          abi,
          contractName,
          bytecode,
          constructorArguments,
          txn,
          address,
          compilerVersion,
          optimization,
          optimizerRuns,
          contractNames,
        } = response.data
        dispatch({
          type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_SUCCESS',
          payload: {
            abi: abi,
            contractName: contractName,
            bytecode: bytecode,
            constructorArguments: constructorArguments,
            txn: txn,
            address: address,
            compilerVersion: compilerVersion,
            optimization: optimization,
            optimizerRuns: optimizerRuns,
            contractNames: contractNames,
          },
        } as GetStandardJsonSolidityContractVerifySuccess)
      } else {
        const { error } = response.data
        dispatch({
          type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR',
          payload: {
            error: error,
          },
        } as GetStandardJsonSolidityContractVerifyError)
      }
    } catch (error: any) {
      dispatch({
        type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR',
        payload: {
          error: error.message,
        },
      } as GetStandardJsonSolidityContractVerifyError)
    }
  }
