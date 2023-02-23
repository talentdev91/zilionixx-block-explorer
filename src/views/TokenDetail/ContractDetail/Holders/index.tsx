import React from 'react'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//components
import Holder from './components/Table'
import { Erc20columnsErc20, Erc721columns, totaltransactions } from './data'
import TableInfo from './components/TableInfo'

import { TOKEN_TYPE } from '../../../../common/consts'
import { getErc20TokenHoldersbyTokenAddress } from '../../../../store/actions/token'

interface HoldersProps {
  getErc20TokenHoldersbyTokenAddress: (page: any, rowsPerPage: any, tokenAddress: any, tokenType: any) => void
  rows: any
  holdersCnt: number
  loading: boolean
  tokenType: any
}

function Holders({ getErc20TokenHoldersbyTokenAddress, rows, holdersCnt, loading, tokenType }: HoldersProps) {
  const { tokenAddress } = useParams<any>()

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
    getErc20TokenHoldersbyTokenAddress(page, rowsPerPage, tokenAddress, tokenType)
  }, [page, rowsPerPage, tokenAddress, loading, getErc20TokenHoldersbyTokenAddress])

  return !loading ? (
    tokenType === TOKEN_TYPE.erc20 ? (
      <Holder
        tableInfo={() => TableInfo(tokenAddress, totaltransactions)}
        rowsPerPage={rowsPerPage}
        totalCnt={holdersCnt}
        page={page}
        rows={rows}
        columns={Erc20columnsErc20}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    )
    :
    (
      <Holder
        tableInfo={() => TableInfo(tokenAddress, totaltransactions)}
        rowsPerPage={rowsPerPage}
        totalCnt={holdersCnt}
        page={page}
        rows={rows}
        columns={Erc721columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    )
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  rows: state.token.tokenHolders,
  holdersCnt: state.token.holdersCnt,
  loading: state.token.loadingHolders,
  tokenType: state.token.tokenType,
})
export default connect(mapStateToProps, { getErc20TokenHoldersbyTokenAddress })(Holders)
