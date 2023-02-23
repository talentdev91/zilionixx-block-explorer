import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useLocation, useParams } from 'react-router'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import TablePaginationActions from './TablePagination'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  StyledTextOverflow1,
  StyledMethodBtn,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
  StyledTablePagination,
} from '../../TableStyle'
import { StyledEmptyRowBox } from '../../../../../Styles'

interface RowsDataProps {
  hash: string
  method: string
  block: number
  age: number
  from: string
  to: string
  value: number
  txnfee: number
  out: string
  timestamp: number
  quantity: string
  tokenId: any
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  totalCnt: number
  page: number
  decimals: number
  rows: RowsDataProps[]
  columns: { id: string; name: string }[]
  //   emptyRows: number
  loading: boolean
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const ViewTxnsTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  totalCnt,
  page,
  decimals,
  rows,
  columns,
  loading,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const [ageStatus, setAgeStatus] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')
  const { tokenAddress } = useParams<any>()

  const location = useLocation()
  const searchIndex = location.search
  const querySearch = new URLSearchParams(searchIndex);
  const searchAddress = querySearch.get('a');

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
  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }
  
  const handleHash = () => {
    window.location.href = `/token/${tokenAddress}?a=${searchAddress}`
  }

  return (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <StyledTablePagination
            colSpan={3}
            count={totalCnt}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            ActionsComponent={TablePaginationActions}
          />
        </Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.name === 'Method') {
                  return (
                    <StyledTableCell key={column.id}>
                      {column.name}
                      <StyledTooltip
                        placement="top"
                        title="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                        arrow
                      >
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column.name === 'Age') {
                  return (
                    <StyledTableCell key={column.id}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{ageStatus}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {rows.map((row, key) => (
              <TableRow key={key}>
                <StyledTableCell>
                  {
                    searchAddress === row.hash ?
                    (
                      <StyledTextOverflow className={classes.styleSearch}>{row.hash}</StyledTextOverflow>
                    )
                    :
                    (
                      <a href={`/tx/${row.hash}`} className={classes.alink}>
                        <StyledTextOverflow>{row.hash}</StyledTextOverflow>
                      </a>
                    )
                  }
                </StyledTableCell>
                <StyledTableCell>
                  <StyledTooltip title={row.method} arrow placement="top">
                    <StyledMethodBtn>
                      <StyledTextOverflow1>{row.method}</StyledTextOverflow1>
                    </StyledMethodBtn>
                  </StyledTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  {ageStatus === 'Age' ? pastTime(row.timestamp) : createdTime(row.timestamp)}
                </StyledTableCell>
                <StyledTableCell>
                  {
                    searchAddress === row.from ?
                    (
                      <StyledTextOverflow className={classes.styleSearch}>{row.from}</StyledTextOverflow>
                    )
                    :
                    (
                      <StyledTooltip title={row.from} arrow placement="top">
                        <a href={`/token/${tokenAddress}?a=${row.from}`} className={classes.alink}>
                          <StyledTextOverflow>{row.from}</StyledTextOverflow>
                        </a>
                      </StyledTooltip>
                    )
                  }
                </StyledTableCell>
                <StyledTableCell>
                  <span className={classes.outstyle}>
                    <i className="fas fa-long-arrow-alt-right btn-icon__inner"></i>
                  </span>
                </StyledTableCell>
                <StyledTableCell>
                  {
                    searchAddress === row.to ?
                    (
                      
                      <StyledTextOverflow className={classes.styleSearch}>{row.to}</StyledTextOverflow>
                    )
                    :
                    (
                      <StyledTooltip title={row.to} arrow placement="top">
                        <a href={`/token/${tokenAddress}?a=${row.to}`} className={classes.alink}>
                          <StyledTextOverflow>{row.to}</StyledTextOverflow>
                        </a>
                      </StyledTooltip>
                    )
                  }
                </StyledTableCell>
                <StyledTableCell>
                  {row.quantity ? parseInt(row.quantity) / Math.pow(10, decimals) : ''}
                  {row.tokenId ? row.tokenId : ''}
                </StyledTableCell>
              </TableRow>
            ))}
            {!loading && rows.length === 0 && (
              <TableRow>
                <StyledTableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>There are no matching entries</StyledEmptyRowBox>
                </StyledTableCell>
              </TableRow>
            )}
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
      <StyledTableControlBox my="12px">
        <Box></Box>
        <Box>
          <Box>
            <StyledTablePagination
              colSpan={3}
              count={totalCnt}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </Box>
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
        </Box>
      </StyledTableControlBox>
    </div>
  )
}

export default ViewTxnsTable
