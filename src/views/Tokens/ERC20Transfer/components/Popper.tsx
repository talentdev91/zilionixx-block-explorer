import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Popper, { PopperPlacementType } from '@material-ui/core/Popper'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Fade from '@material-ui/core/Fade'
import Divider from '@material-ui/core/Divider'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { StyledTextOverflow1 } from '../TableStyle'
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
      color: theme.palette.text.hint,
      backgroundColor: theme.palette.primary.main,
    },
    title: {
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: '1rem',
      display: 'block',
    },
    subtitle: {
      fontSize: '.8rem',
      fontWeight: 550,
      lineHeight: '1.8rem',
    },
    btn: {
      fontSize: '.8rem',
      fontWeight: 550,
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
      borderRadius: '0.35rem',
    },
    info: {
      fontSize: '.8rem',
      fontWeight: 400,
      color: theme.typography.body1.color,
      display: 'flex',
      lineHeight: '1.2rem',
    },
    infoText: {
      fontSize: '.8rem',
      fontWeight: 400,
      color: '#6c757e',
    },
    link: {
      color: theme.palette.info.main,
      fontSize: '.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      maxWidth: 171,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.info.dark,
      },
    },
    divider: {
      marginTop: 8,
      marginBottom: 8,
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
                          Fail
                        </span>
                      )}
                      <span className={classes.infoText}> ({row.rowInfo.blockconfirm} Block Confirm)</span>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <Grid item>
                        <span className={classes.subtitle}>Token Transfer: </span>
                      </Grid>
                      <Grid item>
                        <span className={classes.info}>
                          {row.rowInfo.value / Math.pow(10, 18)}&nbsp;
                          <Link href={`/tx/${row.rowInfo.token}`} className={classes.link}>
                            {row.rowInfo.token}
                          </Link>
                        </span>
                        <span className={classes.info}>
                          From&nbsp;
                          <Link href={`/tx/${row.rowInfo.from}`} className={classes.link}>
                            <StyledTextOverflow1>{row.rowInfo.from}</StyledTextOverflow1>
                          </Link>
                          To&nbsp;
                          <Link href={`/tx/${row.rowInfo.to}`} className={classes.link}>
                            <StyledTextOverflow1>{row.rowInfo.to}</StyledTextOverflow1>
                          </Link>
                        </span>
                        <span className={classes.info}>Click on "see more details" below or txn hash to view more</span>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item>
                      <Grid item>
                        <span className={classes.subtitle}>Transaction Fee:</span>
                      </Grid>
                      <Grid item>
                        {row.rowInfo.gasused ? (
                          <span className={classes.info}>
                            {(row.rowInfo.gasused * row.rowInfo.gasprice) / Math.pow(10, 18)}
                          </span>
                        ) : (
                          <span className={classes.info}>
                            {(row.rowInfo.gas * row.rowInfo.gasprice) / Math.pow(10, 18)}
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
                        {row.rowInfo.gasused} Gas Used From {row.rowInfo.gas}Gas Limit @ {row.rowInfo.gasprice} ZNX (
                        {row.rowInfo.gasused / Math.pow(10, 9)} Gwei)
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
                        <span className={classes.infoText}> &nbsp; (in the position)</span>
                      </span>
                    </Grid>
                    <Divider className={classes.divider} />
                  </Grid>
                  <Grid item xs={12}>
                    <Link href={`/tx/${row.rowInfo.hash}`} className={classes.link}>
                      <span className={classes.btn}>See more details</span>
                      &nbsp;<i className="fas fa-arrow-right"></i>
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
