import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import TxnNoteTable from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
import { listAllApiKeys } from '../../../../store/actions/user'
import { isEmptyObject } from '../../../../common/utils'

interface TxnNoteTableProps {
  listAllApiKeys: (username: string) => void
  loading: boolean
  apiKeys: any
  totalCount: any
  user: any
  error: any
  // txnStatus: any
}

const TxnTable = ({ listAllApiKeys, loading, apiKeys, user, totalCount, error }: TxnNoteTableProps) => {
  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {}

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {}

  useEffect(() => {
    listAllApiKeys(user.name)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name])
  return (
    <TxnNoteTable
      tableInfo={() => TableInfo(!isEmptyObject(apiKeys) ? totalCount : 0)}
      rows={apiKeys}
      totalCount={totalCount}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
      loading={loading}
      error={error}
      // txnStatus={txnStatus}
    />
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.user.apiKeyLoading,
  apiKeys: state.user.apiKeySuccessResponse,
  // txnStatus: state.user.txnNoteChangeCode,
  totalCount: state.user.apiKeyTotalCount,
  error: state.user.apiKeyError,
  user: state.auth.user,
})
export default connect(mapStateToProps, { listAllApiKeys })(TxnTable)
