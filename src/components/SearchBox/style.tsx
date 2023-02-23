import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

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
      '&:focus': {
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
        boxShadow: '0 0 25px rgb(52 152 219 / 10%)',
      },
      '&::placeholder': {
        color: theme.palette.primary.contrastText,
      },
    },
  }),
)(InputBase)

export const SearchSelect = withStyles((theme: Theme) =>
  createStyles({
    input: {
      height: '21px',
      marginRight: '-1px',
      borderRadius: '0.35rem 0 0 0.35rem',
      position: 'relative',
      backgroundColor: theme.palette.primary.main,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
      fontSize: '0.875rem',
      fontWeight: 400,
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      padding: '.75rem 2rem .75rem 1rem',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
        borderRadius: '0.35rem 0 0 0.35rem',
        boxShadow: '0 0 25px rgb(52 152 219 / 10%)',
      },
    },
  }),
)(InputBase)

export const useStyles = makeStyles((theme: Theme) => ({
  iconType: {
    width: '16px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    marginRight: '16px',
  },
  form: {
    display: 'flex',
    boxShadow: '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  inputForm: {
    width: '100%',
  },
  selectForm: {
    minWidth: '121px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  submitBtn: {
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
      backgroundColor: theme.palette.info.main,
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 transparent',
    },
  },
}))
