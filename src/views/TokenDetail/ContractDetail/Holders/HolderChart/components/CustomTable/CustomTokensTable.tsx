import React from 'react'
import { withStyles, Theme, createStyles, makeStyles, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import LinearProgress from '@material-ui/core/LinearProgress'
import { StyledEllipsisTypography } from '../../style'
import { IconTooltip } from '../ViewPanel/PanelBody/PanelItem'
import tmpImg from '../../spookyswap-boo_32.png'

interface CustomizedTableProps {
  columns: { id: string; name: string }[]
  rows: any
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

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  '&:hover': {
    color: '#2c80b4',
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  table: {
    width: '100%',
  },
  linearProgress: {
    backgroundColor: theme.palette.secondary.light,
    height: '2px',
  },
}))

const CustomTokensTable: React.FC<CustomizedTableProps> = ({ columns, rows }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StyledTableContainer>
        <StyledTable className={classes.table} aria-label="customized table">
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
          <TableBody>
            {rows.map((row: any, index: any) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>
                  <StyledLink to={`/address/${row.address}`}>
                    {row.address}
                  </StyledLink>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.holdingTokens.balance}
                </StyledTableCell>
                <StyledTableCell>
                    {row.percent}%
                    <LinearProgress variant="determinate" value={row.percent} className={classes.linearProgress} />
                  </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </div>
  )
}

export default CustomTokensTable
