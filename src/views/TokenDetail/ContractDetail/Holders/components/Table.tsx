import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import { connect } from 'react-redux'

import { AppState } from '../../../../../store/configureStore'
import TablePaginationActions from './TablePagination'
import { TOKEN_TYPE } from '../../../../../common/consts'

//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  useStyles,
  StyledTablePagination,
} from '../../TableStyle'

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  totalCnt: number
  page: number
  rows: any
  tokenPrice: any
  tokenType: any
  columns: { id: string; name: string }[]
  //   emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const Holder: React.FC<CustomizedTableProps> = ({ tableInfo, rowsPerPage, totalCnt, page, rows, tokenPrice, tokenType, columns, handleChangePage }) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  return (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <StyledTablePagination
            colSpan={3}
            count={totalCnt}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            ActionsComponent={TablePaginationActions}
          />
        </Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.name === 'Rank')
                  return <StyledTableCell key={column.id} style={{ textAlign: 'center' }}>{column.name}</StyledTableCell>
                else
                  return <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {rows.map((row: any, key: any) => (
              <TableRow key={key}>
                <StyledTableCell style={{ textAlign: 'center' }}>{key + 1}</StyledTableCell>
                <StyledTableCell>
                  <StyledLink to={`/address/${row.address}`}> {row.address} </StyledLink>
                </StyledTableCell>
                <StyledTableCell>{row.balance}</StyledTableCell>
                <StyledTableCell>
                  {row.percent}%
                  <LinearProgress variant="determinate" value={row.percent} className={classes.linearProgress} />
                </StyledTableCell>
                {
                  tokenType === TOKEN_TYPE.erc20 ?
                  (
                    <>
                      <StyledTableCell>{row.balance * tokenPrice}</StyledTableCell>
                      <StyledTableCell>
                        <StyledLink to="/txs">
                          <span className={classes.analytic}>
                            <i className="fas fa-chart-line"></i>
                          </span>
                        </StyledLink>
                      </StyledTableCell>
                    </>                      
                  )
                  :
                  (
                    <></>
                  )
                }
              </TableRow>
            ))}
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
      <StyledTableControlBox my="12px">
        <Box></Box>
        <Box>
          <Box>
            <StyledTablePagination
              colSpan={3}
              count={totalCnt}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </Box>
          <Box className={classes.tooltipdown}>
            [Download&nbsp;
            <span>
              <Link to="#" style={{ textDecoration: 'none', color: '#3498db' }}>
                CSV Exoort&nbsp;
              </Link>
              <i className="fas fa-download"></i>
            </span>
            ]
          </Box>
        </Box>
      </StyledTableControlBox>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  tokenPrice: state.price.TOKENPriceSuccessResponse,
  tokenType: state.token.tokenType,
})
export default connect(mapStateToProps, {})(Holder)
