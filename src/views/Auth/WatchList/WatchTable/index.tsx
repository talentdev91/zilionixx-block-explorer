import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import WatchTable from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
import { listAllWatchAddresss } from '../../../../store/actions/user'

interface WatchListProps {
  listAllWatchAddresss: (username: string, page: any, rowsPerPage: any) => void
  loading: boolean
  addressWatchLists: any
  totalCount: any
  user: any
}

const TopAccounts = ({ listAllWatchAddresss, loading, addressWatchLists, user, totalCount }: WatchListProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  useEffect(() => {
    listAllWatchAddresss(user.name, page, rowsPerPage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])
  return (
    addressWatchLists !== undefined && (
      <WatchTable
        tableInfo={() => TableInfo(totalCount, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={addressWatchLists}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        loading={loading}
        totalCount={totalCount}
      />
    )
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.watchAddressLoading,
  addressWatchLists: state.user.watchAddressSuccessResponse,
  totalCount: state.user.watchAddressTotalCount,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllWatchAddresss })(TopAccounts)
