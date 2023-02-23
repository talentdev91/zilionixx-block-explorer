import React from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { StyledLink, StyledEllipsisTypography } from '../CustomLink'
import { IconTooltip } from '../ViewPanel/PanelBody/PanelItem'
import tmpImg from '../../spookyswap-boo_32.png'

interface RowsProps {
  rows: {
    col1: number
    col2: string
    col3: string
    url: string
    imgUrl: string
  }[]
}

interface ColsProps {
  cols: {
    col1: string
    col2: string
    col3: string
  }
}

export const StyledTableContainer = withStyles({
  root: {
    boxShadow: 'none',
  },
})(TableContainer)

export const StyledTable = withStyles({
  root: {},
})(Table)

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '10px',
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    color: theme.palette.text.hint,
    fontSize: '12px',
  },
  head: {
    fontWeight: 'bold',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#6c757e'}`,
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '2px solid #323232' : '2px solid #e7eaf3'}`,
  },
}))(TableCell)

export const StyledTableHead = withStyles((theme) => ({
  root: {
    borderColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.text.secondary,
    borderBottom: '1px solid #e7eaf3',
    borderTop: '1px solid #e7eaf3',
  },
}))(TableHead)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      borderBottom: '1px solid lightgrey',
    },
  }),
)(TableRow)

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  table: {
    width: '100%',
  },
})

const CustomTokensTable: React.FC<ColsProps & RowsProps> = (props) => {
  const { cols } = props as ColsProps
  const { rows } = props as RowsProps

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StyledTableContainer>
        <StyledTable className={classes.table} aria-label="customized table">
          <StyledTableHead>
            <TableRow>
              <StyledTableCell align="left">{cols.col1}</StyledTableCell>
              <StyledTableCell align="left">{cols.col2}</StyledTableCell>
              <StyledTableCell align="left">{cols.col3}</StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.col1}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <div style={{ display: 'flex' }}>
                    <img src={tmpImg} alt="None" />
                    &nbsp; &nbsp;
                    <StyledEllipsisTypography>
                      <IconTooltip title={row.url}>
                        <StyledLink noWrap href={row.url} underline="none">
                          {row.col2}
                        </StyledLink>
                      </IconTooltip>
                    </StyledEllipsisTypography>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">{row.col3}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  )
}

export default CustomTokensTable
