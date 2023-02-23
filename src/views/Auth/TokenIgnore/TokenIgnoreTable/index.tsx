import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import TokenIgnore from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
import { listAllIgnoreTokens } from '../../../../store/actions/user'
import { isEmptyObject } from '../../../../common/utils'

interface TokenTableProps {
  listAllIgnoreTokens: (username: string, page: any, rowsPerPage: any) => void
  loading: boolean
  ignoreTokenNotes: any
  totalCount: any
  user: any
  error: any
  tokenStatus: any
}

const TokenTable = ({ listAllIgnoreTokens, loading, ignoreTokenNotes, user, totalCount, error, tokenStatus }: TokenTableProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  useEffect(() => {
    listAllIgnoreTokens(user.name, page, rowsPerPage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])
  
  return (
    <TokenIgnore
      tableInfo={() => TableInfo(!isEmptyObject(ignoreTokenNotes) ? totalCount : 0)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={ignoreTokenNotes}
      totalCount={totalCount}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      loading={loading}
      error={error}
      tokenStatus={tokenStatus}
    />
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.ignoreTokenLoading,
  ignoreTokenNotes: state.user.ignoreTokenSuccessResponse,
  tokenStatus: state.user.txnNoteChangeCode,
  totalCount: state.user.ignoreTokenTotalCount,
  error: state.user.ignoreTokenError,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllIgnoreTokens })(TokenTable)
