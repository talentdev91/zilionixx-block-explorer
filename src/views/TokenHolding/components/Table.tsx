import React from 'react'
//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer, Typography, TableCell, Divider } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import clsx from 'clsx'
//components
import TablePaginationActions from './TablePagination'
import Grid from '@material-ui/core/Grid'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
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
} from '../styles'

interface TokenProps {
  tokenName: string
  address: string
}

interface priceProps {
  usd: string
  znx: string
}

interface RowsDataProps {
  token: TokenProps
  symbol: string
  quantity: number
  price: priceProps
  change: number
  valueZNX: number
  valueUSD: number
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
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

  const [headerName, setHeaderName] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click for ASC sort')

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
  const setValueZNX = (value: any) => {
    if (value > 0) {
      return true
    } else {
      return false
    }
  }
  const setValueUSD = (value: any) => {
    if (value > 0) {
      return true
    } else {
      return false
    }
  }
  const setchange = (value: any) => {
    if (value > 0) {
      return true
    } else if (value < 0) {
      return false
    } else if ((value = 0)) {
      return 0
    }
  }

  let starStatusList = new Array(rows.length).fill(false)
  const [activated, setActivated] = React.useState(starStatusList)

  const [clicked, setClicked] = React.useState(false)
  const starActive = (key: any) => {
    setClicked(!clicked)

    let tmpStarStatusList = activated
    tmpStarStatusList[key] = !tmpStarStatusList[key]
    setActivated(tmpStarStatusList)
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between">
        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Hide $0 assets"
          labelPlacement="end"
          style={{ fontWeight: 'bold' }}
        />
        <StyledPendingSearchBtn>
          <i className="fa fa-search" style={{ fontSize: 12, color: 'white' }}></i>
        </StyledPendingSearchBtn>
      </Box>
      <Divider style={{ marginBottom: '12px' }} />
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <StyledTablePagination
            colSpan={3}
            count={rows.length}
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
              {columns.map((column: any, key: any) => {
                if (column === 'Price') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} placement="top" arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Symbol') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Quantity') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Token Price') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Change(24h)') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Value in ZNX') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Value in USD') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow placement="top">
                        <StyledAgeBtn className={classes.market} onClick={onAgeClick}>
                          {column}
                        </StyledAgeBtn>
                      </StyledTooltip>
                      <StyledTooltip placement="top" title={tiptitle} arrow>
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <span onClick={() => starActive(key)}>
                      <span
                        className={clsx(classes.star, {
                          [classes.activeStar]: activated[key],
                        })}
                      >
                        <span className="fa fa-star un-fav clsShowAlert"></span>
                      </span>
                    </span>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: 300 }}>
                    <Grid container spacing={4}>
                      <Grid item xs={1} className={classes.tokenIcon}>
                        <img src={row.token.icon} className={classes.icon} alt="token icon" />
                      </Grid>
                      <Grid item xs={10}>
                        <StyledLink to="/txsPending" style={{ flexDirection: 'row' }}>
                          <StyledTextOverflow>{row.token.tokenName}</StyledTextOverflow>
                        </StyledLink>
                        <StyledLink to="/txsPending" style={{ flexDirection: 'row' }}>
                          <StyledTextOverflow>{row.token.address}</StyledTextOverflow>
                        </StyledLink>
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: '14px' }}>{row.symbol}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: '14px' }}>{row.quantity}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: '14px' }}>
                      {row.price.usd}({row.price.znx} ZNX)
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      className={clsx(classes.changePlusText, {
                        [classes.changeMinusText]: changeColor(row.change),
                      })}
                    >
                      {setchange(row.change) ? (
                        <span>
                          <ArrowDropUpIcon className={classes.changeIcon}></ArrowDropUpIcon>
                          {row.change}%
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    {setValueZNX(row.valueZNX) ? <span>{row.valueZNX}</span> : <span>-</span>}
                  </StyledTableCell>
                  <StyledTableCell>
                    {setValueUSD(row.valueUSD) ? <span>{row.valueUSD}</span> : <span>-</span>}
                  </StyledTableCell>
                </TableRow>
              ),
            )}
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
          <StyledTablePagination
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            ActionsComponent={TablePaginationActions}
          />
        </Box>
      </StyledTableControlBox>
    </Paper>
  )
}

export default CustomizedTable
