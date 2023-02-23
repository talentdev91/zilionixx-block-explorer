import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import Button from '@material-ui/core/Button'

import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    border: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#d5dae2'}`,
    borderRadius: '0.25rem',
    padding: 0,
    minWidth: 45,
    marginLeft: 0,
    color: theme.typography.body2.color,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.main
  }
}))

export default function TxLogMatchTopicDropDown(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleClick = () => {
    // handle menu click here

    setOpen(false)
  }

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.menuButton}
        disableRipple
      >
        <i className="fas fa-search-plus" style={{ fontSize: 10 }}></i>&nbsp;&nbsp;
        <i className="fas fa-chevron-down" style={{ fontSize: 10 }}></i>
      </Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClick}>
                    <span style={{ fontSize: 12 }}>Matches Topics[0]</span>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}
