import React from 'react'
import { useStyles } from '../../styles'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp'
import { Typography } from '@material-ui/core'
import DialogProvider from '../../../../providers/DialogProvider'
import SolidityBugDialog from './components/Dialog'
import { StyledEllipsisTypography, StyledLink } from '../../../Resource/TopStatistics/components/CustomLink'
import { nanoid } from 'nanoid'
import { InfoRowsWithDivider } from './components/InfoRowsWithDivider'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SmartContractCodeViewer from './components/SmartContractCodeViewer'

import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getContractInfo } from '../../../../store/actions/address'

interface ContractProps {
  getContractInfo: (address: any) => void
  contractInfo: any
  loading: boolean
}

var contractInfoInit = [
  {
    id: nanoid(),
    key: 'Contract Name:',
    value: <strong>Vyper_contract</strong>,
  },
  {
    id: nanoid(),
    key: 'Compiler Version',
    value: <strong>vyper:0.2.11</strong>,
  },
]

var contractSettingsInit = [
  {
    id: nanoid(),
    key: 'Optimization Enabled:',
    value: <strong>N/A</strong>,
  },
  {
    id: nanoid(),
    key: 'Other Settings:',
    value: (
      <span>
        <strong>vyper:0.2.11</strong>
        <StyledLink href="contract-license-types" underline="none">
          license
        </StyledLink>
      </span>
    ),
  },
]
function Code({ getContractInfo, contractInfo, loading }: ContractProps) {
  const { address } = useParams<any>()

  const [contractInfoRows, setContractInfoRows] = React.useState(contractInfoInit)
  const [contractSettingsRows, setContractSettingsRows] = React.useState(contractInfoInit)
  const classes = useStyles()
  React.useEffect(() => {
    getContractInfo(address)
    if (!loading) {
      contractInfoInit[0].value = <strong>Solidity_contract</strong>
      contractInfoInit[1].value = <strong>{contractInfo.compiler}</strong>
      contractSettingsInit[0].value = (
        <strong>
          {contractInfo.optimization.toString()}
          {contractInfo.optimization ? contractInfo.optimizerRuns : ''}
        </strong>
      )
      contractSettingsInit[1].value = (
        <span>
          <strong>{contractInfo.compiler}</strong> &nbsp;
          <StyledLink href="contract-license-types" underline="none">
            {contractInfo.licenseType}
          </StyledLink>
        </span>
      )
      setContractInfoRows(contractInfoInit)
      setContractSettingsRows(contractSettingsInit)
    }
  }, [address, loading, getContractInfo])

  return !loading ? (
    <div>
      <div>
        <div className={classes.inlineAlignCenter}>
          <CheckCircleSharpIcon color="secondary" />
          <Typography variant="body1">Contract Source Code Verified</Typography>
          <Typography variant="body2">(Exact path)</Typography>
        </div>
        <div className={classes.pullRight}>
          <DialogProvider>
            <SolidityBugDialog />
          </DialogProvider>
        </div>
      </div>
      <div className={classes.inlineAlignCenter}>
        <Typography variant="body2">
          Note: This contract matches the <strong>deployed ByteCode</strong> of the Source Code for Contract
        </Typography>
        &nbsp;
        <StyledEllipsisTypography>
          <StyledLink noWrap href={'/address/' + contractInfo.address} underline="none">
            {contractInfo.address}
          </StyledLink>
        </StyledEllipsisTypography>
      </div>
      <Box mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InfoRowsWithDivider rows={contractInfoRows} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoRowsWithDivider rows={contractSettingsRows} />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <SmartContractCodeViewer contractInfo={contractInfo} loading={loading} />
      </Box>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

const mapStateToProps = (state: AppState) => ({
  contractInfo: state.address.contractInfo,
  loading: state.address.loadingContract,
})

export default connect(mapStateToProps, { getContractInfo })(Code)
