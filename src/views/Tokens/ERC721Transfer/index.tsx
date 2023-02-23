import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getErc721Transfers } from '../../../store/actions/token'
//components
import ERC721TransferTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import { columns } from './data'
import { Button } from '@material-ui/core'
import TableInfo from './components/TableInfo'
import { StyledPageTitle, useStyles, StyledTooltip } from './TableStyle'

interface ViewTokenProps {
  getErc721Transfers: (page: any, rowsPerPage: any) => void
  erc721transfers: any
  erc721TransferCnt: any
  loading: any
  requestStatus: boolean
}

function ViewErc721Transfers({ getErc721Transfers, erc721transfers, erc721TransferCnt, loading, requestStatus }: ViewTokenProps) {
  // const [total, setTotalTxns] = React.useState(totaltxns)
  const classes = useStyles()

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getErc721Transfers(page, rowsPerPage)
  }, [page, rowsPerPage, getErc721Transfers])

  return (
    <StyledContainer>
      <StyledPageTitle>
        Non Fungible Tokens Transfers
        <StyledTooltip title="External link to BEP-721 Information" arrow placement="top">
          <Button href="https://docs.zilionixx.org/smart-chain/developer/ERC20.html" variant="contained" className={classes.ercBtn} disableRipple>ERC-721</Button>
        </StyledTooltip>
      </StyledPageTitle>
      <ERC721TransferTable
        tableInfo={() => TableInfo(erc721TransferCnt, rowsPerPage, loading)}
        rowsPerPage={rowsPerPage}
        erc721TransferCnt={erc721TransferCnt}
        page={page}
        rows={erc721transfers}
        loading={loading}
        columns={columns}
        status={requestStatus}
        // emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  erc721transfers: state.token.erc721transfer,
  erc721TransferCnt: state.token.erc721TransferCnt,
  requestStatus: state.token.requestToken721TransferStatus,
  loading: state.token.loading,
})

export default connect(mapStateToProps, { getErc721Transfers })(ViewErc721Transfers)
