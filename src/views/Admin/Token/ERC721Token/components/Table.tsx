import React from 'react'
//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer, Divider } from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
import Modal from './Modal'
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
  StyledEditBtn,
  StyledDeleteBtn,
} from '../TableStyle'

interface RowsDataProps {
  address: string
  name: string
  balance: number
  symbol: string
  type: string
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
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
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row, key) => (
                <TableRow key={key}>
                  <StyledTableCell>{key + 1}</StyledTableCell>
                  <StyledTableCell>{row.address}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.symbol}</StyledTableCell>
                  <StyledTableCell>{row.type}</StyledTableCell>
                  <StyledTableCell2>
                    <StyledEditBtn>
                      <span>edit</span>
                    </StyledEditBtn>
                    <StyledDeleteBtn>
                      <span>delete</span>
                    </StyledDeleteBtn>
                  </StyledTableCell2>
                </TableRow>
              ),
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
