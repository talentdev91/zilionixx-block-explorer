import React from 'react'
import { nanoid } from 'nanoid'
import Card from '@material-ui/core/Card'
import { StyledContainer } from '../../../components/StyledContainer'

import ParentTabs from '../../Resource/TopStatistics/components/Tab/ParentTabs'
import ERC20Tokens from './ERC20Token'
import ERC721Tokens from './ERC721Token'
import Confirmed20Tokens from './Confirmed20'
import { useStyles } from './ERC20Token/TableStyle'
import Category from '../category'

const Token: React.FC = () => {
  const classes = useStyles()

  var val = 0
  var ERC20Token = <ERC20Tokens />
  var ERC721Token = <ERC721Tokens />
  var Confirmed20 = <Confirmed20Tokens />
  var parentTabContent = [
    {
      id: nanoid(),
      children: ERC20Token,
      label: 'ERC-20 TokenInfo',
      index: 0,
      suburl: [''],
    },
    {
      id: nanoid(),
      children: Confirmed20,
      label: 'Confirmed TokenInfo',
      index: 1,
      suburl: ['Confirmed20'],
    },
    {
      id: nanoid(),
      children: ERC721Token,
      label: 'ERC-721 Token',
      index: 2,
      suburl: ['ERC721Token'],
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
