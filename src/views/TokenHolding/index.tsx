import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TableInfo from './components/TableInfo'
import { rows, columns, totalTokens } from './data'

import { useStyles, StyledLink } from './styles'
import { StyledContainer } from '../../components/StyledContainer'
import icon31 from '../../assets/images/icons/icon31.svg'
import icon59 from '../../assets/images/icons/icon59.svg'
import Table from './components/Table'

export default function Account() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }
  return (
    <StyledContainer>
      <div className={classes.contractInfo}>
        <img src="/images/Tokendetail/tokenicon.png" className={classes.tokenicon} alt="token icon" />
        &nbsp;
        <Typography variant="h5" className={classes.tokentitle}>
          Token Holdings
        </Typography>
        &nbsp;
        <StyledLink className={classes.tokenAddress}>
          <span>0x049d68029688eAbF473097a2fC38ef61633A3C7A</span>
        </StyledLink>
      </div>
      <div>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" className={classes.cardstyle1}>
              <CardContent style={{ padding: '1.25rem' }}>
                <div>
                  <Grid container>
                    <Grid item className={classes.cardValue}>
                      <div>
                        <img src={icon59} className={classes.tokenicon} alt="token icon" />
                      </div>
                      <div>
                        <span className={classes.valueName}>VALUE IN ZNX</span>
                        <br />
                        <span className={classes.price}>$38.95</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card variant="outlined" className={classes.cardstyle2}>
              <CardContent style={{ padding: '1.25rem' }}>
                <div>
                  <Grid container>
                    <Grid item className={classes.cardValue} style={{ width: '50%' }}>
                      <div>
                        <img src={icon31} className={classes.tokenicon} alt="token icon" />
                      </div>
                      <div>
                        <span className={classes.valueName}>VALUE IN USD</span>
                        <br />
                        <span className={classes.price}>$38.95</span>
                      </div>
                    </Grid>
                    <Grid item className={classes.rateSide}>
                      <span className={classes.rate}>
                        <i className="fa fa-caret-up" />
                        4.62%
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: 12 }}>
        <Table
          tableInfo={() => TableInfo(totalTokens)}
          rowsPerPage={rowsPerPage}
          page={page}
          rows={rows}
          columns={columns}
          emptyRows={emptyRows}
          handleChange={handleChange}
          handleChangePage={handleChangePage}
        />
      </div>
    </StyledContainer>
  )
}
