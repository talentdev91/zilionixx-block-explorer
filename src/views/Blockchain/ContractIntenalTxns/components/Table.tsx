import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer, Table, TableHead } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
//components
import TablePaginationActions from './TablePagination'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import clsx from 'clsx'
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
  StyledAgeBtn,
  StyledIconButton,
  StyledSvgIcon,
  useStyles,
  StyledTooltip,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  counts: number
  page: number
  rows: any
  columns: string[]
  loading: boolean
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  counts,
  page,
  rows,
  columns,
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

  const [ageStatus, setAgeStatus] = React.useState('Age')
  const [tiptitle, setTipTitle] = React.useState('Click to show Age Format')

  const onAgeClick = () => {
    if (ageStatus === 'Age') {
      setAgeStatus('Date Time (UTC)')
      setTipTitle('Click to show Age Format')
    } else {
      setTipTitle('Click to show DateTime Format')
      setAgeStatus('Age')
    }
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

  const pastTime = (timestamp: any) => {
    timestamp = Number(timestamp)
    const differenceSeconds = Math.floor(Date.now() / 1000) - timestamp
    const d = Math.floor(differenceSeconds / (3600 * 24))
    const h = Math.floor((differenceSeconds % (3600 * 24)) / 3600)
    const m = Math.floor((differenceSeconds % 3600) / 60)
    const s = Math.floor(differenceSeconds % 60)

    const dDisplay = d > 0 ? d + (d === 1 ? ' day' : ' days') : ''
    const hDisplay = h > 0 ? h + (h === 1 ? ' hour' : ' hours') : ''
    const mDisplay = m > 0 ? m + (m === 1 ? ' minute' : ' minutes') : ''
    const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
    const differenceTime =
      d > 0
        ? `${dDisplay} ${hDisplay} ago`
        : h > 0
          ? `${hDisplay} ${mDisplay} ago`
          : m > 0
            ? `${mDisplay} ${sDisplay} ago`
            : `${sDisplay} ago`

    return differenceTime
  }

  return (
    <Paper elevation={3} className={classes.container}>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={counts}
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
                if (column === 'Method') {
                  return (
                    <StyledTableCell key={nanoid()}>
                      {column}
                      <StyledTooltip
                        placement="top"
                        title="Function executed based on decoded input data. For unidentified functions, method ID is displayed instead."
                        arrow
                      >
                        <InfoOutlinedIcon style={{ marginLeft: '4px', fontSize: '16px', verticalAlign: 'text-top' }} />
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                } else if (column === 'Age') {
                  return (
                    <StyledTableCell key={nanoid()}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{ageStatus}</StyledAgeBtn>
                      </StyledTooltip>
                    </StyledTableCell>
                  )
                }
                return <StyledTableCell key={nanoid()}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {rows.map((row: any) => (
              <TableRow key={nanoid()}>
                <StyledTableCell className={classes.block}>
                  <Link className={classes.link} to={`/block/${row.block}`}>{row.blockNumber}</Link>
                </StyledTableCell>
                <StyledTableCell>
                  {ageStatus === 'Age' ? pastTime(row.timestamp) : createdTime(row.timestamp)}
                </StyledTableCell>
                <StyledTableCell className={classes.parenttx}>
                  <Link className={clsx(classes.link, classes.from)} to={`/tx/${row.hash}`}>
                    <StyledTextOverflow>
                      <i className="fa fa-check-circle text-success" style={{ color: '#00c9a7' }} />
                      &nbsp;{row.hash}
                    </StyledTextOverflow>
                    <i className="fas fa-chevron-circle-right text-secondary" style={{ color: '#77838f' }} />
                  </Link>
                </StyledTableCell>
                <StyledTableCell>Call</StyledTableCell>
                {row.token.tokenTransfers.map((tokenTransfer: any, key: any) => (
                  <>
                    <StyledTableCell key={nanoid()}>
                      <Link className={clsx(classes.link, classes.from)} to={`/address/${tokenTransfer.from}`}>
                        <StyledTooltip placement="top" title="contract" arrow>
                          <i
                            className="far fa-file-alt text-secondary"
                            style={{ marginRight: '4px', color: '#77838f' }}
                          />
                        </StyledTooltip>
                        <StyledTooltip title={tokenTransfer.from} arrow>
                          <StyledTextOverflow>{tokenTransfer.from}</StyledTextOverflow>
                        </StyledTooltip>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Link className={clsx(classes.link, classes.from)} to={`/address/${tokenTransfer.to}`}>
                        <StyledTooltip placement="top" title="contract" arrow>
                          <i
                            className="far fa-file-alt text-secondary"
                            style={{ marginRight: '4px', color: '#77838f' }}
                          />
                        </StyledTooltip>
                        <StyledTooltip title={tokenTransfer.to} arrow>
                          <StyledTextOverflow>{tokenTransfer.to}</StyledTextOverflow>
                        </StyledTooltip>
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell>{tokenTransfer.value / Math.pow(10, 18)} ZNX</StyledTableCell>
                  </>
                ))}
              </TableRow>
            ))}
            {!loading && rows.length === 0 && (
              <TableRow>
                <StyledTableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>
                    There are no matching entries
                  </StyledEmptyRowBox>
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
                  count={counts}
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
