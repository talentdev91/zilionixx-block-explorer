import React from 'react'
import { StyledPageContainer, StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import useStyles from './AnalyticStyle'
import Token from './Charts/Token'
import { tsToDate } from '../../../../common/utils'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

interface Props {
  address: any
  totalTokenTransfersCount: any
  tokenContractsCount: any
  outBoundCount: any
  inBoundCount: any
  uniqueAddressSent: any
  uniqueAddressReceived: any
}

const TokenTransfers: React.FC<Props> = ({ address, totalTokenTransfersCount }) => {
  const classes = useStyles()
  return (
    <StyledPageContainer>
      <StyledPagePager>
        <Card className={classes.root}>
          <div className={classes.znxtop}>
            <span>Time Series: Address Token Transfers</span>
            <span className={classes.znxtopright}>
              {' '}
              {totalTokenTransfersCount.length > 0 ? (
                <>
                  {tsToDate(totalTokenTransfersCount[0][0])} to{' '}
                  {tsToDate(totalTokenTransfersCount[totalTokenTransfersCount.length - 1][0])}
                </>
              ) : (
                ''
              )}
            </span>
          </div>
          <Divider />
          <Token address={address} />
        </Card>
      </StyledPagePager>
    </StyledPageContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  totalTokenTransfersCount: state.address.totalTokenTransfersCount,
  tokenContractsCount: state.address.tokenContractsCount,
  outBoundCount: state.address.outBoundCount,
  inBoundCount: state.address.inBoundCount,
  uniqueAddressSent: state.address.uniqueAddressSent,
  uniqueAddressReceived: state.address.uniqueAddressReceived,
})

export default connect(mapStateToProps)(TokenTransfers)
