import React from 'react'
//material-ui components
import { Table, TableHead, TableRow, Box, Paper, TableContainer, Button } from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
import { Link, useHistory } from 'react-router-dom'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledTableControlBox,
  useStyles,
} from '../TableStyle'
import { StyledDarkTooltip } from '../../../../../Styles'
import { StyledEmptyRowBox } from '../../../../../Styles'

interface RowsDataProps {
  token: string
  transfersH: number
  transfersD: number
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  loading: boolean
  totalCount: any
  columns: string[]
  //   emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  loading,
  //   emptyRows,
  handleChange,
  handleChangePage,
}) => {
  // const classes = useStyles()
  const classes = useStyles()
  const history = useHistory()
  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleEdit = (address: any) => {
    history.push(`/myaddress_modify?a=${address}`)
  }

  return (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
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
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {rows.map((row: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell>
                  <StyledDarkTooltip title="Modify Alert Notification options" arrow placement="top">
                    <Button
                      variant="outlined"
                      className={classes.tableBtn}
                      onClick={() => handleEdit(row.watchAddress)}
                    >
                      Edit
                    </Button>
                  </StyledDarkTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  <div>
                    <Link to={`/address/${row.watchAddress}`} className={classes.link}>
                      {row.watchAddress}
                    </Link>
                    <br />
                    <span>{row.watchAddressNote}</span>
                    <br />
                    <span>Added on {row.createdAt}</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell>{row.balance}</StyledTableCell>
                <StyledTableCell>Notification</StyledTableCell>
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
    </div>
  )
}

export default CustomizedTable
