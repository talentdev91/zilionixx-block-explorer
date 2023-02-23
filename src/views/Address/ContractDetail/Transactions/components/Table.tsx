import React from 'react'
import classnames from 'classnames'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { numberWithCommas } from '../../../../../common/utils'
//material-ui components
import { TableRow, TableCell, Box, Paper, TableContainer } from '@material-ui/core'
import { Link } from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

//components
import Dropdown from './popper'
import { Filter } from './FilterIcon'
import TableInfo from './TableInfo'
import Spinner from '../../../../../components/Spinner/Spinner'
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  StyledMethodBtn,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../../Styles'
interface CustomizedTableProps {
  columns: any
  txns: any
  loading: any
}

const AddressTxnsTable: React.FC<CustomizedTableProps> = ({ txns, columns, loading }) => {
  const classes = useStyles()
  const { address } = useParams<any>()

  const [ageStatus, setAgeStatus] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')

  const onAgeClick = () => {
    if (ageStatus === 'Age') {
      setAgeStatus('Date Time (UTC)')
      setTipTitle('Click to show Age Format')
    } else {
      setTipTitle('Click to show DateTime Format')
      setAgeStatus('Age')
    }
  }

  const createdTime = (timestamp: any) => {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const minuteStr = minutes < 10 ? '0' + minutes : minutes
    const seconds = date.getUTCSeconds()
    const secondStr = seconds < 10 ? '0' + seconds : seconds
    const timeformat = `${year}-${month}-${day} ${hours}:${minuteStr}:${secondStr}`

    return timeformat
  }

  const pastTime = (timestamp: any) => {
    timestamp = Number(timestamp)
    const differenceSeconds = Math.floor(Date.now() / 1000) - timestamp
    const d = Math.floor(differenceSeconds / (3600 * 24))
    const h = Math.floor((differenceSeconds % (3600 * 24)) / 3600)
    const m = Math.floor((differenceSeconds % 3600) / 60)
    const s = Math.floor(differenceSeconds % 60)

    const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : ''
    const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
    const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''
    const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
    const differenceTime =
      d > 0
        ? `${dDisplay} ${hDisplay} ago`
        : h > 0
          ? `${hDisplay} ${mDisplay} ago`
          : m > 0
            ? `${mDisplay} ${sDisplay} ago`
            : `${sDisplay} ago`

    return differenceTime
  }

  return (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>
          <TableInfo />
        </Box>
        <Box>
          <Dropdown address={address} />
        </Box>
      </StyledTableControlBox>
      {(loading && (
        <div>
          <Spinner />
        </div>
      )) || (
          <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
            <StyledTable aria-label="custom pagination table">
              <StyledTableHead>
                <TableRow>
                  {columns.map((column: any, key: any) => {
                    if (column === 'Method') {
                      return (
                        <StyledTableCell key={key}>
                          {column}
                          <StyledTooltip
                            placement="top"
                            title="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                            arrow
                          >
                            <InfoOutlinedIcon
                              style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }}
                            />
                          </StyledTooltip>
                        </StyledTableCell>
                      )
                    } else if (column === 'From') {
                      return (
                        <StyledTableCell key={key}>
                          <div style={{ display: 'flex' }}>
                            From
                            <Filter />
                          </div>
                        </StyledTableCell>
                      )
                    } else if (column === 'To') {
                      return (
                        <StyledTableCell key={key}>
                          <div style={{ display: 'flex' }}>
                            To
                            <Filter />
                          </div>
                        </StyledTableCell>
                      )
                    } else if (column === 'Age') {
                      return (
                        <StyledTableCell key={key}>
                          <StyledTooltip title={tiptitle} arrow>
                            <StyledAgeBtn onClick={onAgeClick}>{ageStatus}</StyledAgeBtn>
                          </StyledTooltip>
                        </StyledTableCell>
                      )
                    }
                    return <StyledTableCell key={key}>{column}</StyledTableCell>
                  })}
                </TableRow>
              </StyledTableHead>
              <StyledTableBody>
                {txns.map((tx: any, key: any) => (
                  <TableRow key={key} className={classes.rowstyle}>
                    <StyledTableCell>
                      <StyledLink to={`/tx/${tx.hash}`} style={{ display: 'flex' }}>
                        {tx.status ? (
                          ''
                        ) : (
                          <StyledTooltip title="Txn Receipt status fail" arrow placement="top">
                            <i className="fas fa-exclamation-circle" style={{ color: '#de4437', marginRight: '4px' }} />
                          </StyledTooltip>
                        )}
                        <StyledTextOverflow>{tx.hash}</StyledTextOverflow>
                      </StyledLink>
                    </StyledTableCell>
                    <StyledTableCell>
                      {tx.token ? (
                        <StyledTooltip title={`${tx.token.method}`} arrow placement="top">
                          <StyledMethodBtn>
                            {tx.token && tx.token.decodeMethodData && tx.token.decodeMethodData.method
                              ? tx.token.decodeMethodData.method
                              : tx.input === '0x'
                                ? 'Transfer'
                                : tx.input.slice(0, 10)}
                          </StyledMethodBtn>
                        </StyledTooltip>
                      ) : (
                        <StyledTooltip
                          title={`${tx.input === '0x' ? 'Transfer' : tx.input.slice(0, 10)}`}
                          arrow
                          placement="top"
                        >
                          <StyledMethodBtn>{tx.input === '0x' ? 'Transfer' : tx.input.slice(0, 10)}</StyledMethodBtn>
                        </StyledTooltip>
                      )}
                    </StyledTableCell>
                    <StyledTableCell>
                      <StyledLink to={`/block/${tx.blockNumber}`}>{tx.blockNumber}</StyledLink>
                    </StyledTableCell>
                    <StyledTableCell>
                      {ageStatus === 'Age' ? pastTime(tx.timestamp) : createdTime(tx.timestamp)}
                    </StyledTableCell>
                    <StyledTableCell>
                      {address === tx.from ? (
                        <StyledTooltip title={tx.from} arrow>
                          <StyledTextOverflow>{tx.from}</StyledTextOverflow>
                        </StyledTooltip>
                      ) : (
                        <StyledLink to={`/address/${tx.from}`}>
                          <StyledTooltip title={tx.from} arrow>
                            <StyledTextOverflow>
                              <span style={{ color: '#828A95', marginRight: '4px' }}>
                                <i className="far fa-file-alt"></i>
                              </span>
                              {tx.from}
                            </StyledTextOverflow>
                          </StyledTooltip>
                        </StyledLink>
                      )}
                    </StyledTableCell>
                    <StyledTableCell>
                      {address === tx.from ? (
                        <span className={classnames(classes.outstyle, classes.directionStyle)}>OUT</span>
                      ) : (
                        <span className={classnames(classes.instyle, classes.directionStyle)}>IN</span>
                      )}
                    </StyledTableCell>
                    <StyledTableCell>
                      {address === tx.to ? (
                        <StyledTooltip title={tx.to} arrow>
                          <StyledTextOverflow>{tx.to}</StyledTextOverflow>
                        </StyledTooltip>
                      ) : (
                        <StyledLink to={`/address/${tx.to ? tx.to : tx.contractAddress}`}>
                          <StyledTooltip title={tx.to ? tx.to : tx.contractAddress} arrow>
                            <StyledTextOverflow>
                              <span style={{ color: '#828A95', marginRight: '4px' }}>
                                <i className="far fa-file-alt"></i>
                              </span>
                              {tx.to ? tx.to : 'Create Contract'}
                            </StyledTextOverflow>
                          </StyledTooltip>
                        </StyledLink>
                      )}
                    </StyledTableCell>
                    <StyledTableCell>{numberWithCommas(tx.value / Math.pow(10, 18))} ZNX</StyledTableCell>
                    <StyledTableCell style={{ color: '#77838f', fontSize: '80%' }}>
                      {tx.gasUsed
                        ? numberWithCommas((tx.gasUsed * tx.gasPrice) / Math.pow(10, 18))
                        : numberWithCommas((tx.gas * tx.gasPrice) / Math.pow(10, 18))}
                    </StyledTableCell>
                  </TableRow>
                ))}
                {!loading && txns.length === 0 && (
                  <TableRow>
                    <TableCell style={{ padding: '10px' }} colSpan={12}>
                      <StyledEmptyRowBox>
                        There are no matching entries
                      </StyledEmptyRowBox>
                    </TableCell>
                  </TableRow>
                )}
              </StyledTableBody>
            </StyledTable>
          </TableContainer>
        )}
      <StyledTableControlBox my="12px">
        <Box></Box>
        <Box className={classes.tooltipdown}>
          [Download&nbsp;
          <span>
            <Link to="#" style={{ textDecoration: 'none', color: '#3498db' }}>
              CSV Exoort&nbsp;
            </Link>
            <i className="fas fa-download"></i>
          </span>
          ]
        </Box>
      </StyledTableControlBox>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  txns: state.address.txns,
  transactionCnt: state.address.transactionCnt,
  loading: state.address.loading,
})

export default connect(mapStateToProps)(AddressTxnsTable)
