import React from 'react'

//components
import Verified from './components/Table'
import VerifiedInfo from './components/TableInfo'
import { rows, columns } from './data'

const TokenTable = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  return (
    <Verified
      tableInfo={() => VerifiedInfo()}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={rows}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
    />
  )
}

export default TokenTable
