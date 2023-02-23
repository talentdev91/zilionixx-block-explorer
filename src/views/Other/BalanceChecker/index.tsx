import { Typography, Divider, Box, Grid, InputBase, FormLabel, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

import { StyledContainer } from '../../../components/StyledContainer'
import { AppState } from '../../../store/configureStore'

import useStyles, { StyledPaper } from './style'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import 'date-fns'
import axios from 'axios'
import { BackendURL } from '../../../config/config'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Tooltip,
  Title,
  AreaSeries,
  Subtitle,
  HighchartsProvider,
  LineSeries,
} from 'react-jsx-highcharts'


function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp * 1000)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var month = months[a.getMonth()]
  var date = a.getDate()
  var time = month + date
  return time
}
const avgMonth = 12960000

function BalanceChecker() {
  const classes = useStyles()

  const [address, setAddress] = React.useState('')
  const [block, setBlock] = React.useState('')
  // const [errorName, setErrorName] = React.useState('')
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [timestamps, setTimestamps] = React.useState([])
  const [balances, setBalances] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [categories, setCategories] = React.useState([])
  const [plotOptions, setPlotOptions] = React.useState({})

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  const makeCategories = (timestamps: number[]) => {
    var list = []
    var length = timestamps.length
    list.push(timeConverter(timestamps[0]))
    var period = timestamps[length - 1] - timestamps[0]
    var months = Math.floor(period / avgMonth)
    for (let i = 0; i < months; i++) {
      list.push(timeConverter(timestamps[0] + (i + 1) * months * avgMonth))
    }
    return list
  }
  const handleLookup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('lookup called')
    const request = {
      address: address,
      fromDate: selectedDate,
      blockNo: block,
    }

    setLoading(true)
    axios
      .post(`${BackendURL}/address/balanceChecker`, request)
      .then(function (response) {
        console.log(response)
        const { success, data } = response.data
        if (success) {
          setBalances(data.balances)
          setTimestamps(data.timestamps)
          setCategories(makeCategories(timestamps))
          console.log('categories', categories)
          setSuccess(true)
          setPlotOptions({
            line: {
              series: {
                pointStart: 2010,
              },
            },
          })
        } else {
          setSuccess(false)
        }
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
        setLoading(false)
        setSuccess(false)
      })
  }
  const handleReset = () => {
    setAddress('')
    setBlock('')
    setSelectedDate(new Date())
  }

  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = curThemeName === 'lightTheme' ? 'white' : '#252525'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#000' : '#fff'

  React.useEffect(() => { }, [loading, success])

  return (
    <StyledContainer>
      <div className={classes.root}>
        <Box mb={2}>
          <Box mb={2}>
            <Typography variant="h5" color="textPrimary">
              ZNX Balance Checker
            </Typography>
          </Box>

          <Divider />
          <Box mt={2}>
            <Typography variant="body1">
              You can Lookup the Account (FTM) Historical Balance at a specific Block No or Date
            </Typography>
          </Box>
        </Box>
        <Box mt={2} mb={2}>
          <StyledPaper variant="outlined">
            <form onSubmit={handleLookup}>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <Box m={2}>
                      <FormLabel className={classes.asterisk} required>
                        Step 1 : Account / Contract Address
                      </FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Box m={1}>
                      <InputBase
                        id="address"
                        fullWidth
                        className={classes.inputField}
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="Address"
                      />
                      {/* <FormHelperText className={classes.error}>{errorName && 'Username is required'}</FormHelperText> */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mb={3}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <Box m={2}>
                      <FormLabel>Step 2 : Block No or Date for the snapshot</FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Box m={1}>
                      <Grid container>
                        <Grid item xs={12} sm={4}>
                          <Box className={classes.datePicker}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardDatePicker
                                id="date-picker-dialog"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                                InputProps={{ disableUnderline: true }}
                              />
                            </MuiPickersUtilsProvider>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} style={{ textAlign: 'center', alignSelf: 'center' }}>
                          OR
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <InputBase
                            id="block"
                            fullWidth
                            value={block}
                            className={classes.inputField}
                            onChange={(event) => setBlock(event.target.value)}
                            placeholder="BlockNo"
                          />
                        </Grid>
                      </Grid>

                      {/* <FormHelperText className={classes.error}>{errorName && 'Username is required'}</FormHelperText> */}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box mt={2} mb={2} style={{ display: 'flow-root', flexDirection: 'column', flexWrap: 'wrap' }}>
                <Button
                  style={{ float: 'right', marginRight: 10 }}
                  onClick={handleReset}
                  variant="contained"
                  className={classes.submitBtn}
                  disableRipple
                >
                  <span style={{ color: 'white', fontSize: 11 }}>Reset</span>
                </Button>
                <Button
                  style={{ float: 'right', marginRight: 3 }}
                  variant="contained"
                  type="submit"
                  className={classes.submitBtn}
                  disableRipple
                >
                  <span style={{ color: 'white', fontSize: 11 }}>Lookup</span>
                </Button>
              </Box>
            </form>
          </StyledPaper>
        </Box>
        <Box mt={2} mb={2}>
          <StyledPaper variant="outlined">
            <Box p={2}>
              <Box></Box>{' '}
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-11.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span style={{ fontSize: '.85rem' }}>SNAPSHOT DATE</span>
                        <br></br>
                        <span>
                          {selectedDate.getUTCMonth() +
                            1 +
                            '/' +
                            selectedDate.getUTCDate() +
                            '/' +
                            selectedDate.getFullYear()}
                        </span>
                      </Box>
                    </Box>
                  </StyledPaper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-2-2.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span style={{ fontSize: '.85rem' }}>BLOCK</span>
                        <br></br>
                        <span>{block}</span>
                      </Box>
                    </Box>
                  </StyledPaper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-59.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span style={{ fontSize: '.85rem' }}>TOKEN QUANTITIY</span>
                        <br></br>
                        <span>{block}</span>
                      </Box>
                    </Box>
                  </StyledPaper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-34.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span style={{ fontSize: '.85rem' }}>QUANTITIY CHANGED</span>
                        <br></br>
                        <span>{block}</span>
                      </Box>
                    </Box>
                  </StyledPaper>
                </Grid>
              </Grid>
            </Box>
          </StyledPaper>
        </Box>
        <Box mt={2} mb={2}>
          {success ? (
            <StyledPaper variant="outlined">
              <Box p={2}>
                <HighchartsProvider Highcharts={Highcharts}>
                  <HighchartsChart plotOptions={plotOptions}>
                    <Chart type="area" zoomType="x" height={450} backgroundColor={chartBackgroundColor} />
                    <Title style={{ color: titleColor }}>ZNX Balance Checker</Title>
                    <Subtitle> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix="" />
                    <XAxis
                      type="datetime"
                      labels={{ enabled: true, format: '{value:%b  %d}', align: 'center' }}
                    ></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}>ZNX Balance Value(ZNX)</YAxis.Title>
                      <AreaSeries name="Total Distinct Address" data={balances} color={chartLineColor} />
                      <LineSeries name="Installation" data={balances} />
                    </YAxis>
                  </HighchartsChart>
                </HighchartsProvider>
              </Box>
            </StyledPaper>
          ) : (
            <div></div>
          )}
        </Box>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({})
export default connect(mapStateToProps)(BalanceChecker)
