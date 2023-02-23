import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Bluetooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    backgroundColor: '#12161c',
    width: '190px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#fff',
    borderRadius: '0.35rem',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Bluetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
