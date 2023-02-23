import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      top: '0px',
      left: '0px',
      marginTop: '.5rem',
      fontSize: '.76563rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      boxShadow: '0 2px 7px rgb(51 122 254 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
      minWidth: '8.4375rem',
      padding: '1rem 0',
      margin: '.125rem 0 0',
      color: '#1e2022',
      textAlign: 'left',
      backgroundColor: '#fff',
      border: '0 solid rgba(0,0,0,.15)',
      borderRadius: '.35rem',
      fontWeight: 400,
    },
    item: {
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
      fontSize: '.76563rem',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3498db',
      },
    },
    icons: {
      marginRight: '.25rem!important',
    },
    list: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : '#fff'}`,
      border: '1px solid #767676',
    },
    decodebtn: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#244464' : '#77838f'}`,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #244464' : '1px solid #77838f'}`,
      cursor: 'pointer',
      fontSize: '.65625rem!important',
      textTransform: 'none',
      padding: '.3rem .6rem',
      borderRadius: '.25rem',
      marginRight: '10px',
      color: '#fff',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: '#77838f',
      },
    },
  }),
)

const PositionedPopper: React.FC<{ handleMenuClick: (value: number) => void }> = ({ handleMenuClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState<PopperPlacementType>()
  const classes = useStyles()

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
  }
  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleViewInput = (value: any) => {
    handleMenuClick(value)
  }

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade className={classes.list} {...TransitionProps} timeout={150}>
            <div className={classes.root}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={() => handleViewInput(0)} className={classes.item}>
                  Default View
                </ListItem>
                <ListItem button onClick={() => handleViewInput(1)} className={classes.item}>
                  UTF-8
                </ListItem>
                <ListItem
                  button
                  onClick={() => handleViewInput(2)}
                  className={classes.item}
                  style={{ color: '#3498db' }}
                >
                  Original
                </ListItem>
              </List>
            </div>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Button onClick={handleClick('bottom-start')} className={classes.decodebtn} variant="contained">
          View Input As &nbsp;<i className="fas fa-angle-down"></i>
        </Button>
      </ClickAwayListener>
    </div>
  )
}

export default PositionedPopper
