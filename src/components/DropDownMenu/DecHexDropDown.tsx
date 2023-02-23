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
    minWidth: 50,
    marginLeft: 0,
    color: theme.typography.body2.color,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.main
  },
  small: {
    fontSize: 9,
  },
}))

interface TopicsDecodeProps {
  logIndex: number
  topicIndex: number
  topicsDecodeStatus: any
  setTopicsDecodeStatus: Function
}

export const DecHexDropDown: React.FC<TopicsDecodeProps> = ({
  logIndex,
  topicIndex,
  topicsDecodeStatus,
  setTopicsDecodeStatus,
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [isDecode, setIsDecode] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const handleClick = (newValue: any) => {
    // handle menu click here

    setOpen(false)
    setIsDecode(newValue)
    let tmpDecodeArray = topicsDecodeStatus

    if (tmpDecodeArray[logIndex][topicIndex] !== newValue) {
      tmpDecodeArray[logIndex][topicIndex] = newValue
      setTopicsDecodeStatus(tmpDecodeArray)
    }
  }

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.menuButton}
      >
        {isDecode ? <span className={classes.small}>Dec</span> : <span className={classes.small}>Hex</span>}
        &nbsp;&nbsp;
        <i className="fas fa-chevron-down" style={{ fontSize: 10 }}></i>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        style={{ zIndex: 999 }}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={() => handleClick(true)}>
                    <span style={{ fontSize: 12 }}>Decode</span>
                  </MenuItem>
                  <MenuItem onClick={() => handleClick(false)}>
                    <span style={{ fontSize: 12 }}>Hex</span>
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
