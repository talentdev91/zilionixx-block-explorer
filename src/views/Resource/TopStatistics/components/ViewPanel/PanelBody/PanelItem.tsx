import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined'

import { StyledLink, StyledEllipsisTypography } from '../../CustomLink'

interface PanelItemProps {
  type: string
  topLeftItem: string
  topRightItem: string
  bottomLeftItem: string
  bottomRightItem: string
  url: string
  isIcon: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 15,
  },
  pullRight: {
    textAlign: 'right',
  },
  pullLeft: {
    float: 'left',
  },
  inlineDisplay: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingBottom: '3px',
  },
}))

const useStylesIcon = makeStyles((theme: Theme) => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    backgroundColor: '#12161c',
    fontSize: '.75rem',
  },
}))

export function IconTooltip(props: TooltipProps) {
  const classes = useStylesIcon()

  return <Tooltip arrow classes={classes} {...props} />
}

export const PanelItem: React.FC<PanelItemProps> = ({
  type,
  topLeftItem,
  topRightItem,
  bottomLeftItem,
  bottomRightItem,
  url,
  isIcon,
}) => {
  const classes = useStyles()

  let MatchingIcon
  if (type === 'transactions') {
    MatchingIcon = <DescriptionOutlinedIcon style={{ fontSize: 15 }} />
  } else {
    MatchingIcon = <AccountBalanceWalletOutlinedIcon style={{ fontSize: 15 }} />
  }
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Typography variant="body1">{topLeftItem}</Typography>
          <div className={classes.inlineDisplay}>
            {isIcon ? <IconTooltip title="Contract">{MatchingIcon}</IconTooltip> : ''}
            <StyledEllipsisTypography>
              <IconTooltip title={bottomLeftItem}>
                <StyledLink noWrap href={url} underline="none">
                  &nbsp;{bottomLeftItem}
                </StyledLink>
              </IconTooltip>
            </StyledEllipsisTypography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.pullRight}>
            <Typography variant="body1">{topRightItem}</Typography>
            <Typography variant="body2">{bottomRightItem}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
