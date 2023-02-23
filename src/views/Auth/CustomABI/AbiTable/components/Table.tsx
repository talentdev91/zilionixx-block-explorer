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
import { deleteCustomAbi, editCustomAbi } from '../../../../../store/actions/user'
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
  abi: string
  transfersH: number
  transfersD: number
}

interface AbiTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: RowsDataProps[]
  columns: string[]
  totalCount: any
  loading: boolean
  error: string
  AbiStatus: any
  //   emptyRows: number
  editCustomAbi: (username: any, contractName: any, contractAddress: any, abi: any, page: any) => void
  deleteCustomAbi: (username: any, contractAddress: any, page: any) => void
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const CustomizedTable: React.FC<AbiTableProps> = ({
  tableInfo,
  rowsPerPage,
  page,
  rows,
  columns,
  totalCount,
  loading,
  error,
  AbiStatus,
  //   emptyRows,
  editCustomAbi,
  deleteCustomAbi,
  handleChange,
  handleChangePage,
}) => {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [modalValue1, setModalValue1] = useState('')
  const [modalLabel2, setModalLabel2] = useState('')
  const [modalValue2, setModalValue2] = useState('')
  const [modalLabel3, setModalLabel3] = useState('')
  const [modalValue3, setModalValue3] = useState('')
  const [open, setOpen] = useState(false)
  const [addressDelete, setAddressDelete] = useState('')
  const [openDelete, setOpenDelete] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  const handleSubmit = (username: any, contractName: any, contractAddress: any, abi: any) => {
    editCustomAbi(username, contractName, contractAddress, abi, page)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewABI = (contractName: any, contractAddress: any, abi: any) => {
    setModalTitle('Add a new Custom ABI')
    setModalLabel1('Name')
    setModalValue1(contractName)
    setModalLabel2('Address')
    setModalValue2(contractAddress)
    setModalLabel3('Custom ABI')
    setModalValue3(abi)
    setOpen(true)
  }

  const deleteShow = (contractAddress: any) => {
    setAddressDelete(contractAddress)
    setOpenDelete(true)
  }

  const handleDelete = (username: any, contractAddress: any) => {
    deleteCustomAbi(username, contractAddress, page)
    setOpenDelete(false)
  }

  const handleDeleteClose = () => {
    setOpenDelete(false)
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  useEffect(() => {

    setOpenAlert(false)


    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else {
      if (AbiStatus === 1) {
        setAlertContent('Successfully Added new Custom ABI')
        setOpenAlert(true)
        setAlertType('success')
      } else if (AbiStatus === 2) {
        setAlertContent('Custom ABI updated successfully')
        setOpenAlert(true)
        setAlertType('success')
      } else if (AbiStatus === 3) {
        setAlertContent('Custom ABI Removed')
        setOpenAlert(true)
        setAlertType('success')
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, AbiStatus])

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
                  colSpan={4}
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

            {rows.length === undefined ? (
              <TableRow>
                <StyledTableCell colSpan={12}>
                  <StyledEmptyRowBox>
                    <Typography className={classes.bodyText}>
                      <i className="fas fa-info-circle"></i>&nbsp;You have not entered any custom ABIs.
                    </Typography>
                  </StyledEmptyRowBox>
                </StyledTableCell>
              </TableRow>
            ) : (

              rows.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <StyledDarkTooltip title="Update Custom ABI entry" arrow placement="top">

                      <Button
                        variant="outlined"
                        onClick={() => viewABI(row.contractName, row.contractAddress, row.abi)}
                        className={classes.tableBtn}
                      >

                        View
                      </Button>
                    </StyledDarkTooltip>
                    <StyledDarkTooltip title="Remove Custom ABI entry" arrow placement="top">

                      <Button
                        variant="outlined"
                        className={classes.tableBtn}
                        onClick={() => deleteShow(row.contractAddress)}
                      >

                        Remove
                      </Button>
                    </StyledDarkTooltip>
                  </StyledTableCell>
                  <StyledTableCell>{row.contractName}</StyledTableCell>
                  <StyledTableCell>
                    <Link to={`/address/${row.contractAddress}`} className={classes.link}>
                      {row.contractAddress}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>{row.createdAt}</StyledTableCell>
                </TableRow>

              ))
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
        modalLabel3={modalLabel3}
        modalValue3={modalValue3}
      />
      <CustomDeleteModal
        handleClick={handleDelete}
        handleClose={handleDeleteClose}
        open={openDelete}
        modalTitle="Are you sure you wish to remove the ABI?"
        address={addressDelete}
      />
    </div>
  )
}
export default connect(null, { deleteCustomAbi, editCustomAbi })(CustomizedTable)
