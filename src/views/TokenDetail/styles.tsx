import React from 'react'
import style from 'styled-components'
import { withStyles, makeStyles, Theme, styled } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Tooltip, TooltipProps } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '12px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    fontSize: '20px'
  },
  alink: {
    textDecoration: 'none',
    fontSize: '.875rem',
    lineHeight: 1.5,
    color: '#3498db',
    '&:hover': {
      color: '#2c80b4',
    },
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
    fontWeight: 400,
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    fontSize: '1.3125rem',
    alignItems: 'center',
  },
  tokensubtitle: {
    fontSize: '70%',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
  },
  pullRight: {
    float: 'right',
  },
  inlineCenter: {
    display: 'inline-flex',
    // alignItems: 'center',
    verticalAlign: 'center',
  },
  tokenicon: {
    width: 30,
    height: 30,
    verticalAlign: 'middle',
    '&:hover': {
      color: '#3498db',
    },
  },
  tokenicon2: {
    width: 13,
    height: 13,
    verticalAlign: 'middle',
    '&:hover': {
      color: '#3498db',
    },
  },
  overview: {
    fontSize: '.875rem',
    color: theme.palette.text.primary,
    marginBottom: 0,
    marginTop: 0,
    fontWeight: 600,
  },
  suboverview: {
    fontWeight: 500,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
    backgroundColor: 'rgba(119, 131, 143, .1)',
    fontSize: '.65625rem',
    lineHeight: 1.7,
    padding: '.2rem .5rem',
    marginLeft: '.5rem!important',
    borderRadius: '.35rem!important',
  },
  cardheader: {
    marginBottom: 0,
    padding: '.75rem',
    '& .MuiTypography-root': {
      fontSize: 1.2,
    }
  },
  cardstyle: {
    position: 'relative',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 10%)',
    wordWrap: 'break-word',
    backgroundColor: theme.palette.primary.light,
    backgroundClip: 'border-box',
    borderRadius: '10px',
  },
  searchTitle: {
    marginTop: '50px',
    marginBottom: '10px',
    padding: '10px',
    position: 'relative',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 10%)!important',
    wordWrap: 'break-word',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    backgroundClip: 'border-box',
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    borderRadius: '10px',
  },
  searchGrid: {
    marginRight: '-1.5rem',
    marginLeft: '-1.5rem',
  },
  searchTitleTxn: {
    padding: '0px 24px',
  },
  searchTitleHolder: {
    padding: '0px 24px',
    borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
  searchTitleBalance: {
    padding: '0px 24px',
    borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
  searchTitleHolderErc721: {
    padding: '0px 24px',
  },
  searchTitleBalanceErc721: {
    padding: '0px 24px',
  },
  searchTitleValue: {
    padding: '0px 24px',
  },
  searchHolder: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    fontSize: '70%',
    marginBottom: '5px',
  },
  searchBalance: {
    color: '#77838f',
    fontSize: '70%',
    marginBottom: '5px',
  },
  searchValue: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#1e2022'}`,
  },
  tablestyle: {
    position: 'relative',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 10%)!important',
    wordWrap: 'break-word',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    backgroundClip: 'border-box',
    border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    borderRadius: '10px',
  },
  middlecard: {
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    marginBottom: '.25rem!important',
    wordWrap: 'break-word',
    backgroundColor: '#fff',
    backgroundClip: 'border-box',
    border: '1px solid #e7eaf3',
    borderRadius: '.5rem',
    minHeight: '1px',
    padding: '.75rem',
    marginRight: '7.5px',
    marginLeft: '7.5px',
    marginTop: '18px',
    width: '100%',
  },
  viewButton: {
    height: '27px',
    width: '57px',
    padding: '16.5px 0',
    color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    boxShadow: '0 0 0 transparent',
    borderRadius: '0.35rem',
    marginLeft: '-1px',
    marginRight: '10px',
    float: 'right',
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.info.main,
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 transparent',
    },
  },
  dexCountTitle: {
    width: "max-content",
  },
  divButton: {
    margin: 'auto',
  },
  price: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#8c98a4'}`,
    fontSize: 11.2,
    fontWeight: 400,
  },
  priceother: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: 11.2,
    fontWeight: 400,
  },
  pricenum: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'left',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#12161c'}`,
  },
  pricenum2: {
    fontSize: '.875rem',
    lineHeight: 1.5,
    textAlign: 'left',
  },
  longprice: {
    cursor: 'pointer',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#1e2022'}`,
    fontSize: '.74094rem',
    padding: '.3rem .5rem',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#2a2b2d' : 'rgba(119,131,143,.1)'}`,
    fontWeight: 500,
    borderRadius: '.35rem!important',
  },
  commontxt: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#1e2022'}`,
    textAlign: 'left',
    width: '33%',
  },
  subtitle2: {
    color: '#1e2022!important',
    fontWeight: 700,
    marginBottom: '.25rem!important',
    fontSize: '80%',
  },
  infomarket: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
    lineHeight: 1.7,
  },
  infotable: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.typography.body1.color,
  },
  infodata: {
    fontSize: '70%',
    fontWeight: 400,
    margin: 0,
    color: theme.typography.body1.color,
    marginBottom: '70px',
  },
  infodata1: {
    fontSize: '70%',
    fontWeight: 400,
    margin: 0,
    marginBottom: '15px',
    color: theme.typography.body1.color,
  },
  readcardheader: {
    borderRadius: 'calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0',
    padding: '.5rem',
    backgroundColor: '#f8f9fa!important',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    cursor: 'pointer',
  },
  readheadtxt: {
    marginBottom: '1rem!important',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    display: 'flex',
    justifyContent: 'space-between!important',
  },
  readcardcontent: {
    padding: '1rem!important',
  },
  cardtitletxt: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left',
  },
  expand: {
    transform: 'rotate(0deg)',
    color: '#343a40!important',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    float: 'right',
    marginTop: '5px',
  },
  expandOpen: {
    transform: 'rotate(90deg)',
  },
  iconNeu: {
    // padding: 5,
    width: '1.325rem',
    height: '1.325rem',
    textAlign: 'center',
    padding: '4px',
    fontSize: '.65625rem',
    borderRadius: '.25rem',
    color: '#3498db',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#232d34' : '#eaf1ff'}`,
    marginRight: 3,
    '&:hover': {
      color: 'white',
      backgroundColor: '#3498db',
    },
  },
  iconDetail: {
    width: '1.325rem',
    height: '1.325rem',
    textAlign: 'center',
    padding: '4px',
    fontSize: '.65625rem',
    borderRadius: '.25rem',
    color: '#77838f',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#232d34' : '#eaf1ff'}`,
    '&:hover': {
      color: 'white',
      backgroundColor: '#77838f',
    },
  },
  iconPack: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#77838f'}`,
    fontSize: '.875rem',
    marginRight: 12,
    '&:hover': {
      color: '#3498db',
    },
  },
  readcontractxt: {
    marginBottom: '.5rem',
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
    fontSize: '.9rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#212529',
    textAlign: 'left',
    marginLeft: '0',
  },
  readcontractinput: {
    width: '100%',
    height: 'calc(1.5em + 0.75rem + 2px)',
    padding: '0 .75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '.25rem',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    overflow: 'visible',
  },
  readquerybtn: {
    cursor: 'pointer',
    border: '1px solid #dee2e6!important',
    color: '#212529',
    backgroundColor: '#f8f9fa',
    fontWeight: 400,
    textAlign: 'center',
    verticalAlign: 'middle',
    padding: '.375rem .75rem',
    fontSize: '1rem',
    lineHeight: 1.5,
    borderRadius: '.25rem',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
  },

  holdpietitle: {
    marginBottom: '.5rem!important',
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '.65625rem',
    padding: '.3rem .5rem',
    borderRadius: '.25rem',
    color: '#3498db',
    background: 'rgba(51,122,254,.1)',
    borderColor: 'transparent',
    fontWeight: 500,
    '&:hover': {
      color: 'white',
      backgroundColor: '#0D61FE',
    },
  },
  commonsearch: {
    padding: '.3rem .5rem',
    backgroundColor: '#3498db',
    marginRight: '.75rem!important',
    borderColor: '#3498db',
    color: '#fff',
    borderRadius: '.25rem',
    fontSize: '.71531rem',
    float: 'right',
    marginLeft: 'auto',
  },
  tokenInfoToptitle: {
    fontSize: '32px',
    fontWeight: 400,
    color: '#202124',
    width: '100%',
  },
  tokenInfoContent: {
    fontSize: '14px',
    fontWeight: 400,
    letterSpacing: '.2px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  tokenForm: {
    padding: '24px',
    paddingTop: '22px',
    marginTop: '12px',
    marginBottom: '12px',
  },
  tokenInfoTop: {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    height: '10px',
    left: '-1px',
    position: 'relative',
    top: '-1px',
    width: '100%',
    backgroundColor: 'rgb(63, 81, 181)',
  },
  required: {
    color: 'red',
  },
  tokenInfobutton: {
    margin: theme.spacing(1),
  },
  tokenInfoClear: {
    float: 'right',
  },
  divider: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    margin: '10px 0px 30px 0px',
  },
  copyIcon: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    paddingLeft: '5px',
    cursor: 'pointer',
    fontSize: '.875rem',
  },
  circleicon: {
    fontSize: '.71531rem',
    fontWeight: 400,
    padding: '2px 4px',
    cursor: 'pointer',
    color: theme.palette.text.disabled,
    background: 'rgba(119,131,143,.1)',
    borderColor: 'transparent',
    borderRadius: '50%!important',
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginRight: '5px',
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
  cursor: 'pointer',
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
    whiteSpace: 'pre-wrap',
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

export const StyledTextOverflow = style.div`
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
`