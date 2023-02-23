import React, { useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { connect, RootStateOrAny } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import { Divider, Avatar } from '@material-ui/core'

import { AppState } from '../../store/configureStore'
import { useStyles, StyledTooltip, StyledLink } from './styles'
import { StyledContainer } from '../../components/StyledContainer'
import DropDownMenu from './components/Popper'
import { getTokenDetailInfobyTokenAddress} from '../../store/actions/token'
import { numberFormat } from '../../common/utils'
import ContractDetail from './ContractDetail'
import copy from 'copy-text-to-clipboard'
import { TOKEN_TYPE } from '../../common/consts'

interface TokenDetailProps {
  getTokenDetailInfobyTokenAddress: (tokenAddress: any) => void
  tokenHolder: any
  transferCnt: any
  tokenName: any
  tokenSymbol: any
  tokenType: any
  tokenPrice: any
  totalSupply: any
  decimals: any
  profileInfo: any
  loading: boolean
}

function Account({
  getTokenDetailInfobyTokenAddress,
  tokenHolder,
  transferCnt,
  tokenName,
  tokenSymbol,
  tokenType,
  tokenPrice,
  totalSupply,
  decimals,
  profileInfo,
  loading,
}: TokenDetailProps) {
  const [copyAddress, setcopyAddress] = React.useState(true)
  const classes = useStyles()
  const { tokenAddress } = useParams<any>()

  const location = useLocation()
  const searchIndex = location.search
  const query = new URLSearchParams(searchIndex);
  const searchAddress = query.get('a')


  const handleCopyAddress = () => {
    copy(tokenAddress)
    setcopyAddress(!copyAddress)
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 1000)
    return () => clearTimeout(timer)
  }

  React.useEffect(() => {
    getTokenDetailInfobyTokenAddress(tokenAddress)
  }, [tokenAddress])

  const [isShown, setIsShown] = useState(false)

  return !loading ? (
    tokenName.length > 0 ? (
      <StyledContainer>
        <div className={classes.contractInfo}>
          <Avatar src={`/images/tokens/${tokenAddress}.png`} className={classes.tokenicon} alt="token icon" />
          &nbsp; Token &nbsp;
          <span className={classes.tokensubtitle}>
            {tokenName.map((name: any, key: any) => {
              return <span key={key}>{name.name}</span>
            })}
          </span>
        </div>
        <Divider className={classes.divider} />
        <div style={{ marginBottom: '15px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} style={{ display: 'grid' }}>
              <Card variant="outlined" className={classes.cardstyle}>
                <CardHeader
                  title={
                    <span>
                      <span className={classes.overview}>Overview</span>
                      <StyledTooltip title={tokenName[0].type + ' or Compatible token type'} arrow placement="top">
                        <span className={classes.suboverview}>{tokenName[0].type}</span>
                      </StyledTooltip>
                    </span>
                  }
                  className={classes.cardheader}
                />
                <Divider />
                <CardContent style={{ padding: '12px' }}>
                  <div>
                    {
                      tokenType === TOKEN_TYPE.erc20 ?
                      (
                        <div>
                          <Grid container>
                            <Grid item
                              style={{ width: '50%', marginTop: -7,
                                borderRight: `${
                                  localStorage.appTheme === 'darkTheme' ? '1px solid #323232' : '1px solid #e7eaf3'
                                }`,
                              }}
                            >
                              <StyledTooltip title="Price per Token" arrow placement="top">
                                <span className={classes.price}>PRICE</span>
                              </StyledTooltip>
                              <br />
                              <span>
                                <StyledTooltip title="$1.47" arrow placement="top">
                                  <span className={classes.pricenum}>${tokenPrice} </span>
                                </StyledTooltip>
                                <span className={classes.priceother}>
                                  @ 1.057554 ZNX<span style={{ color: '#00c9a7', fontSize: 11.2 }}> (+1.92%)</span>
                                </span>
                              </span>
                            </Grid>
                            <Grid item style={{ width: '50%', paddingLeft: '1.5rem', marginTop: -7 }}>
                              <span className={classes.price}>
                                FULLY DILUTED MARKET CAP&nbsp;
                                <StyledTooltip
                                  title="Calculated by multiplying the token Total Supply with the current market price per token"
                                  arrow
                                  placement="top"
                                >
                                  <i className="far fa-question-circle"></i>
                                </StyledTooltip>
                              </span>
                              <br />
                              <StyledTooltip title="Click to show Circulating Supply MarketCap" arrow placement="right">
                                <span className={classes.longprice}> $364852899.00</span>
                              </StyledTooltip>
                            </Grid>
                          </Grid>
                          <Divider style={{ marginTop: '4px', marginBottom: '.75rem' }} />
                        </div>
                      )
                      :
                      (
                        <></>
                      )
                    }
                    <div style={{ display: 'flex' }}>
                      <StyledTooltip title="Total Supply" arrow placement="top">
                        <span className={classes.commontxt}>Total Supply:</span>
                      </StyledTooltip>
                      <StyledTooltip title={totalSupply} arrow placement="top">
                        <span className={classes.pricenum}>
                          {totalSupply}&nbsp;{tokenSymbol}
                        </span>
                      </StyledTooltip>
                    </div>
                    <Divider style={{ marginTop: '.75rem', marginBottom: '.75rem' }} />
                    <div style={{ display: 'flex' }}>
                      <span className={classes.commontxt}>Holders:</span>
                      <span className={classes.pricenum}>{tokenHolder} addresses</span>
                    </div>
                    {
                      searchAddress && tokenType === TOKEN_TYPE.erc721 ?
                      (
                        <></>
                      )
                      :
                      (
                        <div>
                          <Divider style={{ marginTop: '.75rem', marginBottom: '.75rem' }} />
                          <div style={{ display: 'flex' }}>
                            <span className={classes.commontxt}>Transfers:</span>
                            <span className={classes.pricenum}>{transferCnt}</span>
                          </div>
                        </div>                     
                      )
                    }
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card variant="outlined" className={classes.cardstyle}>
                <CardHeader
                  title={
                    <span>
                      <span className={classes.overview}>Profile Summary</span>
                      <span style={{ float: 'right', display: 'flex' }}>
                        <StyledTooltip title="Reputation NEUTRAL" arrow placement="top">
                          <a href="#blank" className={classes.iconNeu}>
                            <i className="fas fa-meh btn-icon__inner"></i>
                          </a>
                        </StyledTooltip>
                        <StyledTooltip title="Blue Check Mark-Click for more info" arrow placement="top">
                          <a className={classes.iconNeu} href="#blank">
                            <i className="fas fa-check"></i>
                          </a>
                        </StyledTooltip>
                        <DropDownMenu address={tokenAddress} />
                      </span>
                    </span>
                  }
                  className={classes.cardheader}
                />
                <Divider />
                <CardContent style={{ padding: '12px' }}>
                  <div>
                    <div style={{ display: 'flex' }}>
                      <span className={classes.commontxt}>Contract:</span>
                      <StyledLink href={`/address/${tokenAddress}`}>
                        <span
                          className={classes.pricenum2}
                          onMouseEnter={() => setIsShown(true)}
                          onMouseLeave={() => setIsShown(false)}
                        >
                          {tokenAddress}
                        </span>
                      </StyledLink>
                      {isShown && (
                        <StyledTooltip title="Copy address" arrow placement="top">
                          <span
                            onClick={handleCopyAddress}
                            className={classes.copyIcon}
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                          >
                            {(copyAddress && <i className="far fa-copy"></i>) || (
                              <span>
                                <i className="fa fa-check mr-1"></i>
                              </span>
                            )}
                          </span>
                        </StyledTooltip>
                      )}
                    </div>
                    <Divider style={{ marginTop: '.75rem', marginBottom: '.75rem' }} />
                    {
                      tokenType === TOKEN_TYPE.erc20 ?
                      (
                        <div>
                          <div style={{ display: 'flex' }}>
                            <span className={classes.commontxt}>Decimals:</span>
                            <span className={classes.pricenum}>{decimals}</span>
                          </div>
                          <Divider style={{ marginTop: '.75rem', marginBottom: '.75rem' }} />
                        </div>
                      )
                      :
                      (
                        <></>
                      )
                    }
                    <div style={{ display: 'flex' }}>
                      <span className={classes.commontxt}>Official Site:</span>
                      {
                        profileInfo.officialSite && profileInfo.officialSite.length > 0 ?
                        (
                          <a href={profileInfo.officialSite} className={classes.alink}>
                            <span className={classes.pricenum2}>
                              {profileInfo.officialSite} &nbsp;<i className="fa fa-external-link-alt small ml-1"></i>
                            </span>
                          </a>
                        )
                        :
                        (
                          <></>
                        )
                      }
                    </div>
                    <Divider style={{ marginTop: '.75rem', marginBottom: '.75rem' }} />
                    <div style={{ display: 'flex' }}>
                      <span className={classes.commontxt}>Social Profiles:</span>
                      <span className={classes.pricenum}>
                        {
                          profileInfo.email && profileInfo.email.length > 0 ?
                          (
                            <StyledTooltip title={"Email: " + profileInfo.email} arrow placement="top">
                              <a href={profileInfo.email} className={classes.iconPack}>
                                <i className="fas fa-envelope"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.blog && profileInfo.blog.length > 0 ?
                          (
                            <StyledTooltip title={'Blog: \n' + profileInfo.blog} arrow placement="top">
                              <a href={profileInfo.blog} className={classes.iconPack}>
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.reddit && profileInfo.reddit.length > 0 ?
                          (
                            <StyledTooltip title={'Reddit: \n' + profileInfo.reddit} arrow placement="top">
                              <a href={profileInfo.reddit} className={classes.iconPack}>
                                <i className="fab fa-reddit-square"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.twitter && profileInfo.twitter.length > 0 ?
                          (
                            <StyledTooltip title={'Twitter: \n' + profileInfo.twitter} arrow placement="top">
                              <a href={profileInfo.twitter} className={classes.iconPack}>
                              <i className="fab fa-twitter"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.github && profileInfo.github.length > 0 ?
                          (
                            <StyledTooltip title={'Github: \n' + profileInfo.github} arrow placement="top">
                              <a href={profileInfo.github} className={classes.iconPack}>
                              <i className="fab fa-github"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.telegram && profileInfo.telegram.length > 0 ?
                          (
                            <StyledTooltip title={'Telegram: \n' + profileInfo.telegram} arrow placement="top">
                              <a href={profileInfo.telegram} className={classes.iconPack}>
                              <i className="fab fa-telegram"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.discord && profileInfo.discord.length > 0 ?
                          (
                            <StyledTooltip title={'Discord: \n' + profileInfo.discord} arrow placement="top">
                              <a href={profileInfo.discord} className={classes.iconPack}>
                                <i className="fab fa-discord"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.facebook && profileInfo.facebook.length > 0 ?
                          (
                            <StyledTooltip title={'Facebook: \n' + profileInfo.facebook} arrow placement="top">
                              <a href={profileInfo.facebook} className={classes.iconPack}>
                              <i className="fab fa-facebook"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.whitepaper && profileInfo.whitepaper.length > 0 ?
                          (
                            <StyledTooltip title={'Whitepaper: \n' + profileInfo.whitepaper} arrow placement="top">
                              <a href={profileInfo.whitepaper} className={classes.iconPack}>
                              <i className="fas fa-paper-plane"></i>
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.coinmarketcap && profileInfo.coinmarketcap.length > 0 ?
                          (
                            <StyledTooltip title={'Coinmarketcap: ' + tokenSymbol} arrow placement="top">
                              <a href={profileInfo.coinmarketcap} className={classes.iconPack}>
                              <img src="/images/Tokendetail/coinmark.svg" className={classes.tokenicon2} alt="price" />
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {
                          profileInfo.coingecko && profileInfo.coingecko.length > 0 ?
                          (
                            <StyledTooltip title={'CoinGecko: ' + tokenSymbol} arrow placement="top">
                              <a href={profileInfo.coingecko} className={classes.iconPack}>
                              <img src="/images/Tokendetail/coinlogo.svg" className={classes.tokenicon2} alt="price" />
                              </a>
                            </StyledTooltip>
                          )
                          :
                          (
                            <></>
                          )
                        }
                        {/* <StyledTooltip title="CoinMarketCap:bitcoin" arrow placement="top">
                          <a href="#blank" className={classes.iconPack}>
                            <img src="/images/Tokendetail/coinmark.svg" className={classes.tokenicon2} alt="price" />
                          </a>
                        </StyledTooltip>
                        <StyledTooltip title="CoinGecko:bitcoin" arrow placement="top">
                          <a href="#blank" className={classes.iconPack}>
                            <img src="/images/Tokendetail/coinlogo.svg" className={classes.tokenicon2} alt="price" />
                          </a>
                        </StyledTooltip> */}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            {/* <Card variant="outlined" className={classes.middlecard}>
            <Grid container style={{ display: 'flex', width: '100%' }}>
              <Grid item xs={12} md={4} style={{ borderRight: '1px solid #e7eaf3' }}>
                <span className={classes.subtitle2}>
                  <i className="fa fa-address-book mr-1 text-warning" style={{ color: '#db9a04' }}></i>FILTERED BY
                  TOKEN HOLDER (SpookySwap: Router)
                </span>
                <br />

                <StyledLink to="/txs" onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                  <StyledTooltip title="View address page" arrow placement="top">
                    <span className={classes.pricenum2}>0xf491e7b69e4244ad4002bc14e878a34207e38c29</span>
                  </StyledTooltip>
                  {isShown && (
                    <StyledTooltip title="Copy address" arrow placement="top">
                      <a href="#blank">
                        <i className="far fa-copy" style={{ color: '#545d66', marginLeft: 7 }}></i>
                      </a>
                    </StyledTooltip>
                  )}
                </StyledLink>
              </Grid>
              <Grid item xs={12} md={4} style={{ borderRight: '1px solid #e7eaf3', paddingLeft: '20px' }}>
                <span className={classes.price}>BALANCE</span>
                <br />
                <span style={{ fontSize: '.875rem' }}>0WZNX</span>
                <br />
              </Grid>
              <Grid item xs={12} md={4} style={{ paddingLeft: '20px' }}>
                <span className={classes.price}>VALUE</span>
                <br />
                <span style={{ fontSize: '.875rem' }}>$0.00</span>
              </Grid>
            </Grid>
          </Card> */}
          </Grid>
        </div>
        <ContractDetail />
      </StyledContainer>
    ) : (
      <div></div>
    )
  ) : (
    <div className={classes.root}>Loading...</div>
  )
}
const mapStateToProps = (state: AppState) => ({
  transferCnt: state.token.transferCnt,
  tokenHolder: state.token.holdersCnt,
  tokenName: state.token.tokenName,
  tokenSymbol: state.token.tokenSymbol,
  tokenType: state.token.tokenType,
  tokenPrice: state.price.TOKENPriceSuccessResponse,
  totalSupply: state.token.totalSupply,
  decimals: state.token.decimals,
  profileInfo: state.token.profileInfo,
  loading: state.token.loadingTokenDetail,
})

export default connect(mapStateToProps, { getTokenDetailInfobyTokenAddress })(Account)
