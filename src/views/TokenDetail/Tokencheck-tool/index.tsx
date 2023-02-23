import { Typography, Divider, Box, Grid, InputBase, FormLabel, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import DateFnsUtils from '@date-io/date-fns'

import { StyledContainer } from '../../../components/StyledContainer'
import { AppState } from '../../../store/configureStore'
import Alert from '../../../components/Alert/AlertNoIcon'
import useStyles, { StyledPaper } from './style'
import axios from 'axios'
import clsx from 'clsx';


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
  const [block, setBlock] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [accountStatus, setStatusAccount] = useState(false)
  const [account, setAccount] = useState('')
  const [contract, setContract] = useState('')
  const [errorAccount, setErrorAccount] = useState('')
  const [errorContract, setErrorContract] = useState('')
  const { tokenAddress } = useParams<any>()

  const [error, setError] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }
  const handleLookup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!block || block.length == 0) {
      setError('Block number is invalid')
      setAlertContent(error)
      setOpenAlert(true)
    }

    if (!account) {
      setErrorAccount('Account Address is invalid')
    } else if (account.length == 0) {
      setErrorAccount('Account Address is invalid')
    } else {
      setErrorAccount('')
    }

    if (!contract) {
      setErrorContract('Contract Address is invalid')
    } else if (contract.length == 0) {
      setErrorContract('Contract Address is invalid')
    } else {
      setErrorContract('')
    }
  }
  const handleReset = () => {
    setAccount('')
    setContract('')
    setBlock('')
    setSelectedDate(new Date())
  }
  const handleRadioBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusAccount(false)
  }
  const handleRadioSupplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusAccount(true)
    setAccount('')
  }
  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  // useEffect(() => {
  //   setOpenAlert(false);

  //   if (error) {
  //     setAlertContent(error)
  //     setOpenAlert(true)
  //     setAlertType('error')
  //   } else {
  //     if (tokenStatus === 1) {
  //       setAlertContent('Successfully Added new Token Ignore note')
  //       setOpenAlert(true)
  //       setAlertType('success')
  //     } else if (tokenStatus === 2) {
  //       setAlertContent('Note updated successfully')
  //       setOpenAlert(true)
  //       setAlertType('success')
  //     } else if (tokenStatus === 3) {
  //       setAlertContent('Token Ignore Note Removed')
  //       setOpenAlert(true)
  //       setAlertType('success')
  //     }
  //   }
  // }, [error, tokenStatus])

  return (
    <StyledContainer>
      <div className={classes.root}>
        <Box mb={2}>
          <Box mb={2}>
            <Typography variant="h6" color="textPrimary">
              Token Balance Checker
            </Typography>
          </Box>

          <Divider />
          <Box mt={2}>
            <Typography variant="body1">
              You can lookup the token historical balance at a specific Block No or Date
            </Typography>
          </Box>
        </Box>
        <Box mt={2} mb={2} className={classes.divDetail}>
          <StyledPaper variant="outlined">
            <form onSubmit={handleLookup}>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <Box m={2}>
                      <FormLabel className={classes.asterisk}>
                        Step 1 : Lookup For
                      </FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box m={1}>
                      <FormControl component="fieldset">
                        <RadioGroup row aria-label="token" name="token" defaultValue="balance">
                          <FormControlLabel value="balance" control={
                            <Radio
                              className={classes.radioRoot}
                              disableRipple
                              color="default"
                              onChange={handleRadioBalanceChange}
                              checkedIcon={<span className={clsx(classes.radioIcon, classes.radioCheckedIcon)} />}
                              icon={<span className={classes.radioIcon} />}
                            />} label="Token Balance" />
                          <FormControlLabel value="supply" control={
                            <Radio
                              className={classes.radioRoot}
                              disableRipple
                              color="default"
                              onChange={handleRadioSupplyChange}
                              checkedIcon={<span className={clsx(classes.radioIcon, classes.radioCheckedIcon)} />}
                              icon={<span className={classes.radioIcon} />}
                            />} label="Token Supply" />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <Box m={2}>
                      <FormLabel className={classes.asterisk} required>
                        Step 2 : Account Address
                      </FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box m={1}>
                      <InputBase
                        id="account"
                        fullWidth
                        disabled={accountStatus}
                        className={classes.inputField}
                        value={account}
                        onChange={(event) => setAccount(event.target.value)}
                        placeholder="0x"
                      />
                      {
                        !account || account.length === 0 ?
                        (
                          <Typography className={classes.error}>
                            {errorAccount}
                          </Typography>
                        )
                        :
                        (
                          <></>
                        )
                      }
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <Box m={2}>
                      <FormLabel className={classes.asterisk} required>
                        Step 3 : Contract Address
                      </FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box m={1}>
                      <InputBase
                        id="contract"
                        fullWidth
                        className={classes.inputField}
                        value={contract}
                        onChange={(event) => setContract(event.target.value)}
                        placeholder="0x"
                      />
                      {
                        !contract || contract.length === 0 ?
                        (
                          <Typography className={classes.error}>
                            {errorContract}
                          </Typography>
                        )
                        :
                        (
                          <></>
                        )
                      }
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box mb={3}>
                <Grid container>
                  <Grid item xs={12} sm={5}>
                    <Box m={2}>
                      <FormLabel>Step 4 : Block No <strong>or</strong> Date </FormLabel>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <Box m={1}>
                      <Grid container>
                        <Grid item xs={12} sm={5}>
                          <Box className={classes.datePicker}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                className={classes.dateKeybard}
                                id="date-picker-inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                            </MuiPickersUtilsProvider>
                            
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} className={classes.gridTextStyle}>
                          <Typography variant="body1">
                            OR
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                          <Grid className={classes.gridIconTextStyle}>
                            <Grid item xs={12} sm={2} className={classes.blockIcon}>
                              <div className={classes.iconStyle}>
                                <i className="fas fa-cube"></i>
                              </div>
                            </Grid>
                            <Grid item xs={12} sm={10}>
                              <InputBase
                                id="block"
                                fullWidth
                                value={block}
                                className={classes.inputBlockField}
                                onChange={(event) => setBlock(event.target.value)}
                                placeholder="Enter a Block No"
                                inputProps={{ maxlength: 11 }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box mt={2} mb={2} style={{ display: 'flow-root', flexDirection: 'column', flexWrap: 'wrap' }}>
                <Button onClick={handleReset} size="large" className={classes.submitReset} >Reset</Button>
                <Button type="submit" size="large" className={classes.submitLookup}>Lookup</Button>
              </Box>
            </form>
          </StyledPaper>
        </Box>
        <Box mt={2} mb={2} className={classes.divResult}>
          <Alert openAlert={openAlert} alertContent={alertContent} closeAlert={handleCloseAlert} alertType={alertType} />
          <StyledPaper variant="outlined">
            <Box p={2}>
              <Box></Box>{' '}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-11.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span className={classes.subDivTitle}>SNAPSHOT DATE</span>
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
                <Grid item xs={4}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-2-2.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span className={classes.subDivTitle}>BLOCK</span>
                        <br></br>
                        <span>{block}</span>
                      </Box>
                    </Box>
                  </StyledPaper>
                </Grid>
                <Grid item xs={4}>
                  <StyledPaper variant="outlined">
                    <Box m={2} display="flex">
                      <img src="/images/Other/icon-34.svg" alt="None" className={classes.symbolImg} />
                      <Box ml={2}>
                        <span className={classes.subDivTitle}>TOKEN QUANTITY</span>
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
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({})
export default connect(mapStateToProps)(BalanceChecker)
