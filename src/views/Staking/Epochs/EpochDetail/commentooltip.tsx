import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Whitetooltip = makeStyles(() => ({
  tooltip: {
    width: '190px',
    textAlign: 'center',
    fontSize: '13px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Whitetooltip()

  return <Tooltip classes={classes} {...props} />
}
