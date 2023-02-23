import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: '2% 5%',
    },
    styleDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    formDiv: {
      justifyContent: 'center',
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      textAlign: 'center',
      fontSize: '1.53125rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
      alignItems: 'center',
      marginBottom: '5px',
      fontWeight: 400,
    },
    subTitle: {
      textAlign: 'center',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3! important' : '#77838f! important'}`,
      alignItems: 'center',
      fontSize: '70%',
      fontWeight: 500,
      margin: '5px',
    },
    formControl: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#000'}`,
      fontSize: '0.875rem',
      display: 'block',
      '& .MuiFormHelperText-root': {
        margin: '10px 0px 25px 0px',
      }
    },
    divider: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#545557' : '#e7eaf3'}`,
      margin: '10px 20px',
    },
    undrawSvg: {
      width: 115,
    },
    description: {
      display: 'flex',
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5! important' : '#77838f! important'}`,
      textAlign: 'left',
      alignItems: 'center',
    },
    inputField: {
      width: '100%',
      height: 36,
      padding: '5px 5px 5px 10px',
      borderRadius: '5px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      '&:focus': {
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
      },
    },
    inputGroups: {
      textAlign: 'left',
    },
    select: {
      width: '100%',
      height: 36,
      textAlign: 'left',
      fontSize: '14px',
      borderRadius: '5px',
      '& fieldset': {
        border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #4e5156' : '1px solid #c4c4c4'}`,
      },
      '&:hover': {
        cursor: 'default !important',
        border: 'none',
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
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      },
      '&:focus': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
        borderRadius: '5px',
      },
    },
    menuItem: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#424242' : '#fff'}`,
      '&:hover': {
        background: '#3498db !important',
        color: 'white',
      },
    },
    input: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      padding: '9px',
      borderRadius: '5px',
    },
    btnGroup: {
      display: 'inline-block',
      '& button': {
        margin: '0 6px 100px 6px',
      },
    },
    submitBtn: {
      textTransform: 'none',
      padding: '0.65rem 1rem',
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

    resetBtn: {
      textTransform: 'none',
      padding: '0.65rem 1rem',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
      border: '1px solid transparent',
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#ebedf0'}`,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#77838f',
        color: 'white',
      },
    },
    submitGroup: {
      textAlign: 'center',
      marginTop: 20,
    },
    agree: {
      // display: 'inline-block',
      color: theme.palette.primary.contrastText,
      fontSize: '.875rem',
      '& .MuiIconButton-label': {
        color: theme.palette.info.main
      }
    },
    errorMessage: {
      color: '#de4437',
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
  }),
)

export default useStyles
