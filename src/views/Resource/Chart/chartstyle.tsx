import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chartroot: {
      paddingRight: '15px',
      paddingLeft: '15px',
    },
    root: {
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
      marginBottom: '20px',
      backgroundColor: theme.palette.primary.light,
    },
    lefttoptext: {
      color: theme.palette.primary.contrastText,
      fontSize: '50%',
      fontWeight: 400,
      cursor: 'default',
      float: 'right',
      alignItems: 'center!important',
    },
    content: {
      minHeight: '1px',
      padding: '.75rem',
      flexGrow: 1,
    },
    toptitle: {
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: '1.3125rem',
      lineHeight: 1.5,
      display: 'flex',
      paddingBottom: '.75rem!important',
      position: 'relative',
      justifyContent: 'space-between!important',
      alignItems: 'center',
    },
    cardheader: {
      fontSize: '.875rem!important',
      fontWeight: 600,
      marginBottom: '0!important',
      marginTop: '0!important',
    },
    cardhead: {
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    carditem: {
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
      backgroundColor: theme.palette.primary.light,
    },
    carditem2: {
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
      marginBottom: '1.25rem!important',
      backgroundColor: theme.palette.primary.light,
    },
    carditem3: {
      boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
      marginBottom: '.5rem!important',
      backgroundColor: theme.palette.primary.light,
    },
    carditemheader: {
      color: theme.palette.info.main,
      wordWrap: 'break-word',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'left',
      marginBottom: '0!important',
      marginTop: '0!important',
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    itembackground: {
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.text.secondary,
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
      cursor: 'pointer',
    },
    itembody: {
      padding: '.75rem!important',
      cursor: 'pointer',
    },
    grap: {
      width: '100%!important ',
      verticalAlign: 'middle',
      maxWidth: '100%',
      height: 'auto',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.info.main,
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    itemheader: {
      padding: '.75rem!important',
      margin: '0!important',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: theme.palette.secondary.main,
      wordWrap: 'break-word',
      textAlign: 'justify',
    },
    itemheaderbox: {
      padding: '.75rem!important',
    },
    bottomboder: {
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
    },
    gridborder: {
      borderRight: 'groove 1px',
      [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
      },
    },
    gridtext: {
      marginTop: '.5rem!important',
      marginBottom: '.5rem!important',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.primary.contrastText,
    },
    footerText: {
      textAlign: 'right',
      padding: '0px 20px',
    },
    download: {
      color: theme.palette.primary.contrastText,
      fontSize: '.875rem',
    }
  }),
)

export default useStyles
