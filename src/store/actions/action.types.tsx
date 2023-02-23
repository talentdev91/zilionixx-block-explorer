import { CallHistoryMethodAction } from 'connected-react-router'

//Get latest ten blocks
export interface GetLatestTenBlocksRequest {
  type: 'GET_LATEST_TEN_BLOCKS_REQUEST'
}

export interface GetLatestTenBlocksFail {
  type: 'GET_LATEST_TEN_BLOCKS_FAIL'
  payload: any
}

export interface GetLatestTenBlocks {
  type: 'GET_LATEST_TEN_BLOCKS'
  payload: any
}

//Get all blocks
export interface GetAllBlocksRequest {
  type: 'GET_All_BLOCKS_REQUEST'
}

export interface GetAllBlocksFail {
  type: 'GET_ALL_BLOCKS_FAIL'
  payload: any
}

export interface GetAllBlocks {
  type: 'GET_ALL_BLOCKS'
  payload: any
}

//Get block's detail information
export interface GetBlockDetailRequest {
  type: 'GET_BLOCK_DETAIL_REQUEST'
}

export interface GetBlockDetailFail {
  type: 'GET_BLOCK_DETAIL_FAIL'
  payload: any
}

export interface GetBlockDetail {
  type: 'GET_BLOCK_DETAIL'
  payload: any
}

//Get block's transactions
export interface GetBlockTransactionsRequest {
  type: 'GET_BLOCK_TRANSACTIONS_REQUEST'
}

export interface GetBlockTransactionsFail {
  type: 'GET_BLOCK_TRANSACTIONS_FAIL'
  payload: any
}

export interface GetBlockTransactions {
  type: 'GET_BLOCK_TRANSACTIONS'
  payload: any
}

//Get latest chain info
export interface GetLatestChainInfoRequest {
  type: 'GET_LATEST_CHAIN_INFO_REQUEST'
}

export interface GetLatestChainInfoFail {
  type: 'GET_LATEST_CHAIN_INFO_FAIL'
  payload: any
}

export interface GetLatestChainInfo {
  type: 'GET_LATEST_CHAIN_INFO'
  payload: any
}

export interface GetAllTransactionsType {
  type: 'GET_ALL_TRANSACTIONS'
  payload: any
}
export interface GetPendingTransactions {
  type: 'GET_PENDING_TRANSACTIONS'
  payload: any
}
export interface TransactionErrorType {
  type: 'TRANSACTION_ERROR'
  payload: any
}

export interface GetZnxHistory {
  type: 'GET_ZNXHISTORY'
  payload: any
}

export interface GetLatestTransactions {
  type: 'GET_LATEST_TRANSACTIONS'
  payload: any
}

export interface GetTransactionDetail {
  type: 'GET_TRANSACTION_DETAIL'
  payload: any
}

export interface GetErc20Token {
  type: 'GET_ERC20_TOKEN'
  payload: any
}

export interface GetErc20TokenSearch {
  type: 'GET_ERC20_TOKEN_SEARCH'
  payload: any
}

export interface GetErc20TokenKeyword {
  type: 'GET_ERC20_TOKEN_KEYWORD'
  payload: any
}

export interface GetErc20TransactionsRequest {
  type: 'GET_ERC20_TRANSACTION_SEARCH_REQUEST'
  payload: any
}

export interface GetErc20TransactionKeyword {
  type: 'GET_ERC20_TRANSACTION_SEARCH_KEYWORD'
  payload: any
}

export interface GetErc20TransactionSearchStatus {
  type: 'GET_ERC20_TRANSACTION_SEARCH_STATUS'
  payload: any
}

export interface GetErc20TransactionSearchStatusError {
  type: 'GET_ERC20_TRANSACTION_SEARCH_STATUS_ERROR'
  payload: any
}

export interface GetErc20Transfer {
  type: 'GET_ERC20_TRANSFER'
  payload: any
}

export interface TokenError {
  type: 'TOKEN_ERROR'
  payload: any
}

export interface ERC20SearchTransactionError {
  type: 'Get_ERC20_TRANSACTION_SEARCH_ERROR'
  payload: any
}

export interface GetEpochs {
  type: 'GET_EPOCHS'
  payload: any
}
export interface GetEpochDetail {
  type: 'GET_EPOCH_DETAIL'
  payload: any
}
export interface EpochError {
  type: 'EPOCH_ERROR'
  payload: any
}

export interface GetTopAccountsRquest {
  type: 'GET_TOP_ACCOUNTS_BY_BALANCE_REQUEST'
}

export interface GetTopAccountsFail {
  type: 'GET_TOP_ACCOUNTS_BY_BALANCE_FAIL'
  payload: any
}

export interface GetTopAccounts {
  type: 'GET_TOP_ACCOUNTS_BY_BALANCE'
  payload: any
}

export interface GetAddressDetailInfoRequest {
  type: 'GET_ADDRESS_DETAIL_INFO_REQUEST'
}

export interface GetAddressDetailInfo {
  type: 'GET_ADDRESS_DETAIL_INFO'
  payload: any
}

export interface AddressErrorType {
  type: 'ADDRESS_ERROR'
  payload: any
}

export interface GetEpochsRequest {
  type: 'GET_EPOCHS_REQUEST'
}

export interface GetEpochDetailsRequest {
  type: 'GET_EPOCHS_DETAILS_REQUEST'
}

export interface GetErc20TokensRequest {
  type: 'GET_ERC20_TOKENS_REQUEST'
}

export interface GetErc20TransfersRequest {
  type: 'GET_ERC_20_TRANSFERS_REQUEST'
}

export interface GetAllTransactionsRequest {
  type: 'GET_ALL_TRANSACTIONS_REQUEST'
}

export interface GetPendingTransactionsRequest {
  type: 'GET_PENDING_TRANSACTIONS_REQUEST'
}

export interface GetZnxHistoryRequest {
  type: 'GET_ZNXHISTORY_REQUEST'
}

export interface GetLatestTransactionsRequest {
  type: 'GET_LATEST_TRANSACTIONS_REQUEST'
}

export interface GetTxDetailByTxHashRequest {
  type: 'GET_TXDETAIL_BY_TXHASH_REQUEST'
}

