import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import IconButton from '@material-ui/core/IconButton'

import SendIcon from '@material-ui/icons/Send'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { useStyles } from '../styles'

export default function DropDownMenu() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: any) => {
    setOpen(false)
  }

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <div style={{ lineHeight: 1 }}>
      <IconButton
        style={{ padding: 0 }}
        className={classes.menuIconBox}
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MoreVertIcon className={classes.menuIcon} />
      </IconButton>
      <Popper open={open} placement="bottom-end" anchorEl={anchorRef.current} transition disablePortal>
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
