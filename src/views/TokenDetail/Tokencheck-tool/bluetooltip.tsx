import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Bluetooltip = makeStyles(() => ({
  arrow: {
    color: '#001F68',
  },
  tooltip: {
    backgroundColor: '#001F68',
    width: '190px',
    textAlign: 'center',
    fontSize: '12px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Bluetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
