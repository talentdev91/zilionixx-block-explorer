import { createStyles, Theme, makeStyles, withStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      minHeight: '300px',
    },
    styleDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      display: 'flex',
      color: theme.palette.primary.contrastText,
      alignItems: 'center',
      fontSize: '12px',
    },
    lead: {
      color: theme.palette.primary.contrastText,
    },
    search: {
      display: 'flex',
      boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
      width: '100%',
      marginTop: '20px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    searchButton: {
      height: '47px',
      minWidth: '48px',
      padding: '16.5px 0',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      boxShadow: '0 0 0 transparent',
      borderRadius: '0 0.35rem 0.35rem 0',
      marginLeft: '-1px',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
  }),
)

export const SearchInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      width: '100%',
      position: 'relative',
      height: '21px',
      backgroundColor: theme.palette.primary.main,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      fontSize: '0.875rem',
      fontWeight: 400,
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      padding: '.75rem 1rem',
      transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      borderRadius: '.35rem 0rem 0rem .35rem',
      '&:focus': {
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
        boxShadow: '0 0 25px rgb(52 152 219 / 10%)',
      },
      '&::placeholder': {
        color: `${localStorage.appTheme === 'darkTheme' ? '#cfdef3' : 'black'}`,
      },
    },
  }),
)(InputBase)