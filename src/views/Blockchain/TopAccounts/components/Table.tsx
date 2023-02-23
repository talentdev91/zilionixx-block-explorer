import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { isEmptyObject, bigNumberFormat } from '../../../../common/utils'
import { Link } from 'react-router-dom'
//material-ui components
import { TableRow, Box, Paper, TableContainer, Table, TableHead, TableCell } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//components
import TablePaginationActions from './TablePagination'

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
  useStyles,
  StyledTooltip,
  StyledTableBody,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface CustomizedTableProps {
  tableInfo: () => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  rowsPerPage: number
  page: number
  accountTxnsCnt: any
  totalBalance: any
  accounts: any
  loading: any
  columns: string[]
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  handleChange,
  handleChangePage,
  rowsPerPage,
  page,
  accountTxnsCnt,
  totalBalance,
  accounts,
  loading,
  columns,
}) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const percent = (balance: any, totalBalance: any) => {
    balance = balance / Math.pow(10, 18)
    return Math.round((balance / totalBalance) * 100 * Math.pow(10, 15)) / Math.pow(10, 15)
  }

  return (
    <Paper className={classes.container}>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  rowsPerPage={rowsPerPage}
                  count={!isEmptyObject(accounts) ? (accounts.totalDocs <= 10000 ? accounts.totalDocs : 10000) : 0}
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
                if (column === 'Balance') {
                  return (
                    <StyledTableCell key={key}>
                      <ExpandMoreIcon style={{ marginLeft: '6px', fontSize: 16, verticalAlign: 'middle' }} />
                      {column}
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {!loading ? (
              accounts.docs !== undefined && accounts.docs.length > 0 ? (
                accounts.docs.map((account: any, key: any) => (
                  <TableRow key={key}>
                    <StyledTableCell>{page * rowsPerPage + key + 1}</StyledTableCell>
                    <StyledTableCell>
                      {account.type === 'contract' && (
                        <StyledTooltip title="Contract" arrow placement="top">
                          <i className="far fa-file-alt" style={{ margin: '4px', color: '#77838f' }}></i>
                        </StyledTooltip>
                      )}
                      <Link className={classes.link} to={`/address/${account.address}`}>
                        {account.address}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell>{account.nametag}</StyledTableCell>
                    <StyledTableCell>{bigNumberFormat(account.balance)} ZNX</StyledTableCell>
                    <StyledTableCell>
                      {account.balance === undefined || account.balance === 0 || account.balance === null
                        ? '0'
                        : percent(account.balance, totalBalance)}
                      %
                    </StyledTableCell>
                    <StyledTableCell>{account['transactionCount']['total']}</StyledTableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell style={{ padding: '10px' }} colSpan={12}>
                    <StyledEmptyRowBox>There are no matching entries</StyledEmptyRowBox>
                  </TableCell>
                </TableRow>
              )
            ) : (
              <TableRow>
                <div>Loading...</div>
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
                  count={!isEmptyObject(accounts) ? (accounts.totalDocs <= 10000 ? accounts.totalDocs : 10000) : 0}
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

const mapStateToProps = (state: AppState) => ({
  accounts: state.address.accounts,
  accountTxnsCnt: state.address.accountTxnsCnt,
  totalBalance: state.address.totalBalance,
  loading: state.address.loadingTopAccounts,
})

export default connect(mapStateToProps)(CustomizedTable)
