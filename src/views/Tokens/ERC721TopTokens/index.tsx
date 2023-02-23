import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getNftToken } from '../../../store/actions/token'
//material-ui components
import { StyledContainer } from '../../../components/StyledContainer'
//components
import ERC721TopTokensTable from './components/Table'
import TableInfo from './components/TableInfo'
import { columns } from './data'
//style
import { StyledPageTitle, useStyles, StyledTooltip } from './TableStyle'
import { Button } from '@material-ui/core'

interface ViewTokenProps {
  getNftToken: (page: any, rowsPerPage: any) => void
  erc721Tokens: any
  totalErc721TokenCnt: any
  loading: boolean
  requestStatus: boolean
}

function TopAccounts({ getNftToken, erc721Tokens, totalErc721TokenCnt, loading, requestStatus }: ViewTokenProps) {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getNftToken(page, rowsPerPage)
  }, [page, rowsPerPage, getNftToken])

  return (
    <StyledContainer>
      <StyledPageTitle>
        Non-Fungible Token Tracker
        <StyledTooltip title="External link to BEP-721 Information" arrow placement="top">
          <Button href="https://erc721.org" variant="contained" className={classes.ercBtn} disableRipple>
            ERC-721
          </Button>
        </StyledTooltip>
      </StyledPageTitle>
      <ERC721TopTokensTable
        tableInfo={() => TableInfo(totalErc721TokenCnt, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={erc721Tokens}
        columns={columns}
        // emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        loading={loading}
        status={requestStatus}
      />
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  erc721Tokens: state.token.erc721Tokens,
  totalErc721TokenCnt: state.token.totalErc721TokenCnt,
  loading: state.token.loadingErc721TopTokens,
  requestStatus: state.token.requestToken721Status,
})

export default connect(mapStateToProps, { getNftToken })(TopAccounts)
