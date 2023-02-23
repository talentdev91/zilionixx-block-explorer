import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { isEmptyObject } from '../../../common/utils'
// material-ui
import { makeStyles, createStyles, styled } from '@material-ui/core/styles'
import { Grid, Paper, Tooltip, Button, TooltipProps, List, ListItem } from '@material-ui/core'
import Popover from '@material-ui/core/Popover'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CropFreeIcon from '@material-ui/icons/CropFree'
import { BootstrapInput } from '../styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    button: {
      width: '100%',
      backgroundColor: theme.palette.primary.dark,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #243846' : '1px solid #d5dae2'}`,
      boxShadow: 'none',
      height: 36,
      borderRadius: '.25rem',
      '&:hover': {
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.dark,
      },
      padding: '0 8px',
    },
    icon: {
      width: 12,
      height: 12,
    },
    btntxt: {
      color: theme.typography.body2.color,
      fontWeight: 400,
      fontSize: '90%',
      '&:hover': {
        color: theme.palette.info.main,
      }
    },
    tokenName: {
      fontSize: '.76563rem',
      color: theme.typography.body1.color,
      display: 'flex',
    },
    tokenName2: {
      fontSize: '.76563rem',
      color: theme.typography.body1.color,
    },
    gas: {
      fontSize: '.76563rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#8db0c5' : '#77838f'}`,
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
      width: 350,
      paddingLeft: 15,
      paddingRight: 15,
    },
    token: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#212121' : 'rgba(231,234,243,.5)'}`,
      // color: `${localStorage.appTheme === 'darkTheme' ? '#D9ECE6' : '#000'}`,
      borderRadius: '.25rem',
      marginTop: 9,
      width: '100%',
      paddingTop: 3,
      paddingBottom: 3,
    },
    right: {
      textAlign: 'right',
    },
    title: {
      fontSize: '.76563rem',
      color: theme.typography.body1.color,
      fontWeight: 600,
      paddingLeft: 5,
      justifyContent: 'flex-start',
    },
    sort: {
      verticalAlign: 'top',
      fontSize: '1.2rem',
      fontWeight: 600,
      float: 'right',
    },
    item: {
      borderBottom: `1px solid ${theme.palette.secondary.light}`,
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 3,
      paddingRight: 3,
      '&:hover': {
        backgroundColor: '#3498db',
        borderRadius: '.25rem',
        color: 'white!important',
      },
    },
    cnt: {
      color: 'white',
      backgroundColor: '#3498db',
      fontSize: '.75rem',
      fontWeight: 700,
      borderRadius: '.25rem',
      padding: '.25em .4em',
    },
    btnNum: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '.25em .4em',
      fontWeight: 700,
      borderRadius: '.25rem',
      fontSize: '.56rem',
      lineHeight: 1,
    },
    btnSide: {
      display: 'flex',
    },
    linkhover: {
      textDecorationLine: 'none',
      '&:hover': {
        color: 'white',
      },
    },
    buttonGridLeft: {
      textAlign: 'left',
      alignSelf: 'center',
    },
    buttonGridRight: {
      writingMode: 'vertical-rl',
    },
    buttonIcon: {
      fontSize: '14px',
      color: '#77838f',
    },
    tokenHoldingLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      backgroundColor: theme.palette.primary.light,
      border: `${localStorage.appTheme === 'darkTheme' ? '1px solid #243846' : '1px solid #d5dae2'}`,
      boxShadow: 'none',
      height: 36,
      borderRadius: '.25rem',
      color: theme.palette.primary.contrastText,
      fontSize: '.875rem',
      padding: '5px .6rem',
      marginLeft: 10,
      cursor: 'pointer',
      '&:hover': {
        color: `${localStorage.appTheme === 'darkTheme' ? '#3498db' : 'black'}`,
        boxShadow: 'none',
        backgroundColor: theme.palette.primary.dark,
      },
    },
  }),
)

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#3498db',
  width: '-webkit-fill-available',
  '&:hover': {
    color: '#2c80b4',
  },
})

const Darktooltip = makeStyles(() => ({
  arrow: {
    color: '#12161c',
  },
  tooltip: {
    maxWidth: 250,
    backgroundColor: '#12161c',
    color: 'white',
    textAlign: 'center',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '11px',
  },
}))

function StyledTooltip(props: TooltipProps) {
  const classes = Darktooltip()

  return <Tooltip arrow classes={classes} {...props} />
}

interface PopperPopupStateProps {
  addressInfo: any
}

