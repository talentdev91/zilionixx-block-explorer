import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, createStyles, Theme, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Box,
  Button,
  InputBase,
  Typography,
  NativeSelect,
  IconButton,
  SvgIcon,
  Tooltip,
  TooltipProps,
} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  styleSearch:  {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#12161c'}`,
  },
  alink: {
    textDecoration: 'none',
    color: '#3498db',
    '&:hover': {
      color: '#2c80b4',
    },
  },
  container: {
    padding: '12px',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `${localStorage.appTheme === 'darkTheme'
      ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
      : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
      }`,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '8px',
  },
  customWidth: {
    maxWidth: 200,
    backgroundColor: '#001f68',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
  },
  tooltipdown: {
    color: theme.palette.primary.contrastText,
    fontSize: '60%',
    fontWeight: 400,
    float: 'right',
    marginTop: '30px',
  },
  analytic: {
    fontWeight: 900,
    marginLeft: '.5rem!important',
    fontSize: '1.33333em',
    lineHeight: '.75em',
    verticalAlign: '-.0667em',
  },
  outstyle: {
    width: 'auto',
    textAlign: 'center',
    margin: '0 4px',
    padding: '0.3rem 0.4rem',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#1e322f' : '#e5f9f6'}`,
    color: '#00c9a7',
    borderColor: '#e7eaf3',
    minWidth: '68px',
    fontSize: '0.65625rem',
    lineHeight: 1.7,
    fontWeight: 700,
    textTransform: 'none',
    borderRadius: '50%!important',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      color: 'black',
    },
  },
  instyle: {
    width: '80px',
    textAlign: 'center',
    margin: '0 4px',
    padding: '0.3rem 0.85rem',
    backgroundColor: '#C4EEE9',
    color: '#69977E',
    borderColor: '#C4EEE9',
    minWidth: '80px',
    fontSize: '0.65625rem',
    lineHeight: 1.7,
    fontWeight: 700,
    textTransform: 'none',
    borderRadius: '.35rem!important',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  linearProgress: {
    backgroundColor: theme.palette.secondary.light,
    height: '2px',
  },
  tableIcon: {
    color: theme.palette.text.hint
  }
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

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  '&:hover': {
    color: '#2c80b4',
  },
})

export const StyledAgeBtn = style.span`
color: #3498db;
:hover {
  color: #2c80b4;
}
cursor: pointer;
font-size: 14px;
font-weight: 600;
`

export const StyledTextOverflow = style.div`
white-space: nowrap; 
width: 180px; 
overflow: hidden;
text-overflow: ellipsis; 
`
export const StyledTextOverflow1 = style.div`
white-space: nowrap; 
width: 60px; 
overflow: hidden;
text-overflow: ellipsis; 
`

export const StyledTable = withStyles({
  root: {
    minWidth: '236px',
  },
})(Table)

export const StyledTableHead = withStyles((theme) => ({
  root: {
    borderColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.text.secondary,
    borderBottom: '1px solid #e7eaf3',
    borderTop: '1px solid #e7eaf3',
  },
}))(TableHead)

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '10px',
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    color: theme.palette.text.hint,
    whiteSpace: 'nowrap',
  },
  head: {
    fontWeight: 'bold',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#6c757e'}`,
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '2px solid #323232' : '2px solid #e7eaf3'}`,
  },
}))(TableCell)

export const StyledTablePagination = withStyles({
  root: {
    padding: '0px',
    border: 'none',
  },
  input: {
    display: 'none',
  },
  caption: {
    display: 'none',
  },
  toolbar: {
    minHeight: '30px',
    '&.MuiToolbar-gutters': {
      padding: '0',
    },
  },
})(TablePagination)

export const StyledRowsPerPageBox = withStyles({
  root: {
    color: '#77838f',
    fontSize: '14px',
    fontWeight: 400,
  },
})(Box)

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 12,
      margin: '0 8px',
      padding: '4px 18px 8px 6px !important',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase)

export const StyledPaginationBtn = withStyles((theme: Theme) => ({
  root: {
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(52,152,219,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#3498db',
    fontSize: '12px',
    lineHeight: 1.5,
    height: '100vh',
    textTransform: 'none',
    minWidth: '45px',
    borderRadius: '6px',
    '&:hover': {
      color: 'white',
      backgroundColor: '#3498db',
    },
    '&:disabled': {
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#8c98a4'}`,
    },
  },
}))(Button)

export const StyledPageInfoBtn = withStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(52,152,219,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#8c98a4'}`,
    fontSize: '12px',
    lineHeight: 1.5,
    fontWeight: 500,
    height: '100vh',
    textTransform: 'none',
    minWidth: 'fit-content',
    borderRadius: '6px',
  },
}))(Box)

export const StyledPageTitle = withStyles((theme: Theme) => ({
  root: {
    padding: '12px 0',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    fontWeight: 400,
    fontSize: '21px',
  },
}))(Typography)

export const StyledIconButton = withStyles({
  root: {
    backgroundColor: 'rgba(0,201,167,.1)',
    width: '21px',
    height: '21px',
    padding: '0',
    '&:hover': {
      backgroundColor: 'rgba(0,201,167,.1)',
    },
  },
})(IconButton)

export const StyledSvgIcon = withStyles({
  root: {
    padding: '4px',
    color: '#00c9a7',
    '&:hover': {
      color: 'black',
    },
  },
})(SvgIcon)

export const StyledNativeSelect = withStyles({
  icon: {
    right: '8px',
  },
})(NativeSelect)

export const StyledTableControlBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down(768)]: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [theme.breakpoints.up(768)]: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
}))(Box)

export const StyledInfoButton = withStyles({
  root: {
    minWidth: '21px',
    padding: '0',
    width: '21px',
    height: '21px',
    borderRadius: '4px',
    backgroundColor: 'rgba(119,131,143,.1)',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#77838f',
      boxShadow: '0 4px 11px rgb(119 131 143 / 35%)',
    },
  },
  startIcon: {
    margin: '0',
    color: 'black',
    '&:hover': {
      color: 'white',
    },
  },
})(Button)

export const StyledMethodBtn = withStyles({
  root: {
    width: 'auto',
    textAlign: 'center',
    margin: '0 4px',
    padding: '3px 8px',
    backgroundColor: 'rgba(51,122,254,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    minWidth: '68px',
    fontSize: '11px',
    lineHeight: 1.5,
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      backgroundColor: 'rgba(51,122,254,.1)',
    },
  },
})(Button)

export const StyledTableBody = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableBody)
