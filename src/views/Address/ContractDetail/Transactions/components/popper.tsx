import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    buttonstyle: {
      minWidth: '28px',
      width: '28px',
      height: '28px',
      padding: '0',
      color: theme.palette.text.disabled,
      fontSize: '.71531rem',
      backgroundColor: 'rgba(119,131,143,.1)',
      '&:hover': {
        backgroundColor: '#77838f',
        boxShadow: '0 4px 11px rgb(119 131 143 / 35%)',
        color: '#fff',
      },
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
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText
    },
    item: {
      fontSize: '.76563rem',
      display: 'block',
      width: '100%',
      padding: '.375rem 1.5rem',
      clear: 'both',
      fontWeight: 400,
      textAlign: 'inherit',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      border: 0,
      '&:hover': {
        color: theme.palette.info.main
      }
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
interface PositionedPopperProps {
  address: string
}
export default function PositionedPopper({ address }: PositionedPopperProps) {
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
                <ListItem button className={classes.item}>
                  <a
                    href={`/txs?a=${address}`}
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="fas fa-circle"></i>
                    </span>
                    View Completed Txns
                  </a>
                </ListItem>
                <ListItem button className={classes.item}>
                  <a
                    href={`/txsPending?a=${address}&m=hf`}
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="far fa-circle"></i>
                    </span>
                    View Pending Txns
                  </a>
                </ListItem>
                <ListItem button className={classes.item}>

                  <span className={classes.icons}>
                    <i className="fas fa-exclamation-circle"></i>
                  </span>
                  View Failed Txns
                </ListItem>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button className={classes.item}>
                  <a
                    href={`/txs?a=a=${address}&f=2`}
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                    View Outgoing Txns
                  </a>
                </ListItem>
                <ListItem button className={classes.item}>
                  <a
                    href={`/txs?a=a=${address}&f=3`}
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="fas fa-arrow-left"></i>
                    </span>
                    View Incoming Txns
                  </a>
                </ListItem>
                <ListItem button className={classes.item}>
                  <a
                    href={`/txs?a=a=${address}&f=5`}
                    className={classes.submenuLink}
                  >
                    <span className={classes.icons}>
                      <i className="fas fa-newspaper"></i>
                    </span>
                    View Contract Creation
                  </a>
                </ListItem>
              </List>
            </div>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Button onClick={handleClick('bottom-end')} className={classes.buttonstyle}>
          <MoreVertIcon style={{ fontSize: '18px' }} />
        </Button>
      </ClickAwayListener>
    </div >
  )
}
