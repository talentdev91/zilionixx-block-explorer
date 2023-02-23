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
          <small className={classes.subStandardTitle}>Compiler Type: STANDARD JSON-INPUT</small>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.description}>
          <span className={classes.info}>Info:</span>
          <span className={classes.info1}>
            <b className={classes.link}>Standard Json-Input</b> is the recommended way to interface with the Solidity compiler especially for more complex and automated setups.
          </span>
        </div>
        <ContractSourceCode />
      </div>
    </div>
  )
}

export default VerifyDetailMultiple
