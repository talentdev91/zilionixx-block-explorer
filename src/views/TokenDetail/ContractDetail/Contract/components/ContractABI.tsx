import React from 'react'
import { CodePaper, ContractCodeBtn } from '../../../styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconTooltip } from '../../../../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'
import ExportAllDropDown from './ExportAllDropDown'
import copy from 'copy-text-to-clipboard'

interface AbiProps {
  abi: string
}

export const ContractABI: React.FC<AbiProps> = ({ abi }) => {
  const handleCopyCode = () => {
    copy(abi)
    alert('Source code copied to clipboard')
  }

  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              <i className="fas fa-tasks"></i>
              &nbsp;
              <strong>Contract ABI</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={{ float: 'right', display: 'flex' }}>
              <ExportAllDropDown />
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
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <CodePaper variant="outlined">
          <code>{abi}</code>
        </CodePaper>
      </Box>
    </Box>
  )
}
