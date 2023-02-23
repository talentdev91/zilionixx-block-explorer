import React from 'react'
import { Paper } from '@material-ui/core'
import { nanoid } from 'nanoid'

import ParentTabs from '../../Resource/TopStatistics/components/Tab/ParentTabs'

//Real import goes here
import Transactions from '../ContractDetail/Transactions'
import { Comments } from '../ContractDetail/Comments'
import ValidatorDetail from './ValidatorDetail'
import { ERC20TokenTxns } from '../ContractDetail/ERC20TokenTxns'
import { ERC721TokenTxns } from '../ContractDetail/ERC721TokenTxns'
import { InternalTxns } from '../ContractDetail/InternalTxns'
import Events from '../ContractDetail/Events'
import Contract from '../ContractDetail/Contract'
import Analaytics from '../ContractDetail/Analytics'

import { useStyles } from '../styles'
import { StyledPageContainer } from '../../../Styles'

import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getAddressDetailInfo, getContractInfo } from '../../../store/actions/address'

import { ADDRESS_PAGE_TABS } from '../../../common/consts'
import { useParams } from 'react-router'

interface AccountProps {
  tabs: any
}

// Build contents for each tab based on Mockup data
function ContractDetail({ tabs }: AccountProps) {
  const classes = useStyles()
  const { address } = useParams<any>()

  var val = 0

  // var analyticsTabContent = <SimpleTabs val={val} tabs={analyticsContent} />
  var analyticsTabContent = <Analaytics address={address} />

  var transactionsTabContent = <Transactions />
  var commentsTabContent = <Comments />
  var erc20TokenTxnsTabContent = <ERC20TokenTxns />
  var erc721TokenTxnsTabContent = <ERC721TokenTxns />
  var validatorDetailTabContent = <ValidatorDetail />
  var internalTxnsTabContent = <InternalTxns />
  var eventsTabContent = <Events />

  var txnTab = {
    id: nanoid(),
    children: transactionsTabContent,
    label: 'Transactions',
    index: 0,
    suburl: [''],
  }

  var visibleTabContent = [txnTab]

  for (let i = 0; i < tabs.length; i++) {
    var index = i
    if (tabs[i] === ADDRESS_PAGE_TABS.INTERNAL_TXNS) {
      let internalTab = {
        id: nanoid(),
        children: internalTxnsTabContent,
        label: 'Internal Txns',
        index: index,
        suburl: ['internaltx'],
      }
      visibleTabContent.push(internalTab)
    }
    if (tabs[i] === ADDRESS_PAGE_TABS.ERC_20_TOKEN_TXNS) {
      let erc20TokenTxnsTab = {
        id: nanoid(),
        children: erc20TokenTxnsTabContent,
        label: 'ERC-20 Token Txns',
        index: index,
        suburl: ['tokentxnsErc20'],
      }
      visibleTabContent.push(erc20TokenTxnsTab)
    }
    if (tabs[i] === ADDRESS_PAGE_TABS.ERC_721_TOKEN_TXNS) {
      let erc721TokenTxnsTab = {
        id: nanoid(),
        children: erc721TokenTxnsTabContent,
        label: 'ERC-721 Token Txns',
        index: index,
        suburl: ['tokentxnsErc721'],
      }
      visibleTabContent.push(erc721TokenTxnsTab)
    }
    if (tabs[i] === ADDRESS_PAGE_TABS.CONTRACT) {
      let contractTab = {
        id: nanoid(),
        children: <Contract />,
        label: 'Contract',
        index: index,
        suburl: ['code', 'readContract', 'writeContract'],
      }
      visibleTabContent.push(contractTab)
    }
    if (tabs[i] === ADDRESS_PAGE_TABS.EVENTS) {
      let eventsTab = {
        id: nanoid(),
        children: eventsTabContent,
        label: 'Events',
        index: index,
        suburl: ['events'],
      }
      visibleTabContent.push(eventsTab)
    }

    if (tabs[i] === ADDRESS_PAGE_TABS.ANALYTICS) {
      let analyticsTab = {
        id: nanoid(),
        children: analyticsTabContent,
        label: 'Analytics',
        index: index,
        suburl: ['analytics', 'transactions', 'txnfees', 'ZNXtransfers', 'tokentransfers'],
      }
      visibleTabContent.push(analyticsTab)
    }

    // if (tabs[i] === ADDRESS_PAGE_TABS.COMMENTS) {
    //   let commentsTab = {
    //     id: nanoid(),
    //     children: commentsTabContent,
    //     label: 'Comments',
    //     index: index,
    //     suburl: ['comments'],
    //   }
    //   visibleTabContent.push(commentsTab)
    // }

    if (tabs[i] === ADDRESS_PAGE_TABS.VALIDATOR_DETAIL) {
      let validatorTab = {
        id: nanoid(),
        children: validatorDetailTabContent,
        label: 'Validator Detail',
        index: index,
        suburl: ['validatorinfo'],
      }
      visibleTabContent.push(validatorTab)
    }
  }
  return (
    // <ThemeProvider theme={contractDetailTheme}>
    <StyledPageContainer>
      <Paper variant="outlined" className={classes.infoCard} style={{ minHeight: '100%' }}>
        <ParentTabs val={val} tabs={visibleTabContent} />
      </Paper>
    </StyledPageContainer>
    // </ThemeProvider>
  )
}

const mapStateToProps = (state: AppState) => ({
  addressInfo: state.address.addressInfo,
  loading: state.address.loading,
  tabs: state.address.tabs,
  contractIsVerified: state.address.contractIsVerified,
  loadingContract: state.address.loadingContract,
})

export default connect(mapStateToProps, { getAddressDetailInfo, getContractInfo })(ContractDetail)
