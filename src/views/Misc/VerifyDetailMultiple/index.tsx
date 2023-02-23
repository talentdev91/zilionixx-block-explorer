import React from 'react'
import Divider from '@material-ui/core/Divider'

import ContractSourceCode from './ContractSourceCode'
import useStyles from './styles'

const VerifyDetailMultiple: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <p className={classes.title}>Verify & Publish Contract Source Code</p>
        <div className={classes.subtitle}>
          <small className={classes.subMultiTitle}>Compiler Type: SOLIDITY MULTI-PART VERIFIER (IMPORTS)</small>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.description}>
          <span className={classes.info}>Info:</span>
          <span className={classes.info1}>
            This is an <b>experimental</b> source code verifier which supports verification of <b>multi-part solidity files</b> (imports).
          </span>
        </div>
        <ContractSourceCode />
      </div>
    </div>
  )
}

export default VerifyDetailMultiple
