import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
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
import ViewModal from './ViewModal'
import SendModal from './ViewModal/SendModal'
import DeleteModal from './ViewModal/DeleteModal'
import { deleteMessage } from '../../../../../store/actions/admin'
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
  deleteMessage: (selected: any) => void
  rowsPerPage: number
  page: number
  rows: any
  totalCount: number
  columns: string[]
  error: string
  feedbackStatus: string
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
  feedbackStatus,
  handleChange,
  handleChangePage,
  deleteMessage,
}) => {
  const classes = useStyles()
  const [selected, setSelected] = useState([])
  const [closeOpen, setCloseOpen] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  const isSelected = (_id: string) => selected.indexOf(_id) !== -1
  const selectItem = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }
    setSelected(newSelected)
  }
  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const onSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleChange(event)
  }

  const deleteRequest = () => {
    setCloseOpen(true)
  }

  const handleCloseFeedback = () => {
    console.log(selected)
    deleteMessage(selected)
    setCloseOpen(false)
  }

  const handleCloseModal = () => {
    setCloseOpen(false)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  useEffect(() => {
    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else if (feedbackStatus) {
      if (feedbackStatus === '1') {
        setAlertContent('Successfully Sent new Message')
        setOpenAlert(true)
        setAlertType('success')
      } else if (feedbackStatus === '2') {
        setAlertContent('Successfully Removed Feedback')
        setOpenAlert(true)
        setAlertType('success')
      }
    }
  }, [error, feedbackStatus])

  return (
    <div>
      <div>
        <Box mb="20px" display="flex" justifyContent="space-between">
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
                const isItemSelected = isSelected(row._id)
                return (
                  <TableRow key={key}>
                    <StyledTableCell>
                      <Checkbox
                        className={classes.checkbox}
                        checked={isItemSelected}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => selectItem(e, row._id)}
                        disableRipple
                      />
                    </StyledTableCell>
                    <StyledTableCell>{key + 1}</StyledTableCell>
                    <StyledTableCell>{row.data.name}</StyledTableCell>
                    <StyledTableCell>{row.data.email}</StyledTableCell>
                    <StyledTableCell>{row.data.message}</StyledTableCell>
                    <StyledTableCell2>{row.response.length}</StyledTableCell2>
                    <StyledTableCell2>
                      {row.isRead ? (
                        <Chip label="Checked" className={classes.checkedFeedback} />
                      ) : (
                        <Chip label="Unchecked" className={classes.uncheckedFeedback} />
                      )}
                    </StyledTableCell2>
                    <StyledTableCell>
                      <div style={{ display: 'flex' }}>
                        <ViewModal
                          name={row.data.name}
                          email={row.data.email}
                          message={row.data.message}
                          response={row.data.response}
                        />
                        <SendModal id={row._id} email={row.data.email} />
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
        <Box style={{ display: 'flex' }}>
          <Button
            className={classes.profileDelete}
            onClick={deleteRequest}
            disabled={selected.length === 0}
            disableRipple
          >
            <i className="far fa-trash-alt"></i>&nbsp;Close Selected Feedbacks
          </Button>
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
        <p className={classes.errorMessage}>{error}</p>
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
      <DeleteModal open={closeOpen} handleSubmit={handleCloseFeedback} handleClose={handleCloseModal} />
    </div>
  )
}

export default connect(null, { deleteMessage })(CustomizedTable)
