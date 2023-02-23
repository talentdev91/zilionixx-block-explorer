import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { numberWithCommas } from '../../../../../common/utils'
//material-ui
import { TableBody, TableRow, TableCell, Typography, Box, Paper, TableContainer } from '@material-ui/core'

//component
import TableInfo from './TableInfo'
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
  StyledEmptyRowBox,
} from '../TableStyle'

import { getAddressErc721Txns } from '../../../../../store/actions/address'

interface CustomizedTableProps {
  getAddressErc721Txns: (address: any) => void
  columns: Array<String>
  erc721TokenTransactoins: any
  loading: any
}

const ERC721: React.FC<CustomizedTableProps> = ({
  getAddressErc721Txns,
  columns,
  erc721TokenTransactoins,
  loading,
}) => {
  const classes = useStyles()
  const { address } = useParams<any>()

  const [ageStatus, setAgeStatus] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')

  React.useEffect(() => {
    getAddressErc721Txns(address)
    console.log(loading)
    if (!loading) console.log('erc721TokenTransactoins', erc721TokenTransactoins)
  }, [loading, address, getAddressErc721Txns, erc721TokenTransactoins])

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

  return !loading ? (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>
          <TableInfo erc20TokenTransactoins={erc721TokenTransactoins} />
        </Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                if (column === 'Age') {
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
          <TableBody>
            {erc721TokenTransactoins.map((tx: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell>
                  <StyledLink to={`/tx/${tx.hash}`}>
                    <StyledTextOverflow>{tx.hash}</StyledTextOverflow>
                  </StyledLink>
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
                          <span style={{ color: '#828A95' }}>
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
                    <StyledLink to={`/address/${tx.to}`}>
                      <StyledTooltip title={tx.to} arrow>
                        <StyledTextOverflow>
                          <span style={{ color: '#828A95' }}>
                            <i className="far fa-file-alt"></i>
                          </span>
                          {tx.to}
                        </StyledTextOverflow>
                      </StyledTooltip>
                    </StyledLink>
                  )}
                </StyledTableCell>
                <StyledTableCell>{numberWithCommas(tx.token.tokenTransfers.value)}</StyledTableCell>
                <StyledTableCell>
                  <StyledLink to="/token">
                    <img src="/images/Address/usd.png" alt="price" style={{ width: '13px', verticalAlign: 'middle' }} />
                    {tx.token.name}
                  </StyledLink>
                </StyledTableCell>
              </TableRow>
            ))}
            {erc721TokenTransactoins.length === 0 && (
              <TableRow>
                <TableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>
                    <Typography style={{ fontSize: '14px' }}>There are no matching entries</Typography>
                  </StyledEmptyRowBox>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <StyledTableControlBox my="12px">
        <Box></Box>
        <Box className={classes.tooltipdown}>
          [Download
          <span>
            <Link to="#" style={{ textDecoration: 'none', color: '#3498db' }}>
              CSV Exoort
            </Link>
            <i className="fas fa-download"></i>
          </span>
          ]
        </Box>
      </StyledTableControlBox>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  erc721TokenTransactoins: state.address.erc721TokenTransactoins,
  erc721TransactionsCount: state.address.erc721TransactionsCount,
  loading: state.address.loadingErc721Transactions,
})

export default connect(mapStateToProps, { getAddressErc721Txns })(ERC721)
