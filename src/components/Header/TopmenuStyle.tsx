import { withStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Box, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'

const pathname = window.location.pathname

export const useStyles = makeStyles((theme) => ({
  toggleMenuBack: {
    backgroundColor: theme.palette.primary.dark,
  },
  childLink: {
    textDecoration: 'none',
    padding: '0.5rem 0',
    fontSize: '.80938rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  toggleMenuLink: {
    textDecoration: 'none',
    alignSelf: 'center',
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  menuLink: {
    textDecoration: 'none',
    alignSelf: 'center',
    padding: '0.8rem 1rem',
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  menuButton: {
    padding: '0.8rem 1rem',
    textTransform: 'none',
    fontSize: '0.875rem',
    fontWeight: 400,
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  changeButton: {
    '& img': {
      width: '28px',
      height: '28px',
      marginTop: '9px',
      cursor: 'pointer',
    },
  },
  activeLink: {
    color: '#3498db !important',
  },
  menuListLink: {
    textDecoration: 'none',
  },
  downMenuBox: {
    backgroundColor: theme.palette.primary.main,
    borderTop: '0.1875rem solid #3498db',
    boxShadow: '0 8px 20px rgb(51 122 254 / 8%)',
    padding: '1rem 0',
    '& .MuiList-padding': {
      padding: '0',
    },
    minWidth: '230px',
  },
  menuList: {
    padding: '0.5rem 1.75rem',
    fontSize: '0.8rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#6c757e'}`,
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#3498db',
    },
  },
  signoutBtn: {
    width: '100%',
    fontSize: '.72rem',
    borderRadius: '.25rem',
    textTransform: 'none',
    padding: '0.3rem 0.6rem',
    color: theme.palette.info.main,
    backgroundColor: 'rgba(52,152,219,.2)',
    border: 'none',
    boxShadow: '0 0 0 transparent',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0 transparent',
    },
  },
  userName: {
    textTransform: 'uppercase',
    color: theme.palette.primary.contrastText
  }
}))

export const StyledAccordion = withStyles((theme) => ({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    backgroundColor: theme.palette.primary.dark,
  },
  expanded: {},
}))(Accordion)

export const StyledAccordionSummary = withStyles({
  root: {
    height: 37,
    minHeight: 37,
    '&$expanded': {
      minHeight: 37,
    },
    padding: '0',
  },
  content: {
    '&$expanded': {
      margin: '0',
    },
    margin: '0',
  },
  expanded: {},
})(AccordionSummary)

export const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    borderLeft: `3px solid ${theme.palette.info.main}`,
    paddingLeft: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
}))(AccordionDetails)

export const StyledAppBar = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    alignItems: 'center',
    zIndex: 10,
    boxShadow: `${pathname === '/home' ? 'none' : '0 1px 10px rgb(151 164 175 / 10%)'}`,
  },
}))(AppBar)

export const StyledToolbar = withStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    width: '100%',
    padding: '0',
  },
  regular: {
    minHeight: '54px',
  },
}))(Toolbar)

export const StyledTopbarBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down(1200)]: {
      padding: '0 45px',
    },
    [theme.breakpoints.up(1200)]: {
      padding: '0 15px',
    },
    [theme.breakpoints.down(993)]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up(993)]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down(768)]: {
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
    },
    [theme.breakpoints.down(576)]: {
      padding: '0 15px',
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
    },
  },
}))(Box)

export const StyledLogoBox = withStyles((theme) => ({
  root: {
    width: '156px',
    [theme.breakpoints.down(993)]: {
      alignSelf: 'flex-start',
    },
    [theme.breakpoints.up(993)]: {
      alignSelf: 'center',
    },
    [theme.breakpoints.down(768)]: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
}))(Box)

export const StyledControlBox = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(993)]: {
      width: '100%',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up(993)]: {
      width: `calc(100% - ${156}px)`,
      alignItems: 'flex-end',
    },
  },
}))(Box)

export const StyledToggleBox = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down(768)]: {
      display: 'block',
    },
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
  },
}))(Box)

export const StyledZilionixxBox = withStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(119,131,143,.05)',
    padding: '0.3rem 0.5rem',
    borderRadius: '.35rem',
    marginTop: '.25rem',
    fontWeight: 500,
    letterSpacing: '.5px',
    fontSize: '.725rem',
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
  },
}))(Box)

export const StyledTopMenuBox = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
  },
}))(Box)

export const StyledSearchBox = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down(993)]: {
      minWidth: '-webkit-fill-available',
    },
    [theme.breakpoints.up(993)]: {
      width: '55%',
    },
  },
}))(Box)

export const StyledToggleButtonBox = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down(768)]: {
      display: 'block',
    },
    [theme.breakpoints.up(768)]: {
      display: 'none',
    },
  },
}))(Box)
