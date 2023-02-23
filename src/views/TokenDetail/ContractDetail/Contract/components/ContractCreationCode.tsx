import React from 'react'
import copy from 'copy-text-to-clipboard'
import { CodePaper, ContractCreationCodeBtn } from '../../../styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconTooltip } from '../../../../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'
import { useStyles } from '../../../styles'

interface ContractCreationCodeProps {
  code: string
}

export const ContractCreationCode: React.FC<ContractCreationCodeProps> = ({ code }) => {
  const classes = useStyles()

  const handleCopyCode = () => {
    copy(code)
    alert('Source code copied to clipboard')
  }

  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
            <Typography variant="body2">
              <i className="fas fa-code"></i>
              &nbsp;
              <strong>Contract Creation Code</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box style={{ float: 'right', display: 'flex' }}>
              <IconTooltip title="Opens up the Runtime ByteCode Decompiler page">
                <ContractCreationCodeBtn onClick={handleCopyCode}>
                  Decompile Bytecode &nbsp;
                  <i className="fas fa-external-link-alt"></i>
                </ContractCreationCodeBtn>
              </IconTooltip>
              &nbsp;
              <ContractCreationCodeBtn>Switch To Opcodes View</ContractCreationCodeBtn>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={2}>
        <CodePaper variant="outlined">
          <code className={classes.wrapAnywhere}>{code}</code>
        </CodePaper>
      </Box>
    </Box>
  )
}
