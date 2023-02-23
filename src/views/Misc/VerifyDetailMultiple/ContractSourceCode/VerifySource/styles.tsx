import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import { IconButton, SvgIcon, Tooltip, TooltipProps } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '12px',
    },
    topside: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#E9ECF1'}`,
      borderRadius: '5px',
    },
    description: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#3e444a'}`,
      fontSize: '.76563rem!important',
      paddingLeft: '1rem',
    },
    title: {
      textAlign: 'center',
      color: '#4a4f55',
      alignItems: 'center',
      fontSize: '25px',
      fontWeight: 400,
    },
    subTitle: {
      textAlign: 'center',
      color: '#8c98a4',
      alignItems: 'center',
      fontSize: '10px',
      fontWeight: 700,
      margin: '5px',
    },
    formControl: {
      width: '100%',
      display: 'block',
    },
    divider: {
      backgroundColor: '#e7eaf3',
      margin: '10px 20px',
    },
    undrawSvg: {
      width: 115,
    },
    inputField: {
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      borderRadius: '5px',
      height: 36,
      paddingLeft: '10px',
      backgroundColor: theme.palette.primary.dark,
    },
    inputFieldCompiler: {
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      borderRadius: '5px',
      height: 36,
      paddingLeft: '10px',
      backgroundColor: theme.palette.primary.dark,
    },
    inputField2: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      height: 'calc(1.5rem + 2px)',
      padding: '.2rem .1rem',
      borderRadius: '.25rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#1e2022'}`,
    },
    inputGroups: {
      textAlign: 'left',
    },
    select: {
      width: '100%',
      height: 36,
      padding: '0px',
      textAlign: 'left',
      fontSize: '14px',
      borderRadius: '5px 0 0 5px',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'transparent' : 'transparent'}`,
      '& .MuiSelect-root': {
        paddingLeft: '10px',
      },
      '& fieldset': {
        border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      },
      '&:hover': {
        cursor: 'default !important',
      },
    },
    icon: {
      marginRight: 10,
    },
    iconOpen: {
      transform: 'none',
    },
    selectSelect: {
      paddingLeft: 0,
    },
    selected: {
      '&.Mui-selected': {
        borderRadius: '5px',
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
        border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      },
      '&:focus': {
        borderRadius: '5px',
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
        border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      },
    },
    menuItem: {
      '&:hover': {
        background: '#3498db !important',
        color: 'white',
      },
    },
    input: {
      borderRadius: '5px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#000'}`,
      padding: '12px 0 8px 0',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    },
    submitBtn: {
      backgroundColor: '#3498db',
      color: 'white',
    },
    resetBtn: {
      backgroundColor: '#EBEDF0',
      color: '#77838f',
    },
    submitGroup: {
      textAlign: 'center',
      marginTop: 20,
    },
    textField: {
      minWidth: '100%',
      borderRadius: 5,
      resize: 'vertical',
      overflowY: 'auto',
      padding: '.75rem',
      fontSize: '.875rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#000'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      '&:focus': {
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
      },
    },
    codeInput: {
      width: '100%',
      padding: '3.5px',
      borderRadius: 0,
      '& fieldset': {
        border: 'none',
        outerHeight: '100%',
      },
    },
    library: {
      color: '#77838f !important',
      fontSize: '14px',
      marginBottom: '3px',
    },
    libraryDiv: {
      display: 'flex',
    },
    contract: {
      fontSize: '.875rem',
      lineHeight: 1.5,
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#3e444a'}`,
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    },
    contractcode: {
      fontSize: '.875rem',
      lineHeight: 1.5,
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#3e444a'}`,
      fontWeight: 'bold',
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    },
    accorionsummary: {
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontSize: '.875rem',
      borderRadius: '5px 5px 0px 0px',
      height: '55px',
      marginTop: '13px',
      background: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      '&:hover': {
        color: '#0150e3',
      },
    },
    text1: {
      fontSize: '14px',
      fontFamily: 'Roboto',
      color: '#77838f !important',
      fontWeight: 'bold',
      margin: '0px',
    },
    backgroundPaper: {
      backgroundColor: theme.palette.primary.light,
      boxShadow: `${localStorage.appTheme === 'darkTheme'
        ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
        : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
        }`,
      border: `1px solid ${theme.palette.secondary.light}`,
      borderRadius: '8px',
    },
    uploadPan: {
      padding: '0px 10px'
    },
    uploadFileBtn: {
      fontSize: '15px'
    },
    uploadSubmitBtn: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
      color: '#fff',
      borderColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
      cursor: 'pointer',
      fontSize: '.72rem',
      fontWeight: 400,
      padding: '0.3rem 0.6rem',
      border: '1px solid transparent',
      transition: 'all .2s ease-in-out',
      borderRadius: '.25rem',
    },
    stepName: {
      fontSize: '15px'
    },
    uploadDescription: {
      color: 'rgb(165, 42, 42)',
      fontSize: '15px',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
    },
    accordionsummaryDisableText: {
      color: theme.palette.primary.contrastText,
    },
    accordionsummary: {
      fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
      fontSize: '.875rem',
      borderRadius: '5px 5px 0px 0px',
      height: '55px',
      marginTop: '13px',
      background: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    accordionsummaryFooter: {
      fontSize: '13px',
      color: theme.palette.primary.contrastText,
    },
    accordionDetail: {
      display: 'block',
      borderRadius: '0px 0px 5px 5px',
      background: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
    },
    btnGroup: {
      display: 'block',
      textAlign: 'center',
      marginTop: '50px',
      '& button': {
        margin: '0 6px 30px 6px',
      },
    },
    submitVerifyBtn: {
      textTransform: 'none',
      padding: '0.75rem 1rem',
      fontSize: '.875rem',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      boxShadow: '0 0 0 transparent',
      borderRadius: '0.35rem',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
    resetVerifyBtn: {
      textTransform: 'none',
      padding: '0.75rem 1rem',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
      boxShadow: 'none',
      border: 'transparent',
      color: '#77838f',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
        color: 'white',
      },
    },
  }),
)

export const StyledIconButton = withStyles({
  root: {
    alignSelf: 'self-end',
    margin: '0px 12px 3px',
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
