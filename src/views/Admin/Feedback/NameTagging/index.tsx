import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Theme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

//components
import Table from './components/Table'
import TableInfo from './components/TableInfo'
import { getNameTagging } from '../../../../store/actions/admin'
import { AppState } from '../../../../store/configureStore'

interface AccountsProps {
  getNameTagging: (page: any, rowsPerPage: any, type: number) => void
  feedbacks: any
  totalCount: number
  loading: boolean
  error: string
  feedbackStatus: string
}

function SupportIssue({ getNameTagging, feedbacks, totalCount, loading, error, feedbackStatus }: AccountsProps) {
  const columns = [
    '',
    'No',
    'name',
    'email',
    'company_name',
    'company_site',
    'comment',
    'response',
    'status',
    'Action',
  ]

  const StyledPageTitle = withStyles((theme: Theme) => ({
    root: {
      padding: '12px 0',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
      fontWeight: 400,
      fontSize: '15px',
    },
  }))(Typography)

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
    getNameTagging(page, rowsPerPage, 3)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, feedbackStatus])

  return feedbacks !== undefined && !loading ? (
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
  ) : (
    <StyledPageTitle>Loading...</StyledPageTitle>
  )
}

const mapStateToProps = (state: AppState) => ({
  feedbacks: state.admin.nameTaggingData,
  totalCount: state.admin.nameTaggingCount,
  error: state.admin.nameTaggingError,
  loading: state.admin.nameTaggingLoading,
  feedbackStatus: state.admin.feedbackStatus,
})
export default connect(mapStateToProps, { getNameTagging })(SupportIssue)
