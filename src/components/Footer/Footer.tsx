import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { StyledContainer } from '../StyledContainer'
import { StyledDarkTooltip } from '../../Styles'
import useStyles from './style'
import { CHAIN_INFO } from '../../common/consts'
import Metamask from './Metamask'
import { ThemeContext } from '../../theme/ThemeProvider'
interface Window {
  ethereum: any
}
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  margin-bottom: 4px;
  padding: 6px 12px;
`

const ColLeft = styled.div`
  text-align: left;
`

const ColRight = styled.div`
  text-align: right;
`
function Footer({ ethereum }: Window) {
  var classes = useStyles()
  const darkTheme = 'darkTheme'
  const lightTheme = 'lightTheme'
  const curThemeName = localStorage.getItem('appTheme') || lightTheme
  const setThemeName = React.useContext(ThemeContext)
  const [theme, setTheme] = React.useState(curThemeName)

  const handleToggleTheme = () => {
    if (theme === lightTheme) {
      setThemeName(darkTheme)

      setTheme(darkTheme)
    } else {
      setThemeName(lightTheme)
      setTheme(lightTheme)
    }
  }
  const addMetamask = async () => {
    console.log(window)
    let chainId = CHAIN_INFO.MAINNET.chainId
    let chainName = CHAIN_INFO.MAINNET.chainName
    let rpcUrl = CHAIN_INFO.MAINNET.rpcUrls
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `${chainId}` }],
        })
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  method: 'wallet_addEthereumChain',
                  params: [
                    {
                      chainName: 'Zilionixx Mainnet',
                      nativeCurrency: { name: 'ZNX Coin', symbol: 'ZNX', decimals: 18 },
                      chainId: '0x5A',
                      rpcUrls: ['http://52.74.43.98'],
                    },
                  ],
                },
              ],
            })
          } catch (addError) {
            // handle "add" error
            if (addError.code === -32602) {
              window.alert('Metamask current does not support Zilionixx chain.')
            }
          }
        }
        // handle other "switch" errors
      }
    } else {
      return {
        connectedStatus: false,
        status: '🦊 You must install Metamask into your browser: https://metamask.io/download.html',
      }
    }
  }
  return (
    <footer className={classes.footer}>
      <StyledContainer>
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '30px' }}>
              <span>
                <img src="/images/logo3.png" className={classes.logo} alt="validator" />
              </span>
              &nbsp;
              <span className={classes.powered}>Powered by Wonwin</span>
            </span>
            <br />
            <span className={classes.footertxt}>ZnxScan is a Block Explorer and Analytics Platform for Zilionixx</span>
            <br />
            <IconButton className={classes.iconButton1} onClick={addMetamask}>
              <Metamask style={{ width: '18px' }} />
              &nbsp; Add Zilionixx Network
            </IconButton>
            {/* <IconButton className={classes.iconButton1}>
              <i className="fa fa-cogs" /> &nbsp; Preferences
            </IconButton> */}
            <IconButton className={classes.iconButton} onClick={handleToggleTheme}>
              {theme === lightTheme ? <i className="fa fa-moon" /> : <i className="fas fa-sun"></i>}
            </IconButton>
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={12} className={classes.footergrid}>
            <span className={classes.footerSub}>Company</span>
            <Divider className={classes.divider} />
            {/* <Link to="/contactusadvertise" className={classes.link}>
              <p className={classes.footertxt}>Advertise</p>
            </Link>
            <Link to="/delegate" className={classes.link}>
              <p className={classes.footertxt}>Delegate to Zilionixx</p>
            </Link> */}
            <Link to="/contactus" className={classes.link}>
              <p className={classes.footertxt}>Contact Us</p>
            </Link>
            {/* <Link to="/brandassets" className={classes.link}>
              <p className={classes.footertxt}>Brand Assets</p>
            </Link>
            <Link to="/terms" className={classes.link}>
              <p className={classes.footertxt}>Terms of Service</p>
            </Link> */}
          </Grid>
          <Grid item lg={2} md={3} sm={3} xs={12} className={classes.community}>
            <span className={classes.footerSub}>Community</span>
            <Divider className={classes.divider} />
            <Link to="/apis" className={classes.link}>
              <p className={classes.footertxt}>API Documentation</p>
            </Link>
            {/* <Link to="" className={classes.link}>
              <p className={classes.footertxt}>Knowledge Base</p>
            </Link>
            <Link to="" className={classes.link}>
              <p className={classes.footertxt}>Network Status</p>
            </Link>
            <Link to="" className={classes.link}>
              <p className={classes.footertxt}>Learn ZNX</p>
            </Link> */}
          </Grid>
          <Grid item lg={3}>
            <img src="/images/freeMoney.png" alt="validator" className={classes.rightImg} />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Row>
          <ColLeft>
            <span style={{ fontSize: '12px' }}>ZnxScan © 2021 (ZNX-A1) | ⛏ Built by WinWin</span>
          </ColLeft>
          <ColRight>
            <StyledDarkTooltip title="Contact Us" arrow placement="top">
              <IconButton className={classes.iconMail}>
                <Link to={'/contactus'}>
                  <i className="far fa-envelope"></i>
                </Link>
              </IconButton>
            </StyledDarkTooltip>
            <StyledDarkTooltip title="Discode" arrow placement="top">
              <IconButton href="https://discord.gg/MeZhd92eqn" className={classes.iconMail}>
                <i className="fab fa-discord"></i>
              </IconButton>
            </StyledDarkTooltip>
            <StyledDarkTooltip title="Matrix" arrow placement="top">
              <IconButton href="https://matrix.to/#/#zilionixx:matrix.org" className={classes.iconMail}>
                <i className="fab fa-matrix">M</i>
              </IconButton>
            </StyledDarkTooltip>
          </ColRight>
        </Row>
      </StyledContainer>
    </footer>
  )
}

// Footer.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Footer