export interface GetDailyTxns {
  type: 'GET_DAILY_TRANSACTIONS'
  payload: any
}
export interface GetChartsError {
  type: 'GET_CHARTS_ERROR'
  payload: any
}
export interface GetDailyTxnsRequest {
  type: 'GET_DAILY_TRANSACTIONS_REQUEST'
  payload: any
}
export interface GetTokenTransfer {
  type: 'GET_TOKEN_TRANSFER'
  payload: any
}
export interface GetTokenTransferRequest {
  type: 'GET_TOKEN_TRANSFER_REQUEST'
  payload: any
}

export interface GetNewAddress {
  type: 'GET_NEW_ADDRESS'
  payload: any
}
export interface GetNewAddressRequest {
  type: 'GET_NEW_ADDRESS_REQUEST'
  payload: any
}

export interface AverageBlockSize {
  type: 'AVERAGE_BLOCK_SIZE'
  payload: any
}
export interface AverageBlockSizeRequest {
  type: 'AVERAGE_BLOCK_SIZE_REQUEST'
  payload: any
}

export interface AverageBlockTime {
  type: 'AVERAGE_BLOCK_TIME'
  payload: any
}
export interface AverageBlockTimeRequest {
  type: 'AVERAGE_BLOCK_TIME_REQUEST'
  payload: any
}

export interface AverageGasPrice {
  type: 'AVERAGE_GAS_PRICE'
  payload: any
}
export interface AverageGasPriceRequest {
  type: 'AVERAGE_GAS_PRICE_REQUEST'
  payload: any
}

export interface TotalGasPrice {
  type: 'TOTAL_GAS_PRICE'
  payload: any
}
export interface TotalGasPriceRequest {
  type: 'TOTAL_GAS_PRICE_REQUEST'
  payload: any
}

export interface BlockReward {
  type: 'BLOCK_REWARD'
  payload: any
}
export interface BlockRewardRequest {
  type: 'BLOCK_REWARD_REQUEST'
  payload: any
}

export interface GetPendingTxns {
  type: 'GET_PENDING_TRANSACTIONS'
  payload: any
}
export interface GetPendingTxnsRequest {
  type: 'GET_PENDING_TRANSACTIONS_REQUEST'
  payload: any
}

export interface GetTxnFee {
  type: 'GET_TRANSACTION_FEE'
  payload: any
}
export interface GetTxnFeeRequest {
  type: 'GET_TRANSACTION_FEE_REQUEST'
  payload: any
}

export interface GetUtil {
  type: 'GET_UTILIZATION'
  payload: any
}
export interface GetUtilRequest {
  type: 'GET_UTILIZATION_REQUEST'
}
export interface GetValidatorsTopLeaderboardRequest {
  type: 'GET_VALIDATORS_TOP_LEADERBOARD_REQUEST'
}

export interface GetValidatorsTopLeaderboard {
  type: 'GET_VALIDATORS_TOP_LEADERBOARD'
  payload: any
}

export interface ValidatorError {
  type: 'VALIDATOR_ERROR'
  payload: any
}

export interface GetTokenDetailRequest {
  type: 'GET_TOKEN_DETAIL_REQUEST'
  payload: any
}

export interface GetTokenDetailResponse {
  type: 'GET_TOKEN_DETAIL_RESPONSE'
  payload: any
}

export interface GetTokenDetailInfoRequest {
  type: 'GET_TOKEN_DETAIL_INFO_REQUEST'
  payload: any
}

export interface GetTokenDetailInfo {
  type: 'GET_TOKEN_DETAIL_INFO'
  payload: any
}

export interface GetTokenDetailError {
  type: 'GET_TOKEN_DETAIL_ERROR'
  payload: any
}

export interface GetTopTokenHoldersError {
  type: 'GET_TOP_TOKEN_HOLDERS_ERROR'
  payload: any
}

export interface UpdateAddressRequest {
  type: 'UPDATE_ADDRESS_REQUEST'
  payload: any
}

export interface UpdateAddressInfo {
  type: 'UPDATE_ADDRESS_INFO'
  payload: any
}

export interface UpdateAddressError {
  type: 'UPDATE_ADDRESS_ERROR'
  payload: any
}

export interface GetSearch {
  type: 'GET_SEARCH'
  payload: any
}
export interface GetSearchRequest {
  type: 'GET_SEARCH_REQUEST'
}
export interface GetSearchError {
  type: 'GET_SEARCH_ERROR'
  payload: any
}
export interface GetRegistRequest {
  type: 'GET_REGIST_REQUEST'
  payload: any
}
export interface Signup {
  type: 'REGISTER_USER'
  payload: any
}
export interface Login {
  type: 'LOGIN_SUCCESS'
  payload: any
}
export interface SetCurrentUser {
  type: 'SET_CURRENT_USER'
  payload: any
}

export interface AuthError {
  type: 'AUTH_ERROR'
  payload: any
}

export interface GetTokenApproval {
  type: 'GET_TOKEN_APPROVAL'
  payload: any
}
export interface GetTokenApprovalRequest {
  type: 'GET_TOKEN_APPROVAL_REQUEST'
  payload: any
}
export interface GetTokenApprovalError {
  type: 'GET_TOKEN_APPROVAL_ERROR'
  payload: any
}
export interface CreateToken {
  type: 'CREATE_TOKEN_SUCCESS'
  payload: any
}
export interface UpdateToken {
  type: 'UPDATE_TOKEN_SUCCESS'
  payload: any
}

export interface DeleteToken {
  type: 'DELETE_TOKEN_SUCCESS'
  payload: any
}
export interface GetTokenInfo {
  type: 'GET_TOKEN_INFO_SUCCESS'
  payload: any
}
export interface GetConfirmTokenInfoRequest {
  type: 'GET_CONFIRM_TOKEN_INFO_SUCCESS_REQUEST'
  payload: any
}
export interface GetConfirmTokenInfo {
  type: 'GET_CONFIRM_TOKEN_INFO_SUCCESS'
  payload: any
}
export interface UpdateManytokenSuccess {
  type: 'UPDATE_MANY_TOKEN_SUCCESS'
  payload: any
}
export interface Get721TokenRequest {
  type: 'GET_NFT_TOKENS_REQUEST'
  payload: any
}

