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
import { deleteTxnNote, editTxnNote } from '../../../../../store/actions/user'
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

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  totalCount: any
  loading: boolean
  error: string
  txnStatus: any
  //   emptyRows: number
  editTxnNote: (username: any, txnHash: any, txnNote: any) => void
  deleteTxnNote: (username: any, txnHash: any) => void
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
  loading,
  error,
  txnStatus,
  //   emptyRows,
  editTxnNote,
  deleteTxnNote,
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

  const handleSubmit = (username: any, txnHash: any, txnNote: any) => {
    editTxnNote(username, txnHash, txnNote)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewTxn = (txn: any, note: any) => {
    setModalTitle('Add a new Txn hash note')
    setModalLabel1('Txn Hash:')
    setModalValue1(txn)
    setModalLabel2(' View / Update Private Note :')
    setModalValue2(note)
    setOpen(true)
  }

  const deleteShow = (txn: any) => {
    setAddressDelete(txn)
    setOpenDelete(true)
  }

  const handleDelete = (username: any, txnHash: any) => {
    deleteTxnNote(username, txnHash)
    setOpenDelete(false)
  }

  const handleDeleteClose = () => {
    setOpenDelete(false)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  useEffect(() => {
    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else {
      if (txnStatus === 1) {
        setAlertContent('Successfully Added new Txn hash private note')
        setOpenAlert(true)
        setAlertType('success')
      } else if (txnStatus === 2) {
        setAlertContent('Transaction Note updated successfully')
        setOpenAlert(true)
        setAlertType('success')
      } else if (txnStatus === 3) {
        setAlertContent('Txn Private Note Removed')
        setOpenAlert(true)
        setAlertType('success')
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, txnStatus])

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
                  <StyledDarkTooltip title="View/Update TxNote" arrow placement="top">
                    <Button variant="outlined" onClick={() => viewTxn(row.txn, row.note)} className={classes.tableBtn}>
                      View
                    </Button>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="Remove TxNote" arrow placement="top">
                    <Button variant="outlined" className={classes.tableBtn} onClick={() => deleteShow(row.txn)}>
                      Remove
                    </Button>
                  </StyledDarkTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  <a href={`/tx/${row.txn}`} className={classes.link}>
                    {row.txn}
                  </a>
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
                    <Typography className={classes.bodyText}><i className="fas fa-info-circle"></i>&nbsp;There are no private notes found</Typography>
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
        modalTitle="Are you sure you wish to remove the private note?"
        address={addressDelete}
      />
    </div>
  )
}
export default connect(null, { deleteTxnNote, editTxnNote })(CustomizedTable)
