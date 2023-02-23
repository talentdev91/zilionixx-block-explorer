import React from 'react'

//components
import { StyledContainer } from '../../components/StyledContainer'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import useStyles from './style'

interface ErrorProps {
  message: string
  refresh: any
}

function GlobalError({ message, refresh }: ErrorProps) {
  const classes = useStyles()
  return (
    <div>
      <StyledContainer>
        <Grid container className={classes.container}>
          <Grid item>
            <span className={classes.title}>Error</span>
            <br />
            <p className={classes.text}>We apologize happening an error on rendering this page.</p>
            <p className={classes.text}>Please try a refresh or leave us feedback on this issue.</p>

            <br />
            <span className={classes.description}>Error message: {message}</span>
            <Box m={2}>
              <Button className={classes.submitBtn} onClick={refresh}>
                Try again
              </Button>
              <Button className={classes.submitBtn}>
                <Link href="/contactus" style={{ textDecoration: 'none', color: 'white' }}>
                  Leave feedback
                </Link>
              </Button>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </StyledContainer>
    </div>
  )
}
export default GlobalError
