import React from 'react'
//material-ui components
import { Table, TableHead, TableBody, TableRow, Box, Paper, TableContainer, Typography } from '@material-ui/core'
//components
import VerifiedPaginationActions from './TablePagination'
import { Link } from 'react-router-dom'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledTableControlBox,
  useStyles,
} from '../TableStyle'

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
  columns: string[]
  //   emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const Verified: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  handleChangePage,
}) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
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
                  ActionsComponent={VerifiedPaginationActions}
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
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>{key + 1}</StyledTableCell>
                  <StyledTableCell>
                    <Link className={classes.link} to="/accounts">{row.token}</Link>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography>{row.transfersH}</Typography>
                  </StyledTableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <div className={classes.footerTxt}>
        <p>
          Verify Address Ownership process involves verifying the ownership of an Zilionixx address used to create an
          Zilionixx smart contract, and this verification will link to an ZnxScan account.
        </p>
        <p>
          Once a user has claim ownership of an address or contract address, the user will be able to update their token
          information, dapp page and address name tag without needing to sign a new message for future submission. Find
          out more about
          <Link className={classes.link} to="https://info.znxscan.com/what-is-verify-address-ownership/">
            <span>&nbsp;verify address ownership.</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Verified
