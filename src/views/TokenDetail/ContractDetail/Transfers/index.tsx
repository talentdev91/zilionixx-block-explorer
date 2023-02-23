import React from 'react'
import { useParams, useLocation } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getTokenDetailbyTokenAddress, getErc20TransactionsKeyword } from '../../../../store/actions/token'

//components
import ViewTxnsTable from './components/Table'
import { columns, columnsFor721 } from './data'
import TableInfo from './components/TableInfo'
import { TOKEN_TYPE } from '../../../../common/consts'

interface TransfersProps {
  getTokenDetailbyTokenAddress: (page: any, rowsPerPage: any, tokenAddress: any) => void
  getErc20TransactionsKeyword: (page: any, rowsPerPage: any, tokenAddress: any, searchAddress: any) => void
  transferCnt: number
  rows: any
  decimals: any
  tokenType: string
  loading: boolean
}

function Transfers({ getTokenDetailbyTokenAddress, getErc20TransactionsKeyword ,transferCnt, rows, decimals, tokenType, loading }: TransfersProps) {
  const { tokenAddress } = useParams<any>()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const location = useLocation()
  const searchIndex = location.search
  const query = new URLSearchParams(searchIndex);
  var searchAddress = query.get('a')
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  
  React.useEffect(() => {
    if (searchAddress !== null && searchAddress !== '' && (searchAddress.length === 42 || searchAddress.length === 66)) {
      getErc20TransactionsKeyword(page, rowsPerPage, tokenAddress, searchAddress)
    } else {
      getTokenDetailbyTokenAddress(page, rowsPerPage, tokenAddress)
    }
  }, [page, rowsPerPage])
  
  return !loading ? (
    tokenType === TOKEN_TYPE.erc20 ? (
      <ViewTxnsTable
        tableInfo={() => TableInfo(transferCnt, loading)}
        rowsPerPage={rowsPerPage}
        totalCnt={transferCnt}
        page={page}
        rows={rows}
        columns={columns}
        loading={loading}
        decimals={parseInt(decimals)}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    ) : (
      <ViewTxnsTable
        tableInfo={() => TableInfo(transferCnt, loading)}
        rowsPerPage={rowsPerPage}
        totalCnt={transferCnt}
        page={page}
        rows={rows}
        columns={columnsFor721}
        loading={loading}
        decimals={parseInt(decimals)}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    )
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  transferCnt: state.token.transferCnt,
  rows: state.token.tokenTransfers,
  decimals: state.token.decimals,
  tokenType: state.token.tokenType,
  loading: state.token.loadingTokenDetailTransfers,
})
export default connect(mapStateToProps, { getTokenDetailbyTokenAddress, getErc20TransactionsKeyword })(Transfers)
