import React from 'react'
import { StyledLink } from '../../../Styles'
import { useStyles } from '../anyswapstyle'
import Tokenanyswap from './components/Table'
import { rows, columns, totaltransactions } from './data'
import TableInfo from './components/TableInfo'

function Anyswap() {
  const classes = useStyles()
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
    <div>
      <div className={classes.roottitle}>
        <h1 className={classes.title}>
          Token Tracker<span className={classes.subtitle}> Anyswap</span>
        </h1>
        <span className={classes.breadcam}>
          <StyledLink to="#">
            <i className="fas fa-cloud"></i> Label Cloud
          </StyledLink>
          /Anyswap
        </span>
      </div>
      <div className={classes.roottitle2}>
        <div className={classes.roottitle3}>
          <span className={classes.subtitle3}>Related labels:</span>
          <StyledLink to="/accounts/label/anyswap">
            <span className={classes.token}>Token (28)</span>
          </StyledLink>
        </div>
      </div>
      <div className={classes.roottitle2}>
        <Tokenanyswap
          tableInfo={() => TableInfo(totaltransactions)}
          rowsPerPage={rowsPerPage}
          page={page}
          rows={rows}
          columns={columns}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
        />
        <p className={classes.anyswapbottomtxt}>Note : Labels source attribution required if used externally</p>
      </div>
    </div>
  )
}

export default Anyswap
