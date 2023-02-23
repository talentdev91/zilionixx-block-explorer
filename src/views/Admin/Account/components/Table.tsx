import React from 'react'
//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer, Table, TableHead, Divider } from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
import Modal from './InsertModal'
import UpdateModal from './UpdateModal'
import { isEmptyObject } from '../../../../common/utils'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableCell2,
  StyledTableHead,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  useStyles,
  StyledPendingSearchBtn,
  StyledDeleteBtn,
} from '../TableStyle'

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  accounts: any
  totalBalance: any
  columns: string[]
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  accounts,
  columns,
  totalBalance,
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

  return (
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between">
        <Modal />
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
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {!isEmptyObject(accounts) &&
              accounts.docs.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>{key + 1}</StyledTableCell>
                  <StyledTableCell>{row.address}</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>{row.balance}</StyledTableCell>
                  <StyledTableCell>{row.type}</StyledTableCell>
                  <StyledTableCell2>
                    <UpdateModal />
                    <StyledDeleteBtn>
                      <span>delete</span>
                    </StyledDeleteBtn>
                  </StyledTableCell2>
                </TableRow>
              ))}
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

export default CustomizedTable
