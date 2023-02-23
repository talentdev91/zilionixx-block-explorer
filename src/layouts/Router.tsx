/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
// creates a beautiful scrollbar
import 'perfect-scrollbar/css/perfect-scrollbar.css'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import PrivateRoute from './PrivateRoute'

// core components
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../views/Home/Home'
import TopAccounts from '../views/Blockchain/TopAccounts'
import TopStatistics from '../views/Resource/TopStatistics'
import Login from '../views/Auth'
import SignUp from '../views/Auth/SignUp'
import Forgot from '../views/Auth/ForgotPass'
import Chart from '../views/Resource/Chart'
import TxChart from '../views/Resource/Chart/daily-transaction'
import Erc20Chart from '../views/Resource/Chart/daily-token'
import Address from '../views/Resource/Chart/address'
import BlockSize from '../views/Resource/Chart/blocksize'
import BlockTime from '../views/Resource/Chart/blocktime'
import GasPrice from '../views/Resource/Chart/gasprice'
import GasUsed from '../views/Resource/Chart/gasused'
import Blocks from '../views/Resource/Chart/blocks'
import Pendingtx from '../views/Resource/Chart/pendingtx'
import Transactionfee from '../views/Resource/Chart/transactionfee'
import NetUtil from '../views/Resource/Chart/networkutilization'
import Verified from '../views/Resource/Chart/verified-contracts'
import Validator from '../views/Staking/Validators'
import Epochs from '../views/Staking/Epochs'
import EpochDetail from '../views/Staking/Epochs/EpochDetail'
import TokenApprovals from '../views/Misc/TokenApprovals'
import VerifyContract from '../views/Misc/VerifyContract'
import ByteToOpcode from '../views/Misc/ByteToOpcode'
import PushTx from '../views/Misc/PushTx'
import Vyper from '../views/Misc/Vyper'
import Apis from '../views/Misc/Apis'
import Txns from '../views/Blockchain/Txns'
import VerifiedContract from '../views/Blockchain/VerifiedContract'
import ERC20TopTokens from '../views/Tokens/ERC20TopTokens'
import ERC721Transfer from '../views/Tokens/ERC721Transfer'
import ERC20Transfer from '../views/Tokens/ERC20Transfer'
import ERC721TopTokens from '../views/Tokens/ERC721TopTokens'
import TokenCheckTool from '../views/TokenDetail/Tokencheck-tool'
import ContractIntenalTxns from '../views/Blockchain/ContractIntenalTxns'
import PendingTransactions from '../views/Blockchain/PendingTransactions'
import TxsBlocks from '../views/Blockchain/Blocks'
import TransactionDetails from '../views/TransactionDetails'
import Blockdetail from '../views/Blockchain/Blocks/BlockDetail'
import Account from '../views/Address'
import VerifyDetailSingle from '../views/Misc/VerifyDetailSingle'
import VerifyDetailMultiple from '../views/Misc/VerifyDetailMultiple'
import VerifyDetailStandard from '../views/Misc/VerifyDetailStandard'
import TokenDetail from '../views/TokenDetail'
import Accountanyswap from '../views/Accounts/Anyswap'
import Tokenanyswap from '../views/Accounts/Tokenanyswap'
import Tokencontract from '../views/Accounts/Tokencontract'
import TxTrackercon from '../views/Accounts/TxTrackContract'
import TokenHolding from '../views/TokenHolding'
import TokenHolderChart from '../views/TokenDetail/ContractDetail/Holders/HolderChart'
import Error from '../views/Error'

import Search from '../views/Error/search'

import AdminAccount from '../views/Admin/Account'
import AdminToken from '../views/Admin/Token'
import AdminStatistics from '../views/Admin/Statistics'
import AdminFeedback from '../views/Admin/Feedback'
import AdminAdvertise from '../views/Admin/Advertise'
import AdminTokenInfo from '../views/Admin/Token/TokenInfo'
import ContactUs from '../views/ContactUs'
import Profile from '../views/Auth/Profile'
import Confirm from '../views/Auth/ConfirmEmail'
import PaypalApi from '../views/Auth/PaypalApi'
import TokenInfoForm from '../views/TokenDetail/tokenInfo'
import dashboardStyle from '../assets/jss/material-dashboard-react/layouts/dashboardStyle'

import TermsService from '../views/Footer/TermsService'
import BalanceChecker from '../views/Other/BalanceChecker'

import { SetCurrentUser } from '../store/actions/action.types'
import image from '../assets/img/sidebar-2.jpg'
import setAuthToken from '../utils/setAuthToken'
import { logoutUser } from '../store/actions/auth'
import jwt_decode from 'jwt-decode'
import store from '../store/configureStore'

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch({
    type: 'SET_CURRENT_USER',
    payload: {
      user: decoded,
    },
  } as SetCurrentUser)
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = '/'
  }
}

