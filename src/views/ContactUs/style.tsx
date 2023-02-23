import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactHeader: {
      paddingBottom: '.75rem!important',
      paddingTop: '.75rem!important',
      alignItems: 'center',
      justifyContent: 'space-between!important',
      display: 'flex',
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    addMore: {
      color: '#3498db',
      fontSize: '.76563rem',
      '&:hover': {
        color: `#1d6fa5`,
      },
      cursor: 'pointer',
    },
    addMoreDisable: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
      fontSize: '.76563rem',
    },
    conHeadtxt: {
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: '1.3125rem',
      margin: 0,
    },
    conRightTxt: {
      color: theme.palette.primary.contrastText,
      fontSize: '80%',
      fontWeight: 400,
    },
    contactContent: {
      paddingBottom: '3.25rem',
      paddingTop: '.75rem',
    },
    contactForm: {
      padding: '.75rem',
      marginBottom: 0,
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: theme.palette.text.primary,
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    contactFormCon: {
      padding: '.75rem',
    },
    contactFormLabel: {
      marginBottom: '1rem',
      marginTop: 5,
      cursor: 'default',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.palette.text.primary,
    },
    contactSelect: {
      width: '100%',
      fontSize: '.875rem',
      fontWeight: 400,
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      verticalAlign: 'middle',
      background: theme.palette.primary.main,
      borderRadius: '.35rem',
      '& .MuiOutlinedInput-input': {
        padding: '.75rem 2rem .75rem 1rem',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      },
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}!important`,
        },
      },
      '& .MuiSelect-select:focus': {
        backgroundColor: 'transparent',
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
      },
      '& .Mui-disabled': {
        border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      },
      '&.Mui-disabled': {
        '& svg': {
          border: 'none',
        },
      },
      '&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      },
      '& option': {
        backgroundColor: `${theme.palette.primary.light}!important`,
      },
    },
    contactSubTxt: {
      color: theme.palette.primary.contrastText,
      fontSize: '.875rem',
      fontWeight: 400,
    },
    contactLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '.875rem',
      '&:hover': {
        color: '#3498db',
      },
    },
    contactTopLink: {
      padding: '.75rem',
      margin: 0,
      marginBottom: 0,
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    contactLastLink: {
      padding: '.75rem',
      margin: 0,
      marginBottom: '30px',
    },
    contactLastLink1: {
      padding: '.75rem',
      margin: 0,
    },
    contactPopper: {
      marginLeft: '.25rem!important',
      color: '#fff',
      backgroundColor: '#00c9a7',
      padding: '.25em .4em',
      fontSize: '75%',
      fontWeight: 700,
      textAlign: 'center',
      verticalAlign: 'baseline',
      borderRadius: '.25rem',
    },
    selectContainer: {
      display: 'flex',
    },
    startOverBtn: {
      textTransform: 'none',
      padding: '0.5rem 1rem',
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
    link: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    linkExample: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
        color: theme.palette.info.dark,
      },
      fontSize: '.765rem',
    },
    label: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.typography.body1.color,
      marginBottom: '.5rem',
      marginLeft: 0,
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
    textAreaField: {
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
    textField: {
      width: '100%',
      marginBottom: '1rem',
      padding: '.6rem',
    },
    submitButton: {
      padding: '.6rem 1.125rem',
      fontSize: '.875rem',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      boxShadow: '0 0 0 transparent',
      height: '40px',
      borderRadius: '0.35rem',
      position: 'relative',
      textTransform: 'none',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
    helperText: {
      color: theme.palette.primary.contrastText,
      fontSize: '.76563rem',
    },
    divider: {
      margin: '1.6rem 0rem',
    },
    submitContent: {
      display: 'flex',
      justifyContent: 'center',
    },
    nametaggingTitle: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
    successContent: {
      padding: '.75rem',
    },
    successMessage: {
      color: '#00c9a7!important',
      fontSize: '1.1rem',
      '& i': {
        marginRight: '.5rem',
        color: theme.palette.primary.contrastText,
      },
    },
    closeBtn: {
      position: 'absolute',
      cursor: 'pointer',
      right: '-3px',
      top: '-3px',
      padding: '0px',
      outline: '1px solid #de4437',
      color: '#de4437',
      backgroundColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: '#de4437',
        color: 'white',
      },
    },
    smartContractBox: {
      position: 'relative',
    },
    helpContent: {
      [theme.breakpoints.down('md')]: {
        marginTop: '30px',
        marginRight: '15px',
      },
    },
  }),
)

export default useStyles

export const StyledPagePager = withStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.light,
      border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
      borderRadius: '8px',
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    },
  }),
)(Paper)

export const StyledPaper = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}))(Paper)
