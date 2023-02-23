import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Redtooltip = makeStyles(() => ({
  arrow: {
    color: '#CF4847',
  },
  tooltip: {
    backgroundColor: '#CF4847',
    width: '190px',
    textAlign: 'center',
    fontSize: '13px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Redtooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
