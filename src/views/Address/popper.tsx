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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    buttonstyle: {
      minWidth: '21px',
      width: '21px',
      height: '21px',
      padding: '0',
      color: '#77838f',
      fontSize: '.71531rem',
      backgroundColor: 'rgba(119,131,143,.1)',
      '&:hover': {
        backgroundColor: '#77838f',
        boxShadow: '0 4px 11px rgb(119 131 143 / 35%)',
        color: '#fff',
      },
    },
    dropDownLink: {
      textDecoration: 'none',
    },
    root: {
      // width: '100%',
      maxWidth: 360,
      width: '200px',
      animationDuration: '300ms',
      marginTop: '.5rem',
      fontSize: '.76563rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      boxShadow: '0 2px 7px rgb(51 122 254 / 5%), 0 0 10px hsl(210deg 8% 46% / 10%)',
      border: '0 solid rgba(0,0,0,.15)',
      borderRadius: '.35rem',
      backgroundColor: theme.palette.primary.main,
    },
    item: {
      fontSize: '.76563rem',
      display: 'block',
      width: '100%',
      padding: '.375rem 1.5rem',
      clear: 'both',
      fontWeight: 400,
      color: `${localStorage.appTheme === 'darkTheme' ? '#D9ECE6' : '#000'}`,
      textAlign: 'inherit',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      border: 0,
      '&:hover': {
        color: theme.palette.info.main,
      },
    },
    icons: {
      marginRight: '.25rem!important',
    },
    submenuLink: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#D9ECE6' : '#000'}`,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.main,
      },
    },
  }),
)
interface PopperProps {
  privateNoteStatus: string
  handlePopper: (status: string) => void
  address: string
}
export default function PositionedPopper({ handlePopper, privateNoteStatus, address }: PopperProps) {
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
              <List component="nav" aria-label="main mailbox folders">
                {privateNoteStatus === 'login' ? (
                  <ListItem button className={classes.item} disabled>
                    <span className={classes.icons}>
                      <i className="far fa-sticky-note"></i>
                    </span>
                    View Private Note
                  </ListItem>
                ) : privateNoteStatus === 'create' ? (
                  <ListItem button className={classes.item} onClick={() => handlePopper('create')}>
                    <span className={classes.icons}>
                      <i className="far fa-sticky-note"></i>
                    </span>
                    View Private Note
                  </ListItem>
                ) : (
                  <ListItem button className={classes.item} onClick={() => handlePopper('update')}>
                    <span className={classes.icons}>
                      <i className="far fa-sticky-note"></i>
                    </span>
                    View Private Note
                  </ListItem>
                )}
                <ListItem button className={classes.item}>
                  <a href="/balancecheck-tool" className={classes.submenuLink}>
                    <span className={classes.icons}>
                      <i className="fas fa-history"></i>
                    </span>
                    Check Previous Balance
                  </a>
                </ListItem>
              </List>
              <Divider />

              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button className={classes.item} to={`/contactus?id=3&a=${address}`} component={Link}>
                  <span className={classes.icons}>
                    <i className="fas fa-user-tag"></i>
                  </span>
                  Update Name Tag
                </ListItem>
                <ListItem button className={classes.item} to={`/contactus?id=3&a=${address}`} component={Link}>
                  <span className={classes.icons}>
                    <i className="fas fa-tags"></i>
                  </span>
                  Submit Label
                </ListItem>

                <ListItem button className={classes.item}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSef32XXhg--yYLJRrMbP5Y_9Uxy03SYZx2IvbseLnpeXSBkCg/viewform"
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="fas fa-flag"></i>
                    </span>
                    Report/Flag Address
                  </a>
                </ListItem>
                <ListItem button className={classes.item}>
                  <a href="/tokenapprovalchecker" className={classes.submenuLink}>
                    <span className={classes.icons}>
                      <i className="fas fa-user-check"></i>
                    </span>
                    Token Approval
                  </a>
                </ListItem>
              </List>
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
