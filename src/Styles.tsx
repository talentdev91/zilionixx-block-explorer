import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles, Theme, createStyles, makeStyles, styled } from '@material-ui/core/styles'
import style from 'styled-components'

import { Typography, Container, Paper, Tabs, Tab, Tooltip, TooltipProps, Box, Button } from '@material-ui/core'

export const StyledPageContainer = withStyles({
  root: {
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
})(Container)

export const StyledPageTitle = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '12px 0',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
      fontWeight: 400,
      fontSize: '21px',
    },
  }),
)(Typography)

export const StyledPagePager = withStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.primary.light,
      border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
      borderRadius: '8px',
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    },
  }),
)(Paper)

export const StyledParentTabs = withStyles({
  root: {
    borderBottom: '1px solid #323232',
  },
  indicator: {
    backgroundColor: '#3498db',
  },
})(Tabs)

export const StyledParentTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '0 20px',
      minHeight: '44px',
      marginRight: theme.spacing(2),
      opacity: 1,
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : 'rgba(74,79,85,.8)'}`,
      '&:hover': {
        color: '#3498db',
        opacity: 1,
      },
      '&$selected': {
        color: theme.palette.info.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#3498db',
      },
    },
    wrapper: {
      fontWeight: 'bold',
    },
    selected: {},
  }),
)(Tab)

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    backgroundColor: '#12161c',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: 400,
  },
}))

export function StyledDarkTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

export const StyledPendingSearchBtn = withStyles((theme: Theme) => ({
  root: {
    minWidth: '28px',
    padding: '8px',
    color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    boxShadow: '0 0 0 transparent',
    borderRadius: '0.35rem',
    marginLeft: '-1px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 transparent',
    },
  },
}))(Button)

const Whitetooltip = makeStyles(() => ({
  arrow: {
    color: 'lightgrey',
  },
  tooltip: {
    // maxWidth: 200,
    backgroundColor: 'white',
    color: '#1e2022',
    textAlign: 'left',
    padding: '8px 12px',
    borderRadius: '0.35rem',
    fontSize: '12px',
    border: '1px solid rgba(0,0,0,.2)',
    fontWeight: 400,
  },
}))

export function StyledWhiteTooltip(props: TooltipProps) {
  const classes = Whitetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  '&:hover': {
    color: '#2c80b4',
  },
})

export const StyledTextOverflow = style.div`
white-space: nowrap; 
width: 180px; 
overflow: hidden;
text-overflow: ellipsis; 
`
//global style
export const StyledEmptyRowBox = withStyles((theme: Theme) => ({
  root: {
    margin: '10px',
    padding: '12px',
    fontSize: '.875rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#db9a04!important' : '#725002'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(219,154,4,.1)!important' : '#f8ebcd'}`,
    borderRadius: '6px',
  },
}))(Box)
