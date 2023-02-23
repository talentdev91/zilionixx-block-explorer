import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { useStyles } from './popperstyle'

interface PopperProps {
  address: string
}
export default function PositionedPopper({ address }: PopperProps) {
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
  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <div className={classes.root}>
              <Link to={`/tokencheck-tool/${address}`} className={classes.linkitem}>
                <span className={classes.dropdownItem}>
                  <i className="fas fa-history"></i>&nbsp;&nbsp;Check previous token supply
                </span>
              </Link>
              <span className={classes.dropdownItem}>
                <i className="fas fa-wallet"></i>&nbsp;&nbsp;Add Token to Web3 Wallet
              </span>
              <Divider className={classes.divider} />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScS9R7T6q_k2D5nE2o-w8Ld8NDdZ7pEVzzi0P-YWfprF_3q1w/viewform"
                className={classes.linkitem}
              >
                <span className={classes.dropdownItem}>
                  <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Update Token Info
                </span>
              </a>
              <span className={classes.dropdownItem}>
                <i className="fas fa-user-tag"></i>&nbsp;&nbsp;Update Name Tag
              </span>
              <span className={classes.dropdownItem}>
                <i className="fas fa-tags"></i>&nbsp;&nbsp;Submit Label
              </span>
              <span className={classes.dropdownItem}>
                <i className="fas fa-flag"></i>&nbsp;&nbsp;Report/Flag Address
              </span>
            </div>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Button onClick={handleClick('bottom-end')} className={classes.buttonstyle}>
          <MoreVertIcon style={{ fontSize: '16px' }} />
        </Button>
      </ClickAwayListener>
    </div>
  )
}
