import React, { useState } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'

import { Link } from 'react-router-dom'
//material-ui components
import { makeStyles } from '@material-ui/core/styles'
import { Box, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
//components
import TopMenu from './components/TopMenu'
import TopMenuToggle from './components/TopMenuToggle'
import SearchBox from '../SearchBox/SearchBox'

import logo from '../../assets/images/logo.png'
import darklogo from '../../assets/images/darklogo.png'
//style
import {
  StyledAppBar,
  StyledToolbar,
  StyledTopbarBox,
  StyledLogoBox,
  StyledControlBox,
  StyledToggleBox,
  StyledZilionixxBox,
  StyledTopMenuBox,
  StyledToggleButtonBox,
  StyledSearchBox,
} from './TopmenuStyle'
import { getZNXPrice } from '../../store/actions/price'
import { connect } from 'react-redux'
import { AppState } from '../../store/configureStore'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2,
  },
  fab: {
    backgroundColor: '#2B5D7E',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#3498db',
    },
  },
  coinPriceLabel: {
    backgroundColor: theme.palette.secondary.dark,
  },
  logo: {
    width: '140px',
    marginRight: '.3rem',
    paddingTop: '0.33594rem',
    paddingBottom: '0.33594rem',
  },
  testnetMark: {
    marginTop: '1px',
    visibility: 'hidden',
  },
  toggleIconBtn: {
    padding: '8px',
  },
  badge: {
    backgroundColor: '#de4437',
    paddingRight: '.6em',
    paddingLeft: '.6em',
    borderRadius: '10rem',
    padding: '.25em .4em',
    fontSize: '75%',
    color: '#fff',
    fontWeight: 700,
  },
  priceChangeMinus: {
    color: '#de4437!important',
  },
  priceChangePlus: {
    color: '#00c9a7!important',
  },
}))

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
  getZNXPrice: () => void
  ZNXPriceLoading: boolean
  ZNXPriceError: string
  ZNXPrice: number
  ZNXPriceChange: number
  ZNXPriceDiff: string
}

// interface PriceProps {
//   getZNXPrice: () => void
//   ZNXPriceLoading: boolean
//   ZNXPriceError: string
//   ZNXPrice: number
//   ZNXPriceChange: number
// }

function ScrollTop({ children, window }: Props) {
  // const { children, window } = props
  const classes = useStyles()
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

function Topbar({
  getZNXPrice,
  ZNXPriceLoading,
  ZNXPriceError,
  ZNXPrice,
  ZNXPriceChange,
  ZNXPriceDiff,
  ...props
}: Props) {
  const classes = useStyles()

  const location = useLocation()

  const [open, setOpen] = useState(false)

  const handleToggleMenu = () => {
    const visiable = !open
    setOpen(visiable)
  }
  React.useEffect(() => {
    getZNXPrice()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTopbarBox>
          <StyledLogoBox>
            <Box display="flex">
              <Link to="/">
                {localStorage.appTheme ? (
                  <img
                    className={classes.logo}
                    src={localStorage.appTheme === 'lightTheme' ? logo : darklogo}
                    alt="logo"
                  />
                ) : (
                  <img className={classes.logo} src={logo} alt="logo" />
                )}
              </Link>
              <div className={classes.testnetMark}>
                <span className={classes.badge}>Testnet</span>
              </div>
            </Box>

            {location.pathname !== '/' ? (
              location.pathname !== '/home' ? (
                <StyledZilionixxBox>
                  <div>
                    <span>ZNX: {!ZNXPriceLoading ? `$${ZNXPrice}` : <div></div>}</span>&nbsp;
                    <span className={ZNXPriceDiff >= 0 ? classes.priceChangePlus : classes.priceChangeMinus}>
                      {!ZNXPriceLoading ? ZNXPriceDiff > 0 ? `${ZNXPriceChange}` : `${ZNXPriceChange}` : <></>}
                    </span>
                  </div>
                </StyledZilionixxBox>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            <StyledToggleButtonBox>
              <IconButton onClick={handleToggleMenu} className={classes.toggleIconBtn} aria-label="delete">
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </StyledToggleButtonBox>
          </StyledLogoBox>
          <StyledToggleBox>{open ? <TopMenuToggle /> : ''}</StyledToggleBox>
          <StyledControlBox>
            {location.pathname !== '/' ? (
              location.pathname !== '/home' ? (
                <StyledSearchBox mt={'0.5rem'}>
                  <SearchBox />
                </StyledSearchBox>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            <StyledTopMenuBox>
              <TopMenu />
            </StyledTopMenuBox>
          </StyledControlBox>
        </StyledTopbarBox>
      </StyledToolbar>
      <div id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab className={classes.fab} size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </StyledAppBar>
  )
}

const mapStateToProps = (state: AppState) => ({
  ZNXPriceLoading: state.price.ZNXPriceLoading,
  ZNXPriceError: state.price.ZNXPriceError,
  ZNXPrice: state.price.ZNXPriceSuccessResponse,
  ZNXPriceChange: state.price.ZNXPriceChange,
  ZNXPriceDiff: state.price.ZNXPriceDiff,
})

export default connect(mapStateToProps, { getZNXPrice })(Topbar)
