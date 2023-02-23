import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  footer: {
    bottom: '0',
    padding: '30px 0px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: '1.5em',
    backgroundColor: '#212121',
    backgroundImage: `url('/images/abstract-shapes-20.png')`,
    backgroundPosition: 'center',
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#ffffff'}`,
  },
  divider: {
    opacity: 0.2,
    backgroundColor: '#ffffff',
    marginTop: '10px',
    marginBottom: '10px',
  },
  iconButton: {
    color: '#ffffff',
    fontSize: '.65625rem',
    padding: '0.3rem 0.6rem',
    backgroundColor: 'rgba(248, 249, 250, 0.1)',
    borderRadius: '0.25rem',
    margin: '4px',
    height: '27px',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.2)',
      color: '#c0d3df',
    }
  },
  iconButton1: {
    color: '#ffffff',
    fontSize: '.65625rem',
    padding: '0.3rem 0.6rem',
    backgroundColor: 'rgba(248, 249, 250, 0.1)',
    borderRadius: '0.25rem',
    margin: '4px',
    height: '27px',
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.2)',
      color: '#c0d3df',
    }
  },
  logo: {
    width: '25px',
    height: '25px',
    [theme.breakpoints.down('sm')]: {
      contentVisibility: 'hidden',
    },
  },
  powered: {
    verticalAlign: 'top',
    fontSize: '1.1rem',
    fontWeight: 400,
    marginLeft: '.75rem'
  },
  footertxt: {
    fontSize: '.76563rem',
    fontWeight: 400,
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'hsla(0,0%,100%,.7)',
    '&:hover': {
      color: '#ffffff'
    }
  },
  footerSub: {
    fontSize: '.875rem',
    fontWeight: 400,
  },
  footergrid: {
    marginLeft: '20px',
    marginRight: '50px',
  },
  rightImg: {
    float: 'right',
    marginTop: '-30px',
    [theme.breakpoints.down('md')]: {
      contentVisibility: 'hidden',
    },
  },
  community: {
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url('/images/freeMoney.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      marginLeft: '20px',
    },
  },
  iconMail: {
    fontSize: '.715rem',
    backgroundColor: 'rgba(248, 249, 250, 0.1)',
    borderRadius: '50%',
    boxShadow: '0 0.05rem 0.05rem black',
    marginLeft: '15px',
    height: '1.75rem',
    width: '1.75rem',
    '& i': {
      color: '#f8f9fa'
    },
    '&:hover': {
      backgroundColor: 'hsla(0,0%,100%,.2)'
    }
  },
}))
