import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { StyledLink } from '../../../../Styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      fontSize: '0.8rem',
      padding: theme.spacing(1),
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.main,
      border: '1px solid lightgray',
      borderRadius: '5px',
    },
    buttonstyle: {
      minWidth: '19px',
      height: '19px',
      padding: '0',
      backgroundColor: theme.palette.primary.main,
    },
  }),
)

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [open, setOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState<PopperPlacementType>()
  const classes = useStyles()
  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleClick = (newPlacement: PopperPlacementType) => (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen((prev) => placement !== newPlacement || !prev)
    setPlacement(newPlacement)
  }

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <Paper>
              <StyledLink to="/chart/tx">
                <Typography className={classes.typography}>View Detailed Chart.</Typography>
              </StyledLink>
            </Paper>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Button onClick={handleClick('bottom-end')} className={classes.buttonstyle}>
          <i className="fas fa-ellipsis-v"></i>
        </Button>
      </ClickAwayListener>
    </div>
  )
}
