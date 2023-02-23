import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, createStyles, Theme } from '@material-ui/core/styles'

import {
  Table,
  TableCell,
  TableHead,
  TableBody,
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
  container: {
    padding: '12px',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.primary.light,
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
  block: {
    color: '#77838f',
    fontSize: '.825rem',
    fontWeight: 400,
  },
  blocknumber: {
    color: '#3498db',
    fontSize: '.825rem',
    fontWeight: 400,
    textDecoration: 'none',
  },
  spinner: { marginLeft: 0 },
  rowInfo: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  link: {
    color: theme.palette.info.main,
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 171,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  falseIcon: {
    color: '#de4437!important',
    float: 'left',
    '& i': {
      marginTop: '4px',
      marginRight: '4px',
    }
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

const Whitetooltip = makeStyles(() => ({
  arrow: {
    color: '#77838f',
  },
  tooltip: {
    maxWidth: 400,
    backgroundColor: 'white',
    color: '#77838f',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '12px',
    border: '1px solid #77838f',
  },
}))

export function StyledTooltipDetail(props: TooltipProps) {
  const classes = Whitetooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

export const StyledAgeBtn = style.span`
color: #3498db;
:hover {
  color: #0150e3;
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

export const StyledTable = withStyles({
  root: {
    minWidth: 236,
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
    whiteSpace: 'nowrap',
    padding: '10px',
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    color: theme.palette.text.hint,
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
  spacer: {
    flex: 'none',
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
    fontSize: '12px',
    lineHeight: 1.5,
    fontWeight: 500,
    height: '100vh',
    textTransform: 'none',
    minWidth: 'fit-content',
    borderRadius: '6px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#8c98a4'}`,
  },
}))(Box)

export const StyledPageTitle = withStyles((theme) => ({
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

export const StyledNativeSelect = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3!important' : '#1e2022'}`,
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #d5dae2'}`,
    '&:focus': {
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #d5dae2'}`,
      boxShadow: '0 2px 7px rgb(52 152 219 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
      backgroundColor: theme.palette.primary.main,
    },
    '& option': {
      backgroundColor: `${theme.palette.primary.main}!important`,
    },
  },
  icon: {
    right: '8px',
  },
}))(NativeSelect)

export const StyledTableControlBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down(750)]: {
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [theme.breakpoints.up(750)]: {
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

export const StyledMethodBtn = withStyles((theme) => ({
  root: {
    width: 'max-content',
    textAlign: 'center',
    margin: '0 4px',
    padding: '0.2rem 0.5rem',
    backgroundColor: 'rgba(52,152,219,.1)',
    borderColor: '#e7eaf3',
    fontSize: '.65625rem',
    lineHeight: 1.7,
    fontWeight: 500,
    textTransform: 'none',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3!important' : '#1e2022'}`,
    '&:hover': {
      backgroundColor: 'rgba(51,122,254,.1)',
    },
  },
}))(Button)

export const StyledEmptyRowBox = withStyles({
  root: {
    margin: '10px',
    padding: '12px',
    color: '#725002',
    backgroundColor: '#f8ebcd',
    borderRadius: '6px',
  },
})(Box)

export const StyledSelfButton = withStyles({
  root: {
    backgroundColor: 'rgba(119,131,143,.2)',
    color: '#626c76',
    padding: '0.2rem 0.5rem',
  },
})(Button)

export const StyledTableBody = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableBody)
