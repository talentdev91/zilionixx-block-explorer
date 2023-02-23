import React, { useEffect } from 'react'

//components
import Table from './components/Table'
import TableInfo from './components/TableInfo'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { columns } from './data'
import { listAllAddressNotes } from '../../../../store/actions/user'
import { isEmptyObject } from '../../../../common/utils'


interface AddressNoteTableProps {
  listAllAddressNotes: (username: string, page: any, rowsPerPage: any) => void
  loading: boolean
  addressNotes: any
  totalCount: any
  error: any
  msg: any
  user: any
}

const AddressTable = ({ listAllAddressNotes, loading, addressNotes, user, totalCount, error, msg }: AddressNoteTableProps) => {
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
    listAllAddressNotes(user.name, page, rowsPerPage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, msg])

  return (
    addressNotes !== undefined &&
    <Table
      tableInfo={() => TableInfo(!isEmptyObject(addressNotes) ? totalCount : 0)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={addressNotes}
      totalCount={totalCount}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      loading={loading}
      error={error}
      msg={msg}
    />
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.addressNoteLoading,
  addressNotes: state.user.addressNoteSuccessResponse,
  totalCount: state.user.addressNoteTotalCount,
  error: state.user.addressNoteError,
  msg: state.user.addressNoteMsg,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllAddressNotes })(AddressTable)