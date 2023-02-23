import React from 'react'
import Overview from './Overview'
import SimpleTabs from '../../../Resource/TopStatistics/components/Tab/SimpleTabs'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { GetTokenDetailAnalytics } from '../../../../store/actions/token'

interface Props {
  GetTokenDetailAnalytics: (address: any) => void
  address: any
  loading: boolean
}

function Analaytics({ GetTokenDetailAnalytics, address, loading }: Props) {
  const [content, setContent] = React.useState(<div></div>)
  React.useEffect(() => {
    GetTokenDetailAnalytics(address)
    if (!loading) {
      var analyticsContent = [
        {
          id: nanoid(),
          children: <Overview address={address} />,
          label: 'Token Contract Overview',
          index: 0,
          suburl: 'analytics',
        },
      ]
      var analyticsTabContent = <SimpleTabs val={val} tabs={analyticsContent} />

      setContent(analyticsTabContent)
    } else {
      setContent(<div>Loading...</div>)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  var val = 0

  return <div>{content}</div>
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
})

export default connect(mapStateToProps, { GetTokenDetailAnalytics })(Analaytics)
