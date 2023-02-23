import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import TxnNoteTable from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
import { listAllTxnNotes } from '../../../../store/actions/user'
import { isEmptyObject } from '../../../../common/utils'

interface TxnNoteTableProps {
  listAllTxnNotes: (username: string, page: any, rowsPerPage: any) => void
  loading: boolean
  txnNotes: any
  totalCount: any
  user: any
  error: any
  txnStatus: any
}

const TxnTable = ({ listAllTxnNotes, loading, txnNotes, user, totalCount, error, txnStatus }: TxnNoteTableProps) => {
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
    listAllTxnNotes(user.name, page, rowsPerPage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])
  return (
    <TxnNoteTable
      tableInfo={() => TableInfo(!isEmptyObject(txnNotes) ? totalCount : 0)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={txnNotes}
      totalCount={totalCount}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      loading={loading}
      error={error}
      txnStatus={txnStatus}
    />
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.txnNoteLoading,
  txnNotes: state.user.txnNoteSuccessResponse,
  txnStatus: state.user.txnNoteChangeCode,
  totalCount: state.user.txnNoteTotalCount,
  error: state.user.txnNoteError,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllTxnNotes })(TxnTable)
