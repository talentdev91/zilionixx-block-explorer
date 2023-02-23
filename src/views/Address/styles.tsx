import { withStyles, makeStyles, createStyles, Theme, createTheme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { InputBase } from '@material-ui/core'

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

export const addressTheme = createTheme({
  palette: {
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    h5: {
      fontWeight: 400,
      color: '#4a4f55',
      letterSpacing: '0.0075em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      color: '#4a4f55',
    },
    body1: {
      fontSize: '.875rem',
      fontWeight: 300,
      color: '#000000',
    },
    body2: {
      fontSize: '.8rem',
      fontWeight: 300,
      color: '#4a4f55',
    },
  },
})

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  qrModal: {
    '& .MuiDialog-paper': {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
    '& .MuiTypography-root': {
      fontSize: '.875rem'
    },
    '& .MuiDialogTitle-root': {
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
      padding: '0.5rem',
      textAlign: 'center'
    },
    '& .MuiDialogActions-root': {
      borderTop: `1px solid ${theme.palette.secondary.light}`
    },
    '& .MuiDialog-paperWidthXs': {
      maxWidth: '320px'
    }
  },
  modalClose: {
    float: 'right',
    color: 'rgba(192,211,223,.7)',
    cursor: 'pointer',
    fontFamily: 'inherit',
    '&:hover': {
      color: theme.typography.body1.color,
    }
  },
  modalTitle: {
    fontSize: '80%',
  },
  qrPaper: {
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center'
  },
  contractImg: {
    width: 18,
    height: 18,
    borderRadius: 3,
  },
  contractInfo: {
    padding: 3,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    color: theme.palette.text.primary,
    fontSize: '1.3125rem',
    fontWeight: 400,
  },
  address: {
    fontSize: '70%',
    wordBreak: 'break-word',
    overflowWrap: 'break-word',
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
  },
  pullLeft: {
    float: 'left',
  },
  pullRight: {
    float: 'right',
  },
  inlineCenter: {
    display: 'inline-flex',
    verticalAlign: 'center',
  },
  row: {
    display: 'inline-flex',
  },
  inlineAlignCenter: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  smartContractBtn: {
    fontSize: '.65625rem',
    padding: '.3rem .6rem',
    color: '#fff',
    backgroundColor: '#77838f',
    borderColor: '#77838f',
    fontWeight: 500,
    textAlign: 'center',
    verticalAlign: 'middle',
    alignItems: 'baseline',
    '&:hover': {
      cursor: 'pointer !important',
      backgroundColor: '#77838f',
    },
  },

  formControl: {
    marginRight: theme.spacing(0),
    backgroundColor: 'white',
  },

  select: {
    width: '122px',
    padding: '5px',
    textAlign: 'center',
    fontSize: '14px',
    borderRadius: '5px 0 0 5px',
    '& fieldset': {
      border: '1px solid lightgrey !important',
    },
    '&:hover': {
      cursor: 'default !important',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  icon: {
    marginRight: 10,
  },
  iconOpen: {
    transform: 'none',
  },
  selectSelect: {
    paddingLeft: 0,
  },
  selected: {
    '&.Mui-selected': {
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: 'white',
    },
  },

  menuItem: {
    '&:hover': {
      background: '#3498db !important',
      color: 'white',
    },
  },
  input: {
    padding: '12px 0 8px 0',
  },
  badge: {
    fontSize: 16,
    padding: 0,
    minWidth: '12px !important',
    height: '12px !important',
    backgroundColor: '#4caf50',
  },
  circleicon: {
    fontSize: '.71531rem',
    fontWeight: 400,
    padding: '5px 8px',
    top: '50%',
    cursor: 'pointer',
    color: theme.palette.text.disabled,
    background: 'rgba(119,131,143,.1)',
    borderColor: 'transparent',
    borderRadius: '50%!important',
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginRight: '5px',
    '&:hover': {
      backgroundColor: '#77838f',
      color: 'white',
    },
  },
  squareIcon: {
    fontSize: '.71531rem',
    fontWeight: 400,
    cursor: 'pointer',
    color: '#77838f',
    borderRadius: 2,
    background: 'rgba(119,131,143,.1)',
    borderColor: 'transparent',
    position: 'relative',
    verticalAlign: 'middle',
    '&:hover': {
      backgroundColor: 'grey',
      color: 'white',
    },
  },
  wrapAnywhere: {
    overflowWrap: 'anywhere',
  },
  overviewIconGroup: {
    display: 'flex',
    float: 'right',
  },
  anyswap: {
    fontWeight: 500,
    color: '#3498db',
    backgroundColor: 'rgba(51,122,254,.1)',
    fontSize: '.65625rem',
    lineHeight: 1.7,
    padding: '.2rem .5rem',
    borderRadius: '6.1875rem',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3498db',
    },
    cursor: 'pointer',
    marginLeft: '5px',
  },
  tokencontract: {
    fontWeight: 500,
    color: '#77838f',
    backgroundColor: 'rgba(119,131,143,.1)',
    fontSize: '.65625rem',
    lineHeight: 1.7,
    padding: '.2rem .5rem',
    borderRadius: '6.1875rem',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#77838F',
    },
    cursor: 'pointer',
    marginLeft: '5px',
  },
  infoCard: {
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    borderRadius: '8px',
    backgroundColor: theme.palette.primary.light,
    wordWrap: 'break-word',
  },
  cardHeader: {
    marginBottom: 0,
    padding: '.75rem',
  },
  headerTitle: {
    color: theme.palette.text.primary,
    fontSize: '.875rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  cardBody: {
    padding: '12px',
  },
  bodyDivider: {
    margin: '12px 0',
  },
  cardBodyText: {
    fontSize: '.875rem',
    color: theme.typography.body2.color,
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'left',
  },
  nameTagContent: {
    display: 'flex',
  },
  favoriteIcon: {
    width: '21px',
    height: '21px',
    padding: '4px',
    backgroundColor: 'rgba(51,122,254,.1)',
    borderRadius: '4px',
    fontSize: '13px',
    color: '#3498db',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#3498db',
      boxShadow: '0 4px 11px rgb(51 122 254 / 35%)',
    },
    marginRight: '4px',
  },
  menuIconBox: {
    width: '21px',
    height: '21px',
    padding: '4px',
    backgroundColor: 'rgba(119,131,143,.1)',
    borderRadius: '4px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#77838f',
      boxShadow: '0 4px 11px rgb(119 131 143 / 35%)',
    },
  },
  menuIcon: {
    fontSize: 13,
    fontWeight: 900,
    '&:hover': {
      color: '#fff',
    },
  },
  actionBox: {
    justifyContent: 'end',
    display: 'flex',
  },
  helpIcon: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3!important' : '#8c98a4'}`,
    fontSize: 15,
    verticalAlign: 'text-top',
    marginRight: '4px',
  },
  loginLink: {
    color: theme.palette.info.main,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.info.dark,
    },
  },
  editIcon: {
    color: theme.palette.info.main,
    fontSize: '.875rem',
    alignItems: 'center',
    display: 'flex',
    marginLeft: '5px',
  },
  divider: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
    margin: '4px 0px',
  },
}))

