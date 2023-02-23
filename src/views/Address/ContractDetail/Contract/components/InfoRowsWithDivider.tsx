import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'

interface RowsProps {
  rows: {
    id: string
    key: any
    value: any
  }[]
}

export const InfoRowsWithDivider: React.FC<RowsProps> = ({ rows }) => {
  let Rows = rows.map((row, index, { length }) => (
    <React.Fragment key={row.id}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Box p={1}>
              <Typography variant="body2">{row.key}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box p={1}>
              <Typography variant="body2">{row.value}</Typography>
            </Box>
          </Grid>
        </Grid>
        {index + 1 === length ? '' : <Divider />}
      </div>
    </React.Fragment>
  ))
  return <div>{Rows}</div>
}
