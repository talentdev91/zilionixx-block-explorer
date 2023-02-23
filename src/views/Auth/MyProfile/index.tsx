import React from 'react'
import { nanoid } from 'nanoid'
// material-ui components

// components
import { StyledPagePager } from '../../../Styles'
import Overview from './components/Overview'
import Comments from './components/Profile'
import TxDetailPage from './components/TxDetailPage'

function TransactionDetail() {
  const val = 0

  const parentTmp1 = <Overview />
  const parentTmp4 = <Comments />

  var parentTabContent = [
    {
      id: nanoid(),
      children: parentTmp1,
      label: 'Overview',
      visible: true,
      index: 0,
    },
    {
      id: nanoid(),
      children: parentTmp4,
      label: 'Account Settings & Profile',
      visible: true,
      index: 1,
    },
  ]

  return (
    <StyledPagePager elevation={3}>
      <TxDetailPage val={val} tabs={parentTabContent} />
    </StyledPagePager>
  )
}

export default TransactionDetail
