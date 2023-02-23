import React from 'react'
import Divider from '@material-ui/core/Divider'

import ContractSourceCode from './ContractSourceCode'
import useStyles from './styles'

const VerifyDetailSingle: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <p className={classes.title}>Verify & Publish Contract Source Code</p>
        <div className={classes.subtitle}>
          <span className={classes.subSingleTitle}>Compiler Type: SINGLE FILE / CONCATENANTED METHOD</span>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.description}>
          <span className={classes.info}>Info:</span>
          <span className={classes.info1}>
            A simple and structured interface for verifying smart contracts that fit in a single file
          </span>
        </div>
        <ContractSourceCode />
      </div>
    </div>
  )
}

export default VerifyDetailSingle
