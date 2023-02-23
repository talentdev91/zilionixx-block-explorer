import { makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // width: '100%',
    maxWidth: 230,
    width: 230,
    animationDuration: '300ms',
    marginTop: '.5rem',
    marginLeft: 'auto',
    marginRight: '-6px',
    //   fontSize: '.76563rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    border: '0 solid rgba(0,0,0,.15)',
    borderRadius: '.35rem',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
  },
  submenuLink: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#D9ECE6' : '#000'}`,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  dropdownItem: {
    display: 'block',
    width: '100%',
    padding: '.375rem 1.5rem',
    clear: 'both',
    fontWeight: 400,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#1e2022'}`,
    textAlign: 'inherit',
    whiteSpace: 'nowrap',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: '.76563rem',
    cursor: 'pointer',
    '&:hover': {
      color: '#3498db',
    },
  },
  divider: {
    marginTop: '5px',
    marginBottom: '5px',
  },
  linkitem: {
    textDecoration: 'none',
  },
  iconDetail: {
    width: '1.325rem',
    height: '1.325rem',
    textAlign: 'center',
    padding: '4px',
    fontSize: '.65625rem',
    borderRadius: '.25rem',
    color: '#77838f',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#232d34' : '#eaf1ff'}`,
    '&:hover': {
      color: 'white',
      backgroundColor: '#77838f',
    },
  },
  buttonstyle: {
    minWidth: '21px',
    width: '21px',
    height: '21px',
    padding: '0',
    color: '#77838f',
    fontSize: '.71531rem',
    backgroundColor: 'rgba(119,131,143,.1)',
    '&:hover': {
      backgroundColor: '#77838f',
      boxShadow: '0 4px 11px rgb(119 131 143 / 35%)',
      color: '#fff',
    },
  },
}))
