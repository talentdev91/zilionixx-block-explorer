import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getTopOverview } from '../../../store/actions/statistics'
import ParentTabs from './components/Tab/ParentTabs'
import Overview from './Overview'
import Transactions from './Transactions'
import Tokens from './Tokens'
import Network from './Network'

import { StyledContainer } from '../../../components/StyledContainer'
import useStyles from './style'

interface ViewStaticsProps {
  getTopOverview: () => void
  topvals: any
}

// Build contents for each tab based on Mockup data
function TopStatistics({ getTopOverview, topvals }: ViewStaticsProps) {
  const classes = useStyles()
  var val = 0
  // var parentTmp1 = <SimpleTabs val={val} tabs={overviewContent} />
  var parentTmp1 = <Overview />
  var parentTmp2 = <Transactions />
  // var parentTmp3 = <SimpleTabs val={val} tabs={tokenContent} />
  var parentTmp3 = <Tokens />
  var parentTmp4 = <Network />
  // var parentTmp4 = <SimpleTabs val={val} tabs={networkContent} />

  var parentTabContent = [
    {
      id: nanoid(),
      children: parentTmp1,
      label: 'Overview',
      index: 0,
      suburl: ['overview', 'overviewDay3', 'overviewDay7'],
    },
    {
      id: nanoid(),
      children: parentTmp2,
      label: 'Transactions',
      index: 1,
      suburl: ['transaction', 'transactionDay3', 'transactionDay7'],
    },
    {
      id: nanoid(),
      children: parentTmp3,
      label: 'Token',
      index: 2,
      suburl: ['token', 'tokenDay3', 'tokenDay7'],
    },
    {
      id: nanoid(),
      children: parentTmp4,
      label: 'Network',
      index: 3,
      suburl: ['network', 'networkDay3', 'networkDay7'],
    },
  ]
  return (
    // <ThemeProvider theme={theme}>
    <StyledContainer>
      <CssBaseline />
      <h1 className={classes.toptitle}>Top Statistics</h1>
      <div>
        <Paper variant="outlined" className={classes.root}>
          <ParentTabs val={val} tabs={parentTabContent} />
        </Paper>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  topvals: state.statistics.topvalues,
})

export default connect(mapStateToProps, { getTopOverview })(TopStatistics)