export interface Get721TokenSuccess {
  type: 'GET_NFT_TOKENS_SUCCESS'
  payload: any
}

export interface Get721TransferSuccess {
  type: 'GET_NFT_TOKEN_TRANSFER_SUCCESS'
  payload: any
}

//get contract internal transaction
export interface GetInternalTxnsRquest {
  type: 'GET_INTERNAL_TXNS_REQUEST'
  payload: any
}
export interface GetInternalTxns {
  type: 'GET_INTERNAL_TXNS'
  payload: any
}
export interface GetInternalTxnsFail {
  type: 'GET_INTERNAL_TXNS_FAIL'
  payload: any
}
export interface GetTokenStatisticsSuccess {
  type: 'GET_TOKEN_STATISTICS_SUCCESS'
  payload: any
}
export interface GetTopStaticsOverview {
  type: 'GET_TOPSTATIC_OVERVIEW_SUCCESS'
  payload: any
}
export interface GetNetworkStatics {
  type: 'GET_NETWORK_STATICS_SUCCESS'
  payload: any
}
export interface GetTxnStatics {
  type: 'GET_TXN_STATICS_SUCCESS'
  payload: any
}
export interface GetTopStaticsError {
  type: 'GET_TOPSTATIC_ERROR'
  payload: any
}

//get decode bytetoopcode of byteopcode in misc page
export interface GetByteToOpcodeRequest {
  type: 'GET_BYTE_TO_OPCODE_REQUEST'
  payload: any
}
export interface GetByteToOpcode {
  type: 'GET_BYTE_TO_OPCODE'
  payload: any
}
export interface GetByteToOpcodeError {
  type: 'GET_BYTE_TO_OPCODE_ERROR'
  payload: any
}

//send Transaction of Broadcast Raw Transaction of Misc page(PushTx)
export interface GetTxnDataRequest {
  type: 'GET_TXN_DATA_REQUEST'
  payload: any
}
export interface GetTxnData {
  type: 'GET_TXN_DATA'
  payload: any
}
export interface GetTxnDataError {
  type: 'GET_TXN_DATA_ERROR'
  payload: any
}

export interface GetReadContractInfo {
  type: 'GET_READ_CONTRACT'
  payload: any
}

export interface GetReadContractInfoError {
  type: 'GET_READ_CONTRACT_ERROR'
  payload: any
}

export interface GetWriteContractInfo {
  type: 'GET_WRITE_CONTRACT'
  payload: any
}

export interface GetWriteContractInfoError {
  type: 'GET_WRITE_CONTRACT_ERROR'
  payload: any
}

export interface GetMetamaskConnected {
  type: 'GET_METAMASK_CONNECTED'
  payload: any
}

export interface GetMetamaskDisConnected {
  type: 'GET_METAMASK_DISCONNECTED'
  payload: any
}

export interface GetAddressInternalTxns {
  type: 'GET_ADDRESS_INTERNAL_TXNS'
  payload: any
}

export interface GetAddressErc20Txns {
  type: 'GET_ADDRESS_ERC20_TXNS'
  payload: any
}

export interface GetAddressErc721Txns {
  type: 'GET_ADDRESS_ERC721_TXNS'
  payload: any
}

export interface GetAddressEvents {
  type: 'GET_ADDRESS_EVENTS'
  payload: any
}

export interface GetErc20TokenHolders {
  type: 'GET_ERC20_TOKEN_HOLDERS'
  payload: any
}

export interface GetErc20TopTokenHoldersRequest {
  type: 'GET_ERC20_TOPTOKEN_HOLDERS_REQUEST'
  payload: any
}

export interface GetErc20TopTokenHolders {
  type: 'GET_ERC20_TOP_TOKEN_HOLDERS'
  payload: any
}

export interface ContractNotVerified {
  type: 'CONTRACT_NOT_VERIFIED'
  payload: any
}

export interface ContractNotExist {
  type: 'CONTRACT_NOT_EXIST'
  payload: any
}

//Get contractInfo request
export interface GetContractInfoRequest {
  type: 'GET_CONTRACT_INFO_REQUEST'
}

//Get contractInfo request
export interface GetReadContractRequest {
  type: 'GET_READ_CONTRACT_REQUEST'
}

//Get contractInfo request
export interface GetWriteContractRequest {
  type: 'GET_WRITE_CONTRACT_REQUEST'
}

//Push single solidity contract verify request
export interface PushSingleSoldityVerifyRequest {
  type: 'PUSH_SINGLE_SOLIDITY_VERIFY_REQUEST'
  payload: any
}

//get single solidity contract verify success response
export interface GetSingleSolidityContractVerifySuccess {
  type: 'GET_SINGLE_SOLIDITY_VERIFY_SUCCESS'
  payload: any
}

//get single solidity contract verify error response
export interface GetSingleSolidityContractVerifyError {
  type: 'GET_SINGLE_SOLIDITY_VERIFY_ERROR'
  payload: any
}

//Push standard json solidity contract verify request
export interface PushStandardJsonSoldityVerifyRequest {
  type: 'PUSH_STANDARD_JSON_SOLIDITY_VERIFY_REQUEST'
  payload: any
}

//get standard json solidity contract verify success response
export interface GetStandardJsonSolidityContractVerifySuccess {
  type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_SUCCESS'
  payload: any
}

//get standard json solidity contract verify error response
export interface GetStandardJsonSolidityContractVerifyError {
  type: 'GET_STANDARD_JSON_SOLIDITY_VERIFY_ERROR'
  payload: any
}

//Push multiple solidity contract verify request
export interface PushMultipleSoldityVerifyRequest {
  type: 'PUSH_MULTIPLE_SOLIDITY_VERIFY_REQUEST'
  payload: any
}

//get multiple solidity contract verify success response
export interface GetMultipleSolidityContractVerifySuccess {
  type: 'GET_MULTIPLE_SOLIDITY_VERIFY_SUCCESS'
  payload: any
}

//get multiple solidity contract verify error response
export interface GetMultipleSolidityContractVerifyError {
  type: 'GET_MULTIPLE_SOLIDITY_VERIFY_ERROR'
  payload: any
}

//login success response
export interface GetLoginSuccess {
  type: 'GET_LOGIN_SUCCESS'
  payload: any
}

