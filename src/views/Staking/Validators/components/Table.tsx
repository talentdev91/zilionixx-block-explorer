import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { numberWithCommas } from '../../../../common/utils'
import { Link } from 'react-router-dom'
//material-ui components
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Paper,
  TableContainer,
} from '@material-ui/core'
import SignalCellularOffSharpIcon from '@material-ui/icons/SignalCellularOffSharp'

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
  StyledHeaderButton,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface CustomizedTableProps {
  tableInfo: () => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  setSortStatus: any
  sortStatus: any
  rowsPerPage: number
  page: number
  columns: string[]
  validators: any
  totalCount: number
  loading: boolean
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  handleChange,
  handleChangePage,
  setSortStatus,
  sortStatus,
  rowsPerPage,
  page,
  columns,
  validators,
  totalCount,
  loading,
}) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const handleSort = (column: any) => {
    if (column === sortStatus.orderBy) {
      if (sortStatus.order === -1) {
        setSortStatus({ orderBy: column, order: 1 })
      } else {
        setSortStatus({ orderBy: column, order: -1 })
      }
    } else {
      setSortStatus({ orderBy: column, order: -1 })
    }
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
      </StyledTableControlBox>
      <TableContainer>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                if (
                  column === 'Id' ||
                  column === 'Self-Stacked' ||
                  column === 'Total Stacked' ||
                  column === 'Delegated'
                ) {
                  return (
                    <StyledTableCell key={column}>
                      <StyledHeaderButton onClick={() => handleSort(column)}>
                        {column === sortStatus.orderBy ? (
                          sortStatus.order === 1 ? (
                            <i className={classnames(classes.sortIcon, 'fas fa-caret-up')}></i>
                          ) : (
                            <i className={classnames(classes.sortIcon, 'fas fa-caret-down')}></i>
                          )
                        ) : (
                          <i className={classnames(classes.sortIcon, 'fas fa-sort')}></i>
                        )}
                        {column}
                      </StyledHeaderButton>
                    </StyledTableCell>
                  )
                } else if (column === 'Rank') {
                  return <StyledTableCell key={column} style={{ textAlign: 'center' }}>{column}</StyledTableCell>
                }
                return <StyledTableCell key={column}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {validators.map((validator: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell style={{ textAlign: 'center' }}>
                  {key === 0
                    ? `🥇${key + 1}`
                    : key === 1
                      ? `🥈${key + 1}`
                      : key === 2
                        ? `🥉${key + 1}`
                        : `#${key + 1}`}
                </StyledTableCell>
                <StyledTableCell>
                  <Link className={classes.link} to={`/address/${validator.auth}`}>{validator.auth}</Link>
                </StyledTableCell>
                <StyledTableCell>{validator.id}</StyledTableCell>
                <StyledTableCell style={{ textAlign: 'left' }}>{validator.deactivatedTime}</StyledTableCell>
                <StyledTableCell>{numberWithCommas(validator.selfStake / Math.pow(10, 18))} ZNX</StyledTableCell>
                <StyledTableCell>{numberWithCommas(validator.delegated / Math.pow(10, 18))} ZNX</StyledTableCell>
                <StyledTableCell>{numberWithCommas(validator.receivedStake / Math.pow(10, 18))} ZNX</StyledTableCell>
                <StyledTableCell>
                  <span>
                    {validator.active ? (
                      <span style={{ color: '#00c9a7' }}>
                        <i className="fas fa-signal" style={{ marginRight: '4px' }}></i>
                        Yes
                      </span>
                    ) : (
                      <span style={{ color: '#de4437' }}>
                        <SignalCellularOffSharpIcon />
                        <span>No</span>
                      </span>
                    )}
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
            {!loading && validators.length === 0 && (
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
    </Paper>
  )
}

const mapStateToProps = (state: AppState) => ({
  validators: state.validator.validatorsTopLeaderboard,
  loading: state.validator.loading,
})

export default connect(mapStateToProps)(CustomizedTable)
