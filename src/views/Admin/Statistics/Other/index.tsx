import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { Box } from '@material-ui/core'
//components
import { getTokenInfo } from '../../../../store/actions/token'

function Other() {
  return (
    <div>
      Other page<Box>asdfasd</Box>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  success: state.token.status,
  manySucess: state.token.manySuccess,
  create: state.token.createSuccess,
  update: state.token.updateSuccess,
  getTokenInfos: state.token.getTokenInfos,
})
export default connect(mapStateToProps, { getTokenInfo })(Other)