//get request login
export interface GetLoginReqest {
  type: 'GET_LOGIN_REQUEST'
  payload: any
}

//create txn note request
export interface CreateTxnNoteRequest {
  type: 'CREAETE_TXN_NOTE_REQUEST'
  payload: any
}

//create txn note success
export interface CreateTxnNoteSuccess {
  type: 'CREAETE_TXN_NOTE_SUCCESS'
  payload: any
}

//create txn note error
export interface CreateTxnNoteError {
  type: 'CREAETE_TXN_NOTE_ERROR'
  payload: any
}

//create txn note request
export interface ListAllTxnNoteRequest {
  type: 'LIST_ALL_TXN_NOTE_REQUEST'
  payload: any
}

//ListAll txn note success
export interface ListAllTxnNoteSuccess {
  type: 'LIST_ALL_TXN_NOTE_SUCCESS'
  payload: any
}

//ListAll txn note error
export interface ListAllTxnNoteError {
  type: 'LIST_ALL_TXN_NOTE_ERROR'
  payload: any
}

//Edit txn note request
export interface EditTxnNoteRequest {
  type: 'EDIT_TXN_NOTE_REQUEST'
  payload: any
}

//Edit txn note success
export interface EditTxnNoteSuccess {
  type: 'EDIT_TXN_NOTE_SUCCESS'
  payload: any
}

//Edit txn note error
export interface EditTxnNoteError {
  type: 'EDIT_TXN_NOTE_ERROR'
  payload: any
}

//Delete txn note request
export interface DeleteTxnNoteRequest {
  type: 'DELETE_TXN_NOTE_REQUEST'
  payload: any
}

//Delete txn note success
export interface DeleteTxnNoteSuccess {
  type: 'DELETE_TXN_NOTE_SUCCESS'
  payload: any
}

//Delete txn note error
export interface DeleteTxnNoteError {
  type: 'DELETE_TXN_NOTE_ERROR'
  payload: any
}

// Api key action goes here

//create txn note request
export interface CreateApiKeyRequest {
  type: 'CREAETE_API_KEY_REQUEST'
  payload: any
}

//create txn note success
export interface CreateApiKeySuccess {
  type: 'CREAETE_API_KEY_SUCCESS'
  payload: any
}

//create txn note error
export interface CreateApiKeyError {
  type: 'CREAETE_API_KEY_ERROR'
  payload: any
}

//create txn note request
export interface ListAllApiKeyRequest {
  type: 'LIST_ALL_API_KEY_REQUEST'
  payload: any
}

//ListAll txn note success
export interface ListAllApiKeySuccess {
  type: 'LIST_ALL_API_KEY_SUCCESS'
  payload: any
}

//ListAll txn note error
export interface ListAllApiKeyError {
  type: 'LIST_ALL_API_KEY_ERROR'
  payload: any
}

//Edit txn note request
export interface EditApiKeyRequest {
  type: 'EDIT_API_KEY_REQUEST'
  payload: any
}

//Edit txn note success
export interface EditApiKeySuccess {
  type: 'EDIT_API_KEY_SUCCESS'
  payload: any
}

//Edit txn note error
export interface EditApiKeyError {
  type: 'EDIT_API_KEY_ERROR'
  payload: any
}

//Delete txn note request
export interface DeleteApiKeyRequest {
  type: 'DELETE_API_KEY_REQUEST'
  payload: any
}

//Delete txn note success
export interface DeleteApiKeySuccess {
  type: 'DELETE_API_KEY_SUCCESS'
  payload: any
}

//Delete txn note error
export interface DeleteApiKeyError {
  type: 'DELETE_API_KEY_ERROR'
  payload: any
}

//create watch address request
export interface CreateWatchAddressRequest {
  type: 'CREAETE_WATCH_ADDRESS_REQUEST'
  payload: any
}

//create watch address success
export interface CreateWatchAddressSuccess {
  type: 'CREAETE_WATCH_ADDRESS_SUCCESS'
  payload: any
}

//create watch address error
export interface CreateWatchAddressError {
  type: 'CREAETE_WATCH_ADDRESS_ERROR'
  payload: any
}

//create watch address request
export interface ListAllWatchAddressRequest {
  type: 'LIST_ALL_WATCH_ADDRESS_REQUEST'
  payload: any
}

//ListAll watch address success
export interface ListAllWatchAddressSuccess {
  type: 'LIST_ALL_WATCH_ADDRESS_SUCCESS'
  payload: any
}

//ListAll watch address error
export interface ListAllWatchAddressError {
  type: 'LIST_ALL_WATCH_ADDRESS_ERROR'
  payload: any
}

//Edit watch address request
export interface EditWatchAddressRequest {
  type: 'EDIT_WATCH_ADDRESS_REQUEST'
  payload: any
}

//Edit watch address success
export interface EditWatchAddressSuccess {
  type: 'EDIT_WATCH_ADDRESS_SUCCESS'
  payload: any
}

//Edit watch address error
export interface EditWatchAddressError {
  type: 'EDIT_WATCH_ADDRESS_ERROR'
  payload: any
}

//Delete watch address request
export interface DeleteWatchAddressRequest {
  type: 'DELETE_WATCH_ADDRESS_REQUEST'
  payload: any
}

//Delete watch address success
export interface DeleteWatchAddressSuccess {
  type: 'DELETE_WATCH_ADDRESS_SUCCESS'
  payload: any
}

//Delete watch address error
export interface DeleteWatchAddressError {
  type: 'DELETE_WATCH_ADDRESS_ERROR'
  payload: any
}

// Token Ignore List Action Types goes here

//create ignore token request
export interface CreateIgnoreTokenRequest {
  type: 'CREAETE_IGNORE_TOKEN_REQUEST'
  payload: any
}

//create ignore token success
export interface CreateIgnoreTokenSuccess {
  type: 'CREAETE_IGNORE_TOKEN_SUCCESS'
  payload: any
}

//create ignore token error
export interface CreateIgnoreTokenError {
  type: 'CREAETE_IGNORE_TOKEN_ERROR'
  payload: any
}

//create ignore token request
export interface ListAllIgnoreTokenRequest {
  type: 'LIST_ALL_IGNORE_TOKEN_REQUEST'
  payload: any
}

