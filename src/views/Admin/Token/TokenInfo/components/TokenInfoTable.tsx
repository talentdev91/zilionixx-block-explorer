import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'

//material-ui components
import {
  TableBody,
  TableRow,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  Checkbox,
  Button,
  Typography,
  Chip,
} from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
import AddModal from './ViewModal/AddModal'
import { updateTokenInfo, getTokenInfo } from '../../../../../store/actions/admin'
import { isEmptyObject } from '../../../../../common/utils'
import SearchBtn from '../../../Components/SearchBox/SearchBox'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableCell2,
  StyledTableHead,
  StyledTablePagination,
  StyledRowsPerPageBox,
  BootstrapInput,
  StyledNativeSelect,
  StyledTableControlBox,
  useStyles,
  StyledEmptyRowBox,
} from '../../../styles'
import Alert from '../../../../../components/Alert'

interface CustomizedTableProps {
  tableInfo: () => void
  updateTokenInfo: ( tokenInfoID: any, tokenAddress: any ) => void
  getTokenInfo: (page: any, rowsPerPage: any, tokenAddress: any) => void
  rowsPerPage: number
  page: number
  rows: any
  totalCount: number
  columns: string[]
  error: string
  addTokenInfoSuccess: boolean
  updateTokenInfoSuccess: boolean
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  totalCount,
  error,
  addTokenInfoSuccess,
  updateTokenInfoSuccess,
  handleChange,
  handleChangePage,
  updateTokenInfo,
  getTokenInfo,
}) => {
  const classes = useStyles()
  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }
  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  const location = useLocation();
  var tokenAddress = location.pathname.split("/")[location.pathname.split("/").length-1]
  const handleChecked = (tokenID: string) => (event: React.KeyboardEvent | React.MouseEvent) => {
    updateTokenInfo(tokenID, tokenAddress)
  }

  useEffect(() => {
    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else if (addTokenInfoSuccess) {
      setAlertContent('Successfully Add Token Information')
      setOpenAlert(true)
      setAlertType('success')
      
      getTokenInfo(page, rowsPerPage, tokenAddress)
    } else if (updateTokenInfoSuccess) {
      setAlertContent('Successfully Update Token Information')
      setOpenAlert(true)
      setAlertType('success')

      getTokenInfo(page, rowsPerPage, tokenAddress)
    }
  }, [error, addTokenInfoSuccess, updateTokenInfoSuccess])

  return (
    <div>
      <div>
        <Box display="flex">
          <Button href="/admin/token" className={classes.backBtn} size="large" disableRipple>
            <i className="fas fa-hand-point-left"></i>&nbsp;Back
          </Button>
          <AddModal />
          <SearchBtn placeholder="Search Name and Email" />
        </Box>
      </div>
      <Alert openAlert={openAlert} alertContent={alertContent} closeAlert={handleCloseAlert} alertType={alertType} />
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTablePagination
                  colSpan={3}
                  rowsPerPage={rowsPerPage}
                  count={totalCount}
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
                if (column === 'response' || column === 'status') {
                  return <StyledTableCell2 key={key}>{column}</StyledTableCell2>
                } else {
                  return <StyledTableCell key={key}>{column}</StyledTableCell>
                }
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {!isEmptyObject(rows) &&
              rows.map((row: any, key: any) => {
                return (
                  <TableRow key={key}>
                    <StyledTableCell>{key + 1}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.tokenAddress}</StyledTableCell>
                    <StyledTableCell>{row.officialUrl}</StyledTableCell>
                    <StyledTableCell>{row.logoIcon}</StyledTableCell>
                    <StyledTableCell>{row.description}</StyledTableCell>
                    <StyledTableCell>{row.officialEmailAdd}</StyledTableCell>
                    <StyledTableCell>{row.blog}</StyledTableCell>
                    <StyledTableCell>{row.reddit}</StyledTableCell>
                    <StyledTableCell>{row.slack}</StyledTableCell>
                    <StyledTableCell>{row.facebook}</StyledTableCell>
                    <StyledTableCell>{row.twitter}</StyledTableCell>
                    <StyledTableCell>{row.bitcointalk}</StyledTableCell>
                    <StyledTableCell>{row.github}</StyledTableCell>
                    <StyledTableCell>{row.telegram}</StyledTableCell>
                    <StyledTableCell>{row.whitepaper}</StyledTableCell>
                    <StyledTableCell>{row.priceData}</StyledTableCell>
                    <StyledTableCell2>{row.comments}</StyledTableCell2>
                    <StyledTableCell2>
                      {row.checked === "true" ? (
                        <Chip label="Checked" className={classes.checkedFeedback} />
                      ) : (
                        <Chip label="Unchecked" className={classes.uncheckedFeedback} />
                      )}
                    </StyledTableCell2>
                    <StyledTableCell>
                      <div style={{ display: 'flex' }}>
                      <Button onClick={handleChecked(row._id)} className={classes.checkBtn} size="large" disableRipple>
                        <i className="fas fa-check-circle"></i>&nbsp;Check&nbsp;
                      </Button>
                      </div>
                    </StyledTableCell>
                  </TableRow>
                )
              })}
            {!isEmptyObject(rows) && rows.length === 0 && (
              <TableRow>
                <StyledTableCell style={{ padding: '10px' }} colSpan={12}>
                  <StyledEmptyRowBox>
                    <Typography style={{ fontSize: '14px' }}>There are no matching entries</Typography>
                  </StyledEmptyRowBox>
                </StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <StyledTableControlBox my="12px">
        <Box style={{ display: 'flex', marginLeft: '20px'}}>
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
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  addTokenInfoSuccess: state.admin.addTokenInfoSuccess,
  updateTokenInfoSuccess: state.admin.updateTokenInfoSuccess,
  error: state.admin.TokenInfoError,
})

export default connect(mapStateToProps, { updateTokenInfo, getTokenInfo })(CustomizedTable)
