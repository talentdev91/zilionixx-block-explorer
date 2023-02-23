import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  homeBanner: {
    padding: '.75rem',
    '& *, :after, :before': {
      boxSizing: 'border-box',
    },
    lineHeight: '6px',
    fontSize: '.76563rem!important',
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    backgroundColor: theme.palette.primary.light,
    boxShadow: `${localStorage.appTheme === 'darkTheme'
      ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
      : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
      }`,
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232 !important' : '#e7eaf3 !important'}`,
    borderRadius: '8px',
  },
  content: {
    marginLeft: '-1.5rem',
    marginRight: '-1.5rem',
  },
  secondPart: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    lineHeight: 1,
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
    },
  },
  historyContainer: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  chip: {
    textAlign: 'right',
    marginLeft: 'auto',
  },
  divider: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    margin: '1.6rem 0 ',
  },
  img: {
    width: ' 1.75rem',
    height: '1.75rem',
    marginRight: '10px',
  },
  tpsText: {
    fontSize: '80%',
    marginLeft: '4px',
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    alignSelf: 'center',
  },
  divid: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0 !important',
      marginRight: '0 !important',
      marginTop: '1.2rem',
      marginBottom: '1.2rem',
      display: 'block',
    },
  },
  text1: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    fontSize: '.76563rem',
    alignSelf: 'end',
  },
  text2: {
    fontSize: '.9375rem',
    color: theme.palette.secondary.main,
    alignSelf: 'end',
    '&:hover': {
      color: '#3498db',
    },
  },
  text3: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    fontSize: '.9375rem',
    marginLeft: '4px',
    alignSelf: 'end',
  },
  text4: {
    fontSize: '80%',
    color: '#de4437!important',
    marginLeft: '4px',
    alignSelf: 'end',
  },
  link: {
    fontSize: '.9375rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
    alignSelf: 'end',
    textDecoration: 'none',
    lineHeight: 1.5,
    '&:hover': {
      color: '#3498db',
    },
  },
}))
