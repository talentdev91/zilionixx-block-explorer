import React from 'react'

//components
import { StyledContainer } from '../../../components/StyledContainer'
import { StyledPageTitle } from './TableStyle'
import { Typography } from '@material-ui/core'

const VerifiedContract = () => {
  // const [page, setPage] = React.useState(0)
  // const [rowsPerPage, setRowsPerPage] = React.useState(50)

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setRowsPerPage(Number(event.target.value))
  //   setPage(0)
  // }

  // const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
  //   setPage(newPage)
  // }

  return (
    <StyledContainer>
      <StyledPageTitle>Contracts with verified source codes only</StyledPageTitle>
      <Typography>This feature will come soon...</Typography>
      {/* <VerifiedContractTable
        tableInfo={TableInfo}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={rows}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      /> */}
    </StyledContainer>
  )
}

export default VerifiedContract
