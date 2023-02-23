import React, { useState, useEffect } from 'react'
//material-ui components
import { TableBody, TableRow, Box, Paper, TableContainer, Typography, Button } from '@material-ui/core'
//components
import { deleteApiKey, editApiKey } from '../../../../../store/actions/user'
import CustomDeleteModal from '../../CustomModal/CustomDeleteModal'
import { StyledDarkTooltip } from '../../../../../Styles'
import { connect } from 'react-redux'
import Alert from '../../../../../components/Alert'
//style
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  useStyles,
  StyledEmptyRowBox,
} from '../TableStyle'
import { AppState } from '../../../../../store/configureStore'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { InputBase } from '@material-ui/core'
import useModalStyles from '../../CustomModal/ModalStyle'

interface RowsDataProps {
  token: string
  transfersH: number
  transfersD: number
}

interface CustomizedTableProps {
  tableInfo: () => void
  rows: RowsDataProps[]
  columns: string[]
  totalCount: any
  loading: boolean
  error: string
  user: any
  //   emptyRows: number
  editApiKey: (username: any, apiKey: any, apiKeyName: any) => void
  deleteApiKey: (username: any, apiKeyName: any) => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  tableInfo,
  rows,
  columns,
  totalCount,
  loading,
  error,
  user,
  //   emptyRows,
  editApiKey,
  deleteApiKey,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const classesModal = useModalStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalValue1, setModalValue1] = useState('')
  const [modalValue2, setModalValue2] = useState('')
  const [open, setOpen] = useState(false)
  const [apiKeyDelete, setApiKeyDelete] = useState('')
  const [openDelete, setOpenDelete] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  // const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
  //   handleChangePage(event, newPage)
  // }

  const handleSubmit = () => {
    editApiKey(user.name, modalValue1, modalValue2)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewTxn = (txn: any, note: any) => {
    setModalTitle('APIKey Options')
    setModalValue1(txn)
    setModalValue2(note)
    setOpen(true)
  }

  const deleteShow = (apiKey: any) => {
    setApiKeyDelete(apiKey)
    setOpenDelete(true)
  }

  const handleDelete = () => {
    setAlertContent('')
    setAlertType('')
    deleteApiKey(user.name, apiKeyDelete)
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
    }
    // else {
    //   if (txnStatus === 1) {
    //     setAlertContent('Successfully Added new Txn hash private note')
    //     setOpenAlert(true)
    //     setAlertType('success')
    //   } else if (txnStatus === 2) {
    //     setAlertContent('Transaction Note updated successfully')
    //     setOpenAlert(true)
    //     setAlertType('success')
    //   } else if (txnStatus === 3) {
    //     setAlertContent('Txn Private Note Removed')
    //     setOpenAlert(true)
    //     setAlertType('success')
    //   }
    // }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <div>
      <Alert openAlert={openAlert} alertContent={alertContent} closeAlert={handleCloseAlert} alertType={alertType} />
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
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
                  <StyledDarkTooltip title="View/Update Api Key" arrow placement="top">
                    <Button
                      variant="outlined"
                      onClick={() => viewTxn(row.apiKey, row.name)}
                      className={classes.tableBtn}
                    >
                      Edit
                    </Button>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="Remove Api key" arrow placement="top">
                    <Button variant="outlined" onClick={() => deleteShow(row.apiKey)} className={classes.tableBtn}>
                      Remove
                    </Button>
                  </StyledDarkTooltip>
                  <StyledDarkTooltip title="Remove Api key" arrow placement="top">
                    <Button variant="outlined" className={classes.tableBtn} onClick={() => deleteShow(row.apiKey)}>
                      <i className="fas fa-signal"></i> &nbsp; Stat
                    </Button>
                  </StyledDarkTooltip>
                </StyledTableCell>
                <StyledTableCell>
                  {row.apiKey}
                  <br />
                  <small>{row.name}</small>
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

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classesModal.dialog}>
        <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
        <DialogContent>
          <div className={classesModal.modalSubtitle}>Address :</div>
          <InputBase id="name" fullWidth value={modalValue1} className={classesModal.inputField} readOnly />
          {error && <div className={classesModal.errorMessage}>Please enter a valid address</div>}
          <div className={classesModal.modalSubtitle}>Name Tag :</div>
          <InputBase
            id="name"
            fullWidth
            value={modalValue2}
            className={classesModal.inputField}
            onChange={(event) => setModalValue2(event.currentTarget.value as string)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classesModal.cancelBtn}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className={classesModal.continueBtn}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <CustomDeleteModal
        handleClick={handleDelete}
        handleClose={handleDeleteClose}
        open={openDelete}
        modalTitle="Are you sure you wish to remove the private note?"
        address={apiKeyDelete}
      />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
})
export default connect(mapStateToProps, { deleteApiKey, editApiKey })(CustomizedTable)
