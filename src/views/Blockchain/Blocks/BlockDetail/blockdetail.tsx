import React from 'react'
import { nanoid } from 'nanoid'

import ParentTabs from './parentab'
import Overview from './Overview'
import Comment from './Comment/Comment'

function Blockdetail(props: any) {
  var val = 0

  var parentTmp1 = <Overview blockNumber={props.blockNumber} />
  var parentTmp2 = <Comment />

  var parentTabContent = [
    {
      id: nanoid(),
      children: parentTmp1,
      label: 'Overview',
      index: 0,
    },
    {
      id: nanoid(),
      children: parentTmp2,
      label: 'Comments',
      index: 1,
    },
  ]
  return (
    <div>
      <ParentTabs val={val} tabs={parentTabContent} />
    </div>
  )
}

export default Blockdetail
