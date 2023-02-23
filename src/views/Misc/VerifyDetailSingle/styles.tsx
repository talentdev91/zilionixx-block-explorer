import { createStyles, Theme, makeStyles, createTheme, withStyles } from '@material-ui/core/styles'
import { Container, Paper, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      padding: '32px 5px 52px 5px',
    },
    container: {
      border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    },
    styleDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      textAlign: 'center',
      color: '#4a4f55',
      alignItems: 'center',
      fontSize: '1.3125rem',
      fontWeight: 400,
      paddingBottom: 0,
      marginBottom: '.5rem',
    },
    subtitle: {
      textAlign: 'center',
      padding: '10px',
    },
    subSingleTitle: {
      textAlign: 'center',
      color: 'white',
      alignItems: 'center',
      fontSize: '11px',
      fontWeight: 700,
      borderRadius: '5rem',
      padding: '.5rem 15px',
      backgroundColor: '#00c9a7',
      marginBottom: '.5rem',
    },
    info: {
      backgroundColor: '#77838f0d',
      padding: '.3rem .5rem',
      borderRadius: '4px',
      fontSize: '14px',
    },
    info1: {
      padding: '.3rem .5rem',
      fontSize: '14px',
    },
    divider: {
      backgroundColor: '#e7eaf3',
      margin: '20px 0px 5px 10px',
    },
    description: {
      display: 'flex',
      color: theme.palette.primary.contrastText,
      textAlign: 'left',
      alignItems: 'center',
      marginLeft: '10px',
    },
  }),
)

export default useStyles

export const contractDetailTheme = createTheme({
  palette: {
    background: {
      default: '#F8F9FA',
    },
    secondary: {
      main: '#18C9A7',
    },
  },

  typography: {
    h6: {
      fontWeight: 400,
      color: '#4a4f55',
      letterSpacing: '0.0075em',
      verticalAlign: 'middle',
    },
  },
})

export const StyledPagePager = withStyles({
  root: {
    background: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
    border: `${localStorage.appTheme === 'darkTheme' ? 'none' : '1px solid #e7eaf3'}`,
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
  },
})(Paper)

export const StyledPageContainer = withStyles({
  root: {
    padding: '0 15px 50px 15px',
  },
  maxWidthLg: {
    maxWidth: '1400px',
  },
})(Container)

export const StyledParentTabs = withStyles((theme: Theme) => ({
  root: {
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #323232'}`,
    color: theme.palette.primary.contrastText,
  },
  indicator: {
    backgroundColor: '#3498db',
  },
}))(Tabs)

export const StyledParentTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '0 10px',
      minHeight: '44px',
      marginRight: theme.spacing(2),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#3498db',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    wrapper: {
      fontWeight: 'bold',
    },
    selected: {},
  }),
)(Tab)
