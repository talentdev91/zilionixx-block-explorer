import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getTokenAproval } from '../../../store/actions/misc'
import Grid from '@material-ui/core/Grid'
import TokenApprovalTable from './TokenApprovalResult/components/Table'
import TableInfo from './TokenApprovalResult/components/TableInfo'

// components
import { useStyles, SearchInput } from './styles'

interface TokenApprovalProps {
  getTokenAproval: (page: any, rowsPerPage: any, address: any) => void
  erc20ApprovalTxns: any
  count: any
  status: any
}

function TokenApprovals({ erc20ApprovalTxns, count, status, getTokenAproval }: TokenApprovalProps) {
  const classes = useStyles()
  const columns = [
    '#',
    'Txn Hash	',
    'Block',
    'Contract',
    'Approved Spender',
    'Approved Amount',
    'Last Updated(UTC)',
    'Revoke',
  ]
  const [address, setAddress] = React.useState('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, erc20ApprovalTxns.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  // React.useEffect(() => {
  //   getTokenAproval(page, rowsPerPage, address)
  // }, [page, rowsPerPage, address, getTokenAproval])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    getTokenAproval(page, rowsPerPage, address)
  }

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <div className={classes.title}>
          <h1>
            <i className="fa fa-user-check" />
            &nbsp; Token Approvals
          </h1>
        </div>
        <div className={classes.lead}>
          <span>Review and revoke your token approvals for any dApp.</span>
        </div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <form onSubmit={handleSubmit} className={classes.search}>
              <FormControl fullWidth>
                <SearchInput
                  placeholder="Search by address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <Button type="submit" color="primary" className={classes.searchButton} aria-label="search" disableRipple>
                <i className="fa fa-search" />
              </Button>
            </form>
          </Grid>
        </Grid>

        {status !== 0 && (
          <TokenApprovalTable
            tableInfo={() => TableInfo(count)}
            rowsPerPage={rowsPerPage}
            page={page}
            rows={erc20ApprovalTxns}
            totalErc20Cnt={count}
            columns={columns}
            emptyRows={emptyRows}
            handleChange={handleChange}
            handleChangePage={handleChangePage}
          />
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  erc20ApprovalTxns: state.misc.erc20ApprovalTxns,
  count: state.misc.count,
  status: state.misc.status,
})

export default connect(mapStateToProps, { getTokenAproval })(TokenApprovals)
