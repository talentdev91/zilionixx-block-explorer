import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer, Typography, Table, TableHead, Link } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
//components
import Popper from './Popper'
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
  StyledAgeBtn,
  StyledIconButton,
  StyledSvgIcon,
  useStyles,
  StyledTooltip,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface RowsDataProps {
  txnhash: string
  age: number
  from: string
  to: string
  value: number
  token: string
}

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  erc20TransferCnt: number
  status: boolean
  loading: boolean
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
  erc20TransferCnt,
  loading,
  status,
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
                  count={erc20TransferCnt}
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
                    <StyledTableCell key={key}>
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
                    <StyledTableCell key={key}>
                      <StyledTooltip title={tiptitle} arrow>
                        <StyledAgeBtn onClick={onAgeClick}>{ageStatus}</StyledAgeBtn>
                      </StyledTooltip>
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
                <StyledTableCell>
                  <span>
                    <Popper rowInfo={row} />
                  </span>
                </StyledTableCell>
                <StyledTableCell style={{ display: 'flex' }}>
                  {
                    !row.status &&
                    <StyledTooltip arrow title={"Txn Receipt status fail"}>
                      <span className={classes.falseIcon}>
                        <i className={'fa fa-exclamation-circle'} />
                      </span>
                    </StyledTooltip>
                  }
                  <Link href={`/tx/${row.hash}`} className={classes.link}>
                    <StyledTextOverflow>{row.hash}</StyledTextOverflow>
                  </Link>
                </StyledTableCell>

                <StyledTableCell>
                  {ageStatus === 'Age' ? (
                    <StyledTooltip arrow title={createdTime(row.timestamp)}>
                      <Typography style={{ fontSize: '.875rem' }}>{pastTime(row.timestamp)} </Typography>
                    </StyledTooltip>
                  ) : (
                    <StyledTooltip arrow title={pastTime(row.timestamp)}>
                      <Typography style={{ fontSize: '.875rem' }}>{createdTime(row.timestamp)}</Typography>
                    </StyledTooltip>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <Link href={`/address/${row.from}#tokentxnsErc20`} className={classes.link}>
                    <StyledTooltip title={row.from} arrow>
                      <StyledTextOverflow>{row.from}</StyledTextOverflow>
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
                  <Link href={`/address/${row.to}#tokentxnsErc20`} className={classes.link}>
                    <StyledTooltip title={row.to} arrow>
                      <StyledTextOverflow>{row.to}</StyledTextOverflow>
                    </StyledTooltip>
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{row.value / Math.pow(10, 18)}</StyledTableCell>
                <StyledTableCell>
                  <Link href={`/token/${row.to}`} className={classes.link}>
                    {row.token}
                  </Link>
                </StyledTableCell>
              </TableRow>
            ))}
            {status && rows.length === 0 && (
              <TableRow>
                <StyledTableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>
                    There are no matching entries for
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
                  count={erc20TransferCnt}
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
