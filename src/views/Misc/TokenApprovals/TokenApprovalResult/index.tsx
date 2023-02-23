import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getErc20Tokens } from '../../../../store/actions/token'

//components
import TokenApprovalTable from './components/Table'
import { StyledContainer } from '../../../../components/StyledContainer'
import TableInfo from './components/TableInfo'
import { useStyles } from './TableStyle'

interface ViewTokenProps {
  getErc20Tokens: (page: any, rowsPerPage: any) => void
  erc20tokens: any
  totalErc20Cnt: any
}
const TokenApprovalResult: React.FC<ViewTokenProps> = ({ getErc20Tokens, erc20tokens, totalErc20Cnt }) => {
  const columns = ['#', 'Txn Hash	', 'Block', 'Contract', 'Approved Spender', 'Approved Amount', 'Last Updated(UTC)']
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)
  console.log(totalErc20Cnt)
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, erc20tokens.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getErc20Tokens(page, rowsPerPage)
  }, [page, rowsPerPage, getErc20Tokens])

  return (
    <TokenApprovalTable
      tableInfo={() => TableInfo(totalErc20Cnt)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={erc20tokens}
      totalErc20Cnt={totalErc20Cnt}
      columns={columns}
      emptyRows={emptyRows}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
    />
  )
}
const mapStateToProps = (state: AppState) => ({
  erc20tokens: state.token.erc20tokens,
  totalErc20Cnt: state.token.totalErc20Cnt,
})

export default connect(mapStateToProps, { getErc20Tokens })(TokenApprovalResult)
