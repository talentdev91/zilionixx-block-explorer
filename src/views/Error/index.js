import React from 'react'

//components
import { StyledContainer } from '../../components/StyledContainer'
import Grid from '@material-ui/core/Grid'
import useStyles from './style'

function Error() {
  const classes = useStyles()
  return (
    <div>
      <StyledContainer>
        <Grid container className={classes.container}>
          <Grid item>
            <span className={classes.title}>404</span>
            <br />
            <span className={classes.text}>Page not found...</span>
            <br />
            <span className={classes.description}>
              It looks like we couldn't find the the page you were looking for. You can go back, <br /> or go to our
              Homepage.
            </span>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </StyledContainer>
    </div>
  )
}
export default Error
