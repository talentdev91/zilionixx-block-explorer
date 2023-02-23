import React from 'react'
import { useStyles } from './styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { verifySingleSolidity } from '../../../../../store/actions/misc'

//components
function VerifySourceOutput() {
  const classes = useStyles()

  return <div className={classes.root}>OUTPUT GOES HERE...</div>
}

const mapStateToProps = (state: AppState) => ({
  loading: state.misc.verifySoliditySingleContractLoading,
  error: state.misc.verifySoliditySingleContractError,
  req: state.misc.verifySoliditySingleContractRequest,
  rep: state.misc.verifySoliditySingleContractSuccessResponse,
})

export default connect(mapStateToProps, { verifySingleSolidity })(VerifySourceOutput)
