import React from 'react'
import ViewTxnsTable from './components/Table'
import { rows, columns, totaltransactions } from './data'
import Exchangetable from './components/TableInfo'
//components

export const Exchange: React.FC = () => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  return (
    <ViewTxnsTable
      tableInfo={() => Exchangetable(totaltransactions)}
      rowsPerPage={rowsPerPage}
      page={page}
      rows={rows}
      columns={columns}
      handleChange={handleChange}
      handleChangePage={handleChangePage}
    />
  )
}
