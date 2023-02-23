import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

export const Introduction: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <Box mb={2}>
        <Typography className={classes.description} variant="body2">
          The Zilionixx Developer APIs are provided as a community service and without warranty, so please use what you
          need and no more. We support both GET/POST requests and there is a rate limit of 5 calls per sec/IP.
        </Typography>
      </Box>
      <Box pt={2} mb={4}>
        <Typography className={classes.description} variant="body2">
          Note: Source attribution via a link back or mention that your app is "Powered by ZnxScan.com APIs" is required
          except for personal/private usage.
        </Typography>
      </Box>
    </div>
  )
}
