import React from 'react'
import useStyles from './epochstyle'
import { StyledPageContainer, StyledPagePager, StyledPageTitle } from '../../../../Styles'
import Epochdetail from './epochdetail'

export default function OutlinedCard(props: any) {
  const classes = useStyles()
  const epochNumber = props.match.params.epoch

  return (
    <StyledPageContainer>
      <StyledPageTitle>
        Epoch <span className={classes.topsubtitle}>#{epochNumber}</span>
      </StyledPageTitle>
      <StyledPagePager>
        <Epochdetail epochNumber={epochNumber} />
      </StyledPagePager>
    </StyledPageContainer>
  )
}
