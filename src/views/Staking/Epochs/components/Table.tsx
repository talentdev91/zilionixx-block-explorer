import React from 'react'
//material-ui components
import {
  Table,
  TableHead,
  TableRow,
  Box,
  Paper,
  TableContainer,
  TableCell,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//components
import TablePaginationActions from './TablePagination'
import { Link } from 'react-router-dom'
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
  StyledHeaderButton,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: any
  setSortStatus: any
  sortStatus: any
  columns: string[]
  emptyRows: number
  totalEpochCnt: number
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
  setSortStatus,
  sortStatus,
  totalEpochCnt,
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

  const createdTime = (timestamp: any) => {
    const date = new Date(timestamp * 1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const minuteStr = minutes < 10 ? '0' + minutes : minutes
    const seconds = date.getUTCSeconds()
    const secondStr = seconds < 10 ? '0' + seconds : seconds
    const timeformat = `${year}-${month}-${day} ${hours}:${minuteStr}:${secondStr}`

    return timeformat
  }

  const handleSort = () => {
    if (sortStatus.order === -1) {
      setSortStatus({ order: 1 })
    } else {
      setSortStatus({ order: -1 })
    }
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
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
                } else if (column === 'Epoch') {
                  return (
                    <StyledTableCell key={column}>
                      <StyledHeaderButton onClick={() => handleSort()}>
                        {sortStatus.order === 1 ? (
                          <i className="fas fa-caret-up"></i>
                        ) : (
                          <i className="fas fa-caret-down"></i>
                        )}
                        {column}
                      </StyledHeaderButton>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {rows.map((row: any, key: any) => (
              <TableRow hover key={key}>
                <StyledTableCell>
                  <Link className={classes.link} to={`/epoch/${row.epoch}`}>{row.epoch}</Link>
                </StyledTableCell>
                <StyledTableCell>{createdTime(row.endTime)}</StyledTableCell>
                <StyledTableCell>{row.totalBaseRewardWeight / Math.pow(10, 18)} ZNX</StyledTableCell>
                <StyledTableCell>{row.epochFee / Math.pow(10, 18)} ZNX</StyledTableCell>
                <StyledTableCell>{row.totalTxRewardWeight / Math.pow(10, 18)} ZNX</StyledTableCell>
              </TableRow>
            ))}
            {!loading && rows.length === 0 && (
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
                  count={totalEpochCnt}
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
