import React from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const Redtooltip = makeStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    color: '#83838F',
    width: '190px',
    textAlign: 'center',
    fontSize: '12px',
  },
}))

export default function BootstrapTooltip(props: TooltipProps) {
  const classes = Redtooltip()

  return <Tooltip arrow classes={classes} {...props} />
}
