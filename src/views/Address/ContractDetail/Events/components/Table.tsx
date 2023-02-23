import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { useParams } from 'react-router'

//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import clsx from 'clsx'
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  useStyles,
  StyledTooltip,
} from '../TableStyle'

interface CustomizedTableProps {
  tableInfo: () => void
  events: any
  loading: boolean
}

const Event: React.FC<CustomizedTableProps> = ({ tableInfo, events, loading }) => {
  const classes = useStyles()
  const { address } = useParams<any>()

  const columns = ['Txn Hash', 'Method', 'Logs']
  var eventRows: any[] = []
  const [rows, setRows] = React.useState(eventRows)
  React.useEffect(() => {
    if (!loading) {
      console.log('events in useEffect: ', events)
      if (events.length > 0) {
        setRows(events)
        console.log('rows', rows)
      }
    }
  }, [address, loading, events, rows])

  let expandedStatusList = new Array(rows.length).fill(false)

  const [expanded, setExpanded] = React.useState(expandedStatusList)
  const [clicked, setClicked] = React.useState(false)

  const handleExpandClick = (key: number) => {
    setClicked(!clicked)

    let tmpExpandedStatusList = expanded
    tmpExpandedStatusList[key] = !tmpExpandedStatusList[key]
    setExpanded(tmpExpandedStatusList)
  }

  return !loading ? (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                if (column === 'Logs') {
                  return (
                    <StyledTableCell key={key}>
                      <span>
                        <i className="fas fa-indent"></i>
                      </span>
                      &nbsp;
                      {column}
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((event: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell style={{ verticalAlign: 'top' }}>
                  <div>
                    <StyledTooltip placement="top-start" title="Txn Hash" arrow>
                      <StyledLink to="/txs">
                        <StyledTextOverflow>{event.transactionHash}</StyledTextOverflow>
                      </StyledLink>
                    </StyledTooltip>
                    <StyledTooltip placement="top" title="Block No" arrow>
                      <StyledLink to="/txs">
                        <span style={{ color: 'black' }}>#</span>
                        {event.blockNumber}
                      </StyledLink>
                    </StyledTooltip>

                    <StyledTooltip
                      placement="top"
                      title={
                        <div>
                          App filter by
                          <br />
                          Block No {event.blockNumber}
                        </div>
                      }
                      arrow
                    >
                      <span>
                        <i className="fas fa-filter" style={{ color: 'grey' }}></i>
                      </span>
                    </StyledTooltip>
                    <StyledTooltip placement="top" title="Sep-06-2021 09:17:07 PM" arrow>
                      <p className={classes.timetext}>8 hrs 20mins ago</p>
                    </StyledTooltip>
                  </div>
                </StyledTableCell>
                <StyledTableCell style={{ verticalAlign: 'top' }}>
                  <div>
                    <StyledTooltip placement="top" title="MethodID" arrow>
                      <p className={classes.methodid}>methodId</p>
                    </StyledTooltip>
                    <span>methodName</span>
                    <br />
                    <span>(param1, param2)</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell>
                  <List>
                    <ListItem onClick={() => handleExpandClick(key)} aria-expanded={false} style={{ padding: '0' }}>
                      <span
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded[key],
                        })}
                      >
                        <i className="fas fa-chevron-right" style={{ color: 'grey' }}></i>
                      </span>
                      <StyledTooltip placement="top" title="Click to View ABI Decoded View" arrow>
                        <div>
                          <span style={{ cursor: 'pointer', color: '#3498db' }}>{event.data.name} </span>
                        </div>
                      </StyledTooltip>
                      <span>
                        &nbsp;{'('}&nbsp;
                        {event.data.eventFragment.inputs.map((input: any, inputIndex: any, { length }: any) => {
                          return (
                            <span key={inputIndex}>
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
                        &nbsp;{')'}&nbsp;
                      </span>
                    </ListItem>
                    <Collapse in={expanded[key]} timeout="auto" unmountOnExit>
                      <ListItem>
                        <div>
                          {event.data.eventFragment.inputs.map((input: any, key: number) => {
                            return (
                              <>
                                <span>
                                  <span>
                                    <i style={{ color: 'grey' }}>{input.type}</i>
                                  </span>
                                  &nbsp;{input.name}
                                </span>
                                <br />
                                {input.type === 'address' ? (
                                  <StyledLink to={'/address/' + event.data.args[key]}>
                                    <span>{event.data.args[key]}</span>
                                  </StyledLink>
                                ) : (
                                  <StyledLink to="/txs">
                                    <span>{JSON.stringify(event.data.args[key])}</span>
                                  </StyledLink>
                                )}

                                <br />
                              </>
                            )
                          })}
                        </div>
                      </ListItem>
                    </Collapse>
                    <ListItem style={{ padding: 0 }}>
                      {!event.data.eventFragment.anonymous ? (
                        <div>
                          <span
                            style={{
                              color: 'grey',
                              fontSize: '.875rem',
                              fontWeight: 400,
                              lineHeight: 1.5,
                              textAlign: 'left',
                            }}
                          >
                            [topic0] {event.topics[0]}
                          </span>
                          <StyledLink to="/txs">
                            <i className="fas fa-filter" style={{ color: 'grey' }}></i>
                          </StyledLink>

                          {event.topics.length > 0 ? (
                            <div>
                              {event.topics.slice(1).map((topic: any, key: any) => {
                                return (
                                  <span>
                                    {' '}
                                    <br />
                                    [topic{key + 1}] {topic}
                                  </span>
                                )
                              })}
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      ) : (
                        <div>
                          <span
                            style={{
                              color: 'grey',
                              fontSize: '.875rem',
                              fontWeight: 400,
                              lineHeight: 1.5,
                              textAlign: 'left',
                            }}
                          >
                            [topic0] 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
                          </span>
                          <StyledLink to="/txs">
                            <i className="fas fa-filter" style={{ color: 'grey' }}></i>
                          </StyledLink>

                          <br />
                          <span>[topic1] 0x0000000000000000000000000000000000000000000000000000000000000000</span>
                          <br />
                          <span>[topic2] 0x00000000000000000000000031c40b43c3c3a471d19e1f86e5c2076c7ff0d91e</span>
                          <br />
                          <span>[topic3] 0x0000000000000000000000000000000000000000000000000000000000000005</span>
                        </div>
                      )}
                    </ListItem>
                  </List>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  events: state.address.events,
  loading: state.address.loadingEvents,
})

export default connect(mapStateToProps)(Event)
