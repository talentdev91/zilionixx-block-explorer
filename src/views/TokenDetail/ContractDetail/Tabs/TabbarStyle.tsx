import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Tooltip, TooltipProps } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  tabSearch: {
    display: 'flex',
    justifyContent: 'end',
  },
  searchDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  clearButton: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: '0rem 1rem',
  },
  filterText: {
    fontSize: '.65625rem',
    padding: '6px 16px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
    backgroundColor: 'rgba(119,131,143,.1)',
    borderRadius: '0.25rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem',
  },
  clearFilter: {
    minWidth: '0px',
    // width: '1.75rem',
    // height: '1.525rem',
    borderTopLeftRadius: '0rem',
    borderBottomLeftRadius: '0rem',
    marginLeft: '-1px',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
    border: 'transparent',
    color: theme.palette.text.disabled,
    boxShadow: 'none',
    borderLeft: '1px solid #dadcdf',
    '&:hover': {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
      color: 'white',
    },
    '& i': {
      fontSize: '.71531rem',
    },
  },
}))

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    maxWidth: 250,
    backgroundColor: '#12161c',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
  },
}))
export function StyledTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

export const StyledParentTabs = withStyles((theme) => ({
  root: {
    '& .Mui-selected': {
    borderBottom: '2px solid #3498db'
  },
},
  flexContainer: {
    flexWrap: 'wrap'
  },
  indicator: {
    backgroundColor: '#3498db',
    display: 'none'
  },
}))(Tabs)

export const StyledParentTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '0 10px',
      minHeight: '44px',
      marginRight: theme.spacing(2),
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : 'rgba(74,79,85,.8)'}`,
      opacity: 1,
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

export const StyledSimpleTabs = withStyles({
  indicator: {
    background: 'none',
  },
})(Tabs)

export const StyledSimpleTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '0 10px',
      border: '1px solid lightgrey',
      minHeight: '30px',
      borderRadius: '4px',
      marginRight: theme.spacing(2),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: 'white',
        backgroundColor: '#77838f',
        fontWeight: 'theme.typography.fontWeightMedium',
      },
      '&:focus': {
        // color: '#40a9ff',
      },
    },
    selected: {},
  }),
)(Tab)

export const StyledTextOverflow = style.div`
white-space: nowrap; 
width: 120px; 
overflow: hidden;
text-overflow: ellipsis; 
`
export const StyledFilterButton = style.div`
display: flex!important;
align-item: center;
`