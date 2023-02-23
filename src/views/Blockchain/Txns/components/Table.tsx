import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../../../store/configureStore'

//material-ui components
import { Table, TableRow, Box, Paper, TableContainer, TableCell, TableHead } from '@material-ui/core'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
//components
import TablePaginationActions from './TablePagination'
import Popper from './Popper'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  StyledTextOverflow,
  StyledMethodBtn,
  StyledAgeBtn,
  StyledIconButton,
  StyledSvgIcon,
  useStyles,
  StyledTooltip,
  StyledSelfButton,
  StyledTableBody,
} from '../TableStyle'
import { StyledEmptyRowBox } from '../../../../Styles'

interface CustomizedTableProps {
  tableInfo: () => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
  rowsPerPage: number
  page: number
  totalTxnsCnt: number
  txnstimestamp: any
  rows: any
  blocknumber: any
  columns: string[]
  blockConfirmationCnt: any
  loading: any
  status: boolean
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  handleChange,
  handleChangePage,
  rowsPerPage,
  page,
  rows,
  totalTxnsCnt,
  txnstimestamp,
  blocknumber,
  columns,
  blockConfirmationCnt,
  loading,
  status,
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

  const [txnInfo, setTxnInfo] = React.useState([])
  const [confirmCnt, setConfirmCnt] = React.useState(0)

  const Info = (row: any, blockConfirmationCnt: number) => {
    setTxnInfo(row)
    setConfirmCnt(blockConfirmationCnt)
  }
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
        {/* <Box mr={0}>
          {' '}
          {true ? (
            <div>
              <Spinner className={classes.spinner} />
            </div>
          ) : (
            ''
          )}
        </Box> */}
        <Box>{tableInfo}</Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  count={totalTxnsCnt}
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
                  <span
                    className={classes.rowInfo}
                    onClick={() => Info(row, blocknumber === 'list' ? blockConfirmationCnt[key] : blockConfirmationCnt)}
                  >
                    <Popper arrow rowInfo={txnInfo} confirm={confirmCnt} />
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
                  <Link className={classes.link} to={`/tx/${row.hash}`} style={{ display: 'flex' }}>
                    <StyledTextOverflow>{row.hash}</StyledTextOverflow>
                  </Link>
                </StyledTableCell>
                <StyledTableCell>
                  {row.token && row.token.decodeMethodData ? (
                    <StyledTooltip title={`${row.token.decodeMethodData.method}`} arrow placement="top">
                      <StyledMethodBtn>{row.token.decodeMethodData.method}</StyledMethodBtn>
                    </StyledTooltip>
                  ) : row.input === '0x' ? (
                    <StyledTooltip title="transfer" arrow placement="top">
                      <StyledMethodBtn>transfer</StyledMethodBtn>
                    </StyledTooltip>
                  ) : (
                    <StyledTooltip title={`${row.input.slice(0, 10)}`} arrow placement="top">
                      <StyledMethodBtn>{row.input.slice(0, 10)}</StyledMethodBtn>
                    </StyledTooltip>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <Link className={classes.link} to={`/block/${row.blockNumber}`}>
                    {row.blockNumber}
                  </Link>
                </StyledTableCell>
                <StyledTableCell>
                  {blocknumber === 'list'
                    ? ageStatus === 'Age'
                      ? pastTime(txnstimestamp[key])
                      : createdTime(txnstimestamp[key])
                    : ageStatus === 'Age'
                      ? pastTime(txnstimestamp)
                      : createdTime(txnstimestamp)}
                </StyledTableCell>
                <StyledTableCell>
                  <Link className={classes.link} to={`/address/${row.from}`}>
                    <StyledTooltip title={`${row.from}`} placement="top" arrow>
                      <StyledTextOverflow>{row.from}</StyledTextOverflow>
                    </StyledTooltip>
                  </Link>
                </StyledTableCell>
                <StyledTableCell>
                  {row.from === row.to ? (
                    <StyledSelfButton>Self</StyledSelfButton>
                  ) : (
                    <StyledIconButton>
                      <StyledSvgIcon>
                        <ArrowRightAltOutlinedIcon />
                      </StyledSvgIcon>
                    </StyledIconButton>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  <Link className={classes.link} to={`/address/${row.to ? row.to : row.contractAddress}`}>
                    <StyledTooltip title={row.to ? row.to : row.contractAddress} arrow>
                      <StyledTextOverflow>
                        {row.to ? (
                          row.to
                        ) : (
                          <>
                            <span style={{ color: '#828A95', marginRight: '4px' }}>
                              <i className="far fa-file-alt"></i>
                            </span>
                            Create Contract
                          </>
                        )}
                      </StyledTextOverflow>
                    </StyledTooltip>
                  </Link>
                </StyledTableCell>
                <StyledTableCell>{row.value / Math.pow(10, 18)} ZNX</StyledTableCell>
                <StyledTableCell style={{ color: '#77838f', fontSize: '70%' }}>
                  {row.gasUsed
                    ? (row.gasUsed * row.gasPrice) / Math.pow(10, 18)
                    : (row.gas * row.gasPrice) / Math.pow(10, 18)}
                </StyledTableCell>
              </TableRow>
            ))}
            {status && rows.length === 0 && (
              <TableRow>
                <TableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>There are no matching entries</StyledEmptyRowBox>
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
                  count={totalTxnsCnt}
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
  loading: state.transaction.loading,
})

export default connect(mapStateToProps)(CustomizedTable)
