import { AppActionTypes } from '../actions/action.types'

const initialState: TokenState = {
  erc20ApprovalTxns: [],
  decodeData: [],
  txReceipt: [],
  count: 0,
  error: {},
  loading: false,
  status: 0,
  verifySoliditySingleContractRequest: {},
  verifySoliditySingleContractSuccessResponse: {},
  verifySoliditySingleContractLoading: false,
  verifySoliditySingleContractError: '',
  verifySolidityMultipleContractRequest: {},
  verifySolidityMultipleContractSuccessResponse: {},
  verifySolidityMultipleContractLoading: false,
  verifySolidityMultipleContractError: '',
  verifySolidityStandardJsonContractRequest: {},
  verifySolidityStandardJsonContractSuccessResponse: {},
  verifySolidityStandardJsonContractLoading: false,
  verifySolidityStandardJsonContractError: '',
}

export interface TokenState {
  erc20ApprovalTxns: any
  decodeData: any
  txReceipt: any
  loading: boolean
  error: any
  count: any
  status: 0
  verifySoliditySingleContractRequest: object
  verifySoliditySingleContractSuccessResponse: object
  verifySoliditySingleContractLoading: boolean
  verifySoliditySingleContractError: string
  verifySolidityMultipleContractRequest: object
  verifySolidityMultipleContractSuccessResponse: object
  verifySolidityMultipleContractLoading: boolean
  verifySolidityMultipleContractError: string
  verifySolidityStandardJsonContractRequest: object
  verifySolidityStandardJsonContractSuccessResponse: object
  verifySolidityStandardJsonContractLoading: boolean
  verifySolidityStandardJsonContractError: string
}

const miscReducer = (state: TokenState = initialState, action: AppActionTypes): TokenState => {
  switch (action.type) {
    case 'GET_TOKEN_APPROVAL_REQUEST':
    case 'GET_BYTE_TO_OPCODE_REQUEST':
    case 'GET_TXN_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      }

    case 'GET_TOKEN_APPROVAL':
      return {
        ...state,
        erc20ApprovalTxns: action.payload.erc20ApprovalTxns,
        count: action.payload.count,
        status: action.payload.status,
        loading: false,
      }

    case 'GET_BYTE_TO_OPCODE':
      return {
        ...state,
        decodeData: action.payload.decodeData,
        loading: false,
      }

    case 'GET_TXN_DATA':
      return {
        ...state,
        txReceipt: action.payload.txReceipt,
        loading: false,
      }

    case 'GET_TOKEN_APPROVAL_ERROR':
    case 'GET_BYTE_TO_OPCODE_ERROR':
    case 'GET_TXN_DATA_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'PUSH_SINGLE_SOLIDITY_VERIFY_REQUEST':
      return {
        ...state,
        verifySoliditySingleContractLoading: true,
        verifySoliditySingleContractError: '',
        verifySoliditySingleContractRequest: action.payload.req,
        verifySoliditySingleContractSuccessResponse: {},
      }

    case 'GET_SINGLE_SOLIDITY_VERIFY_SUCCESS':
      return {
        ...state,
        verifySoliditySingleContractLoading: false,
        verifySoliditySingleContractError: '',
        verifySoliditySingleContractRequest: {},
        verifySoliditySingleContractSuccessResponse: {
          abi: action.payload.abi,
          contractName: action.payload.contractName,
          bytecode: action.payload.bytecode,
          constructorArguments: action.payload.constructorArguments,
          txn: action.payload.txn,
          address: action.payload.address,
          compilerVersion: action.payload.compilerVersion,
          optimization: action.payload.optimization,
          optimizerRuns: action.payload.optimizerRuns,
          contractNames: action.payload.contractNames,
        },
      }

    case 'GET_SINGLE_SOLIDITY_VERIFY_ERROR':
      return {
        ...state,
        verifySoliditySingleContractLoading: false,
        verifySoliditySingleContractError: action.payload.error,
        verifySoliditySingleContractRequest: {},
        verifySoliditySingleContractSuccessResponse: {},
      }

    case 'PUSH_MULTIPLE_SOLIDITY_VERIFY_REQUEST':
      return {
        ...state,
        verifySolidityMultipleContractLoading: true,
        verifySolidityMultipleContractError: '',
        verifySolidityMultipleContractRequest: action.payload.req,
        verifySolidityMultipleContractSuccessResponse: {},
      }

    case 'GET_MULTIPLE_SOLIDITY_VERIFY_SUCCESS':
      return {
        ...state,
        verifySolidityMultipleContractLoading: false,
        verifySolidityMultipleContractError: '',
        verifySolidityMultipleContractRequest: {},
        verifySolidityMultipleContractSuccessResponse: {
          abi: action.payload.abi,
          contractName: action.payload.contractName,
          bytecode: action.payload.bytecode,
          constructorArguments: action.payload.constructorArguments,
          txn: action.payload.txn,
          address: action.payload.address,
          compilerVersion: action.payload.compilerVersion,
          optimization: action.payload.optimization,
          optimizerRuns: action.payload.optimizerRuns,
          contractNames: action.payload.contractNames,
        },
      }

    case 'GET_MULTIPLE_SOLIDITY_VERIFY_ERROR':
      return {
        ...state,
        verifySolidityMultipleContractLoading: false,
        verifySolidityMultipleContractError: action.payload.error,
        verifySolidityMultipleContractRequest: {},
        verifySolidityMultipleContractSuccessResponse: {},
      }
    case 'PUSH_STANDARD_JSON_SOLIDITY_VERIFY_REQUEST':
      return {
        ...state,
        verifySolidityStandardJsonContractLoading: true,
        verifySolidityStandardJsonContractError: '',
        verifySolidityStandardJsonContractRequest: action.payload.req,
        verifySolidityStandardJsonContractSuccessResponse: {},
      }

    case 'GET_STANDARD_JSON_SOLIDITY_VERIFY_SUCCESS':
      return {
        ...state,
        verifySolidityStandardJsonContractLoading: false,
        verifySolidityStandardJsonContractError: '',
        verifySolidityStandardJsonContractRequest: {},
        verifySolidityStandardJsonContractSuccessResponse: {
          abi: action.payload.abi,
          contractName: action.payload.contractName,
          bytecode: action.payload.bytecode,
          constructorArguments: action.payload.constructorArguments,
          txn: action.payload.txn,
          address: action.payload.address,
          compilerVersion: action.payload.compilerVersion,
          optimization: action.payload.optimization,
          optimizerRuns: action.payload.optimizerRuns,
          contractNames: action.payload.contractNames,
        },
      }

    case 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR':
      return {
        ...state,
        verifySolidityStandardJsonContractLoading: false,
        verifySolidityStandardJsonContractError: action.payload.error,
        verifySolidityStandardJsonContractRequest: {},
        verifySolidityStandardJsonContractSuccessResponse: {},
      }

    default:
      return state
  }
}

export default miscReducer
