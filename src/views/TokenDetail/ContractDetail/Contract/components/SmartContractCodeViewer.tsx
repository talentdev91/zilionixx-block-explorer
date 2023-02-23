import React from 'react'
import copy from 'copy-text-to-clipboard'
import Box from '@material-ui/core/Box'
// import { useStyles } from '../../../styles'
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { getContractInfo } from '../../../../../store/actions/address'
import ContractMoreOptionsDropDown from './ContractMoreOptionsDropDown'
import Grid from '@material-ui/core/Grid'
import { ContractCodeBtn } from '../../../styles'
import { IconTooltip } from '../../../../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'

import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/webpack-resolver'

import { DeployedByteCodeSourceMapCode, swarmSource } from './CodeExample'

import { ContractABI } from './ContractABI'
import { ContractCreationCode } from './ContractCreationCode'
import { DeployedByteCodeSourceMap } from './DeployedByteCodeSourceMap'
import { SwarmSource } from './SwarmSource'
import { useStyles } from './style'
interface ContractProps {
  contractInfo: any
  loading: boolean
}

function SmartContractCodeViewer({ contractInfo, loading }: ContractProps) {
  const { address } = useParams<any>()
  // const code = 'Smart contract code'
  console.log('contractInfo on frontend', contractInfo)
  const [sourceCode, setSourceCode] = React.useState('')
  const [abi, setAbi] = React.useState('')
  const [creationCode, setCreationCode] = React.useState('')
  const classes = useStyles()
  const handleCopyCode = () => {
    copy(sourceCode)
    alert('Source code copied to clipboard')
  }
  React.useEffect(() => {
    if (!loading) {
      setSourceCode(contractInfo['sourceCode'])
      setAbi(contractInfo['abi'])
      setCreationCode(contractInfo['creationCode'])
    }
  }, [address, loading])

  return !loading ? (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              <i className="far fa-file-code"></i>
              &nbsp;
              <strong>Contract Source Code</strong>
              (Vyper language format)
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ float: 'right', display: 'flex' }}>
              <ContractMoreOptionsDropDown />
              &nbsp;
              <IconTooltip title="Copy source code to clipboard">
                <ContractCodeBtn onClick={handleCopyCode}>
                  <i className="far fa-copy"></i>
                </ContractCodeBtn>
              </IconTooltip>
              &nbsp;
              <IconTooltip title="Toggle fullscreen">
                <ContractCodeBtn>
                  <i className="fas fa-compress"></i>
                </ContractCodeBtn>
              </IconTooltip>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <AceEditor
          theme="github"
          // onChange={onChange}
          name="contractCodeViewer"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          width="100%"
          height="250px"
          value={sourceCode}
          readOnly={true}
          wrapEnabled={true}
          mode="java"
          showPrintMargin={false}
        />
      </Box>
      <Box mt={2}>
        <ContractABI abi={abi} />
      </Box>
      <Box mt={2}>
        <ContractCreationCode code={creationCode} />
      </Box>
      <Box mt={2}>
        <DeployedByteCodeSourceMap code={DeployedByteCodeSourceMapCode} />
      </Box>

      {/* <Box mt={2}>
        <SwarmSource code={swarmSource} />
      </Box> */}
    </Box>
  ) : (
    <div>Loading...</div>
  )
}

export default SmartContractCodeViewer
