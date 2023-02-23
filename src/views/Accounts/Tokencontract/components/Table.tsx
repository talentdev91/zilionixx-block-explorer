import React from 'react'
//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer, Card } from '@material-ui/core'
import Button from '@material-ui/core/Button'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  useStyles,
  StyledTooltip,
} from '../TableStyle'

interface RowsDataProps {
  txnhash: string
  method: string
  block: number
  count: number
  from: string
  to: string
  value: number
  txnfee: number
  out: string
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: { id: string; name: string }[]
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const TokencontractPage: React.FC<CustomizedTableProps> = ({ tableInfo, rowsPerPage, page, rows, columns }) => {
  const classes = useStyles()

  return (
    <Card className={classes.cardstyle}>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.name === 'Address') {
                  return (
                    <StyledTableCell key={column.id} style={{ width: '370px' }}>
                      {column.name}
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <StyledLink to="/txs">
                      <StyledTooltip title="contract" placement="top-start" arrow>
                        <span style={{ color: '#828A95' }}>
                          <i className="far fa-file-alt"></i>
                        </span>
                      </StyledTooltip>
                      &nbsp;
                      {row.from}
                    </StyledLink>
                  </StyledTableCell>
                  <StyledTableCell>Anyswap: {row.method}</StyledTableCell>
                  <StyledTableCell>{row.value} ZNX</StyledTableCell>
                  <StyledTableCell>{row.count}</StyledTableCell>
                </TableRow>
              ),
            )}
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>Sum of 7 Accounts</StyledTableCell>
              <StyledTableCell>0 ZNX</StyledTableCell>
              <StyledTableCell> 28</StyledTableCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img src="/images/Account/anyswap1.svg" alt="price" className={classes.anyswapimg} />
        </div>
        <div className={classes.anyswapsign}>
          <h1 className={classes.anyswaptitle}>Sign In for Continued Access</h1>
          <h2 className={classes.anyswapsubtitle}>
            No worries, it's absolutely free and takes a minute! <br />
            Register a <StyledLink to="/register">Free Account</StyledLink> today.
          </h2>
          <Button variant="contained" type="submit" color="primary" className={classes.button}>
            SIGN IN
          </Button>
        </div>

        <div>
          <img src="/images/Account/anyswap2.svg" alt="price" className={classes.anyswapimg} />
        </div>
      </div>
    </Card>
  )
}

export default TokencontractPage
