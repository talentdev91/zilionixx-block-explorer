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
    submitBtn: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #3498db33' : '1px solid #3498db'}`,
      color: 'white',
      margin: theme.spacing(2, 0),
      float: 'right',
      textTransform: 'none',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : '#3498db'}`,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
    },
    decodeTextDiv: {
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #4e5156' : '1px solid #c4c4c4'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#191d23' : '#fff'}`,
      borderRadius: '5px',
    },
    decodeTitle: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#4a4f55'}`,
      fontWeight: 600,
      fontSize: '0.875rem',
      marginLeft: '10px',
    },
    decodeText: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#000'}`,
      fontSize: '0.875rem',
      marginLeft: '10px',
      marginRight: '10px',
      wordBreak: 'break-all',
    },
    titleDiv: {
      borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #4e5156' : '1px solid #c4c4c4'}`,
    },
  }),
)

export default useStyles