function PopperPopupState({ addressInfo }: PopperPopupStateProps) {
  const classes = useStyles()
  const [query, setquery] = React.useState('')
  var result: any[] = []
  var erc20HoldingTokens = [],
    erc721HoldingTokens = []

  if (addressInfo) {
    var { holdingTokens } = addressInfo

    if (holdingTokens !== null && holdingTokens !== undefined) {
      for (let i = 0; i < holdingTokens.length; i++) {
        if (holdingTokens[i].type === 'ERC20') {
          holdingTokens[i].balance /= Math.pow(10, holdingTokens[i].decimals)
          erc20HoldingTokens.push(holdingTokens[i])
        } else {
          erc721HoldingTokens.push(holdingTokens[i])
        }
      }
    }

    if (query.length !== 0) {
      for (let i = 0; i < holdingTokens.length; i++) {
        let keys = holdingTokens[i].name.toLowerCase()
        if (keys.includes(query)) {
          result.push(holdingTokens[i])
        }
      }
    }
  }

  const handleChange = (e: any) => {
    setquery(e.target.value)
  }

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <div>
      <div className={classes.btnSide}>
        <Button className={classes.button} aria-describedby={id} variant="contained" onClick={handleClick}>
          <Grid container>
            <Grid item xs={10} className={classes.buttonGridLeft}>
              <span className={classes.btntxt}>$0.00</span> &nbsp;
              <StyledTooltip title="Token Contracts" placement="top-start" arrow>
                <span className={classes.btnNum}>
                  {!isEmptyObject(addressInfo) ? (holdingTokens ? holdingTokens.length : 0) : 0}
                </span>
              </StyledTooltip>
            </Grid>
            <Grid item xs={2} className={classes.buttonGridRight}>
              <ExpandMoreIcon className={classes.buttonIcon} />
            </Grid>
          </Grid>
        </Button>
        <StyledTooltip title="View expanded ERC-20 token holding" placement="top-start" arrow>
          <div style={{ display: 'flex' }}>
            <Link to="/tokenholding" className={classes.tokenHoldingLink}>
              <CropFreeIcon style={{ fontSize: '16px', fontWeight: 900 }} />
            </Link>
          </div>
        </StyledTooltip>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item xs={12}>
              <BootstrapInput onChange={handleChange} placeholder="Search for Token Name" />
            </Grid>
            <Grid item xs={12} className={classes.token}>
              <span className={classes.title}>
                <i className="fa fa-angle-right text-secondary" />
                ERC-20 Tokens (
                {!isEmptyObject(erc20HoldingTokens) ? (erc20HoldingTokens ? erc20HoldingTokens.length : '0') : '0'})
              </span>
              <span>
                <UnfoldMoreIcon className={classes.sort} />
              </span>
            </Grid>

            <Grid item xs={12}>
              <List>
                {!isEmptyObject(erc20HoldingTokens)
                  ? erc20HoldingTokens
                    ? (query.length > 0 ? result : erc20HoldingTokens).map((token: any, key: any) => (
                      <ListItem key={key} className={classes.item}>
                        <StyledLink to={`/token/${token.address}`} className={classes.linkhover}>
                          <Grid container>
                            <Grid item xs={12} sm={6}>
                              <span className={classes.tokenName}>
                                {/* <img
                                    src={`/images/tokens/${token.address}.png`}
                                    className={classes.icon}
                                    alt="token icon"
                                  /> */}
                                {token.name}({token.symbol})
                              </span>
                              <span className={classes.gas}>
                                {token.balance}&nbsp;{token.symbol}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.right}>
                              <span className={classes.tokenName2}>$0.04</span>
                              <br />
                              <span className={classes.gas}>@0000423432</span>
                            </Grid>
                          </Grid>
                        </StyledLink>
                      </ListItem>
                    ))
                    : ''
                  : ''}
              </List>
            </Grid>

            <Grid item xs={12} className={classes.token}>
              <span className={classes.title}>
                <i className="fa fa-angle-right text-secondary" />
                ERC-721 Tokens (
                {!isEmptyObject(erc721HoldingTokens) ? (erc721HoldingTokens ? erc721HoldingTokens.length : '0') : '0'})
              </span>
              <span>
                <UnfoldMoreIcon className={classes.sort} />
              </span>
            </Grid>

            <Grid item xs={12}>
              <List>
                {!isEmptyObject(erc721HoldingTokens)
                  ? erc721HoldingTokens
                    ? (query.length > 0 ? result : erc721HoldingTokens).map((token: any, key: any) => (
                      <ListItem key={key} className={classes.item}>
                        <StyledLink to={`/token/${token.address}`} className={classes.linkhover}>
                          <Grid container>
                            <Grid item xs={12} sm={6}>
                              <span className={classes.tokenName}>
                                {/* <img
                                    src={`/images/tokens/${token.address}.png`}
                                    className={classes.icon}
                                    alt="token icon"
                                  /> */}
                                {token.name} ({token.symbol})
                              </span>
                              <span className={classes.gas}>
                                {token.balance}&nbsp;{token.symbol}
                              </span>
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.right}>
                              <span className={classes.tokenName2}>$0.04</span>
                              <br />
                              <span className={classes.gas}>@0000423432</span>
                            </Grid>
                          </Grid>
                        </StyledLink>
                      </ListItem>
                    ))
                    : ''
                  : ''}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Popover>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  addressInfo: state.address.addressInfo,
})

export default connect(mapStateToProps)(PopperPopupState)
