import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import { nanoid } from 'nanoid'
import { useLocation, useParams } from 'react-router'
import { Grid, } from '@material-ui/core'
import copy from 'copy-text-to-clipboard'

import ParentTabs from './Tabs/ParentTabs'
import { TOKEN_TYPE } from '../../../common/consts'

//Real import goes here
import Transfers from './Transfers'
import Holders from './Holders'
import { Info } from './Info'
import { Exchange } from './Exchange'
import Contract from './Contract'
import Analaytics from '../ContractDetail/Analytics'

// import { Comments } from './Comments'

import { useStyles, StyledTooltip, StyledLink, StyledTextOverflow } from '../styles'
import { TOKEN_PAGE_TABS } from '../../../common/consts'

import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getAddressDetailInfo } from '../../../store/actions/address'

interface AccountProps {
  tabs: any
  totalSupply: any
  totalQuantity: any
  tokenSymbol: any
  tokenType: any
  tokenPrice: any
  znxPrice: any
}
// Build contents for each tab based on Mockup data
function ContractDetail({ tabs, totalSupply, totalQuantity, tokenSymbol, tokenType, tokenPrice, znxPrice }: AccountProps) {
  const classes = useStyles()
  const { tokenAddress } = useParams<any>()
  const [isShown, setIsShown] = useState(false)
  const [copyAddress, setcopyAddress] = useState(true)

  const location = useLocation()
  const searchIndex = location.search
  const query = new URLSearchParams(searchIndex);
  const searchAddress = query.get('a')

  var val = 0
  var TransfersTabContent = <Transfers />
  var holdersTabContent = <Holders />
  var infoTabContent = <Info />
  var exchangeTabContent = <Exchange />
  var analyticsTabContent = <Analaytics address={tokenAddress} />

  var transferTab = {
    id: nanoid(),
    children: TransfersTabContent,
    label: 'Transfers',
    index: 0,
    suburl: [''],
  }

  var visibleTabContent = [transferTab]
  for (let i = 0; i < tabs.length; i++) {

    if (tabs[i] === TOKEN_PAGE_TABS.HOLDERS) {
      let holdersTab = {
        id: nanoid(),
        children: holdersTabContent,
        label: 'Holders',
        index: i,
        suburl: ['holders'],
      }
      visibleTabContent.push(holdersTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.INFO) {
      let infoTab = {
        id: nanoid(),
        children: infoTabContent,
        label: 'Info',
        index: i,
        suburl: ['info'],
      }
      visibleTabContent.push(infoTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.INVENTORY) {
      let inventoryTab = {
        id: nanoid(),
        children: infoTabContent,
        label: 'Inventory',
        index: i,
        suburl: ['inventory'],
      }
      visibleTabContent.push(inventoryTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.EXCHANGE) {
      let exchangeTab = {
        id: nanoid(),
        children: exchangeTabContent,
        label: 'DEX Trades',
        index: i,
        suburl: ['tokenTrade'],
      }
      visibleTabContent.push(exchangeTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.CONTRACT) {
      let contractTab = {
        id: nanoid(),
        children: <Contract />,
        label: 'Contract',
        index: i,
        suburl: ['readContract', 'writeContract'],
      }
      visibleTabContent.push(contractTab)
    }
    if (tabs[i] === TOKEN_PAGE_TABS.ANALYTICS) {
      let analyticsTab = {
        id: nanoid(),
        children: analyticsTabContent,
        label: 'Analytics',
        index: i,
        suburl: ['analytics'],
      }
      visibleTabContent.push(analyticsTab)
    }

    // if (tabs[i] === TOKEN_PAGE_TABS.COMMENTS) {
    //   let commentsTab = {
    //     id: nanoid(),
    //     children: commentsTabContent,
    //     label: 'Comments',
    //     index: visibleTabContent.length,
    //     suburl: ['comments'],
    //   }
    //   visibleTabContent.push(commentsTab)
    // }
  }

  const handleCopyAddress = () => {
    copy(searchAddress)
    setcopyAddress(!copyAddress)
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 1000)
    return () => clearTimeout(timer)
  }

  return (
    <div>
      {
        searchAddress ?
        (
          searchAddress.length === 42 ?
          (
            tokenType === TOKEN_TYPE.erc20 ?
            (
              <div className={classes.searchTitle}>
                <Grid container className={classes.searchGrid}>
                  <Grid item xs={12} sm={4} className={classes.searchTitleHolder}>
                    <div className={classes.searchHolder}><i className="fas fa-address-book" style={ {color: '#db9a04'} }></i> FILTERED BY TOKEN HOLDER</div>
                    <div style={{display: 'flex'}}>
                      <StyledTooltip title="View Address Page" arrow placement="top">
                        <StyledLink href={`/address/${searchAddress}`} style={{width: '90%'}}>
                          <span className={classes.pricenum2} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                            <StyledTextOverflow>{searchAddress}</StyledTextOverflow>
                          </span>
                        </StyledLink>
                      </StyledTooltip>
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
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.searchTitleBalance}>
                    <div className={classes.searchBalance}>BALANCE</div>
                    <span className={classes.searchValue}> {totalQuantity}&nbsp;{tokenSymbol} </span>
                  </Grid>
                  <Grid item xs={12} sm={4} className={classes.searchTitleValue}>
                    <div className={classes.searchBalance}>VALUE</div>
                    <span className={classes.searchValue}> ${tokenPrice * totalQuantity} ( ~{tokenPrice * totalQuantity / znxPrice} ZNX) [{(totalQuantity / totalSupply) * 100}%] </span>
                  </Grid>
                </Grid>
              </div>
            )
            :
            (
              <div className={classes.searchTitle}>
                <Grid container className={classes.searchGrid}>
                  <Grid item xs={12} sm={6} className={classes.searchTitleHolderErc721}>
                    <div className={classes.searchHolder}><i className="fas fa-address-book" style={ {color: '#db9a04'} }></i> FILTERED BY TOKEN HOLDER</div>
                    <div style={{display: 'flex'}}>
                      <StyledTooltip title="View Address Page" arrow placement="top">
                        <StyledLink href={`/address/${searchAddress}`} style={{width: '90%'}}>
                          <span className={classes.pricenum2} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                            <StyledTextOverflow>{searchAddress}</StyledTextOverflow>
                          </span>
                        </StyledLink>
                      </StyledTooltip>
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
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.searchTitleBalanceErc721}>
                    <div className={classes.searchBalance}>BALANCE</div>
                    <span className={classes.searchValue}> {totalQuantity}&nbsp;{tokenSymbol} </span>
                  </Grid>
                </Grid>
              </div>
            )
          )
          :
          (
            <div className={classes.searchTitle}>
              <Grid container className={classes.searchGrid}>
                <Grid item xs={12} sm={12} className={classes.searchTitleTxn}>
                  <div className={classes.searchHolder}><i className="fas fa-exchange-alt"></i>&nbsp;FILTERED BY TOKEN TXN HASH</div>
                  <a href={`/tx/${searchAddress}`} className={classes.alink}> {searchAddress} </a>
                </Grid>
              </Grid>
            </div>
          )
        )
        :
        (
          <></>
        )
      }
      
      <Card variant="outlined" className={classes.tablestyle}>
        <ParentTabs val={val} tabs={visibleTabContent} />
      </Card>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  totalSupply: state.token.totalSupply,
  totalQuantity: state.token.totalQuantity,
  tokenSymbol: state.token.tokenSymbol,
  tokenType: state.token.tokenType,
  tabs: state.token.tabs,
  tokenPrice: state.price.TOKENPriceSuccessResponse,
  znxPrice: state.price.ZNXPriceSuccessResponse,
})

export default connect(mapStateToProps, { getAddressDetailInfo })(ContractDetail)
