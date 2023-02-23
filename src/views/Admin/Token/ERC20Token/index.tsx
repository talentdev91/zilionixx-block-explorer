import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

//components
import Table from './components/TokenTable'
import TableInfo from './components/TableInfo'
import { getAllToken } from '../../../../store/actions/admin'

interface ERC20TokensProps {
  getAllToken: (page: any, rowsPerPage: any) => void
  tokenList: any
  totalCount: number
}

function ERC20Tokens({ getAllToken, tokenList, totalCount }: ERC20TokensProps) {
  const columns = ['No', 'address', 'name', 'symbol', 'type', 'status', 'Action']
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getAllToken(page, rowsPerPage)
  }, [page, rowsPerPage, getAllToken])

  return (
    tokenList !== undefined && (
      <Table
        tableInfo={() => TableInfo(totalCount, tokenList.length)}
        rowsPerPage={rowsPerPage}
        page={page}
        columns={columns}
        rows={tokenList}
        totalCount={totalCount}
        handleChange={handleChange}
        handleChangePage={handleChangePage} />
    )
  )
}

const mapStateToProps = (state: AppState) => ({
  tokenList: state.admin.tokenList,
  totalCount: state.admin.tokenCount,
})

export default connect(mapStateToProps, { getAllToken })(ERC20Tokens)
