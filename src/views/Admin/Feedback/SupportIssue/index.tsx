import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

//components
import Table from './components/Table'
import TableInfo from './components/TableInfo'
import { getFeedbacks } from '../../../../store/actions/admin'

interface AccountsProps {
  getFeedbacks: (page: any, rowsPerPage: any, type: number) => void
  feedbacks: any
  totalCount: number
  loading: boolean
  error: string
  feedbackStatus: string
}

function SupportIssue({ getFeedbacks, feedbacks, totalCount, loading, error, feedbackStatus }: AccountsProps) {
  const columns = ['', 'No', 'name', 'email', 'message', 'response', 'status', 'Action']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getFeedbacks(page, rowsPerPage, 2)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, feedbackStatus])

  return (
    feedbacks !== undefined && (
      <div style={{ marginTop: 12 }}>
        <Table
          tableInfo={() => TableInfo(totalCount, feedbacks.length)}
          rowsPerPage={rowsPerPage}
          page={page}
          columns={columns}
          rows={feedbacks}
          totalCount={totalCount}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
          error={error}
          feedbackStatus={feedbackStatus}
        />
      </div>
    )
  )
}

const mapStateToProps = (state: AppState) => ({
  feedbacks: state.admin.requestFeedbackData,
  totalCount: state.admin.requestFeedbackCount,
  error: state.admin.requestFeedbackError,
  loading: state.admin.requestFeedbackLoading,
  feedbackStatus: state.admin.feedbackStatus,
})
export default connect(mapStateToProps, { getFeedbacks })(SupportIssue)
