import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, Theme, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  Box,
  IconButton,
  SvgIcon,
  Tooltip,
  TooltipProps,
  Paper,
  Container,
  Typography,
  Tabs,
} from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  stylePage: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
  },
  txnDetailRoot: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
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
  txnInput: {
    display: 'block',
    '& span': {
      color: theme.palette.primary.contrastText,
      fontSize: '80%',
      fontWeight: 400
    }
  },
  gridStyle: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '45px',
  },
  gridStyle1: {
    alignItems: 'center',
    minHeight: '45px',
  },
  transactionStyle: {
    wordWrap: 'break-word',
    margin: '0',
    fontSize: '.875rem',
  },

  successButton: {
    color: '#00c9a7',
    fontSize: '12px !important',
    padding: '0.4rem 0.7rem',
    borderRadius: '0.35rem',
    width: '90px',
    backgroundColor: 'rgba(0,201,167,.1)',
  },
  failButton: {
    color: '#de4437',
    backgroundColor: 'rgba(222,68,55,.1)',
    fontSize: '12px !important',
    padding: '0.4rem 0.7rem',
    borderRadius: '0.35rem',
  },
  valueButton: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3!important' : '#1e2022!important'}`,
    padding: '0.3rem 0.5rem',
    textAlign: 'center',
    borderRadius: '0.35rem',
    backgroundColor: 'rgba(119,131,143,.1)',
    fontSize: '.74094rem'
  },
  helpIcon: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '14px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  copyIcon: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3!important' : '#8c98a4!important'}`,
    fontSize: '14px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginRight: 'auto',
    color: '#3498db',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: '10px',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expanlist: {
    fontSize: '.875rem',
    color: '#3498db',
    cursor: 'pointer',
  },
  toerror: {
    color: '#de4437!important',
    fontSize: '80%',
    fontWeight: 400,
  },
  txtarea: {
    fontSize: '.875rem',
    fontWeight: 400,
    color: '#77838f',
    padding: '.75rem',
    minWidth: '100%',
    borderColor: `${localStorage.appTheme === 'darkTheme' ? '#323232!important' : '#d5dae2'}`,
    borderRadius: '.35rem',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#2d2d2d' : '#f8f9fa!important'}`,
    marginTop: '10px',
    marginBottom: '10px',
    minHeight: '55px',
    resize: 'vertical',
    '&:focus': {
      boxShadow: '0 0 25px rgb(51 122 254 / 10%)!important',
      outline: 'none',
    },
  },
  confirm: {
    paddingLeft: '1.15rem',
    letterSpacing: '.8px',

    fontWeight: 500,
    color: '#77838f',
    backgroundColor: 'rgba(119,131,143,.1)',
    fontSize: '.65625rem',
    lineHeight: 1.7,
    padding: '.2rem .5rem',
    marginLeft: '.25rem!important',
  },
  clock: {
    fontSize: '60%',
    color: theme.typography.body2.color,
    marginRight: '.25rem!important',
    fontWeight: 400,
  },
  logsContent: {
    color: theme.palette.text.primary,
  },
  logsTitle: {
    fontSize: '14px',
    marginBottom: '20px',
    display: 'flex',
    color: theme.typography.body2.color,
  },
  styleIcon: {
    color: '#77838f',
    fontSize: '14px',
    verticalAlign: 'middle',
  },
  pullRight: {
    textAlign: 'end',
  },
  inline: {
    display: 'flex',
    marginTop: '0px',
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  alignCenter: {
    alignItems: 'center',
  },
  linkAddress: {
    alignSelf: 'center',
    '& a': {
      fontSize: '.875rem',
    }
  },
  logsNumber: {
    width: '45px',
    height: '45px',
    fontSize: '14px',
    color: '#00c9a7',
    fontWeight: 500,
    backgroundColor: 'rgba(0, 201, 167, 0.1)',
    '&:hover': {
      color: 'black',
    },
  },
  topicAddress: {
    color: theme.typography.body1.color,
    fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important',
    fontSize: 14,
    overflowWrap: 'break-word',
  },
  contractMethod: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important',
    fontSize: 14,
  },
  textSuccess: {
    color: '#00c9a7!important',
  },
  textDanger: {
    color: '#de4437!important',
  },
  textIndex: {
    color: 'gray',
  },
  rounded: {
    color: theme.palette.text.disabled,
    backgroundColor: 'rgba(119,131,143,.1)',
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '0.65625rem',
    marginRight: '5px',
  },
  clickBtn: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
    color: '#fff',
    border: 'none!important',
    padding: '.3rem .6rem',
    fontSize: '.72rem!important',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
    },
  },
  unClickBtn: {
    backgroundColor: '#5f6a74!important',
    color: '#fff',
    border: 'none!important',
    padding: '.3rem .6rem',
    fontSize: '.72rem!important',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#5f6a74!important',
    },
  },
  decodebtn: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #244464' : '1px solid #77838f'}`,
    cursor: 'pointer',
    fontSize: '.65625rem!important',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    textTransform: 'none',
    marginRight: '10px',
    color: '#fff',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#77838f',
    },
  },
  codepaper: {
    background: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
  },
  codeAddress: {
    overflowWrap: 'break-word',
  },
  textField: {
    minWidth: '100%',
    borderRadius: 5,
    resize: 'vertical',
    overflowY: 'auto',
    padding: '.75rem',
    fontSize: '.75rem',
    height: '35px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#000'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    '&:focus': {
      boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
      border: `1px solid ${theme.palette.info.light}`,
      outline: 'none',
    },
  },
  txnMessageUpdate: {
    '& i': {
      color: '#00c9a7!important',
      fontSize: 'small',
      marginRight: '.2rem',
    }
  },
  txnMessageRemove: {
    '& i': {
      color: theme.palette.primary.contrastText,
      fontSize: 'small',
      marginRight: '.2rem',
    }
  },
  divider: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    margin: '4px 0px',
  },
  iconArrow: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    margin: '0px 5px',
  },
}))

export const CodePaper = withStyles((theme: Theme) => ({
  root: {
    fontSize: '.875rem',
    padding: '1rem 1rem',
    maxHeight: 100,
    overflowY: 'auto',
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
    color: theme.typography.body1.color,
    border: 'none!important',
  },
}))(Paper)

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

export const StyledTextOverflow = style.div`
white-space: nowrap; 
width: 180px; 
overflow: hidden;
text-overflow: ellipsis; 
`

export const StyledEmptyRowBox = withStyles({
  root: {
    margin: '10px',
    padding: '12px',
    color: '#725002',
    backgroundColor: '#f8ebcd',
    borderRadius: '6px',
  },
})(Box)

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

export const StyledPageContainer = withStyles({
  root: {
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
})(Container)

export const StyledPageTitle = withStyles((theme: Theme) => ({
  root: {
    padding: '12px 0',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    fontWeight: 400,
    fontSize: '1.3125rem',
  },
}))(Typography)

export const StyledPagePager = withStyles((theme: Theme) => ({
  root: {
    border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
  },
}))(Paper)

export const StyledParentTabs = withStyles((theme) => ({
  root: {
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
  },
  indicator: {
    backgroundColor: '#3498db',
  },
}))(Tabs)

export const StyledTableBody = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
}))(TableBody)
