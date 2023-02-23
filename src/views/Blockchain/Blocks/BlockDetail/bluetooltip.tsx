import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Bluetooltip = makeStyles(() => ({
  arrow: {
    color: 'blue',
  },
  tooltip: {
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: '13px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Bluetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
