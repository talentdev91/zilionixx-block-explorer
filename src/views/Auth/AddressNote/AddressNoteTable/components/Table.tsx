import React, { useEffect, useState } from 'react'
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
  Chip,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
//components
import TablePaginationActions from './TablePagination'
import { deleteAddressNote, editAddressNote } from '../../../../../store/actions/user'
import CustomModal from '../../CustomModal/CustomModal'
import CustomDeleteModal from '../../CustomModal/CustomDeleteModal'
import { StyledDarkTooltip } from '../../../../../Styles'
import { connect } from 'react-redux'
import Alert from '../../../../../components/Alert'
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTablePagination,
  StyledTableControlBox,
  useStyles,
  StyledEmptyRowBox,
} from '../TableStyle'
import copy from 'copy-text-to-clipboard'

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
  loading: boolean
  totalCount: any
  error: any
  msg: any
  //   emptyRows: number
  editAddressNote: (username: string, address: string, nameTag: string, addressNote: string, page: number) => void
  deleteAddressNote: (username: string, address: string) => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const AddressTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  loading,
  totalCount,
  error,
  msg,
  //   emptyRows,
  editAddressNote,
  deleteAddressNote,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const [modalValue1, setModalValue1] = useState('')
  const [modalValue2, setModalValue2] = useState('')
  const [modalValue3, setModalValue3] = useState('')
  const [open, setOpen] = useState(false)
  const [addressDelete, setAddressDelete] = useState('')
  const [openDelete, setOpenDelete] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')
  const [copyAddress, setcopyAddress] = useState(true)

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleSubmit = (username: string, address: string, nameTag: string, addressNote: string) => {
    editAddressNote(username, address, nameTag, addressNote, page)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewAddress = (address: any, nameTag: any, note: any) => {
    setModalValue1(address)
    setModalValue2(nameTag)
    setModalValue3(note)
    setOpen(true)
  }

  const deleteShow = (address: any) => {
    setAddressDelete(address)
    setOpenDelete(true)
  }

  const handleDelete = (username: any, address: any) => {
    deleteAddressNote(username, address)
    setOpenDelete(false)
  }

  const handleDeleteClose = () => {
    setOpenDelete(false)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  const handleCopyAddress = (address: any) => {
    copy(address)
    setcopyAddress(!copyAddress)
  }

  useEffect(() => {
    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else if (msg) {
      setAlertContent(msg)
      setOpenAlert(true)
      setAlertType('success')
    }
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [error, msg, copyAddress])

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
                  <i className="far fa-star"></i>
                </StyledTableCell>
                <StyledTableCell>
                  <StyledDarkTooltip title="View/Update addressote" arrow placement="top">
                    <Button
                      variant="outlined"
                      onClick={() => viewAddress(row.address, row.nameTag, row.note)}
                      className={classes.tableBtn}
                    >
                      View
                    </Button>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="Remove addressote" arrow placement="top">
                    <Button variant="outlined" className={classes.tableBtn} onClick={() => deleteShow(row.address)}>
                      Remove
                    </Button>
                  </StyledDarkTooltip>
                </StyledTableCell>
                <StyledTableCell>{row.nameTag && <Chip size="small" label={row.nameTag} />}</StyledTableCell>
                <StyledTableCell>
                  <Link to={`/address/${row.address}`} className={classes.link}>
                    {row.address}
                  </Link>
                  <StyledDarkTooltip title="Copy Address to clipboard" arrow placement="top">
                    <span className={classes.copyIcon} onClick={() => handleCopyAddress(row.address)}>
                      <i className="far fa-copy"></i>
                    </span>
                  </StyledDarkTooltip>
                  <br />
                  <small>{row.note}</small>
                </StyledTableCell>
                <StyledTableCell>{row.createdAt}</StyledTableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
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
      <CustomModal
        handleClick={handleSubmit}
        handleClose={handleClose}
        open={open}
        modalValue1={modalValue1}
        modalValue2={modalValue2}
        modalValue3={modalValue3}
        modalTitle="My Address Private Note"
      />
      <CustomDeleteModal
        handleClick={handleDelete}
        handleClose={handleDeleteClose}
        open={openDelete}
        modalTitle="Are you sure you wish to remove the private note?"
        address={addressDelete}
      />
    </div>
  )
}
export default connect(null, { deleteAddressNote, editAddressNote })(AddressTable)
