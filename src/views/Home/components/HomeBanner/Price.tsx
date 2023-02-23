import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider } from '@material-ui/core'
import Bluetool from './bluetooltip'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getZNXPrice, getBTCPrice } from '../../../../store/actions/price'
import { TOTAL_COIN_SUPPLY } from '../../../../config/config'
import { numberWithCommas } from '../../../../common/utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: '1.5rem',
      paddingLeft: '1.5rem',
      borderRight: `1px solid ${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
      lineHeight: 1,
      wordBreak: 'break-word',
      [theme.breakpoints.down('xs')]: {
        borderRight: 'none',
      },
    },
    '&a, a: hover': {
      textDecoration: 'none',
      color: 'blue',
      textDecorationColor: 'blue',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    divider: {
      backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#323232' : '#e7eaf3'}`,
      margin: '1.6rem 0 ',
    },
    img: {
      width: ' 1.75rem',
      height: '1.75rem',
      marginRight: '10px',
    },
    text1: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
      fontSize: '.76563rem',
      alignSelf: 'end',
    },
    text2: {
      fontSize: '.9375rem',
      color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#1e2022'}`,
      alignSelf: 'end',
      '&:hover': {
        color: '#3498db',
      },
    },
    text3: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
      fontSize: '.9375rem',
      marginLeft: '4px',
      alignSelf: 'end',
    },
    priceHigh: {
      fontSize: '80%',
      color: '#00c9a7!important',
      marginLeft: '4px',
      alignSelf: 'center',
    },
    priceLow: {
      fontSize: '80%',
      color: '#de4437!important',
      marginLeft: '4px',
      alignSelf: 'center',
    },
  }),
)

interface PriceProps {
  getZNXPrice: () => void
  getBTCPrice: () => void
  ZNXPriceLoading: boolean
  ZNXPriceError: string
  ZNXPrice: number
  ZNXPriceChange: string
  ZNXPriceDiff: number
  BTCPriceLoading: boolean
  BTCPriceError: string
  BTCPrice: number
}

function Price({
  getZNXPrice,
  getBTCPrice,
  ZNXPriceLoading,
  ZNXPriceError,
  ZNXPrice,
  ZNXPriceChange,
  ZNXPriceDiff,
  BTCPriceLoading,
  BTCPriceError,
  BTCPrice,
}: PriceProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getZNXPrice()
    getBTCPrice()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // React.useEffect(() => {
  //   console.log('ZNXPrice', ZNXPrice)
  //   console.log('BTCPrice', BTCPrice)
  // }, [ZNXPriceLoading, BTCPriceLoading])
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid>
          <img src="/images/Home/HomeBanner/price.png" className={classes.img} alt="price" />
        </Grid>

        <Grid>
          <Typography className={classes.text1}>ZNX Price</Typography>

          <Bluetool title="View Historical ZNX Price">
            <div style={{ display: 'flex', cursor: 'pointer' }}>
              <Typography className={classes.text2}>
                {!ZNXPriceLoading ? `$${Math.round(ZNXPrice * 1000) / 1000}` : <></>}
              </Typography>
              <Typography className={classes.text3}>
                {!BTCPriceLoading && !ZNXPriceLoading ? (
                  `@ ${Math.round((ZNXPrice / BTCPrice) * 10000000) / 10000000} BTC`
                ) : (
                  <></>
                )}
              </Typography>
              <Typography className={ZNXPriceDiff >= 0 ? classes.priceHigh : classes.priceLow}>
                {!ZNXPriceLoading ? ZNXPriceDiff > 0 ? `${ZNXPriceChange}` : `${ZNXPriceChange}` : <></>}
              </Typography>
            </div>
          </Bluetool>
        </Grid>
      </Grid>

      <Divider variant="middle" className={classes.divider} />

      <Grid container alignItems="center">
        <Grid>
          <img src="/images/Home/HomeBanner/market.svg" className={classes.img} alt="market" />
        </Grid>

        <Grid>
          <Typography className={classes.text1}>ZNX MARKET CAP ON ZNX</Typography>

          <Bluetool title="Market cap of ZNX on Zilionixx, click Learn more">
            <div style={{ display: 'flex', cursor: 'pointer' }}>
              <Typography className={classes.text2}>
                {!ZNXPriceLoading ? (
                  `$${numberWithCommas(Math.round(ZNXPrice * TOTAL_COIN_SUPPLY * 1000) / 1000)}`
                ) : (
                  <></>
                )}
              </Typography>
              <Typography className={classes.text3}>({numberWithCommas(TOTAL_COIN_SUPPLY)} ZNX)</Typography>
            </div>
          </Bluetool>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  ZNXPriceLoading: state.price.ZNXPriceLoading,
  ZNXPriceError: state.price.ZNXPriceError,
  ZNXPrice: state.price.ZNXPriceSuccessResponse,
  ZNXPriceChange: state.price.ZNXPriceChange,
  ZNXPriceDiff: state.price.ZNXPriceDiff,
  BTCPriceLoading: state.price.BTCPriceLoading,
  BTCPriceError: state.price.BTCPriceError,
  BTCPrice: state.price.BTCPriceSuccessResponse,
})

export default connect(mapStateToProps, { getZNXPrice, getBTCPrice })(Price)
