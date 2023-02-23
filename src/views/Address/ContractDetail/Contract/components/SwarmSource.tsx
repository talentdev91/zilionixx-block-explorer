import React from 'react'
import { CodePaper } from '../../../styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { useStyles } from '../../../styles'

interface SwarmSourceProps {
  code: string
}

export const SwarmSource: React.FC<SwarmSourceProps> = ({ code }) => {
  const classes = useStyles()
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              <i className="far fa-map"></i>
              &nbsp;
              <strong>Deployed ByteCode Sourcemap</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <CodePaper variant="outlined">
          <code className={classes.wrapAnywhere}>{code}</code>
        </CodePaper>
      </Box>
    </Box>
  )
}
