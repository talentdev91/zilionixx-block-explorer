import { Theme, makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

export const StyledRibbon = styled('span')(
  () => `
  position: relative;
  letter-spacing: 0.8px;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: rgba(119, 131, 143, 0.1);
  color: ${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'};
  font-size: 0.65625rem;
  line-height: 1.7;
  padding: 0.2rem 0.5rem 0.2rem 1.15rem;
  font-weight: 400;
  display: inline-block;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    border-top: 0.7rem solid transparent;
    border-bottom: 0.7rem solid transparent;
    border-left: 0.7rem solid ${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'};
  }
`,
)

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 15,
  },
  backgroundPaper: {
    backgroundColor: theme.palette.primary.light,
    boxShadow: `${localStorage.appTheme === 'darkTheme'
      ? '0 0.5rem 1.2rem hsl(0deg 0% 100% / 6%)'
      : '0 0.5rem 1.2rem rgb(189 197 209 / 6%)'
      }`,
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: '8px',
  },
  paper: {
    height: '400px',
    overflow: 'hidden',
    '&:hover': {
      overflowY: 'overlay',
    },
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    },
  },
  title: {
    fontSize: '0.875rem',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#4a4f55'}`,
    fontWeight: 600,
    letterSpacing: '0.00938em',
    lineHeight: 1.5,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
  blockicon: {
    width: '2.73438rem',
    height: '2.73438rem',
    border: 'none',
    backgroundColor: theme.palette.secondary.dark,
  },
  blockSpan: {
    fontSize: '0.875rem',
    lineHeight: 0,
    fontWeight: 500,
    textAlign: 'center',
    position: 'relative',
    top: '24%',
    marginLeft: '33%',
  },
  timeNotion: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
    position: 'relative',
    alignSelf: 'center',
    fontSize: '70%',
  },
  footer: {
    textAlign: 'center',
    padding: 10,
    paddingTop: 15,
  },
  viewAllButton: {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    padding: '.3rem .6rem',
    border: '1px solid transparent',
    borderRadius: '4px',
    fontSize: '.72rem',
    lineHeight: 1.5,
    color: '#3498db',
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.1)' : 'rgba(52,152,219,.1)'}`,
    transition: '.2s  !important',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
    },
  },
  link: {
    color: theme.palette.info.main,
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    maxWidth: 171,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  spinner: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  tableContainer: {
    padding: '1px 12px',
    overflowx: 'hidden',
  },
  listBox: {
    padding: '1px 12px',
    overflowx: 'hidden',
  },
  transactionIcon: {
    width: '2.73438rem',
    height: '2.73438rem',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: '50%',
    border: 'none',
  },
  transactionSpan: {
    fontSize: '0.875rem',
    lineHeight: 0,
    fontWeight: 500,
    textAlign: 'center',
    position: 'relative',
    top: '24%',
    marginLeft: '33%',
  },
  dividerColor: {
    backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
  },
}))
