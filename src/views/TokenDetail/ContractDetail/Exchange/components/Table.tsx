import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer } from '@material-ui/core'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  StyledTextOverflow,
  StyledAgeBtn,
  StyledTooltip,
  useStyles,
} from '../../TableStyle'

interface RowsDataProps {
  txnhash: string
  exchange: string
  pair: string
  value: number
  txnfee: number

  block: number
  age: number
  from: string
  to: string

  out: string
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: { id: string; name: string }[]
  //   emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const Exchangetable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  handleChange,
  handleChangePage,
}) => {
  const [headerName, setHeaderName] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')
  const classes = useStyles()
  const onAgeClick = () => {
    if (headerName === 'Age') {
      setHeaderName('Date Time (UTC)')
      setTipTitle('Click to show Age Format')
    } else {
      setTipTitle('Click to show DateTime Format')
      setHeaderName('Age')
    }
  }
  return (
    <div>
      <StyledTableControlBox mb="20px" style={{ float: 'right' }}>
        <Box>{tableInfo}</Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.name === 'Age') {
                  return (
                    <StyledTableCell key={column.id}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{headerName}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column.name === '24H Volumn') {
                  return (
                    <StyledTableCell key={column.id}>
                      <i className="fas fa-angle-down"></i>&nbsp;
                      {column.name}
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={row.to}>
                  <StyledTableCell>{key + 1}</StyledTableCell>
                  <StyledTableCell>
                    <img src="/images/Tokendetail/exchange.png" alt="price" className={classes.tableIcon} style={{ verticalAlign: 'middle' }} />
                    &nbsp;{row.exchange}
                  </StyledTableCell>
                  <StyledTableCell>
                    <StyledLink to="#">
                      <StyledTextOverflow>{row.pair}</StyledTextOverflow>
                    </StyledLink>
                  </StyledTableCell>
                  <StyledTableCell>
                    <span>${row.value}</span>
                    <br />
                    <span style={{ fontSize: '80%' }}>{row.txnfee}</span>
                  </StyledTableCell>
                  <StyledTableCell>
                    <span>${row.value}</span>
                    <br />
                    <span style={{ fontSize: '80%' }}>{row.txnfee}</span>
                  </StyledTableCell>
                  <StyledTableCell>{row.txnfee}%</StyledTableCell>
                </TableRow>
              ),
            )}
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
    </div>
  )
}

export default Exchangetable
