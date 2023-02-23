import { makeStyles, withStyles, Theme } from '@material-ui/core/styles'
import { Popover } from '@material-ui/core'
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: '0 2px 7px rgb(52 152 219 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
    width: '305px',
    borderRadius: '.35rem',
    padding: '.5rem',
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
    flex: '1 1 0%',
    width: '100%',
    height: 'calc(1.5em+1.2rem+2px)',
    fontSize: '.875rem',
    padding: '0.75rem 0.6rem',
    borderTopRightRadius: '0.125rem',
    borderBottomRightRadius: '0.125rem',
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.info.light}`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '.25rem',
    '&:focus': {
      border: `1px solid ${theme.palette.info.light}`,
      outline: 'none',
    },
  },
  submitBtn: {
    padding: '0.6rem 1.125rem',
    textTransform: 'none',
    fontSize: '.76563rem',
    minWidth: '28px',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
    boxShadow: '0 0 0 transparent',
    borderRadius: '0.25rem',
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
  listPaper: {
    margin: '-7px 8px',
    width: '290px',
    backgroundColor: theme.palette.primary.light,
  },
  listHeader: {
    padding: '10px',
  },
  listHeaderText: {
    width: '100%',
    backgroundColor: theme.palette.text.secondary,
    padding: '5px 8px',
    borderRadius: '4px',
    fontSize: '.875rem',
    fontWeight: 800,
  },
  itemList: {
    padding: '8px',
    maxHeight: '300px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  item: {
    display: 'block',
    padding: 3,
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.text.secondary,
      borderRadius: '.25rem',
      color: 'white!important',
      border: `1px solid ${theme.palette.secondary.light}`,
    },
  },
  linkItem: {
    display: 'flex',
    textDecoration: 'none',
    borderRadius: '.35rem',
    padding: '0.5rem',
    border: '1px solid transparent',
    transition: 'all .1s',
    alignItems: 'flex-start'
  },
  tokenIcon: {
    width: '1.20313rem',
    height: '1.20313rem'
  },
  tokenDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: '.5rem',
  },
  tokenDescriptionTop: {
    display: 'flex',
    fontWeight: 400,
    fontSize: '.9375rem',
    alignItems: 'center',
    color: theme.palette.text.primary,
    '& i': {
      fontWeight: 900,
      color: theme.palette.info.main,
      marginLeft: '.5rem'
    }
  },
  tokenDescriptionBottom: {
    fontSize: '.76563rem',
    color: '#77838f',
  },
  tokenBadge: {
    backgroundColor: 'rgba(119,131,143,.1)!important',
    padding: '0.25em 0.4em',
    fontSize: '75%',
    borderRadius: '4px',
  },
  textTruncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
}))

export const StyledPopover = withStyles((theme: Theme) => ({
  root: {
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      padding: '8px',
      overflow: 'hidden',
    }
  },
}))(Popover)