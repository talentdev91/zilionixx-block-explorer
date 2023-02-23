import React, { useState, useEffect } from 'react'
//material-ui components
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Box,
  Paper,
  TableContainer,
  Typography,
  Button,
} from '@material-ui/core'
//components
import TablePaginationActions from './TablePagination'
import { Link } from 'react-router-dom'
import { deleteIgnoreToken, editIgnoreToken } from '../../../../../store/actions/user'
import CustomModal from '../../CustomModal/CustomModal'
import CustomDeleteModal from '../../CustomModal/CustomDeleteModal'
import { StyledDarkTooltip } from '../../../../../Styles'
import { connect } from 'react-redux'
import Alert from '../../../../../components/Alert'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledTableControlBox,
  useStyles,
  StyledEmptyRowBox,
} from '../TableStyle'

interface RowsDataProps {
  token: string
  transfersH: number
  transfersD: number
}

interface TokenTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  totalCount: any
  loading: boolean
  error: string
  tokenStatus: any
  //   emptyRows: number
  editIgnoreToken: (username: any, token: any, tokenNote: any, page: any) => void
  deleteIgnoreToken: (username: any, token: any, page: any) => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<TokenTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  totalCount,
  loading,
  error,
  tokenStatus,
  //   emptyRows,
  editIgnoreToken,
  deleteIgnoreToken,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [modalValue1, setModalValue1] = useState('')
  const [modalLabel2, setModalLabel2] = useState('')
  const [modalValue2, setModalValue2] = useState('')
  const [open, setOpen] = useState(false)
  const [addressDelete, setAddressDelete] = useState('')
  const [openDelete, setOpenDelete] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleSubmit = (username: any, token: any, tokenNote: any) => {
    editIgnoreToken(username, token, tokenNote, page)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewToken = (token: any, note: any) => {
    setModalTitle('Create a new Token Ignore note')
    setModalLabel1('Token Address:')
    setModalValue1(token)
    setModalLabel2(' Note(optional) ')
    setModalValue2(note)
    setOpen(true)
  }

  const deleteShow = (token: any) => {
    setAddressDelete(token)
    setOpenDelete(true)
  }

  const handleDelete = (username: any, token: any) => {
    deleteIgnoreToken(username, token, page)
    setOpenDelete(false)
  }

  const handleDeleteClose = () => {
    setOpenDelete(false)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  useEffect(() => {
    setOpenAlert(false);

    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else {
      if (tokenStatus === 1) {
        setAlertContent('Successfully Added new Token Ignore note')
        setOpenAlert(true)
        setAlertType('success')
      } else if (tokenStatus === 2) {
        setAlertContent('Note updated successfully')
        setOpenAlert(true)
        setAlertType('success')
      } else if (tokenStatus === 3) {
        setAlertContent('Token Ignore Note Removed')
        setOpenAlert(true)
        setAlertType('success')
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, tokenStatus])

  return (
    <div>
      <Alert openAlert={openAlert} alertContent={alertContent} closeAlert={handleCloseAlert} alertType={alertType} />
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
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
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column: any, key: any) => {
                return <StyledTableCell key={key}>{column}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell>
                  <StyledDarkTooltip title="Update Token ignore entry" arrow placement="top">
                    <Button variant="outlined" onClick={() => viewToken(row.token, row.note)} className={classes.tableBtn}>
                      View
                    </Button>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="Remove Token ignore entry" arrow placement="top">
                    <Button variant="outlined" className={classes.tableBtn} onClick={() => deleteShow(row.token)}>
                      Remove
                    </Button>
                  </StyledDarkTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  <Link to={`/address/${row.token}`} className={classes.link}>
                    {row.token}
                  </Link>
                  &nbsp;({row.name})
                  <br />
                  <small>{row.note}</small>
                </StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <StyledTableCell colSpan={12}>
                  <StyledEmptyRowBox>
                    <Typography className={classes.bodyText}><i className="fas fa-info-circle"></i>&nbsp;You have yet to create a Token Ignore entry.</Typography>
                  </StyledEmptyRowBox>
                </StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </StyledTable>
      </TableContainer>
      <CustomModal
        handleClick={handleSubmit}
        handleClose={handleClose}
        open={open}
        modalTitle={modalTitle}
        modalLabel1={modalLabel1}
        modalValue1={modalValue1}
        modalLabel2={modalLabel2}
        modalValue2={modalValue2}
      />
      <CustomDeleteModal
        handleClick={handleDelete}
        handleClose={handleDeleteClose}
        open={openDelete}
        modalTitle="Are you sure you wish to remove the token ignore?"
        address={addressDelete}
      />
    </div>
  )
}
export default connect(null, { deleteIgnoreToken, editIgnoreToken })(CustomizedTable)
