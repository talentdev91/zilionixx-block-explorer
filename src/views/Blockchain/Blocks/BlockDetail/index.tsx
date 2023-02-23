import React from 'react'
import useStyles from './blockstyle'
import { StyledPageContainer, StyledPagePager, StyledPageTitle } from '../../../../Styles'
import Blockdetail from './blockdetail'

export default function OutlinedCard(props: any) {
  const classes = useStyles()
  const blockNumber = props.match.params.block

  return (
    <StyledPageContainer>
      <StyledPageTitle>
        Block <span className={classes.topsubtitle}>#{blockNumber}</span>
      </StyledPageTitle>
      <StyledPagePager>
        <Blockdetail blockNumber={blockNumber} />
      </StyledPagePager>
    </StyledPageContainer>
  )
}
