import { withStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { StyledLink } from '../../Resource/TopStatistics/components/CustomLink'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: '2.5% 10%',
      width: '100%',
    },
    styledDiv: {
      maxWidth: '1400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    mainTitle: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    },
    titleDescription: {
      color: theme.palette.primary.contrastText,
    },
    title: {
      marginBottom: theme.spacing(2),
    },
    textfieldLabel: {
      margin: theme.spacing(2, 0),
    },
    form: {
      width: '100%',
    },
    formControl: {
      width: '100%',
      // backgroundColor: 'white',
    },
    categories: {
      margin: '2rem 0',
    },
    symbolImg: {
      width: 42,
    },
    textField: {
      width: '100%',
      height: 250,
      borderRadius: 5,
      border: '1px solid lightgrey',
      overflowY: 'auto',
      '& input': {
        innerHeight: '100%',
      },
      '& input::placeholder': {
        fontSize: '8px',
      },
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
      backgroundColor: '#3498db',
      color: 'white',
      margin: theme.spacing(2, 0),
      float: 'right',
    },
    introDiv: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    description: {
      color: theme.palette.primary.contrastText,
    },
    tabPane: {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `${localStorage.appTheme === 'darkTheme'
        ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
        : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
        }`,
      color: theme.palette.primary.contrastText,
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  }),
)

export default useStyles

export const StyledVerticalTabs = withStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '.5rem',
    textAlign: 'left',
    width: '100%',
    color: theme.palette.text.primary,
    opacity: 1,
    boxShadow: `${localStorage.appTheme === 'darkTheme'
      ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
      : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
      }`,
  },
  indicator: {
    background: 'none',
  },
}))(Tabs)

export const StyledWrappedLink = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.info.main,
    width: '100%',
    overflowWrap: 'anywhere',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
}))(StyledLink)

export const StyledVerticalTab = withStyles((theme: Theme) => ({
  root: {
    textTransform: 'none',
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0, 1),
    textAlign: 'left',
    maxWidth: '100%',
    minHeight: 42,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.secondary.light}`,
    '&:hover': {
      color: theme.palette.info.main,
    },
    '&$selected': {
      color: 'white',
      backgroundColor: theme.palette.info.main,
    },
    '&:focus': {},
  },
  selected: {},
}))(Tab)
