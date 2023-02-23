import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filt: {
      padding: '2px 3px',
      backgroundColor: '#EBEEF2',
      color: '#77838F',
      cursor: 'pointer',
      borderRadius: '.25rem',
      marginLeft: '8px',
      '&:hover': {
        backgroundColor: 'grey',
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
    root: {
      minWidth: '220px',
      position: 'absolute',
      willChange: 'transform',
      top: '0px',
      left: '0px',
      display: 'block',
      marginTop: '.5rem',
      fontSize: '.76563rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      padding: '1rem 0',
      margin: '.125rem 0 0',
      border: '0 solid rgba(0,0,0,.15)',
      borderRadius: '.35rem',
      boxShadow: '0 2px 7px rgb(51 122 254 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
      backgroundColor: theme.palette.background.paper,
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
      '&.MuiOutlinedInput-input': {
        padding: '6px 12px',
      },
      borderRadius: '.25rem',
      height: 'calc(1.905rem + 2px)',
      padding: '.3rem .6rem',
      fontSize: '95%',
      lineHeight: 1.4,
      marginBottom: '.5rem!important',
      width: '100%',
      fontWeight: 400,
    },
    filterbtn1: {
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      borderRadius: '.25rem',
      fontSize: '.72rem',
      fontWeight: 400,
      padding: '.3rem .6rem',
      marginRight: '.5rem!important',
      marginTop: '0!important',
      color: '#fff',
      textAlign: 'center',
      lineHeight: 1.5,
      width: '100%',
    },
    filterbtn2: {
      backgroundColor: '#F1F2F4',
      borderColor: '#F1F2F4',
      borderRadius: '.25rem',
      fontSize: '.72rem',
      fontWeight: 400,
      padding: '.3rem .6rem',
      marginTop: '0!important',
      color: '#98A2AB',
      textAlign: 'center',
      lineHeight: 1.5,
      width: '100%',
    },
  }),
)
export const Filter = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState<PopperPlacementType>()
  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
    setPlacement(newPlacement)
  }

  function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
    return <ListItem button component="a" {...props} />
  }
  const handleTooltipClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <div className={classes.root}>
              <div style={{ paddingLeft: '.75rem', paddingRight: '.75rem' }}>
                <OutlinedInput className={classes.searchbox} placeholder="Search by address e.g. 0x.." />
                <div style={{ display: 'flex' }}>
                  <Button variant="contained" className={classes.filterbtn1}>
                    <i className="fas fa-filter"></i>&nbsp;Filter
                  </Button>
                  <Button variant="contained" className={classes.filterbtn2}>
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <span className={classes.filt} onClick={handleClick('bottom-end')}>
          <i className="fas fa-filter"></i>
        </span>
      </ClickAwayListener>
    </div>
  )
}
