import { makeStyles, Theme } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => ({
  roottitle: {
    paddingBottom: '.75rem!important',
    paddingTop: '.75rem!important',
    justifyContent: 'space-between!important',
    display: 'flex!important',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  title: {
    color: '#4a4f55',
    fontWeight: 400,
    fontSize: '1.3125rem',
    margin: 0,
    paddingTop: '.4rem',
  },
  subtitle: {
    fontSize: '80%',
    fontWeight: 400,
    color: '#77838f!important',
  },
  breadcam: {
    paddingBottom: '.75rem!important',
    paddingTop: '.75rem!important',
    fontSize: '11.2px',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#1e2022',
  },
  roottitle2: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  roottitle3: {
    marginBottom: '.75rem!important',
    paddingTop: '.75rem!important',
    borderTop: '1px solid #e7eaf3!important',
  },
  subtitle3: {
    fontWeight: 700,
    fontSize: '.875rem',
    marginRight: '.5rem',
  },
  token: {
    color: '#77838f',
    backgroundColor: 'rgba(119,131,143,.1)',
    fontSize: '.76563rem',
    padding: '.4rem .7rem',
    borderRadius: '6.1875rem',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#77838F',
    },
    cursor: 'pointer',
  },
  anyswapbottomtxt: {
    color: '#77838f!important',
    textAlign: 'right',
    fontSize: '.875rem',
    fontWeight: 400,
  },
  tkcontractxt: {
    padding: '.75rem',
    fontSize: '.875rem',
    fontWeight: 400,
    color: '#1e2022',
    marginBottom: '10px',
  },
}))