//ListAll ignore token success
export interface ListAllIgnoreTokenSuccess {
  type: 'LIST_ALL_IGNORE_TOKEN_SUCCESS'
  payload: any
}

//ListAll ignore token error
export interface ListAllIgnoreTokenError {
  type: 'LIST_ALL_IGNORE_TOKEN_ERROR'
  payload: any
}

//Edit ignore token request
export interface EditIgnoreTokenRequest {
  type: 'EDIT_IGNORE_TOKEN_REQUEST'
  payload: any
}

//Edit ignore token success
export interface EditIgnoreTokenSuccess {
  type: 'EDIT_IGNORE_TOKEN_SUCCESS'
  payload: any
}

//Edit ignore token error
export interface EditIgnoreTokenError {
  type: 'EDIT_IGNORE_TOKEN_ERROR'
  payload: any
}

//Delete ignore token request
export interface DeleteIgnoreTokenRequest {
  type: 'DELETE_IGNORE_TOKEN_REQUEST'
  payload: any
}

//Delete ignore token success
export interface DeleteIgnoreTokenSuccess {
  type: 'DELETE_IGNORE_TOKEN_SUCCESS'
  payload: any
}

//Delete ignore token error
export interface DeleteIgnoreTokenError {
  type: 'DELETE_IGNORE_TOKEN_ERROR'
  payload: any
}

// Custom abi Action Types goes here

//create custom abi request
export interface CreateCustomAbiRequest {
  type: 'CREAETE_CUSTOM_ABI_REQUEST'
  payload: any
}

//create custom abi success
export interface CreateCustomAbiSuccess {
  type: 'CREAETE_CUSTOM_ABI_SUCCESS'
  payload: any
}

//create custom abi error
export interface CreateCustomAbiError {
  type: 'CREAETE_CUSTOM_ABI_ERROR'
  payload: any
}

//create custom abi request
export interface ListAllCustomAbiRequest {
  type: 'LIST_ALL_CUSTOM_ABI_REQUEST'
  payload: any
}

//ListAll custom abi success
export interface ListAllCustomAbiSuccess {
  type: 'LIST_ALL_CUSTOM_ABI_SUCCESS'
  payload: any
}

//ListAll custom abi error
export interface ListAllCustomAbiError {
  type: 'LIST_ALL_CUSTOM_ABI_ERROR'
  payload: any
}

//Edit custom abi request
export interface EditCustomAbiRequest {
  type: 'EDIT_CUSTOM_ABI_REQUEST'
  payload: any
}

//Edit custom abi success
export interface EditCustomAbiSuccess {
  type: 'EDIT_CUSTOM_ABI_SUCCESS'
  payload: any
}

//Edit custom abi error
export interface EditCustomAbiError {
  type: 'EDIT_CUSTOM_ABI_ERROR'
  payload: any
}

//Delete custom abi request
export interface DeleteCustomAbiRequest {
  type: 'DELETE_CUSTOM_ABI_REQUEST'
  payload: any
}

//Delete custom abi success
export interface DeleteCustomAbiSuccess {
  type: 'DELETE_CUSTOM_ABI_SUCCESS'
  payload: any
}

//Delete custom abi error
export interface DeleteCustomAbiError {
  type: 'DELETE_CUSTOM_ABI_ERROR'
  payload: any
}

// Fetch ZNX price request
export interface GetZNXPriceRequest {
  type: 'GET_ZNX_PRICE_REQUEST'
  payload: any
}

// Fetch ZNX price success
export interface GetZNXPriceSuccess {
  type: 'GET_ZNX_PRICE_SUCCESS'
  payload: any
}

// Fetch ZNX price
export interface GetZNXPriceError {
  type: 'GET_ZNX_PRICE_ERROR'
  payload: any
}

// Fetch BTC price request
export interface GetBTCPriceRequest {
  type: 'GET_BTC_PRICE_REQUEST'
  payload: any
}

// Fetch BTC price success
export interface GetBTCPriceSuccess {
  type: 'GET_BTC_PRICE_SUCCESS'
  payload: any
}

// Fetch BTC price
export interface GetBTCPriceError {
  type: 'GET_BTC_PRICE_ERROR'
  payload: any
}

// Fetch TOKEN price request
export interface GetTOKENPriceRequest {
  type: 'GET_TOKEN_PRICE_REQUEST'
  payload: any
}

// Fetch TOKEN price success
export interface GetTOKENPriceSuccess {
  type: 'GET_TOKEN_PRICE_SUCCESS'
  payload: any
}

// Fetch TOKEN price
export interface GetTOKENPriceError {
  type: 'GET_TOKEN_PRICE_ERROR'
  payload: any
}

//create address note request
export interface CreateAddressNoteRequest {
  type: 'CREAETE_ADDRESS_NOTE_REQUEST'
  payload: any
}

//create address note success
export interface CreateAddressNoteSuccess {
  type: 'CREAETE_ADDRESS_NOTE_SUCCESS'
  payload: any
}

//create address note error
export interface CreateAddressNoteError {
  type: 'CREAETE_ADDRESS_NOTE_ERROR'
  payload: any
}

//create address note request
export interface ListAllAddressNoteRequest {
  type: 'LIST_ALL_ADDRESS_NOTE_REQUEST'
  payload: any
}

//ListAll address note success
export interface ListAllAddressNoteSuccess {
  type: 'LIST_ALL_ADDRESS_NOTE_SUCCESS'
  payload: any
}

//ListAll address note error
export interface ListAllAddressNoteError {
  type: 'LIST_ALL_ADDRESS_NOTE_ERROR'
  payload: any
}

//Edit address note request
export interface EditAddressNoteRequest {
  type: 'EDIT_ADDRESS_NOTE_REQUEST'
  payload: any
}

//Edit address note success
export interface EditAddressNoteSuccess {
  type: 'EDIT_ADDRESS_NOTE_SUCCESS'
  payload: any
}

//Edit address note error
export interface EditAddressNoteError {
  type: 'EDIT_ADDRESS_NOTE_ERROR'
  payload: any
}

//Delete taddressxn note request
export interface DeleteAddressNoteRequest {
  type: 'DELETE_ADDRESS_NOTE_REQUEST'
  payload: any
}

//Delete address note success
export interface DeleteAddressNoteSuccess {
  type: 'DELETE_ADDRESS_NOTE_SUCCESS'
  payload: any
}