export const BlueHoverLink = withStyles((theme: Theme) => ({
  root: {
    color: '#447CFE',
    backgroundColor: '#E4ECFB',
    '&:hover': {
      color: 'white',
      backgroundColor: '#447CFE',
    },
    fontSize: '.65rem',
    padding: '.3rem',
    borderRadius: '20%',
  },
}))(Link)

export const RedBackgroundPaper = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    color: '#725002',
    backgroundColor: '#F8EBCD',
  },
}))(Paper)

export const ContractCodeBtn = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#77838f',
    fontSize: '.5rem',
    padding: '.3rem 0',
    borderColor: '#77838f',
    minWidth: 30,
    '&:hover': {
      cursor: 'pointer !important',
      backgroundColor: '#77838f',
    },
  },
}))(Button)

export const ContractCreationCodeBtn = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    backgroundColor: '#DB9A04 ',
    fontSize: '.6rem',
    padding: '.3rem .3rem',
    borderColor: '#DB9A04 ',
    minWidth: 30,
    '&:hover': {
      cursor: 'pointer !important',
      backgroundColor: '#A97703 ',
    },
  },
}))(Button)

export const CodePaper = withStyles((theme: Theme) => ({
  root: {
    color: 'black',
    backgroundColor: '#F8F9FA',
    fontSize: '.65625rem',
    padding: '1rem 1rem',
    border: '1px solid #e7eaf3',
    maxHeight: 200,
    overflowY: 'auto',
  },
}))(Paper)

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      width: '100%'
    },
    input: {
      color: theme.palette.text.primary,
      border: '1px solid',
      borderColor: theme.palette.secondary.light,
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      marginTop: '1rem',
      // border: '1px solid #d5dae2',
      borderRadius: '.25rem',
      fontSize: '98%',
      position: 'relative',
      margin: '0px',
      padding: '4px 18px 8px 6px !important',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        border: `1px solid ${theme.palette.info.light}`,
        boxShadow: '0 0 25px rgb(52 152 219 / 10%)',
      },
      '&::placeholder': {
        color: theme.palette.primary.contrastText
      }
    },
  }),
)(InputBase)
