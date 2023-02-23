import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Popover, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiPaper-root': {
        backgroundColor: 'transparent',
        padding: '8px',
        overflow: 'hidden',
      },
    },
    filt: {
      padding: '0px',
      minWidth: '0px',
      width: '1.3125rem',
      height: '1.3125rem',
      cursor: 'pointer',
      borderRadius: '.25rem',
      marginLeft: '8px',
      textTransform: 'none',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
      border: 'transparent',
      color: theme.palette.text.disabled,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
        color: 'white',
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
    buttonstyle: {
      minWidth: '19px',
      height: '19px',
      padding: '0',
      backgroundColor: '#F1EEF0',
    },
    paper: {
      minWidth: '220px',
      willChange: 'transform',
      marginTop: '.5rem',
      fontSize: '.76563rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      padding: '1rem 0',
      margin: '.125rem 0 0',
      border: '0 solid rgba(0,0,0,.15)',
      borderRadius: '.35rem',
      boxShadow: '0 2px 7px rgb(51 122 254 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
      backgroundColor: theme.palette.primary.main,
    },
    item: {
      fontSize: '.76563rem',
      display: 'block',
      width: '100%',
      padding: '.375rem 1.5rem',
      clear: 'both',
      fontWeight: 400,
      color: '#6c757e',
      textAlign: 'inherit',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      border: 0,
    },
    icons: {
      marginRight: '.25rem!important',
    },
    searchbox: {
      width: '100%',
      height: 36,
      padding: '5px 5px 5px 10px',
      marginBottom: '10px',
      borderRadius: '5px',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#fff'}`,
      border: `1px solid ${theme.palette.secondary.light}`,
      '&:focus': {
        boxShadow: '0 0 25px rgb(51 122 254 / 10%)',
        border: `1px solid ${theme.palette.info.light}`,
        outline: 'none',
      },
    },
    filterbtn: {
      borderRadius: '.25rem',
      fontSize: '.72rem',
      fontWeight: 400,
      padding: '.3rem .6rem',
      marginRight: '.5rem!important',
      textAlign: 'center',
      lineHeight: 1.5,
      width: '100%',
      boxShadow: 'none',
      color: `${localStorage.appTheme === 'darkTheme' ? 'hsla(0,0%,100%,.8)' : '#fff'}`,
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      border: `1px solid ${localStorage.appTheme === 'darkTheme' ? 'rgba(52,152,219,.2)' : '#3498db'}`,
      '&:hover': {
        color: '#fff',
        backgroundColor: '#3498db',
        boxShadow: '0 4px 11px rgb(52 152 219 / 35%)',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
    resetbtn: {
      borderRadius: '.25rem',
      fontSize: '.72rem',
      fontWeight: 400,
      padding: '.3rem .6rem',
      lineHeight: 1.5,
      width: '100%',
      boxShadow: 'none',
      textTransform: 'none',
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#77838f1a' : '#ebedf0'}`,
      border: 'transparent',
      color: '#77838f',
      '&:hover': {
        backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : '#77838f'}`,
        color: 'white',
      },
      '&:focus': {
        boxShadow: '0 0 0 0 transparent',
      },
    },
  }),
)
export const Filter = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  // const [queryString, setQueryString] = useState('')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  // const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
  //   setQueryString(e.target.value)
  // }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  return (
    <div>
      <Button className={classes.filt} aria-describedby={id} variant="contained" onClick={handleClick} disableRipple>
        <i className="fas fa-filter"></i>
      </Button>
      <Popover
        className={classes.root}
        elevation={0}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className={classes.paper}>
          <div style={{ paddingLeft: '.75rem', paddingRight: '.75rem' }}>
            <input className={classes.searchbox} placeholder="Search by address e.g. 0x.." />
            <div style={{ display: 'flex' }}>
              <Button variant="contained" className={classes.filterbtn} disableRipple>
                <i className="fas fa-filter"></i>&nbsp;Filter
              </Button>
              <Button variant="contained" className={classes.resetbtn} disableRipple>
                Clear
              </Button>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  )
}
