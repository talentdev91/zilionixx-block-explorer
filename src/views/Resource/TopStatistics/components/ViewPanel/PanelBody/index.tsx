import React from 'react'
import { PanelItem } from './PanelItem'
import { StyledBodyBox } from '../PanelStyle'
import { Divider } from '@material-ui/core'

interface PanelBodyProps {
  type: string
  panelItems: {
    id: any
    topLeftItem: string
    topRightItem: string
    bottomLeftItem: string
    bottomRightItem: string
    url: string
    isIcon: boolean
  }[]
}

export const PanelBody: React.FC<PanelBodyProps> = ({ type, panelItems }) => {
  // var Items
  let Items = panelItems.map((item, index, { length }) => (
    <React.Fragment key={item.id}>
      <div>
        <PanelItem
          // key={item.id}
          type={type}
          topLeftItem={item['topLeftItem']}
          topRightItem={item['topRightItem']}
          bottomLeftItem={item['bottomLeftItem']}
          bottomRightItem={item['bottomRightItem']}
          url={item['url']}
          isIcon={item['isIcon']}
        />
        {index + 1 === length ? '' : <Divider />}
      </div>
    </React.Fragment>
  ))
  return <StyledBodyBox>{Items}</StyledBodyBox>
}
