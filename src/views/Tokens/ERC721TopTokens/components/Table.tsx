import React from 'react'
//material-ui components
import {
  Table,
  TableHead,
  TableRow,
  Box,
  Paper,
  TableContainer,
  Typography,
  TableCell,
  Link,
  Divider,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//components
import TablePaginationActions from './TablePagination'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  useStyles,
  StyledTooltip,
} from '../TableStyle'
import SearchBox from './SearchBox'
import { StyledEmptyRowBox } from '../../../../Styles'

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
  loading: any
  status: boolean
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
  status,
  //   emptyRows,
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
      <Box mb="12px" display="flex" justifyContent="space-between" className={classes.searchContent}>
        <Typography className={classes.tableTopText}>Non-Fungible Tokens (NFT)</Typography>
        <SearchBox />
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
            {rows.map((row: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell style={{ width: 20 }}>{key + 1}</StyledTableCell>
                <StyledTableCell style={{ width: 1000 }}>
                  <StyledTooltip arrow title={row.address}>
                    <Link href={`/token/${row.address}`} className={classes.link}>
                      <img src={`/images/tokens/${row.symbol}.png`} className={classes.icon} alt="token icon" />
                      &nbsp;
                      <span>{row.name}</span>
                    </Link>
                  </StyledTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography>{row.count}</Typography>
                </StyledTableCell>
                <StyledTableCell>{row.weekCount}</StyledTableCell>
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
