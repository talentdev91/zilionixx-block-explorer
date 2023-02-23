import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, createStyles, Theme, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import {
  Table,
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
  container: {
    padding: '12px',
    border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
    wordWrap: 'break-word',
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    marginTop: '20px',
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
  pendingBtn: {
    '&:hover': {
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
  },
  changePlusText: {
    fontSize: '.875rem',
    // fontWeight: 400,
    color: '#de4437',
  },
  changeMinusText: {
    fontSize: '.875rem',
    // fontWeight: 400,
    color: '#00c9a7',
  },
  icon: {
    width: 19.25,
    height: 19.25,
  },
  changeIcon: { verticalAlign: 'bottom' },
  tableText: {
    fontSize: '12px',
    color: '#6c757e',
  },
  market: {
    textDecoration: 'underline',
  },
  tableTopText: {
    color: '#4a4f55',
    fontSize: '.875rem',
    fontWeight: 600,
  },
  erc: {
    color: '#626c76',
    backgroundColor: '#dee1e5',
    fontWeight: 700,
    fontSize: '.65625rem',
    padding: '.2rem .5rem',
    borderRadius: '.35rem !important',
    marginLeft: 7,
  },
  revoke: {
    cursor: 'not-allowed',
    fontSize: '.72rem',
    fontWeight: 400,
    color: '#fff',
    backgroundColor: '#3498db',
    borderColor: '#3498db',
    borderRadius: '.25rem',
    padding: '.3rem .6rem',
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

const SearchBoxToolTip = makeStyles(() => ({
  tooltip: {
    // maxWidth: 200,
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: '6px',
    fontSize: '12px',
    boxShadow: '0 2px 7px rgb(51 122 254 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
  },
}))

export function StyledSearchTooltip(props: TooltipProps) {
  const classes = SearchBoxToolTip()

  return <Tooltip classes={classes} {...props} />
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

export const StyledPendingSearchBtn = withStyles({
  root: {
    minWidth: '28px',
    padding: '8px',
    backgroundColor: '#3498db',
    '&:hover': {
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
  },
})(Button)

export const StyledTable = withStyles({
  root: {
    minWidth: 236,
    borderTop: `${localStorage.appTheme === 'darkTheme' ? '1px solid #57585b' : '#f8fafd'}`,
  },
})(Table)

export const StyledTableHead = withStyles({
  root: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    borderBottom: '1px solid #e7eaf3',
  },
})(TableHead)

export const StyledTableCell = withStyles({
  root: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
    padding: '10px',
    verticalAlign: 'baseline',
  },
  head: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#6c757e'}`,
    fontWeight: 600,
  },
})(TableCell)

export const StyledTableCell1 = withStyles({
  root: {
    padding: '10px',
    verticalAlign: 'baseline',
  },
  head: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#6c757e'}`,
    fontWeight: 600,
  },
})(TableCell)

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

export const StyledPaginationBtn = withStyles({
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
  },
})(Button)

export const StyledPageInfoBtn = withStyles({
  root: {
    textAlign: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(52,152,219,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#8c98a4',
    fontSize: '12px',
    lineHeight: 1.5,
    fontWeight: 500,
    height: '100vh',
    textTransform: 'none',
    minWidth: 'fit-content',
    borderRadius: '6px',
  },
})(Box)

export const StyledPageTitle = withStyles({
  root: {
    padding: '12px 0',
    color: '#4a4f55',
    fontWeight: 400,
    fontSize: '21px',
  },
})(Typography)

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

export const StyledEmptyRowBox = withStyles({
  root: {
    margin: '10px',
    padding: '12px',
    color: '#725002',
    backgroundColor: '#f8ebcd',
    borderRadius: '6px',
  },
})(Box)
