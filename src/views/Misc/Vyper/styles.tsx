import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      padding: '1% 1%',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
    },
    styleDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      marginBottom: theme.spacing(2),
      fontSize: '1.3125rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    },
    textfieldLabel: {
      margin: theme.spacing(2, 0),
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    },
    formLable: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#12161c'}`,
    },
    form: {
      width: '100%',
    },
    textField: {
      minWidth: '100%',
      borderRadius: 5,
      height: 'auto',
      overflowY: 'auto',
      resize: 'vertical',
      padding: '.75rem',
      fontSize: '.875rem',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
      color: theme.palette.primary.contrastText,
      '&::placeholder': {
        color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
        fontSize: '.875trem',
      },
      '&:focus': {
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
      },
    },
    formControl: {
      width: '100%',
      borderRadius: 5,
      margin: '10px 0px',
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
    input: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      padding: '9px',
      borderRadius: '5px',
    },
    icon: {
      marginRight: 10,
    },
    iconOpen: {
      transform: 'none',
    },
    selectSelect: {
      backgroundColor: theme.palette.primary.light,
      // paddingLeft: 0,
    },
    selected: {
      '&.Mui-selected': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      },
      '&:focus': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      },
    },
    halfwidth: {
      width: '50%',
      display: 'block',
    },
    menuItem: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      '&:hover': {
        background: '#3498db !important',
        color: 'white',
      },
    },
    select: {
      width: '100%',
      height: 36,
      textAlign: 'left',
      fontSize: '14px',
      borderRadius: '5px 0 0 5px',
      '& fieldset': {
        border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #4e5156' : '1px solid #c4c4c4'}`,
      },
      '&:hover': {
        cursor: 'default !important',
        border: 'none',
      },
    },
    submitBtn: {
      textTransform: 'none',
      padding: '0.75rem 1rem',
      fontSize: '.75rem',
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
      padding: '0.75rem 1rem',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
      border: 'transparent',
      boxShadow: 'none',
      color: '#77838f',
      fontSize: '.75rem',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
        color: 'white',
      },
    },
    btnGroup: {
      display: 'block',
      textAlign: 'right',
      marginTop: '10px',
      '& button': {
        margin: '0 6px 30px 6px',
      },
    },
    menuBg: {
      backgroundColor: theme.palette.primary.main
    }
  }),
)

export default useStyles
