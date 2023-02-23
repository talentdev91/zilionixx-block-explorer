import React from 'react'

//components
import { StyledContainer, StyledLink } from '../../components/StyledContainer'
import { Button } from '@material-ui/core'

import useStyles from './style'

function Search() {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <StyledContainer>
        <div>
          <span className={classes.title}>Search not found</span>
          <br />
          <div className={classes.content}>
            <span className={classes.description}>
              Oops! The search string you entered was: ddd
              <br />
              Sorry! This is an invalid search string. <br />
              If you think this is a problem with us, please tell us.
            </span>
            <br />
            <br />
            <StyledLink to="/home">
              <Button className={classes.button}>Back Home</Button>
            </StyledLink>
          </div>
        </div>
      </StyledContainer>
    </div>
  )
}
export default Search
