import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

interface TableProps {
  rows: any
}

export default function DomainTable({ rows }: TableProps) {
  const classes = useStyles()

  return (
    <div>
      {rows ? (
        rows.length > 0 ? (
          <TableContainer style={{ border: '1px solid #ddd' }} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="right">Domain</TableCell>
                  <TableCell align="right">Requested Count</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any, key: any) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">
                      {row._id === null ? '<unidentified Domain> Please click analyze button to identify' : row._id}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>No IP address data</div>
      )}
    </div>
  )
}
