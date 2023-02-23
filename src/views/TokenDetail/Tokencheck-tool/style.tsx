import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

export const StyledPaper = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    height: '100%',
    backgroundColor: theme.palette.primary.main,
  },
}))(Paper)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexWrap: 'wrap',
      maxWidth: '100%',
      paddingTop: '10px',
    },
    divDetail: {
      borderColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : 'white'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : 'white'}`,
      boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
    },
    divResult: {
      padding: '15px',
      borderColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : 'white'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : 'white'}`,
      boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
    },
    asterisk: {
      '& .MuiFormLabel-asterisk': {
        color: 'red',
      },
    },
    symbolImg: {
      width: 42,
    },
    error: {
      fontSize: '0.8rem',
      color: 'red',
      marginLeft: 0,
    },
    radioRoot: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    radioIcon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#243846' : 'white'}`,
      // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
    },
    radioCheckedIcon: {
      backgroundColor: '#137cbd',
      // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
    datePicker: {
      display: 'flex',
      borderRadius: '0.275rem',
      width: 'auto',
      justifyContent: 'center',
      '& .MuiInput-underline:before': {
        borderBottom: 'none',
      },
      paddingLeft: '1rem',
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      '&:focus': {
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
        boxShadow: '0 0 25px rgb(52 152 219 / 10%)',
      },
    },
    dateKeybard: {
      height: '2.4rem',
      justifyContent: 'center'
    },
    submitReset: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#c1c1c1'}`,
      fontSize: '0.77rem',
      float: 'right',
      marginRight: '10px',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(119,131,143,.1)' : 'rgba(119,131,143,.1)'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #3498db33' : '1px solid rgba(119,131,143,.1)'}`,
      textTransform: 'none',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgb(119,131,143)' : 'rgb(119,131,143)'}`,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
    },
    submitLookup: {
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : 'white'}`,
      fontSize: '0.77rem',
      float: 'right',
      marginRight: '10px',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #3498db33' : '1px solid #3498db'}`,
      textTransform: 'none',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#3498db'}`,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
    },
    subDivTitle: {
      fontSize: '.76563rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    },
    up: {
      paddingTop: '3.25rem!important',
      display: 'flex',
      flexWrap: 'wrap',
    },
    registerOk: {
      color: '#006957',
      backgroundColor: '#ccf4ed',
      borderColor: '#b8f0e6',
      position: 'relative',
      padding: '.75rem',
      marginBottom: '1rem',
      marginTop: '20px',
      border: '0 solid transparent',
      borderRadius: '.35rem',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    successTxt: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1e2022',
      marginBottom: '50px',
    },
    content: {
      marginLeft: 'auto!important',
      marginRight: 'auto!important',
      width: '50%!important',
      [theme.breakpoints.down('md')]: {
        width: '85%!important',
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%!important',
      },
      [theme.breakpoints.down('xs')]: {
        width: '95%!important',
      },
    },
    margin: {
      marginTop: '60px',
    },
    gridTextStyle: {
      margin: 'auto',
      textAlign: 'center'
    },
    gridIconTextStyle: {
      display: 'flex',
    },
    iconStyle: {
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    },
    inputField: {
      '& input': {
        width: '100%',
        fontSize: '.875rem',
        padding: '0.6rem 1.125rem',
        color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      },
      '&.Mui-focused': {
        '& input': {
          boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
          outline: 'none',
        },
      },
      '&.Mui-disabled': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#2d2d2d' : '#f8fafd'}`,
      },
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#0f7968' : '#7fe4d3'}`,
      borderRadius: '0.275rem'
    },
    inputBlockField: {
      '& input': {
        width: '100%',
        fontSize: '.875rem',
        padding: '0.6rem 1.125rem',
        color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
        // backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      },

      '&.Mui-focused': {
        '& input': {
          boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
          outline: 'none',
        },
      },
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#0f7968' : '#7fe4d3'}`,
      borderBottomRightRadius: '0.275rem',
      borderTopRightRadius: '0.275rem',
    },
    blockIcon: {
      borderLeft: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#0f7968' : '#7fe4d3'}`,
      borderTop: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#0f7968' : '#7fe4d3'}`,
      borderBottom: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#0f7968' : '#7fe4d3'}`,
      borderBottomLeftRadius: '0.275rem',
      borderTopLeftRadius: '0.275rem',
    },
    textField: {
      width: '100%',
      marginBottom: '1rem',
    },
    titletext: {
      color: theme.palette.info.main,
      fontWeight: 400,
      fontSize: '1.53125rem',
      marginBottom: 0,
      marginTop: 0,
    },
    subtitle: {
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.7,
      marginBottom: '1rem',
      color: theme.palette.primary.contrastText,
      marginTop: 0,
      '& .MuiTypography-root': {
        color: theme.palette.primary.contrastText,
      },
    },
    label: {
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.palette.secondary.main,
      marginBottom: '.5rem',
      marginLeft: 0,
    },
    button: {
      fontSize: '.76563rem',
      padding: '.6rem 1.125rem',
      fontWeight: 500,
      fontFamily: 'inherit',
      height: '40px',
      margin: theme.spacing(1),
      position: 'relative',
      marginRight: 0,
      marginLeft: 'auto',
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.info.contrastText,
      '&:hover': {
        color: theme.palette.info.contrastText,
        backgroundColor: theme.palette.info.light,
      },
    },

    submitButton: {
      padding: '.6rem 1.125rem',
      fontSize: '.76563rem',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      boxShadow: '0 0 0 transparent',
      height: '40px',
      borderRadius: '0.35rem',
      margin: theme.spacing(1),
      position: 'relative',
      marginRight: 0,
      marginLeft: 'auto',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },

    password: {
      display: 'flex',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    forgot: {
      textAlign: 'right',
      marginLeft: 'auto',
      marginRight: 0,
      cursor: 'pointer',
      fontSize: '.76563rem!important',
      textDecoration: 'none',
    },
    forgotText: {
      color: theme.palette.primary.contrastText,
      borderBottom: '1px dashed #97a4af',
      '&:hover': {
        color: theme.palette.info.main,
      },
    },
    subtitle3: {
      fontSize: '.875rem',
      fontWeight: 400,
      color: '#6c757e',
      lineHeight: 1.7,
      letterSpacing: 0,
      marginTop: '0px!important',
      marginBottom: '0px!important',
    },
    checkbox: {
      padding: 0,
      marginRight: '10px',
      color: theme.palette.info.light,
    },
    checkcolor: {
      color: theme.palette.info.light,
      '&.Mui-checked': {
        color: theme.palette.info.main,
      },
    },
    verify: {
      color: '#73231d',
      backgroundColor: '#f8dad7',
      borderColor: '#f6cbc7',
      position: 'relative',
      padding: '.75rem',
      marginBottom: '1rem',
      border: '0 solid transparent',
      borderRadius: '.35rem',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    resend: {
      textDecoration: 'none',
      color: '#3498db',
      cursor: 'pointer',
      '&:hover': {
        color: '#0150e3',
      },
    },
    contactHeader: {
      paddingBottom: '.75rem!important',
      paddingTop: '.75rem!important',
      alignItems: 'center',
      justifyContent: 'space-between!important',
      display: 'flex',
      borderBottom: '1px solid #e7eaf3!important',
    },
    conHeadtxt: {
      color: '#4a4f55',
      fontWeight: 400,
      fontSize: '1.3125rem',
      margin: 0,
    },
    conRightTxt: {
      color: '#6c757e',
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
      backgroundcolor: '#fff',
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      color: theme.palette.text.primary,
      borderBottom: '1px solid #e7eaf3',
    },
    contactFormCon: {
      padding: '.75rem',
    },
    contactFormLabel: {
      marginBottom: '1rem',
      marginTop: 0,
      cursor: 'default',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#1e2022',
    },
    contactSelect: {
      width: '50%',
      fontSize: '.875rem',
      fontWeight: 400,
      color: '#1e2022',
      verticalAlign: 'middle',
      background: '#fff',
      border: '1px solid #d5dae2',
      borderRadius: '.35rem',
    },
    contactSubTxt: {
      color: '#6c757e',
      fontSize: '.875rem',
      fontWeight: 400,
    },
    contactLink: {
      color: '#77838f',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '.875rem',
      '&:hover': {
        color: '#0150e3',
      },
    },
    contactTopLink: {
      padding: '.75rem',
      margin: 0,
      marginBottom: 0,
      borderBottom: '1px solid #e7eaf3',
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
    accountContent: {
      paddingBottom: '3.25rem',
      paddingTop: '2rem',
    },
    accountLink: {
      fontSize: '.80938rem',
      padding: '.75rem',
      color: '#6c757e',
      fontWeight: 400,
      '&:hover': {
        color: '#0150e3',
      },
    },
    profileSelect: {
      cursor: 'pointer',
      fontSize: '.65625rem',
      padding: '.3rem .6rem',
      borderRadius: '.25rem',
      marginLeft: '.25rem',
      color: '#fff',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : theme.palette.info.main}`,
      border: `0.5px solid rgba(52,152,219,.2)`,
      textAlign: 'center',
      verticalAlign: 'middle',
      '&:hover': {
        backgroundColor: theme.palette.info.main,
        boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
      },
      display: 'inline-block',
    },
    tableTop: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
    },
    dialog: {
      '& .MuiDialog-paper': {
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
      },
    },
    modalSubtitle: {
      color: theme.palette.text.primary,
      fontSize: '.875rem',
    },
  }),
)
export default useStyles