import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import CustomABI from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
import { listAllCustomAbis } from '../../../../store/actions/user'
import { isEmptyObject } from '../../../../common/utils'

interface ABITableProps {
  listAllCustomAbis: (username: string, page: any, rowsPerPage: any) => void
  loading: boolean
  customABINotes: any
  totalCount: any
  user: any
  error: any
  AbiStatus: any
}

const ABITable = ({ listAllCustomAbis, loading, customABINotes, totalCount, user, error, AbiStatus }: ABITableProps) => {
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
    listAllCustomAbis(user.name, page, rowsPerPage)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])
  
  return (
    !loading ?
    <CustomABI
      tableInfo={() => TableInfo(!isEmptyObject(customABINotes) ? totalCount : 0)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={customABINotes}
      totalCount={totalCount}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      loading={loading}
      error={error}
      AbiStatus={AbiStatus}
    />
    :
    <div>Loading...</div>
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.customAbiLoading,
  customABINotes: state.user.customAbiSuccessResponse,
  AbiStatus: state.user.customAbiChangeCode,
  totalCount: state.user.customAbiTotalCount,
  error: state.user.customAbiError,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllCustomAbis })(ABITable)
