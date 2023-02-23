import React from 'react'
//material-ui components
import {
  TableBody,
  TableRow,
  Box,
  Paper,
  TableContainer,
  Typography,
  TableCell,
  Divider,
  Table,
  TableHead,
} from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableCell1,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
  StyledEmptyRowBox,
  StyledPendingSearchBtn,
} from '../TableStyle'
// import Web3ConnectButton from '../../../../../components/Web3ConnectButton'

interface TokenProps {
  tokenName: string
  description: string
}

interface priceProps {
  usd: string
  btc: string
  znx: string
}

interface RowsDataProps {
  token: TokenProps
  price: priceProps
  change: string
  volume: string
  marketCap: string
  holders: string
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  emptyRows: number
  totalErc20Cnt: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  totalErc20Cnt,
  emptyRows,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }
  console.log('count', totalErc20Cnt)
  const [headerName, setHeaderName] = React.useState('Last Updated(UTC)')
  const [tiptitle, setTipTitle] = React.useState('Unsorted, Click to sort')

  const onAgeClick = () => {
    if (headerName === 'Last Updated(UTC)') {
      setHeaderName('Age')
      setTipTitle('Click to show DateTime Format')
    } else {
      setTipTitle('Click to show Age Format')
      setHeaderName('Last Updated(UTC)')
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
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between">
        {/* <Web3ConnectButton /> */}
        <StyledPendingSearchBtn>
          <i className="fa fa-search" style={{ fontSize: 12, color: 'white' }}></i>
        </StyledPendingSearchBtn>
      </Box>
      <Divider style={{ marginBottom: '12px' }} />
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={totalErc20Cnt}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onPageChange}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                if (column === 'Last Updated(UTC)') {
                  return (
                    <StyledTableCell1 key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{headerName}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell1>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell>{rowsPerPage * page + key + 1}</StyledTableCell>
                <StyledTableCell style={{ width: 300 }}>
                  <StyledTextOverflow>
                    <StyledLink to={`/tx/${row.txnHash}`}>{row.txnHash}</StyledLink>
                  </StyledTextOverflow>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledLink to={`/block/${row.block}`}>{row.block}</StyledLink>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledLink to={`/address/${row.contract.address}`}>{row.contract.name}</StyledLink>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledTextOverflow>{row.approvedSpender}</StyledTextOverflow>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledTextOverflow>
                    {parseInt(row.approvedAmount, 16).toString().length > 20 && <i>Unlimited</i>}
                    <StyledLink to="/tokens/label/token-contract">{row.contract.symbol}</StyledLink>
                  </StyledTextOverflow>
                </StyledTableCell>
                <StyledTableCell>
                  {headerName === 'Last Updated(UTC)' ? (
                    <StyledTooltip arrow title={createdTime(row.timestamp)}>
                      <Typography style={{ fontSize: '.875rem' }}>{pastTime(row.timestamp)} </Typography>
                    </StyledTooltip>
                  ) : (
                    <StyledTooltip arrow title={pastTime(row.timestamp)}>
                      <Typography style={{ fontSize: '.875rem' }}>{createdTime(row.timestamp)}</Typography>
                    </StyledTooltip>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <span className={classes.revoke}>
                    <i className="far fa-edit"></i>
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
            {emptyRows === rowsPerPage && (
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
        <Box>
          <StyledRowsPerPageBox>
            Show
            <StyledNativeSelect
              id="demo-customized-select-native"
              value={rowsPerPage}
              onChange={onSelectChange}
              input={<BootstrapInput />}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </StyledNativeSelect>
            Records
          </StyledRowsPerPageBox>
        </Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={totalErc20Cnt}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={onPageChange}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableHead>
          </Table>
        </Box>
      </StyledTableControlBox>
    </Paper>
  )
}

export default CustomizedTable
