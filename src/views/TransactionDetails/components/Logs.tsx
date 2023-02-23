import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
// material-ui
import { Button, ButtonGroup, Avatar, Box, Grid, Divider } from '@material-ui/core'

// components
import { StyledLink } from '../../Resource/TopStatistics/components/CustomLink'
import TxLogMatchTopicDropDown from '../../../components/DropDownMenu/TxLogMatchTopicDropDown'
import { DecHexDropDown } from '../../../components/DropDownMenu/DecHexDropDown'
import { useStyles, CodePaper } from '../Style'

interface LogsProps {
  transaction: any
}

function Logs({ transaction }: LogsProps) {
  const logs = transaction.logs
  const classes = useStyles()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 600)
  const [test, setTest] = React.useState(false)
  const [isDecBtnClicked, setIsDecBtnClicked] = React.useState(new Array(logs.length).fill(false))

  var logDecStatusArray = new Array(logs.length)

  for (var i = 0; i < logs.length; i++) {
    logDecStatusArray[i] = new Array(logs[i].topics.length).fill(false)
  }
  const [topicsDecodeStatus, setTopicsDecodeStatus] = React.useState(logDecStatusArray)

  const handleTopicsDecodeStatus = (tmpDecodeArray: any) => {
    setTopicsDecodeStatus(tmpDecodeArray)
    setTest(!test)
  }

  const handleHexDec = (logIndex: any, hexOrDec: string) => {
    let tmp = isDecBtnClicked
    if (hexOrDec === 'hex') tmp[logIndex] = false
    else tmp[logIndex] = true
    setIsDecBtnClicked([...tmp])
  }

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        const ismobile = window.innerWidth < 600
        if (ismobile !== isMobile) setIsMobile(ismobile)
      },
      false,
    )
  }, [isMobile])

  // const logs = txData
  return (
    <div className={classes.logsContent}>
      <Box mt={1} mb={3}>
        <span className={classes.transactionStyle} >
          Transaction Receipt Event Logs
        </span>
      </Box>
      {logs.map((log: any, logIndex: any) => {
        return log.topicDetail ? (
          <div>
            {
              logIndex !== 0 &&
              <Divider className={classes.divider} key={nanoid()} />
            }
            <Box mt={3} mb={3} key={nanoid()}>
              <Grid container spacing={2}>
                <Grid item xs={2} sm={1} md={1}>
                  <Avatar className={classes.logsNumber}>{log.logIndex}</Avatar>
                </Grid>
                <Grid item xs={10} sm={11} md={11}>
                  <Grid container spacing={2}>
                    <Grid item sm={2} className={classes.pullRight} style={{ alignSelf: 'center' }}>
                      <span className={classes.transactionStyle}>
                        <strong>Address</strong>
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={10} className={`${isMobile ? '' : classes.inline}`}>
                      <span className={classes.linkAddress}>
                        <StyledLink href={'/address/' + log.address} underline="none">
                          {log.address}
                        </StyledLink>
                      </span>
                      &nbsp;&nbsp;
                      <TxLogMatchTopicDropDown />
                    </Grid>
                    <Grid item sm={2} className={classes.pullRight} style={{ alignSelf: 'end' }}>
                      <span className={classes.transactionStyle}>
                        Name
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={10} style={{ alignSelf: 'start', overflowWrap: 'break-word' }}>
                      <span className={classes.contractMethod}>
                        {log.topicDetail.name}&nbsp;{'('}
                        {log.topicDetail.inputs.map((input: any, inputIndex: any, { length }: any) => {
                          return (
                            <span key={nanoid()}>
                              {input.indexed ? (
                                <span className={classes.textIndex}>index_topic_{inputIndex + 1}&nbsp;</span>
                              ) : (
                                ''
                              )}
                              <span className={classes.textSuccess}>{input.type}</span>&nbsp;
                              <span className={classes.textDanger}>{input.name}</span>
                              {length !== inputIndex + 1 ? <span>,&nbsp;</span> : ''}
                            </span>
                          )
                        })}
                        )
                      </span>
                      &nbsp;
                      <StyledLink href="#" underline="none">
                        View Source
                      </StyledLink>
                    </Grid>
                    <Grid item sm={2} className={classes.pullRight}>
                      <span className={classes.transactionStyle}>
                        Topics
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      {log.topics.map((topic: any, index: any) => {
                        return (
                          <Box key={nanoid()} className={classes.inline + ' ' + classes.alignCenter} mt={1} ml={1}>
                            <Avatar variant="rounded" className={classes.rounded}>
                              {index}
                            </Avatar>
                            {index === 0 ? (
                              ''
                            ) : (
                              <>
                                <DecHexDropDown
                                  logIndex={logIndex}
                                  topicIndex={index}
                                  topicsDecodeStatus={topicsDecodeStatus}
                                  setTopicsDecodeStatus={handleTopicsDecodeStatus}
                                />
                                <i
                                  className={clsx("fas fa-long-arrow-alt-right", classes.iconArrow)}
                                ></i>
                              </>
                            )}
                            {topicsDecodeStatus[logIndex][index] ? (
                              <StyledLink
                                href={`/address/${log.topicDetail.params[(index - 1).toString()]}`}
                                underline="none"
                              >
                                {/* {logDecodeArray[logIndex]['topic' + index.toString()]} */}
                                {log.topicDetail.params[(index - 1).toString()]}
                              </StyledLink>
                            ) : (
                              <span className={classes.topicAddress}>{topic}</span>
                            )}
                          </Box>
                        )
                      })}
                    </Grid>
                    <Grid item sm={2} className={classes.pullRight} style={{ alignSelf: 'center' }}>
                      <span className={classes.transactionStyle} style={{ fontStyle: 'italic' }}>
                        Data
                      </span>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <CodePaper>
                        {log.data === '0x' ? (
                          log.data
                        ) : (
                          <Grid container>
                            {
                              isDecBtnClicked[logIndex]
                                ?
                                <Grid item xs={12} sm={9} className={classes.codeAddress}>
                                  <span className={classes.iconArrow}> value:</span> {log.topicDetail.params[(log.topicDetail.params.__length__ - 1).toString()]}
                                </Grid>
                                :
                                <Grid item xs={12} sm={9} className={classes.codeAddress}>
                                  {log.data}
                                </Grid>
                            }
                            <Grid item sm={3}>
                              <ButtonGroup disableElevation variant="contained" style={{ float: 'right' }}>
                                <Button
                                  className={!isDecBtnClicked[logIndex] ? classes.clickBtn : classes.unClickBtn}
                                  onClick={() => handleHexDec(logIndex, 'hex')}
                                  disableRipple
                                >
                                  Hex
                                </Button>
                                <Button
                                  className={!isDecBtnClicked[logIndex] ? classes.unClickBtn : classes.clickBtn}
                                  onClick={() => handleHexDec(logIndex, 'dec')}
                                  disableRipple
                                >
                                  Dec
                                </Button>
                              </ButtonGroup>
                            </Grid>
                          </Grid>
                        )}
                      </CodePaper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        ) : (
          <span style={{ color: 'gray', fontStyle: 'italic' }}>
            This log can not be decoded<br></br>
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  transaction: state.transaction.transaction,
})

export default connect(mapStateToProps)(Logs)
