import React from 'react'
import { nanoid } from 'nanoid'
import Card from '@material-ui/core/Card'
import { StyledContainer } from '../../../components/StyledContainer'

import ParentTabs from '../../Resource/TopStatistics/components/Tab/ParentTabs'
//components
import Overview from './Overview'
import Other from './Other'
import RequestStatistics from './RequestStatistics'

import { useStyles } from '../Token/ERC20Token/TableStyle'
import Category from '../category'

const Token: React.FC = () => {
  const classes = useStyles()

  var val = 0

  var parentTabContent = [
    {
      id: nanoid(),
      children: <Overview />,
      label: 'Overview',
      index: 0,
      suburl: [''],
    },
    {
      id: nanoid(),
      children: <RequestStatistics></RequestStatistics>,
      label: 'Request Statistics',
      index: 1,
      suburl: ['requests'],
    },
    {
      id: nanoid(),
      children: <Other></Other>,
      label: 'Other',
      index: 2,
      suburl: ['other'],
    },
  ]
  return (
    <div>
      <StyledContainer>
        <Category />
        <Card variant="outlined" className={classes.tablestyle}>
          <ParentTabs val={val} tabs={parentTabContent} />
        </Card>
      </StyledContainer>
    </div>
  )
}

export default Token
