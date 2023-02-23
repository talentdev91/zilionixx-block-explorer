import React from 'react'
import { nanoid } from 'nanoid'
import Card from '@material-ui/core/Card'
import { StyledContainer } from '../../../components/StyledContainer'

import ParentTabs from '../../Resource/TopStatistics/components/Tab/ParentTabs'
//components
import GeneralInquiry from './GeneralInquiry'
import SupportIssue from './SupportIssue'
import NameTagging from './NameTagging'

import { useStyles } from '../Token/ERC20Token/TableStyle'
import Category from '../category'

const Feedback: React.FC = () => {
  const classes = useStyles()

  var val = 0

  var parentTabContent = [
    {
      id: nanoid(),
      children: <GeneralInquiry />,
      label: 'General Inquiry',
      index: 0,
      suburl: ['generalinquiry'],
    },
    {
      id: nanoid(),
      children: <SupportIssue />,
      label: 'Support / Technical Issue',
      index: 1,
      suburl: ['supportissue'],
    },
    {
      id: nanoid(),
      children: <NameTagging />,
      label: 'Name Tagging',
      index: 2,
      suburl: ['nametagging'],
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

export default Feedback
