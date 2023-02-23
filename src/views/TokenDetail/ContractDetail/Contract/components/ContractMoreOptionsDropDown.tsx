import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import { useStyles } from '../../../styles'
import Button from '@material-ui/core/Button'

import SendIcon from '@material-ui/icons/Send'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

export default function DropDownMenu() {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const classes = useStyles()

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
        className={classes.smartContractBtn}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        ref={anchorRef}
        onClick={handleToggle}
        size="small"
      >
        More Options&nbsp;
        <i className="fas fa-angle-down"></i>
      </Button>
      <Popper
        open={open}
        placement="bottom-end"
        style={{ zIndex: 9999 }}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={handleClick}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                  </MenuItem>
                  <MenuItem onClick={handleClick}>
                    <ListItemIcon>
                      <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
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
