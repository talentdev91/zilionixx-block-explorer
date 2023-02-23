import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer, TableCell, Divider, Table, TableHead } from '@material-ui/core'
import { Link } from 'react-router-dom'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
//components
import TablePaginationActions from './TablePagination'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableBody,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  StyledTextOverflow,
  StyledMethodBtn,
  StyledAgeBtn,
  useStyles,
  StyledTooltip,
  StyledPaginationBtn,
} from '../TableStyle'
import { isEmptyObject } from '../../../../common/utils'
import { StyledEmptyRowBox } from '../../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
import { etherUnits } from '../../../../common/consts'

interface RowsDataProps {
  txnhash: string
  nonce: string
  lastseen: string
  gaslimit: number
  gasprice: number
  from: string
  to: string
  value: number
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  totalCount: number
  loading: boolean
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  totalCount,
  loading,
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

  return (
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between" className={classes.searchContent}>
        <StyledTooltip title="Click to see Pending Transaction Pool - Time Series" arrow placement="top">
          <StyledPaginationBtn className={classes.pendingBtn}>
            <i className="fa fa-chart"></i>
            Pending Transaction Pool
          </StyledPaginationBtn>
        </StyledTooltip>
        <SearchBtn placeholder="Filter By Address" />
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
                  count={totalCount}
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
                if (column === 'Method') {
                  return (
                    <StyledTableCell key={key}>
                      {column}
                      <StyledTooltip
                        placement="top"
                        title="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                        arrow
                      >
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Nonce') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Gas Limit') {
                  return (
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{column}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Gas Price') {
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
          <StyledTableBody>
            {!isEmptyObject(rows) &&
              rows.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <Link className={classes.link} to="/txsPending">
                      <StyledTextOverflow>{row.hash}</StyledTextOverflow>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{row.nonce}</StyledTableCell>
                  <StyledTableCell>
                    <StyledTooltip title="{row.method}" arrow placement="top">
                      <StyledMethodBtn>transfer</StyledMethodBtn>
                    </StyledTooltip>
                  </StyledTableCell>
                  <StyledTableCell>{row.lastseen} secs ago</StyledTableCell>
                  <StyledTableCell>{row.gas}</StyledTableCell>
                  <StyledTableCell>{row.gasPrice / etherUnits.GWEI} Gwei</StyledTableCell>
                  <StyledTableCell>
                    <Link className={classes.link} to="/txsPending">
                      <StyledTooltip title={row.from} arrow>
                        <StyledTextOverflow>{row.from}</StyledTextOverflow>
                      </StyledTooltip>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Link className={classes.link} to="/txsPending">
                      <StyledTooltip title={row.to} arrow>
                        <StyledTextOverflow>{row.to}</StyledTextOverflow>
                      </StyledTooltip>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{row.value / etherUnits.ETHER} ZNX</StyledTableCell>
                </TableRow>
              ))}
            {!loading && rows.length === 0 && (
              <TableRow>
                <TableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>There are no matching entries</StyledEmptyRowBox>
                </TableCell>
              </TableRow>
            )}
          </StyledTableBody>
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
                  count={rows.length}
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
