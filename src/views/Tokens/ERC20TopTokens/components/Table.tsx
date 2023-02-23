import React from 'react'
import { Link } from 'react-router-dom'
//material-ui components
import {
  TableRow,
  Box,
  Paper,
  TableContainer,
  Typography,
  TableCell,
  Divider,
  Table,
  TableHead,
  Avatar,
  Button,
} from '@material-ui/core'
import clsx from 'clsx'
//components
import TablePaginationActions from './TablePagination'
import Grid from '@material-ui/core/Grid'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import SearchBox from './SearchBox'
//style
import {
  StyledTableBody,
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  StyledTextOverflow,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
  StyledFilterButton,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

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
  query: string
  loading: any
  status: boolean
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
  query,
  loading,
  status,
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

  const [headerName, setHeaderName] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Unsorted, Click to sort')

  const onAgeClick = () => {
    if (headerName === 'Age') {
      setHeaderName('Sort')
      setTipTitle('Sort')
    } else {
      setTipTitle('Click to show DateTime Format')
      setHeaderName('Age')
    }
  }

  const changeColor = (value: any) => {
    if (value > 0) {
      return true
    } else {
      return false
    }
  }

  const setIcon = (value: any) => {
    if (value > 0) {
      return true
    } else {
      return false
    }
  }

  let tableBody;
  let filterButton;
  if (query === null || query === '') {
    tableBody = (
      <StyledTableBody>
        {rows.map((row: any, key: any) => (
          <TableRow key={key}>
            <StyledTableCell>{rowsPerPage * page + key + 1}</StyledTableCell>
            <StyledTableCell style={{ width: 300 }}>
              <Grid container>
                <Grid item xs={1}>
                  <Avatar src={`/images/tokens/${row.address}.png`} className={classes.icon} alt="token icon" />
                </Grid>
                <Grid item xs={11}>
                  <Link to={`/token/${row.address}`} className={classes.link} style={{ flexDirection: 'row' }}>
                    <StyledTextOverflow>
                      {row.name}({row.symbol})
                    </StyledTextOverflow>
                  </Link>
                </Grid>
              </Grid>
            </StyledTableCell>
            <StyledTableCell>
              <Typography style={{ fontSize: '14px' }}>n / a</Typography>
              {/* <Typography style={{ fontSize: '14px' }}>$47,675.0000</Typography>
              <Typography className={classes.tableText}>1.003975 BTC</Typography>
              <Typography className={classes.tableText}>37,159.002338 ZNX</Typography> */}
            </StyledTableCell>
            <StyledTableCell>
              <Typography
                className={clsx(classes.changePlusText, {
                  [classes.changeMinusText]: changeColor(-0.9),
                })}
              >
                {setIcon(-0.9) ? (
                  <ArrowDropUpIcon className={classes.changeIcon}></ArrowDropUpIcon>
                ) : (
                  <ArrowDropDownIcon className={classes.changeIcon}></ArrowDropDownIcon>
                )}
                {/* {-0.9}% */}
                n / a
              </Typography>
            </StyledTableCell>
            {/* <StyledTableCell>$29,505,355,449</StyledTableCell> */}
            <StyledTableCell>n / a</StyledTableCell>
            {/* <StyledTableCell> $897,159,527,807 </StyledTableCell> */}
            <StyledTableCell> n / a </StyledTableCell>
            <StyledTableCell>{row.holders}</StyledTableCell>
          </TableRow>
        ))}
        {status && rows.length === 0 && (
          <TableRow>
            <TableCell style={{ padding: '10px' }} colSpan={12}>
              <StyledEmptyRowBox>
                There are no matching entries
              </StyledEmptyRowBox>
            </TableCell>
          </TableRow>
        )}
      </StyledTableBody>
    )
    filterButton = (
      <StyledFilterButton>
        <SearchBox />
      </StyledFilterButton>
    )
  } else {
    tableBody = (
      <StyledTableBody>
        {rows.map((row: any, key: any) => (
          <TableRow key={key}>
            <StyledTableCell>
              <Link to={`/token/${row.address}`} className={classes.link}>
                <StyledTextOverflow>
                  {row.address}
                </StyledTextOverflow>
              </Link>
            </StyledTableCell>
            <StyledTableCell style={{ width: 300 }}>
              <Grid container>
                <Grid item xs={1}>
                  <Avatar src={`/images/tokens/${row.address}.png`} className={classes.icon} alt="token icon" />
                </Grid>
                <Grid item xs={11}>
                  <Link to={`/token/${row.address}`} className={classes.link} style={{ flexDirection: 'row' }}>
                    <StyledTextOverflow>
                      {row.name}
                    </StyledTextOverflow>
                  </Link>
                </Grid>
              </Grid>
            </StyledTableCell>
            <StyledTableCell>{row.symbol}</StyledTableCell>
            <StyledTableCell>{row.decimals} </StyledTableCell>
            <StyledTableCell>{row.officialSite}</StyledTableCell>
          </TableRow>
        ))}
        {status && rows.length === 0 && (
          <TableRow>
            <TableCell style={{ padding: '10px' }} colSpan={12}>
              <StyledEmptyRowBox>
                There are no matching entries
              </StyledEmptyRowBox>
            </TableCell>
          </TableRow>
        )}
      </StyledTableBody>
    )
    filterButton = (
      <StyledFilterButton>
        <div className={classes.clearButton}>
          <span className={classes.filterText}>Filter by Token binance</span>
          <StyledTooltip title="Click to Clear the Filter" arrow placement="top">
            <Button href="/tokens" variant="contained" className={classes.clearFilter} disableRipple>
              <i className={'fas fa-times'}></i>
            </Button>
          </StyledTooltip>
        </div>
        <SearchBox />
      </StyledFilterButton>
    )
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between">
        <StyledTooltip title="Click to see Pending Transaction Pool - Time Series" arrow placement="top">
          <Typography className={classes.tableTopText}>ERC-20 Tokens</Typography>
        </StyledTooltip>
        {filterButton}
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
                if (column === 'Price') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Change%') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Volume') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Market Cap') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn className={classes.market} onClick={onAgeClick}>
                          {column}
                        </StyledAgeBtn>
                      </StyledTooltip>
                      <StyledTooltip
                        placement="right"
                        title="Circulating Supply MarketCap-Calculated by multiplying the number of outstanding tokens with the current market price"
                        arrow
                      >
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Holders') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          {tableBody}
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
