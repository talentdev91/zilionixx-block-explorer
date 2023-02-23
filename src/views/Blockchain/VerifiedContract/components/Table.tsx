import React from 'react'
import classnames from 'classnames'
//material-ui components
import { TableRow, Box, Paper, TableContainer, Divider, Typography, Table, TableHead } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import { Link } from 'react-router-dom'
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
  StyledTextOverflow,
  useStyles,
  StyledTooltip,
} from '../TableStyle'
import SearchBtn from '../SearchBox/SearchBox'
import { StyledEmptyRowBox } from '../../../../Styles'
import { isEmptyObject } from '../../../../common/utils'

interface settingProps {
  libraryUsed: boolean
  optimizationEnabled: boolean
  constructorArgument: boolean
}

interface RowsDataProps {
  address: string
  contractName: string
  compiler: string
  version: string
  balance: number
  txns: number
  setting: settingProps
  verified: string
  audited: string
  license: string
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

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
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

  // const [headerName, setHeaderName] = React.useState('Age')
  // const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')

  // const onAgeClick = () => {
  //   if (headerName === 'Age') {
  //     setHeaderName('Date Time (UTC)')
  //     setTipTitle('Click to show Age Format')
  //   } else {
  //     setTipTitle('Click to show DateTime Format')
  //     setHeaderName('Age')
  //   }
  // }

  return (
    <Paper elevation={3} className={classes.container}>
      <Box mb="12px" display="flex" justifyContent="space-between" className={classes.searchContent}>
        <StyledTooltip title="Select View / Filter Type" arrow placement="top">
          <Typography>Contracts</Typography>
        </StyledTooltip>
        <SearchBtn placeholder="Search Contract Name" />
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
                if (column === 'Audited') {
                  return (
                    <StyledTableCell key={key}>
                      {column}
                      <StyledTooltip placement="bottom" title="Smart contracts Audit and Security" arrow>
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'License') {
                  return (
                    <StyledTableCell key={key}>
                      {column}
                      <StyledTooltip
                        placement="bottom"
                        title="Contract Source Code License Type, click for more info"
                        arrow
                      >
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <Link className={classes.link} to="/txs">
                      <StyledTextOverflow>
                        <i className="fas fa-check-circle" style={{ marginRight: '4px', color: '#00c9a7' }} />
                        {row.address}
                      </StyledTextOverflow>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{row.contractName}</StyledTableCell>
                  <StyledTableCell>{row.compiler}</StyledTableCell>
                  <StyledTableCell>{row.version}</StyledTableCell>
                  <StyledTableCell>{row.balance}</StyledTableCell>
                  <StyledTableCell>{row.txns}</StyledTableCell>
                  <StyledTableCell>
                    {row.setting.optimizationEnabled ? (
                      <StyledTooltip title="Constructor Arguments" arrow placement="top">
                        <i className={classnames(classes.settingIcon, 'fas fa-bolt btn-icon__inner')} />
                      </StyledTooltip>
                    ) : (
                      ''
                    )}
                    {row.setting.constructorArgument ? (
                      <StyledTooltip title="Optimization Enabled" arrow placement="top">
                        <i className={classnames(classes.settingIcon, 'fas fa-wrench btn-icon__inner')} />
                      </StyledTooltip>
                    ) : (
                      ''
                    )}
                    {row.setting.libraryUsed ? (
                      <i className={classnames(classes.settingIcon, 'fas fa-book-open btn-icon__inner')} />
                    ) : (
                      ''
                    )}
                  </StyledTableCell>
                  <StyledTableCell>{row.verified}</StyledTableCell>
                  <StyledTableCell>{row.audited === '' ? '-' : row.audited}</StyledTableCell>
                  <StyledTableCell>{row.license}</StyledTableCell>
                </TableRow>
              ),
            )}
            {!isEmptyObject(rows) && rows.length === 0 && (
              <TableRow>
                <StyledTableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>There are no matching entries</StyledEmptyRowBox>
                </StyledTableCell>
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
