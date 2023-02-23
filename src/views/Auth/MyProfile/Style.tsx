import React from 'react'
import style from 'styled-components'
import { makeStyles, withStyles, Theme, styled } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { Table, TableCell, TableHead, Box, IconButton, SvgIcon, Tooltip, TooltipProps, Paper } from '@material-ui/core'

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
  error: {
    color: 'red',
    marginLeft: 0,
  },
  inputField: {
    '& input': {
      width: '100%',
      fontSize: '.875rem',
      padding: '0.6rem 1.125rem',
      borderRadius: '5px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `1px solid ${theme.palette.secondary.light}`,
    },
    '&.Mui-focused': {
      '& input': {
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
      },
    },
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
  gridStyle: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '58px',
    padding: '10px',
    color: theme.typography.body1.color,
    fontSize: '.875rem',
    fontWeight: 400,
    justifyContent: 'space-between',
  },
  gridStyle1: {
    alignItems: 'center',
    minHeight: '45px',
  },
  transactionStyle: {
    wordWrap: 'break-word',
    margin: '0',
    fontSize: '14px',
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
    color: 'black',
    padding: '0.2rem 0.4rem',
    textAlign: 'center',
    borderRadius: '0.35rem',
    backgroundColor: '#F1F2F4',
  },
  helpIcon: {
    color: '#77838f',
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
    color: '#77838f',
    padding: '.75rem',
    minWidth: '100%',
    border: '1px solid #d5dae2',
    borderRadius: '.35rem',
    backgroundColor: '#f8f9fa',
    marginTop: '0px',
    marginBottom: '0px',
    minHeight: '55px',
    '&:focus': {
      boxShadow: '0 0 25px rgb(51 122 254 / 10%)!important',
      borderColor: 'rgba(51,122,254,.5)!important',
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
    marginRight: '.25rem!important',
    fontSize: '80%',
    fontWeight: 400,
  },
  logsTitle: {
    fontSize: '14px',
    marginBottom: '20px',
    display: 'flex',
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
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
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
  contractMethod: {
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
    color: '#77838f',
    backgroundColor: 'rgba(119,131,143,.1)',
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 14,
  },
  dark: {
    backgroundColor: '#5f6a74 !important',
    color: '#fff',
  },
  decodebtn: {
    backgroundColor: '#77838f',
    borderColor: '#77838f',
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
  overviewHeadtxt: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
    fontWeight: 400,
    marginBottom: '1rem',
  },
  overviewIcon: {
    color: theme.palette.info.main,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  profileLabel: {
    color: theme.palette.primary.contrastText,
    marginTop: '.75rem',
    fontSize: '11px',
    fontWeight: 400,
    marginBottom: '1.75rem',
    justifyContent: 'space-between',
    display: 'flex',
  },
  profileGrid: {
    marginBottom: '15px',
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.typography.body1.color,
    alignSelf: 'center',
    display: 'flex',
  },
  profileInput: {
    paddingLeft: '.65rem',
    paddingRight: '.65rem',
    height: 'calc(1.5em + 1.2rem + 2px)',
    '&:focus,&:hover': {
      boxShadow: '0 0 25px rgb(51 122 254 / 10%)!important',
      borderColor: theme.palette.secondary.light,
    },
  },
  profileIcon: {
    fontSize: '14px',
    padding: '.6rem 1.125rem',
    color: '#8c98a4',
    border: '1px solid #d5dae2',
  },
  profileDivider: {
    marginBottom: '1.25rem',
    marginTop: '.75rem',
  },
  profileStatus: {
    color: '#77838f',
    backgroundColor: 'rgba(119,131,143,.1)',
    fontWeight: 500,
    padding: '.25rem .5rem',
    borderRadius: '.35rem!important',
  },
  profileAvarta: {
    width: '2.625rem',
    height: '2.625rem',
    marginLeft: '.25rem',
    marginRight: '.25rem',
    borderRadius: '50%',
  },
  profileSelect: {
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
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 transparent',
    },
  },
  profileCancel: {
    cursor: 'pointer',
    fontSize: '.765625rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    marginLeft: '.25rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
    border: 'transparent',
    color: '#fff',
    '&:hover': {
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
  },
  profileDelete: {
    cursor: 'pointer',
    fontSize: '.765625rem',
    padding: '.3rem .6rem',
    borderRadius: '.25rem',
    marginLeft: '.25rem',
    color: '#fff',
    backgroundColor: '#de4437',
    borderColor: '#de4437',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-block',
    marginTop: '5px',
    '&:hover': {
      boxShadow: '0 4px 11px rgb(229 118 146 / 35%)',
    },
  },
  profileLastGrid: {
    marginBottom: '15px',
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#1e2022',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  profileOptLabel: {
    color: theme.palette.primary.contrastText,
    marginTop: 0,
    marginBottom: '1rem',
    fontSize: '.875rem',
    fontWeight: 400,
  },
  profileOptGrid: {
    marginBottom: '15px',
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#1e2022',
    alignSelf: 'center',
  },
}))

export const CodePaper = withStyles((theme: Theme) => ({
  root: {
    color: 'black',
    backgroundColor: '#F8F9FA',
    fontSize: '.65625rem',
    padding: '1rem 1rem',
    border: '1px solid #e7eaf3',
    maxHeight: 100,
    overflowY: 'auto',
    boxShadow: 'none',
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
    borderTop: '1px solid #e7eaf3',
  },
})(Table)

export const StyledTableHead = withStyles({
  root: {
    borderColor: '#e7eaf3',
    backgroundColor: ' #f8fafd',
    borderBottom: '2px solid #323232',
  },
})(TableHead)

export const StyledTableCell = withStyles({
  root: {
    padding: '10px',
  },
  head: {
    color: '#6c757e',
    fontWeight: 600,
  },
})(TableCell)

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
