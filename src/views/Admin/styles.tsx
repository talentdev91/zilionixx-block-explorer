import React from 'react'
import { makeStyles, withStyles, createStyles, Theme, styled } from '@material-ui/core/styles'
import style from 'styled-components'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {
  Tooltip,
  TooltipProps,
  Table,
  TableCell,
  TableHead,
  TablePagination,
  Box,
  InputBase,
  Typography,
  NativeSelect,
  IconButton,
  SvgIcon,
} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '12px',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `${
      localStorage.appTheme === 'darkTheme'
        ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
        : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
    }`,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '8px',
  },
  contractInfo: {
    maxWidth: '100%',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '.75rem!important',
    paddingTop: '.75rem!important',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'left',
    display: 'flex',
    flexWrap: 'wrap',
  },
  tokentitle: {
    fontWeight: 400,
    color: '#1e2022!important',
    fontSize: '1.3125rem',
  },
  modal: {
    backgroundColor: 'white',
    width: 500,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    padding: '1.5rem',
    paddingBottom: '1rem',
  },
  checkBtn: {
    width: 'max-content',
    fontSize: '0.8rem',
    cursor: 'pointer',
    lineHeight: '1.4',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    marginLeft: '15px',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#3498db'}`,
    },
  },
  backBtn: {
    cursor: 'pointer',
    lineHeight: '1.4',
    fontSize: '1rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    marginLeft: '15px',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.7)' : '#3498db'}`,
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#3498db'}`,
    },
  },
  viewBtn: {
    cursor: 'pointer',
    fontSize: '.765625rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    marginLeft: '.25rem',
    color: '#fff',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : theme.palette.info.main}`,
    border: `0.5px solid rgba(52,152,219,.2)`,
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: theme.palette.info.main,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
        boxShadow: '0 0 0 0 transparent',
    },
  },
  tabBtn: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: theme.palette.info.main,
    marginTop: 15,
    marginBottom: 'auto',
    float: 'right',
    marginRight: 5,
    padding: 18,
    '&:hover': {
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  activeTab: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: theme.palette.info.dark,
    marginTop: 15,
    marginBottom: 'auto',
    float: 'right',
    marginRight: 5,
    padding: 18,
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },
  profileDelete: {
    cursor: 'pointer',
    fontSize: '.765625rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    margin: '0rem .5rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    backgroundColor: '#de4437',
    borderColor: '#de4437',
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
      boxShadow: '0 4px 11px rgb(229 118 146 / 35%)',
      backgroundColor: '#de4437',
    },
    '&:disabled': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  errorMessage: {
    color: '#de4437!important',
    marginTop: '0.25rem',
    fontSize: '80%',
  },
  checkedFeedback: {
    backgroundColor: theme.palette.info.main,
    color: 'white',
    fontSize: '.75rem',
    height: '25px',
    width: '90px',
  },
  uncheckedFeedback: {
    backgroundColor: '#de4437',
    color: 'white',
    fontSize: '.75rem',
    height: '25px',
    width: '90px',
  },
  checkbox: {
    color: theme.palette.info.main,
    '&.Mui-checked': {
      color: theme.palette.info.main,
    },
  },
}))

export const BlueHoverLink = withStyles((theme: Theme) => ({
  root: {
    color: '#447CFE',
    backgroundColor: '#E4ECFB',
    '&:hover': {
      color: 'white',
      backgroundColor: '#447CFE',
    },
    fontSize: '.65rem',
    padding: '.3rem',
    borderRadius: '20%',
  },
}))(Link)

export const RedBackgroundPaper = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: '#725002',
    backgroundColor: '#F8EBCD',
  },
}))(Paper)

export const ContractCodeBtn = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#77838f',
    fontSize: '.65625rem',
    padding: '.3rem 0',
    borderColor: '#77838f',
    minWidth: 30,
    '&:hover': {
      cursor: 'pointer !important',
      backgroundColor: '#77838f',
    },
  },
}))(Button)

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  '&:hover': {
    color: '#2c80b4',
    textDecoration: 'none',
  },
})

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
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: '#3498db',
    marginTop: 15,
    marginBottom: 'auto',
    float: 'right',
    marginRight: 5,
    padding: 18,
    '&:hover': {
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
  },
})(Button)

export const StyledDeleteBtn = withStyles({
  root: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: '#ea0404',
    marginRight: 5,
    padding: 5,
    color: 'white',
    '&:hover': {
      backgroundColor: '#ff0000',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
  },
})(Button)

export const StyledEditBtn = withStyles({
  root: {
    minWidth: '1.75rem',
    height: '1.75rem',
    backgroundColor: '#01d020',
    marginRight: 5,
    padding: 5,
    color: 'white',
    '&:hover': {
      backgroundColor: '#7ad087',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
  },
})(Button)

export const StyledTable = withStyles((theme) => ({
  root: {
    minWidth: 236,
    borderTop: `1px solid ${theme.palette.secondary.light}`,
  },
}))(Table)

export const StyledTableHead = withStyles((theme: Theme) => ({
  root: {
    borderColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.text.secondary,
    borderBottom: '1px solid #e7eaf3',
  },
}))(TableHead)

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
  },
  head: {
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
  },
}))(TableCell)

export const StyledTableCell2 = withStyles((theme) => ({
  root: {
    padding: '10px',
    verticalAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
  },
  head: {
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center'
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
      height: 25,
      marginTop: 5,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 14,
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
    height: '100vh',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(51,122,254,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#3498db',
    fontSize: '12px',
    lineHeight: 1.5,
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
    height: '100vh',
    textAlign: 'center',
    margin: '0 4px',
    padding: '5px 10px',
    backgroundColor: 'rgba(51,122,254,.1)',
    maxHeight: '30px',
    borderColor: '#e7eaf3',
    color: '#8c98a4',
    fontSize: '12px',
    lineHeight: 1.5,
    fontWeight: 500,
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

export const StyledNativeSelect = withStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.light}`,
    height: '15px',
  },
  icon: {
    right: '8px',
  },
}))(NativeSelect)

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
