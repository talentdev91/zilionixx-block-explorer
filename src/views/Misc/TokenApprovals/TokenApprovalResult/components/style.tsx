import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
  },
  form: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
  },
  formControl: {
    marginRight: theme.spacing(0),
    backgroundColor: 'white',
  },
  input: {
    padding: '12px 0 8px 0',
  },
  displayNone: {
    display: 'none',
  },
  select: {
    width: '122px',
    padding: '5px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px 0 0 5px',
    '& fieldset': {
      border: '1px solid lightgrey !important',
    },
    '&:hover': {
      cursor: 'default !important',
    },
  },
  search: {
    width: `calc(100% - ${169}px)`,
    fontSize: ' 14px',
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${47}px)`,
    },
  },
  textField: {
    '& input::placeholder': {
      fontSize: '14px',
    },
  },
  searchInput: {
    padding: '3.5px',
    borderRadius: 0,
    '& fieldset': {
      border: '1px solid lightgrey !important',
    },
  },
  submitBtn: {
    minWidth: '47px',
    '&:hover, &:focus': {
      backgroundColor: '#3498db',
    },
    padding: '16.5px 0',
    backgroundColor: '#3498db',
    borderRadius: '0 5px 5px 0',
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
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: 'white',
    },
  },
  menuItem: {
    '&:hover': {
      background: '#3498db !important',
      color: 'white',
    },
  },
}))

export default useStyles