//Delete address note error
export interface DeleteAddressNoteError {
  type: 'DELETE_ADDRESS_NOTE_ERROR'
  payload: any
}

//Get Request statistics for admin panel request
export interface GetRequestLogStatisticsRequest {
  type: 'GET_REQUEST_LOG_STATISTICS_REQUEST'
  payload: any
}

//Get Request statistics for admin panel error
export interface GetRequestLogStatisticsError {
  type: 'GET_REQUEST_LOG_STATISTICS_ERROR'
  payload: any
}

//Get Request statistics for admin panel success
export interface GetRequestLogStatisticsSuccess {
  type: 'GET_REQUEST_LOG_STATISTICS_SUCCESS'
  payload: any
}

//Get Request statistics analyze for admin panel request
export interface GetRequestLogStatisticsAnalyzeRequest {
  type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_REQUEST'
  payload: any
}

//Get Request statistics analyze for admin panel error
export interface GetRequestLogStatisticsAnalyzeError {
  type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_ERROR'
  payload: any
}

//Get Request statistics analyze for admin panel success
export interface GetRequestLogStatisticsAnalyzeSuccess {
  type: 'GET_REQUEST_LOG_STATISTICS_ANALYZE_SUCCESS'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusGeneralInquirySuccess {
  type: 'REQUEST_CONTACTUS_GENERAL_INQUIRY_SUCCESS'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusGeneralInquiryError {
  type: 'REQUEST_CONTACTUS_GENERAL_INQUIRY_ERROR'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusSupportSuccess {
  type: 'REQUEST_CONTACTUS_SUPPORT_SUCCESS'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusSupportError {
  type: 'REQUEST_CONTACTUS_SUPPORT_ERROR'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusNametaggingSuccess {
  type: 'REQUEST_CONTACTUS_NAMETAGGING_SUCCESS'
  payload: any
}

//Get Request contactus general inquiry success
export interface RequestContactusNametaggingError {
  type: 'REQUEST_CONTACTUS_NAMETAGGING_ERROR'
  payload: any
}

//Get admin all general inquiry
export interface GetFeedbacksRquest {
  type: 'GET_FEEDBACKS_REQUEST'
  payload: any
}

//Get admin all general inquiry
export interface GetFeedbacks {
  type: 'GET_FEEDBACKS'
  payload: any
}

//Get admin all general inquiry
export interface GetFeedbacksError {
  type: 'GET_FEEDBACKS_ERROR'
  payload: any
}

//Get admin all general inquiry
export interface GetNameTaggingRquest {
  type: 'GET_NAME_TAGGING_REQUEST'
  payload: any
}

//Get admin all general inquiry
export interface GetNameTagging {
  type: 'GET_NAME_TAGGING'
  payload: any
}

//Get admin all general inquiry
export interface GetNameTaggingError {
  type: 'GET_NAME_TAGGING_ERROR'
  payload: any
}

// Get Token Infomation Request
export interface GetTokenInfoRequest {
  type: 'GET_TOKENINFO_REQUEST'
  payload: any
}

// Get Token Infomation Success
export interface GetTokenInfoSuccess {
  type: 'GET_TOKENINFO_SUCCESS'
  payload: any
}

// Get Token Infomation Error
export interface GetTokenInfoError {
  type: 'GET_TOKENINFO_ERROR'
  payload: any
}

// Get All Token Request
export interface GetTokenRequest {
  type: 'GET_TOKEN_REQUEST'
  payload: any
}

// Get All Token Success
export interface GetTokenSuccess {
  type: 'GET_TOKEN_SUCCESS'
  payload: any
}

// Get All Token Error
export interface GetTokenError {
  type: 'GET_TOKEN_ERROR'
  payload: any
}

// Update Token State Request
export interface UpdateTokenStateRequest {
  type: 'UPDATE_TOKEN_STATE_REQUEST'
  payload: any
}

// Update Token State Success
export interface UpdateTokenStateSuccess {
  type: 'UPDATE_TOKEN_STATE_SUCCESS'
  payload: any
}

// Update Token State Error
export interface UpdateTokenStateError {
  type: 'UPDATE_TOKEN_STATE_ERROR'
  payload: any
}

// Update Token Infomation Request
export interface UpdateTokenInfoRequest {
  type: 'UPDATE_TOKEN_INFORMATION_REQUEST'
  payload: any
}

// Update Token Infomation Success
export interface UpdateTokenInfoSuccess {
  type: 'UPDATE_TOKEN_INFORMATION_SUCCESS'
  payload: any
}

// Update Token Infomation Error
export interface UpdateTokenInfoError {
  type: 'UPDATE_TOKEN_INFORMATION_ERROR'
  payload: any
}

// Add Token Infomation Request
export interface AddTokenInfoRequest {
  type: 'ADD_TOKEN_INFO_REQUEST'
  payload: any
}

// Add Token Infomation Success
export interface AddTokenInfoSuccess {
  type: 'ADD_TOKEN_INFO_SUCCESS'
  payload: any
}

// Add Token Infomation Fail
export interface AddTokenInfoError {
  type: 'ADD_TOKEN_INFO_ERROR'
  payload: any
}

//send message to email
export interface SendMessageRequest {
  type: 'SEND_MESSAGE_REQUEST'
  payload: any
}

//send message to email
export interface SendMessageSuccess {
  type: 'SEND_MESSAGE_SUCCESS'
  payload: any
}

//send message to email
export interface SendMessageError {
  type: 'SEND_MESSAGE_ERROR'
  payload: any
}

//delete message to email
export interface DeleteMessageRequest {
  type: 'DELETE_MESSAGE_REQUEST'
  payload: any
}

//delete message to email
export interface DeleteMessageSuccess {
  type: 'DELETE_MESSAGE_SUCCESS'
  payload: any
}

//delete message to email
export interface DeleteMessageError {
  type: 'DELETE_MESSAGE_ERROR'
  payload: any
}

//address detail statistics actions goes here
// Address analytics tab requests
export interface GetAddressDetailAnalyticsRequest {
  type: 'GET_ADDRESS_ANALYTICS_REQUEST'
}

// Address analytics tab requests
export interface GetAddressDetailAnalyticsSuccess {
  type: 'GET_ADDRESS_ANALYTICS_SUCCESS'
  payload: any
}

// Address analytics tab requests
export interface GetAddressDetailAnalyticsError {
  type: 'GET_ADDRESS_ANALYTICS_ERROR'
  payload: any
}

// get user overview request
export interface GetUserOverviewRequest {
  type: 'GET_USER_OVERVIEW_REQUEST'
  payload: any
}

// get user overview success
export interface GetUserOverviewSuccess {
  type: 'GET_USER_OVERVIEW_SUCCESS'
  payload: any
}

// get user overview error
export interface GetUserOverviewError {
  type: 'GET_USER_OVERVIEW_ERROR'
  payload: any
}

// get user profile request
export interface GetUserProfileRequest {
  type: 'GET_USER_PROFILE_REQUEST'
  payload: any
}

// get user profile success
export interface GetUserProfileSuccess {
  type: 'GET_USER_PROFILE_SUCCESS'
  payload: any
}

// get user profile error
export interface GetUserProfileError {
  type: 'GET_USER_PROFILE_ERROR'
  payload: any
}

// edit user profile req
export interface EditUserProfileRequest {
  type: 'EDIT_USER_PROFILE_REQUEST'
  payload: any
}

// edit user profile success
export interface EditUserProfileSuccess {
  type: 'EDIT_USER_PROFILE_SUCCESS'
  payload: any
}

// edit user profile success
export interface EditUserProfileError {
  type: 'EDIT_USER_PROFILE_ERROR'
  payload: any
}

// delete user profile request
export interface DeleteUserProfileRequest {
  type: 'DELETE_USER_PROFILE_REQUEST'
  payload: any
}

// delete user profile success
export interface DeleteUserProfileSuccess {
  type: 'DELETE_USER_PROFILE_SUCCESS'
  payload: any
}

// delete user profile error
export interface DeleteUserProfileError {
  type: 'DELETE_USER_PROFILE_ERROR'
  payload: any
}

// analyze token detail request
export interface TokenDetailAnalyzeRequest {
  type: 'TOKEN_DETAIL_ANALYZE_REQUEST'
  payload: any
}

// analyze token detail success
export interface TokenDetailAnalyzeSuccess {
  type: 'TOKEN_DETAIL_ANALYZE_SUCCESS'
  payload: any
}

// analyze token detail error
export interface TokenDetailAnalyzeError {
  type: 'TOKEN_DETAIL_ANALYZE_ERROR'
  payload: any
}

export type AppActionTypes =
  | GetTxnDataRequest
  | GetTxnData
  | GetTxnDataError
  | GetByteToOpcodeRequest
  | GetByteToOpcode
  | GetByteToOpcodeError
  | GetInternalTxnsRquest
  | GetInternalTxns
  | GetInternalTxnsFail
  | GetAllBlocksRequest
  | GetAllBlocksFail
  | GetAllBlocks
  | GetBlockDetailRequest
  | GetBlockDetailFail
  | GetBlockDetail
  | GetLatestChainInfoRequest
  | GetLatestChainInfoFail
  | GetLatestChainInfo
  | GetLatestTenBlocksRequest
  | GetLatestTenBlocksFail
  | GetLatestTenBlocks
  | GetBlockTransactionsRequest
  | GetBlockTransactionsFail
  | GetBlockTransactions
  | GetValidatorsTopLeaderboardRequest
  | GetValidatorsTopLeaderboard
  | ValidatorError
  | GetZnxHistoryRequest
  | GetLatestTransactionsRequest
  | GetTxDetailByTxHashRequest
  | GetAllTransactionsRequest
  | GetPendingTransactionsRequest
  | GetErc20TokensRequest
  | GetErc20TransfersRequest
  | GetEpochsRequest
  | GetEpochDetailsRequest
  | CallHistoryMethodAction
  | GetAllTransactionsType
  | TransactionErrorType
  | GetZnxHistory
  | GetLatestTransactions
  | GetTransactionDetail
  | GetPendingTransactions
  | GetErc20Token
  | GetErc20TokenSearch
  | GetErc20TokenKeyword
  | GetErc20TransactionsRequest
  | GetErc20TransactionKeyword
  | TokenError
  | ERC20SearchTransactionError
  | GetEpochs
  | EpochError
  | GetEpochDetail
  | GetTopAccountsRquest
  | GetTopAccountsFail
  | GetTopAccounts
  | AddressErrorType
  | GetAddressDetailInfoRequest
  | GetAddressDetailInfo
  | GetErc20Transfer
  | GetTokenDetailRequest
  | GetTokenDetailResponse
  | GetTokenDetailInfoRequest
  | GetTokenDetailInfo
  | GetTokenDetailError
  | GetTopTokenHoldersError
  | GetDailyTxns
  | GetDailyTxnsRequest
  | GetChartsError
  | GetTokenTransfer
  | GetTokenTransferRequest
  | GetNewAddress
  | GetNewAddressRequest
  | AverageBlockSize
  | AverageBlockSizeRequest
  | AverageBlockTime
  | AverageBlockTimeRequest
  | AverageGasPrice
  | AverageGasPriceRequest
  | TotalGasPrice
  | TotalGasPriceRequest
  | BlockReward
  | BlockRewardRequest
  | GetPendingTxns
  | GetPendingTxnsRequest
  | GetTxnFee
  | GetTxnFeeRequest
  | GetUtil
  | GetUtilRequest
  | UpdateAddressRequest
  | UpdateAddressInfo
  | UpdateAddressError
  | GetSearch
  | GetSearchRequest
  | GetSearchError
  | Signup
  | GetRegistRequest
  | AuthError
  | Login
  | SetCurrentUser
  | GetTokenApproval
  | GetTokenApprovalRequest
  | GetTokenApprovalError
  | CreateToken
  | DeleteToken
  | UpdateToken
  | GetTokenInfo
  | UpdateManytokenSuccess
  | GetConfirmTokenInfoRequest
  | GetConfirmTokenInfo
  | Get721TokenSuccess
  | Get721TransferSuccess
  | GetTokenStatisticsSuccess
  | GetTopStaticsOverview
  | GetTopStaticsError
  | GetNetworkStatics
  | GetTxnStatics
  | GetReadContractInfo
  | GetReadContractInfoError
  | GetMetamaskConnected
  | GetWriteContractInfo
  | GetWriteContractInfoError
  | GetMetamaskDisConnected
  | GetAddressInternalTxns
  | GetAddressErc20Txns
  | GetAddressErc721Txns
  | GetAddressEvents
  | GetErc20TokenHolders
  | GetErc20TopTokenHolders
  | ContractNotVerified
  | ContractNotExist
  | GetErc20TopTokenHoldersRequest
  | GetContractInfoRequest
  | GetReadContractRequest
  | GetWriteContractRequest
  | PushSingleSoldityVerifyRequest
  | GetSingleSolidityContractVerifySuccess
  | GetSingleSolidityContractVerifyError
  | PushStandardJsonSoldityVerifyRequest
  | GetStandardJsonSolidityContractVerifySuccess
  | GetStandardJsonSolidityContractVerifyError
  | PushMultipleSoldityVerifyRequest
  | GetMultipleSolidityContractVerifySuccess
  | GetMultipleSolidityContractVerifyError
  | GetLoginSuccess
  | GetLoginReqest
  | CreateTxnNoteRequest
  | CreateTxnNoteSuccess
  | CreateTxnNoteError
  | EditTxnNoteRequest
  | EditTxnNoteSuccess
  | EditTxnNoteError
  | DeleteTxnNoteRequest
  | DeleteTxnNoteSuccess
  | DeleteTxnNoteError
  | ListAllTxnNoteRequest
  | ListAllTxnNoteSuccess
  | ListAllTxnNoteError
  | CreateApiKeyRequest
  | CreateApiKeySuccess
  | CreateApiKeyError
  | EditApiKeyRequest
  | EditApiKeySuccess
  | EditApiKeyError
  | DeleteApiKeyRequest
  | DeleteApiKeySuccess
  | DeleteApiKeyError
  | ListAllApiKeyRequest
  | ListAllApiKeySuccess
  | ListAllApiKeyError
  | CreateWatchAddressRequest
  | CreateWatchAddressSuccess
  | CreateWatchAddressError
  | EditWatchAddressRequest
  | EditWatchAddressSuccess
  | EditWatchAddressError
  | DeleteWatchAddressRequest
  | DeleteWatchAddressSuccess
  | DeleteWatchAddressError
  | ListAllWatchAddressRequest
  | ListAllWatchAddressSuccess
  | ListAllWatchAddressError
  | CreateIgnoreTokenRequest
  | CreateIgnoreTokenSuccess
  | CreateIgnoreTokenError
  | EditIgnoreTokenRequest
  | EditIgnoreTokenSuccess
  | EditIgnoreTokenError
  | DeleteIgnoreTokenRequest
  | DeleteIgnoreTokenSuccess
  | DeleteIgnoreTokenError
  | ListAllIgnoreTokenRequest
  | ListAllIgnoreTokenSuccess
  | ListAllIgnoreTokenError
  | CreateCustomAbiRequest
  | CreateCustomAbiSuccess
  | CreateCustomAbiError
  | EditCustomAbiRequest
  | EditCustomAbiSuccess
  | EditCustomAbiError
  | DeleteCustomAbiRequest
  | DeleteCustomAbiSuccess
  | DeleteCustomAbiError
  | ListAllCustomAbiRequest
  | ListAllCustomAbiSuccess
  | ListAllCustomAbiError
  | GetZNXPriceRequest
  | GetZNXPriceSuccess
  | GetZNXPriceError
  | GetBTCPriceRequest
  | GetBTCPriceSuccess
  | GetBTCPriceError
  | GetTOKENPriceRequest
  | GetTOKENPriceSuccess
  | GetTOKENPriceError
  | CreateAddressNoteRequest
  | CreateAddressNoteSuccess
  | CreateAddressNoteError
  | EditAddressNoteRequest
  | EditAddressNoteSuccess
  | EditAddressNoteError
  | DeleteAddressNoteRequest
  | DeleteAddressNoteSuccess
  | DeleteAddressNoteError
  | ListAllAddressNoteRequest
  | ListAllAddressNoteSuccess
  | ListAllAddressNoteError
  | GetRequestLogStatisticsRequest
  | GetRequestLogStatisticsError
  | GetRequestLogStatisticsSuccess
  | GetRequestLogStatisticsAnalyzeRequest
  | GetRequestLogStatisticsAnalyzeError
  | GetRequestLogStatisticsAnalyzeSuccess
  | RequestContactusGeneralInquirySuccess
  | RequestContactusGeneralInquiryError
  | RequestContactusSupportSuccess
  | RequestContactusSupportError
  | RequestContactusNametaggingSuccess
  | RequestContactusNametaggingError
  | GetFeedbacksRquest
  | GetFeedbacks
  | GetFeedbacksError
  | GetNameTaggingRquest
  | GetNameTagging
  | GetNameTaggingError
  | GetTokenRequest
  | GetTokenSuccess
  | GetTokenError
  | UpdateTokenStateRequest
  | UpdateTokenStateSuccess
  | UpdateTokenStateError
  | UpdateTokenInfoRequest
  | UpdateTokenInfoSuccess
  | UpdateTokenInfoError
  | AddTokenInfoRequest
  | AddTokenInfoSuccess
  | AddTokenInfoError
  | GetTokenInfoRequest
  | GetTokenInfoSuccess
  | GetTokenInfoError
  | SendMessageRequest
  | SendMessageSuccess
  | SendMessageError
  | DeleteMessageRequest
  | DeleteMessageSuccess
  | DeleteMessageError
  | GetAddressDetailAnalyticsRequest
  | GetAddressDetailAnalyticsSuccess
  | GetAddressDetailAnalyticsError
  | GetUserOverviewRequest
  | GetUserOverviewSuccess
  | GetUserOverviewError
  | GetUserProfileRequest
  | GetUserProfileSuccess
  | GetUserProfileError
  | EditUserProfileRequest
  | EditUserProfileSuccess
  | EditUserProfileError
  | DeleteUserProfileRequest
  | DeleteUserProfileSuccess
  | DeleteUserProfileError
  | Get721TokenRequest
  | TokenDetailAnalyzeRequest
  | TokenDetailAnalyzeSuccess
  | TokenDetailAnalyzeError
