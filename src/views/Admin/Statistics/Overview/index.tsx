import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { Box, Typography } from '@material-ui/core'
//components
import { getRequestLogStatistics } from '../../../../store/actions/admin'
import WorldMap from 'react-svg-worldmap'

interface Props {
  loading: boolean
  error: string
  data: any
  user: any
  getRequestLogStatistics: () => void
}

function Overview({ loading, error, data, user, getRequestLogStatistics }: Props) {
  const [mapData, setMapData] = React.useState([])
  React.useEffect(() => {
    getRequestLogStatistics()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name])

  React.useEffect(() => {
    if (!loading) {
      if (data.topCountries !== undefined) {
        let md = []
        for (let i = 0; i < data.topCountries.length; i++) {
          if (data.topCountries[i]._id !== null && data.topCountries[i]._id !== undefined) {
            md.push({ country: data.topCountries[i]._id.toLowerCase(), value: data.topCountries[i].count })
          }
        }
        setMapData(md)
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  // var mapData = [
  //   { country: 'CN', value: 1389618778 }, // china
  //   { country: 'IN', value: 1311559204 }, // india
  //   { country: 'US', value: 331883986 }, // united states
  //   { country: 'id', value: 264935824 }, // indonesia
  //   { country: 'pk', value: 210797836 }, // pakistan
  //   { country: 'br', value: 210301591 }, // brazil
  //   { country: 'ng', value: 208679114 }, // nigeria
  //   { country: 'bd', value: 161062905 }, // bangladesh
  //   { country: 'ru', value: 141944641 }, // russia
  //   { country: 'mx', value: 127318112 }, // mexico
  // ]
  return (
    <div>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}></Grid>
      </Grid> */}
      <Box mt={2}>
        <Box>
          <Typography variant="h3">Requests</Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">Total Request counts: {data.totalRequestsCount}</Typography>
          <Typography variant="h6">Today's Request counts: {data.todayRequestsCount}</Typography>
        </Box>
        <Box mt={4} mb={2}>
          <Typography variant="h3">Top 10 countries that visit our site</Typography>
        </Box>
        <Box>
          {mapData.length > 0 ? (
            <>
              {JSON.stringify(mapData)}
              <WorldMap
                color="green"
                title="Top 10 Countries visit our site"
                value-suffix="ips"
                size="xxl"
                data={mapData}
              />
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.admin.requestLogStatisticsLoading,
  error: state.admin.requestLogStatisticsError,
  data: state.admin.requestLogStatisticsData,
  user: state.auth.user,
})
export default connect(mapStateToProps, { getRequestLogStatistics })(Overview)
