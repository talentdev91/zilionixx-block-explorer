import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      fontSize: '.875rem',
      color: theme.typography.body1.color,
      '&.MuiList-padding': {
        padding: '0',
      },
    },
    listItem: {
      '&.MuiListItem-gutters': {
        padding: '4px 0',
      },
      minHeight: '40px',
      alignItems: 'center',
    },
    transactionCnt: {
      lineHeight: 1.3,
      textTransform: 'none',
      fontSize: '12px',
      padding: '5px 8px',
      color: '#3498db',
      borderRadius: '0.35rem',
      textDecoration: 'none',
      backgroundColor: 'rgba(51,122,254,.1)',
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
      },
      marginRight: '4px',
    },
    cardroot: {
      minHeight: '1px',
      padding: '.75rem',
      flexGrow: 1,
    },
    toptile: {
      color: '#4a4f55',
      fontWeight: 400,
      fontSize: '1.3125rem',
    },
    topsubtitle: {
      color: '#77838f!important',
      fontSize: '80%',
      fontWeight: 400,
    },
    items: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        marginTop: '10px',
        wordBreak: 'break-word',
      },
      '& i': {
        fontSize: '80%',
      },
    },
    blockno: {
      fontWeight: 800,
    },
    dividers: {
      margin: '4px 0',
      color: theme.palette.secondary.light,
    },
    twitter: {
      backgroundColor: '#00ACED',
      color: 'white',
      display: 'flex',
      paddingLeft: '3px',
      paddingRight: '3px',
      borderRadius: '4px',
    },
    facebook: {
      backgroundColor: '#3B5998',
      color: 'white',
      display: 'flex',
      paddingLeft: '3px',
      paddingRight: '3px',
      borderRadius: '4px',
    },
    root1: {
      flexWrap: 'wrap',
      maxWidth: '100%',
    },
    content1: {
      width: '100%!important',
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '.875rem',
      fontWeight: 400,
      color: '#6c757e',
      lineHeight: 1.7,
      marginBottom: '1rem',
      marginTop: 0,
    },
    titletext1: {
      color: '#3498db!important',
      fontWeight: 400,
      fontSize: '1.53125rem',
      marginBottom: 0,
      marginTop: 0,
    },
    textField1: {
      width: '100%',
      marginBottom: '1rem',
    },
    outfield: {
      '&.MuiOutlinedInput-input': {
        padding: '6px 12px',
      },
    },
    error: {
      color: 'red',
      marginLeft: 0,
    },
    button: {
      backgroundColor: 'rgba(29,47,58,.6)',
      float: 'right',
    },
    subtab: {
      marginTop: '10px',
      boxShadow: 'none',
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
      backgroundColor: 'transparent',
    },
    dislink: {
      marginTop: 'auto',
      marginBottom: 'auto',
      textDecoration: 'none',
      fontSize: '15px',
      color: '#656c7a',
      fontWeight: 700,
      marginLeft: '20px',
    },
    disign: {
      marginTop: '15px',
      fontSize: '17px',
      color: '#656c7a',
      fontWeight: 700,
      marginLeft: '20px',
    },
    discontent: {
      marginTop: '15px',
      fontSize: '12px',
      color: '#656c7a',
      fontWeight: 700,
      marginBottom: '0',
      textAlign: 'left',
    },
    discontent1: {
      marginTop: '0!important',
      fontSize: '12px',
      color: '#656c7a',
      fontWeight: 700,
      marginLeft: '8px',
      textAlign: 'left',
    },
    disbutton: {
      backgroundColor: '#768188',
      fontSize: '13px',
      marginBottom: '10px',
    },
    list: {
      width: 640,
    },
    znximage: {
      width: '42px',
      height: '42px',
      top: '6px',
      marginRight: 15,
      borderRadius: '50%',
      display: 'block',
      boxShadow: '0 0 0 1px #ebeef2',
      position: 'relative',
    },
    znxheader: {
      padding: '15px 20px 20px',
      textAlign: 'center',
      minHeight: '60px',
      display: 'flex',
      width: '100%',
      marginBottom: '-6px',
      position: 'relative',
    },
    znxbutton: {
      fontSize: '15px',
      fontWeight: 600,
      minWidth: '120px',
      borderRadius: '32px',
      padding: '8px 28px',
      backgroundColor: '#2e9fff',
      marginTop: '10px',
    },
    znxtitle: {
      margin: 0,
      textAlign: 'left',
    },
    znxsubheader: {
      display: 'flex',
      flexDirection: 'column',
    },
    customWidth: {
      maxWidth: 340,
      backgroundColor: 'white',
      color: 'black',
      border: '3px solid grey',
      textAlign: 'center',
      fontSize: '13px',
      '&.MuiTooltip-tooltipPlacementBottom': {
        margin: '0',
      },
    },
    customWidth1: {
      maxWidth: '220px',
      minWidth: '130px',
      backgroundColor: 'white',
      color: 'grey',
      border: '2px solid grey',
      textAlign: 'center',
      fontSize: '13px',
      '&.MuiTooltip-tooltipPlacementBottom': {
        margin: '0',
      },
    },
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
    sortfont: {
      color: '#656c7a!important',
      fontSize: '13px',
    },
    leftarrow: {
      textAlign: 'center',
      marginLeft: '20px',
      marginRight: '4px',
      padding: '5px 9px',
      borderRadius: '.25rem',
      backgroundColor: 'rgba(51,122,254,.1)',
      color: '#3498db',
      fontSize: '.625rem',
      '&:hover': {
        color: 'white',
        backgroundColor: '#3498db',
      },
    },
    rightarrow: {
      textAlign: 'center',
      padding: '5px 9px',
      borderRadius: '.25rem',
      backgroundColor: 'rgba(51,122,254,.1)',
      fontSize: '.625rem',
      color: '#3498db',
      '&:hover': {
        color: 'white',
        backgroundColor: '#3498db',
      },
    },
    expand: {
      transform: 'rotate(0deg)',
      marginRight: 'auto',
      color: theme.palette.info.main,
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: '10px',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    expanlist: {
      color: theme.palette.info.main,
      cursor: 'pointer',
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      maxWidth: 171,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    question: {
      color: '#77838F',
    },
    transaction: {
      fontSize: '.74094rem',
      padding: '.3rem .5rem',
      color: '#3498db',
      backgroundColor: 'rgba(51,122,254,.1)',
      fontWeight: 500,
      lineHeight: 1.3,
      marginLeft: '5px',
      marginRight: '5px',
      marginBottom: '.25rem!important',
      marginTop: '.25rem!important',
      borderEadius: '.35rem!important',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        backgroundColor: '#3498db',
      },
      borderRadius: '.35rem!important',
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
    commentContainer: {
      fontSize: '.875rem',
      color: theme.typography.body1.color,
    },
    commentsTab: {
      padding: '0px 0px 0px 0px',
      minWidth: '72px',
    },
  }),
)

export default useStyles
