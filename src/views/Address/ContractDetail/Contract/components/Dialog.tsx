import React from 'react'
import { DialogTitle, DialogContent } from '@material-ui/core'
import { useDialog } from '../../../../../providers/DialogProvider'
import ReportProblemSharpIcon from '@material-ui/icons/ReportProblemSharp'
import { IconTooltip } from '../../../../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from '../../../styles'
import { RedBackgroundPaper } from '../../../styles'
import { Divider, Box } from '@material-ui/core'
import { StyledLink } from '../../../../Resource/TopStatistics/components/CustomLink'

export default function SolidityBugDialog() {
  const [openDialog, closeDialog] = useDialog()
  const classes = useStyles()

  const onOpenDialog = () => {
    openDialog({
      children: (
        <>
          <Box mb={1.5}>
            <DialogTitle>
              <IconButton aria-label="close" className={classes.closeButton} onClick={closeDialog}>
                <CloseIcon style={{ fontSize: 14 }} />
              </IconButton>
            </DialogTitle>
          </Box>

          <Divider />
          <DialogContent>
            <RedBackgroundPaper>
              <strong>Compiler specific version warnings:</strong>
              <br></br>
              <br></br>
              The compiled contract might be susceptible to&nbsp;
              <StyledLink underline="none" href="#">
                ABIDecodeTwoDimensionalArrayMemory (very low-severity)
              </StyledLink>
              ,&nbsp;
              <StyledLink underline="none" href="#">
                KeccakCaching (medium-severity)
              </StyledLink>
              ,&nbsp;
              <StyledLink underline="none" href="#">
                EmptyByteArrayCopy (medium-severity)
              </StyledLink>
              ,&nbsp;
              <StyledLink underline="none" href="#">
                DynamicArrayCleanup (medium-severity)
              </StyledLink>
              ,&nbsp; Solidity Compiler Bugs.
            </RedBackgroundPaper>
          </DialogContent>
        </>
      ),
    })
  }

  return (
    <div>
      <IconTooltip title="Solidity compiler bugs, click for more info">
        <ReportProblemSharpIcon onClick={onOpenDialog} color="error" />
      </IconTooltip>
    </div>
  )
}
