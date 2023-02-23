import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

//components
// import { useStyles } from './TableStyle'
import Table from './components/Table'
import TableInfo from './components/TableInfo'
import { getErc20Tokens } from '../../../../store/actions/token'

interface ERC721TokensProps {
  getErc20Tokens: (page: any, rowsPerPage: any) => void
  rows: any
}

function ERC721Tokens({ getErc20Tokens, rows }: ERC721TokensProps) {
  const columns = ['#', 'Address', 'Name', 'Symbol', 'Type', 'Action']
  const totalTokens = rows.length
  // const classes = useStyles()

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
    getErc20Tokens(page, rowsPerPage)
  }, [page, rowsPerPage, getErc20Tokens])

  return (
    <div style={{ marginTop: 12 }}>
      <Table
        tableInfo={() => TableInfo(totalTokens)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={rows}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  rows: state.token.erc20tokens,
})
export default connect(mapStateToProps, { getErc20Tokens })(ERC721Tokens)
