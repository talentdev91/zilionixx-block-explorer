import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import { getRequestLogStatistics, extractRouter } from '../../../../store/actions/admin'
import Table from './Components/Table'
import DomainTable from './Components/Table/domain'
import { Box, Button, Typography } from '@material-ui/core'

interface Props {
  getRequestLogStatistics: () => void
  extractRouter: () => void
  loading: boolean
  error: string
  data: any
  user: any
  loadingExtract: boolean
  successExtract: boolean
}

function RequestStatistics({
  getRequestLogStatistics,
  extractRouter,
  loading,
  error,
  data,
  user,
  loadingExtract,
  successExtract,
}: Props) {
  React.useEffect(() => {
    getRequestLogStatistics()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name])

  const handleAnalyzeRequests = async () => {
    console.log('INSIDE handleAnalyzeRequests')
    extractRouter()
  }

  return (
    <div>
      <Box>
        <Button style={{ backgroundColor: '#3498db', color: 'white' }} onClick={handleAnalyzeRequests}>
          Analyze Requests
        </Button>
        {!loadingExtract ? (
          successExtract ? (
            <div>Analazying succeed. Please refresh the page to see the update result.</div>
          ) : (
            <div>Analayzing failed. Please try again.</div>
          )
        ) : (
          <div>Analyzing...</div>
        )}
      </Box>
      <Box mt={2}>
        <Typography variant="h4">Top IP Address table with requests</Typography>

        {!loading ? <Table rows={data.uniqueIps}></Table> : <div>Loading...</div>}
      </Box>
      <Box mt={2}>
        <Typography variant="h4">Domain ranking table</Typography>

        {!loading ? <DomainTable rows={data.topDomains}></DomainTable> : <div>Loading...</div>}
      </Box>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.admin.requestLogStatisticsLoading,
  error: state.admin.requestLogStatisticsError,
  data: state.admin.requestLogStatisticsData,
  loadingExtract: state.admin.extractRouterLoading,
  successExtract: state.admin.extractRouterSuccess,
  user: state.auth.user,
})
export default connect(mapStateToProps, { getRequestLogStatistics, extractRouter })(RequestStatistics)
