import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export const StyledParentTabs = withStyles((theme) => ({
  root: {
    borderBottom: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'}`,
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
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : 'rgba(74,79,85,.8)'}`,
      opacity: 1,
      '&:hover': {
        color: theme.palette.info.main,
        opacity: 1,
      },
      '&$selected': {
        color: theme.palette.info.main,
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: theme.palette.info.main,
      },
    },
    wrapper: {
      fontWeight: 'bold',
    },
    selected: {},
  }),
)(Tab)

export const StyledSimpleTabs = withStyles({
  indicator: {
    background: 'none',
  },
})(Tabs)

export const StyledSimpleTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '0 10px',
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #d5dae2'}`,
      minHeight: '30px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
      borderRadius: '4px',
      marginRight: theme.spacing(2),
      opacity: 1,
      '&:hover': {
        color: '#3498db',
      },
      '&$selected': {
        color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#fff'}`,
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#77838f'}`,
        fontWeight: 'theme.typography.fontWeightMedium',
      },
      '&:focus': {
        // color: '#40a9ff',
      },
    },
    selected: {},
  }),
)(Tab)
