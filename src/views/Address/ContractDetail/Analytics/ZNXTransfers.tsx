import React from 'react'
import { StyledPageContainer, StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import useStyles from './AnalyticStyle'
import ZNXtransfer from './Charts/ZNXtransfer'
import { tsToDate } from '../../../../common/utils'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

interface Props {
  address: any
  totalTokenTransfersCount: any
  transfersSent: any
  transfersReceived: any
}

const ZNXTransfers: React.FC<Props> = ({
  address,
  totalTokenTransfersCount,
  transfersSent,
  transfersReceived,
}: Props) => {
  const classes = useStyles()
  return (
    <StyledPageContainer>
      <StyledPagePager>
        <Card className={classes.root}>
          <div className={classes.znxtop}>
            <span>Time Series: ZNX Transfers</span>
            <span className={classes.znxtopright}>
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
          <ZNXtransfer address={address} />
        </Card>
      </StyledPagePager>
    </StyledPageContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  totalTokenTransfersCount: state.address.totalTokenTransfersCount,
  transfersSent: state.address.transfersSent,
  transfersReceived: state.address.transfersReceived,
})

export default connect(mapStateToProps)(ZNXTransfers)