const switchRoutes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/tx/:transaction" render={(props) => <TransactionDetails {...props} />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/forgot" component={Forgot} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/chart/tx" component={TxChart} />
      <Route exact path="/chart/erc20txns" component={Erc20Chart} />
      <Route exact path="/chart/address" component={Address} />
      <Route exact path="/chart/blocksize" component={BlockSize} />
      <Route exact path="/chart/blocktime" component={BlockTime} />
      <Route exact path="/chart/gasprice" component={GasPrice} />
      <Route exact path="/chart/gasused" component={GasUsed} />
      <Route exact path="/chart/blocks" component={Blocks} />
      <Route exact path="/chart/pendingtx" component={Pendingtx} />
      <Route exact path="/chart/transactionfee" component={Transactionfee} />
      <Route exact path="/chart/networkutilization" component={NetUtil} />
      <Route exact path="/chart/verified-contracts" component={Verified} />
      <Route exact path="/validators" component={Validator} />
      <Route exact path="/epochs" component={Epochs} />
      <Route exact path="/epoch/:epoch" component={EpochDetail} />
      <Route exact path="/topstat" component={TopStatistics} />
      <Route exact path="/accounts" component={TopAccounts} />
      <Route exact path="/txs/:blocknumber" component={Txns} />
      <Route exact path="/tokens" component={ERC20TopTokens} />
      <Route exact path="/contractVerified" component={VerifiedContract} />
      <Route exact path="/verifyContract-solc" component={VerifyDetailSingle} />
      <Route exact path="/verifyContract-solc-multiple" component={VerifyDetailMultiple} />
      <Route exact path="/verifyContract-solc-json" component={VerifyDetailStandard} />
      <Route exact path="/tokenstxns" component={ERC20Transfer} />
      <Route exact path="/tokentxns-nft" component={ERC721Transfer} />
      <Route exact path="/tokens-nft" component={ERC721TopTokens} />
      <Route exact path="/tokencheck-tool/:address" component={TokenCheckTool} />
      <Route exact path="/tsxInternal" component={ContractIntenalTxns} />
      <Route exact path="/txsPending" component={PendingTransactions} />
      <Route path="/verifyContract" component={VerifyContract} />
      <Route path="/opcode-tool" component={ByteToOpcode} />
      <Route path="/pushTx" component={PushTx} />
      <Route path="/vyper" component={Vyper} />
      <Route path="/apis" component={Apis} />
      <Route path="/tokenapprovalchecker" component={TokenApprovals} />
      <Route exact path="/block" component={TxsBlocks} />
      <Route exact path="/block/:block" component={Blockdetail} />
      <Route exact path="/address/:address" component={Account} />
      <Route exact path="/token/:tokenAddress" component={TokenDetail} />
      <Route exact path="/token/tokenholderchart/:tokenAddress" component={TokenHolderChart} />
      <Route exact path="/tokenholding" component={TokenHolding} />

      <Route exact path="/accounts/label/anyswap" component={Accountanyswap} />
      <Route exact path="/tokens/label/anyswap" component={Tokenanyswap} />
      <Route exact path="/accounts/label/token-contract" component={Tokencontract} />
      <Route exact path="/tokens/label/token-contract" component={TxTrackercon} />
      <Route exact path="/search" component={Search} />

      <Route exact path="/terms" component={TermsService} />
      <Route exact path="/balancecheck-tool" component={BalanceChecker} />

      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/confirmemail/:email/:id" component={Confirm} />
      <Route exact path="/token/:address/viewform" component={TokenInfoForm} />

      <PrivateRoute exact path="/admin" component={AdminAccount} />
      <PrivateRoute exact path="/admin/token" component={AdminToken} />
      <PrivateRoute exact path="/admin/token/tokenInfo/:address" component={AdminTokenInfo} />
      <PrivateRoute exact path="/admin/statistics" component={AdminStatistics} />
      <PrivateRoute exact path="/admin/feedback" component={AdminFeedback} />
      <PrivateRoute exact path="/admin/advertise" component={AdminAdvertise} />
      <PrivateRoute exact path="/myaccount" component={() => <Profile index={0} />} />
      <PrivateRoute exact path="/myaddress" component={() => <Profile index={1} />} />
      <PrivateRoute exact path="/myaddress_modify" component={() => <Profile index={1} />} />
      <PrivateRoute exact path="/mynotes_tx" component={() => <Profile index={2} />} />
      <PrivateRoute exact path="/mynotes_address" component={() => <Profile index={3} />} />
      <PrivateRoute exact path="/mytokenignore" component={() => <Profile index={4} />} />
      <PrivateRoute exact path="/myapikey" component={() => <Profile index={5} />} />
      <PrivateRoute exact path="/myverify_address" component={() => <Profile index={6} />} />
      <PrivateRoute exact path="/mycustomabi" component={() => <Profile index={7} />} />
      <PrivateRoute exact path="/api" component={PaypalApi} />

      <Route path="*" component={Error}></Route>
      <Route path="/error" component={Error}></Route>
    </Switch>
  </div>
)
interface Props {
  classes: any
}

interface State {
  image: string
  color: string
  hasImage: boolean
  fixedClasses: string
  mobileOpen: boolean
}

class Dashboard extends React.Component<Props, State> {
  refs: any
  constructor(props: Props) {
    super(props)
    this.state = {
      image: image,
      color: 'blue',
      hasImage: true,
      fixedClasses: 'dropdown show',
      mobileOpen: false,
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction)
  }

  render() {
    const { classes } = this.props
    return (
      <>
        <Router>
          <div
            style={{
              minHeight: '100vh',
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: `${localStorage.appTheme === 'darkTheme' ? '#252525' : '#F8F9FA'}`,
            }}
          >
            <Header />
            <Box>{switchRoutes}</Box>
          </div>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withStyles(dashboardStyle)(Dashboard)
