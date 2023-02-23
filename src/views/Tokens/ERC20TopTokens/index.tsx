import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'

//components
import PendingTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import TableInfo from './components/TableInfo'
import { AppState } from '../../../store/configureStore'
import { getErc20Tokens, getErc20TokensSearch } from '../../../store/actions/token'
import { StyledPageTitle, useStyles, StyledTooltip } from './TableStyle'

interface ViewTokenProps {
  getErc20Tokens: (page: any, rowsPerPage: any) => void
  getErc20TokensSearch: (keyword: any, page: any, rowsPerPage: any) => void
  erc20tokens: any
  erc20tokensSearch: any
  totalErc20Cnt: any
  loading: any
  requestTokenStatus: any
  requestTokenSearchStatus: any
}

function ViewErc20Token({ getErc20Tokens, getErc20TokensSearch, erc20tokensSearch, erc20tokens, totalErc20Cnt, loading, requestTokenSearchStatus, requestTokenStatus }: ViewTokenProps) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, erc20tokens.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let query = params.get('q');
  let columns = [];
  let pendingTable;
  var status = false;

  if (query === null || query === '') {
    columns = ['#', 'Token', 'Price', 'Change%', 'Volume', 'Market Cap', 'Holders']

    if (erc20tokens !== undefined && erc20tokens.length > 0) {
      status = true
    } else {
      status = false;
    }

    pendingTable = (
      <PendingTable
        tableInfo={() => TableInfo(totalErc20Cnt, page, rowsPerPage, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={erc20tokens}
        totalErc20Cnt={totalErc20Cnt}
        columns={columns}
        emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        query={query}
        loading={loading}
        status={requestTokenStatus}
      />
    )
  } else {
    columns = ['Token Contract', 'Token Name', 'Symbol', 'Decimals', 'official Site']

    if (erc20tokensSearch !== undefined && erc20tokensSearch.length > 0) {
      status = true
    } else {
      status = false;
    }

    pendingTable = (
      <PendingTable
        tableInfo={() => TableInfo(totalErc20Cnt, page, rowsPerPage, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={erc20tokensSearch}
        totalErc20Cnt={totalErc20Cnt}
        columns={columns}
        emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        query={query}
        loading={loading}
        status={requestTokenSearchStatus}
      />
    )
  }

  React.useEffect(() => {
    if (query === null || query === '') {
      getErc20Tokens(page, rowsPerPage)
    } else {
      getErc20TokensSearch(query, page, rowsPerPage)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage])
  return (
    <StyledContainer>
      <StyledPageTitle>
        Token Tracker
        <StyledTooltip title="External link to BEP-20 Information" arrow placement="top">
          <Button href="https://docs.zilionixx.org/smart-chain/developer/ERC20.html" variant="contained" className={classes.ercBtn} disableRipple>ERC-20</Button>
        </StyledTooltip>

      </StyledPageTitle>
      {pendingTable}
      {/* {
        status ?
          (
            pendingTable
          )
          :
          <div className={classes.loading}> &nbsp;&nbsp;&nbsp;Loading... </div>
      } */}
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  erc20tokens: state.token.erc20tokens,
  erc20tokensSearch: state.token.erc20tokensSearch,
  totalErc20Cnt: state.token.totalErc20Cnt,
  loading: state.token.loading,
  requestTokenStatus: state.token.requestToken20Status,
  requestTokenSearchStatus: state.token.requestToken20SearchStatus,
})

export default connect(mapStateToProps, { getErc20Tokens, getErc20TokensSearch })(ViewErc20Token)
