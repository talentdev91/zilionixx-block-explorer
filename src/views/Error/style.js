import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 100,
      textAlign: 'center',
      justifyContent: 'center',
    },
    search: {
      marginTop: 0,
      backgroundImage: `url('/images/search.PNG')`,
      height: '90vh',
      textAlign: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    submitBtn: {
      height: '47px',
      minWidth: '48px',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: theme.palette.info.main,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      boxShadow: '0 0 0 transparent',
      marginRight: '10px',
      padding: '0px 10px',
      '&:hover': {
        color: '#fff',
        backgroundColor: theme.palette.info.main,
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
    title: {
      color: '#9bb0bf',
      fontSize: '98px',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: 1,
      textTransform: 'uppercase',
      marginBottom: 60,
    },
    text: {
      marginTop: 30,
      color: '#24374e',
      fontSize: '34px',
      fontWeight: 600,
      lineHeight: 1.5,
      marginBottom: 14,
    },
    description: {
      color: 'rgba(36, 55, 78, 0.7)',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    button: {
      color: '#fff',
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      border: '1px solid transparent',
      padding: '.75rem 1rem',
      fontSize: '.875rem',
      lineHeight: 1.5,
      borderRadius: '.35rem',
      '&:hover': {
        backgroundColor: '#3498db',
      },
    },
    content: {
      float: 'left',
      marginLeft: '20%'
    }
  }),
)

export default useStyles
