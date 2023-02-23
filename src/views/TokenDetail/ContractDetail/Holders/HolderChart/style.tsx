import { Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import { Tooltip, TooltipProps } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React from 'react'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#f8f9fa'}`,
  },
  loading: {
    padding: '20px',
  },
  header: {
    padding: '0.75rem 2.8rem 0.75rem 2.8rem',
    borderBottom: `1px solid  ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
  headerLink: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
  },
  navStyle: {
    fontSize: '0.6rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
  },
  navLinkStyle: {
    textDecoration: 'none',
    color: '#3498db',
    '&:hover': {
      color: 'rgb(35,86,165)',
    }
  },
  holdpietitle: {
    marginBottom: '.5rem!important',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '.7rem',
    padding: '.3rem .5rem',
    borderRadius: '8rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
    background: 'rgba(119,131,143,.1)',
    borderColor: 'transparent',
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgb(119,131,143)'
      // backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgb(119,131,143)' : '#77838f'}`,
    },
  },
  chartTable: {
    margin: '1.25rem 2.8rem 3.25rem 2.8rem',
  },
  table: {
    '& .highcharts-background': {
      fill: theme.palette.primary.light,
    },
    '& .highcharts-title': {
      fill: `${theme.typography.body2.color}!important`,
    },
    '& .highcharts-subtitle': {
      fill: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#1e2022!important'}`,
    },
    borderRadius: '0.5vmax',
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : 'white'}`,
  },
  fiterTable: {
    marginBottom: '8px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.5',
  },
  selectStyle: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : 'white'}`,
    height: 'calc(1.55rem + 2px)',
    padding: '0.375rem',
    fontSize: '80%',
    backgroundPosition: 'right 0.375rem center',
    borderRadius: '0.35rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    '&:focus': {
      boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
    },
    '&:after': {
      backgroundColor: 'blue',
      borderColor: 'red'
    },
    '&:focus-visible': {
      outline: 'none',
    }
  },
  icon: {
    color: '#3498db',
  },
  chartTitle: {
    fontFamily: 'Helvetica,Arial,sans-serif',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#12161c'}`,
    textAlign: 'center',
    fontSize: '0.8rem',
    padding: '20px 12px 20px 12px',
    borderBottom: `1px solid  ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
  chartTitleEther: {
    paddingLeft: '7.5px',
    padingRight: '7.5px',
    lineHeight: '1.5',
    borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
  chartTitleHolder: {
    paddingLeft: '7.5px',
    padingRight: '7.5px',
    lineHeight: '1.5',
  },
  chartContent: {
    padding: '12px',
  },
  chart: {
    marginBottom: '1.25rem',
  },
  resultSupply: {
    fontFamily: 'Helvetica,Arial,sans-serif',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#12161c'}`,
    fontSize: '0.9rem',
  },
}))
export default useStyles

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

export const StyledLink = withStyles((theme) => ({
  root: {
    color: theme.palette.info.main,
    fontSize: '.825rem',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
}))(Link)

export const StyledEllipsisTypography = withStyles((theme) => ({
  root: {
    width: "170px",
    color: theme.palette.info.main,
    fontSize: '.825rem',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 1.8,
  },
}))(Typography)