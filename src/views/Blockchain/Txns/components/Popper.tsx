import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    buttonstyle: {
      minWidth: '1.3125rem',
      height: '1.3125rem',
      padding: '0',
      backgroundColor: 'rgba(119,131,143,.1)',
      color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : 'inherit'}`,
      fontSize: '.65625rem',
      '&:hover': {
        backgroundColor: '#77838f',
        color: '#fff',
      },
    },
    root: {
      // width: '100%',
      maxWidth: 310,
      width: 310,
      animationDuration: '300ms',
      marginTop: '.5rem',
      //   fontSize: '.76563rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      border: '0 solid rgba(0,0,0,.15)',
      borderRadius: '.35rem',
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.hint,
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 400,
      marginBottom: '1rem',
      display: 'block',
    },
    subtitle: {
      fontSize: '.8rem',
      fontWeight: 400,
    },
    btn: {
      fontSize: '.8rem',
      fontWeight: 400,
      '& i': {
        fontWeight: 600,
      }
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
    main: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    transactionStyle: {
      wordWrap: 'break-word',
      fontSize: '14px',
    },
    successButton: {
      color: '#00c9a7',
      fontSize: '12px !important',
      borderRadius: '0.35rem',
      width: '90px',
    },
    failButton: {
      color: '#de4437',
      fontSize: '12px !important',
      padding: '0.4rem 0.7rem',
      borderRadius: '0.35rem',
    },
    info: {
      fontSize: '.8rem',
      fontWeight: 400,
      color: theme.typography.body1.color,
      lineHeight: 1.5,
    },
    infoText: {
      fontSize: '.8rem',
      fontWeight: 400,
      color: '#6c757e',
    },
    divider: {
      marginTop: 10,
      marginBottom: 10,
    },
    link: {
      color: theme.palette.info.main,
      lineHeight: 1.5,
      maxWidth: 171,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
  }),
)

export default function PositionedPopper(row: any) {
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
      <Popper open={open} anchorEl={anchorEl} placement="right" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={150}>
            <div className={classes.root}>
              <Grid container>
                <Grid item xs={11} className={classes.main}>
                  <Grid item xs={12}>
                    <span className={classes.title}>Additonal Info</span>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <span className={classes.subtitle}>Status:</span>
                    </Grid>
                    <Grid item>
                      {row.rowInfo.status ? (
                        <span className={classnames(classes.transactionStyle, classes.successButton)}>
                          <i className="fas fa-check-circle" />
                          &nbsp;Success
                        </span>
                      ) : (
                        <span className={classnames(classes.transactionStyle, classes.failButton)}>
                          <i className="fas fa-times-circle"></i>
                          &nbsp;Fail
                        </span>
                      )}
                      <span className={classes.infoText}>  ({row.confirm} Block Confirm)</span>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <Grid item>
                        <span className={classes.subtitle}>Transaction Fee:</span>
                      </Grid>
                      <Grid item>
                        {row.rowInfo.gasUsed ? (
                          <span className={classes.info}>
                            {(row.rowInfo.gasUsed * row.rowInfo.gasPrice) / Math.pow(10, 18)}
                          </span>
                        ) : (
                          <span className={classes.info}>
                            {(row.rowInfo.gas * row.rowInfo.gasPrice) / Math.pow(10, 18)}
                          </span>
                        )}
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <span className={classes.subtitle}>Gas Info:</span>
                    </Grid>
                    <Grid item>
                      <span className={classes.info}>
                        {row.rowInfo.gasUsed} Gas Used From {row.rowInfo.gas} Gas Limit @ {row.rowInfo.gasPrice} ZNX (
                        {row.rowInfo.gasUsed / Math.pow(10, 9)} Gwei)
                      </span>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <span className={classes.subtitle}>Nonce:</span>
                    </Grid>
                    <Grid item>
                      <span className={classes.info}>
                        {row.rowInfo.nonce}
                        <span className={classes.infoText}>  (in the position)</span>
                      </span>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Link className={classes.link} to={`/tx/${row.rowInfo.hash}`}>
                      <span className={classes.btn}>
                        See more details
                        &nbsp;<i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Button onClick={handleClick('bottom-end')} className={classes.buttonstyle}>
          <i className="far fa-question-circle btn-icon__inner" />
        </Button>
      </ClickAwayListener>
    </div>
  )
}
