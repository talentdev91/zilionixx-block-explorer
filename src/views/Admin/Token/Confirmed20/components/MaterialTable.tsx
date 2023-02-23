import React from 'react'
import { connect } from 'react-redux'
import { IconButton, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import MaterialTable from 'material-table'

import { deleteToken } from '../../../../../store/actions/token'

interface RowsDataProps {
  address: string
  name: string
  balance: number
  symbol: string
  type: string
  _id: string
}

interface CustomizedTableProps {
  rows: RowsDataProps[]
  deleteToken: (address: any) => void
  handleClickOpen: () => void
  setCurrentId: any
}
const useStyles = makeStyles((theme) => ({
  addButton: {
    margin: '0px 15px 10px 0px',
    cursor: 'pointer',
    fontSize: '.765625rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    color: '#fff',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : theme.palette.info.main}`,
    border: `0.5px solid rgba(52,152,219,.2)`,
    textAlign: 'center',
    verticalAlign: 'middle',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: theme.palette.info.main,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
        boxShadow: '0 0 0 0 transparent',
    },
  },
}))
const Table1: React.FC<CustomizedTableProps> = ({ rows, deleteToken, handleClickOpen, setCurrentId }) => {
  const classes = useStyles()
  // const [gridData, setGridData] = useState({
  //   data: rows,
  //   resolve: () => {},
  //   updatedAt: new Date(),
  // })
  // useEffect(() => {
  //   gridData.resolve()
  // }, [gridData])

  const deleteTk = (id: any) => {
    deleteToken(id)
  }
  return (
    <>
      <div style={{ textAlign: 'right' }}>
        <Button variant="contained" size="large" className={classes.addButton}  startIcon={<AddIcon />} onClick={handleClickOpen} >
          Add Contact
        </Button>
      </div>
      <MaterialTable
        title="Your Title"
        columns={[
          { title: 'Email', field: 'email' },
          { title: 'Name', field: 'name' },
          { title: 'Contract', field: 'contract' },
          { title: 'Official', field: 'official' },
          { title: 'Logo', field: 'logo' },
          { title: 'Description', field: 'description' },
          { title: 'Officialcontract', field: 'officialcontract' },
          { title: 'Blog', field: 'blog' },
          { title: 'Reddit', field: 'reddit' },
          { title: 'Slack', field: 'slack' },
          { title: 'Facebook', field: 'facebook' },
          { title: 'Twitter', field: 'twitter' },
          { title: 'Bitcoin', field: 'bitcoin' },
          { title: 'Github', field: 'github' },
          { title: 'Telegram', field: 'telegram' },
          { title: 'Whitepaper', field: 'whitepaper' },
          { title: 'Ticker', field: 'ticker' },
          { title: 'Comment', field: 'comment' },
          {
            title: 'Edit/Delete',
            field: 'edit',
            render: (rowData) =>
              rowData && (
                <>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setCurrentId(rowData._id)
                      handleClickOpen()
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => {
                      deleteTk(rowData._id)
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              ),
          },
        ]}
        data={rows}
      />
    </>
  )
}

export default connect(null, { deleteToken })(Table1)
