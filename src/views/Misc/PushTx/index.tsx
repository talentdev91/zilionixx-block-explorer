import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import useStyles from './styles'
import { useState } from 'react'
import { CustomAlert } from '../../../components/CustomAlert'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { AppState } from '../../../store/configureStore'
import { getTxnData } from '../../../store/actions/misc'
import { isEmptyObject } from '../../../common/utils'

const alertTypes = { success: 'success', info: 'info', warning: 'warning', error: 'error' }
const alertMsgs = { success: 'Broadcasting succeed', info: 'info', warning: 'warning', error: 'error' }

interface pushTxProps {
  getTxnData: (rawTxHex: string) => void
  txReceipt: any
}

function PushTx({ getTxnData, txReceipt }: pushTxProps) {
  const classes = useStyles()
  const [rawTxHex, setRawTxHex] = useState('')
  const txAlertType = alertTypes.success
  const alertMsg = alertMsgs.success
  const [alertOpen, setAlertOpen] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    getTxnData(rawTxHex)
  }

  const handleAlertOpen = (newValue: boolean) => {
    setAlertOpen(newValue)
  }

  const handleChangeText = (e: any) => {
    setRawTxHex(e.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <Typography variant="h6" color="textSecondary" className={classes.title}>
          Broadcast Raw Transaction
        </Typography>
        <Divider />
        <Typography variant="body2" color="textPrimary" className={classes.textfieldLabel}>
          This page allows you to paste a Signed Raw Transaction in hex format (i.e. characters 0-9, a-f) and broadcast
          it over the Zilionixx network.
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Box mb={1}>
            <CustomAlert type={txAlertType} open={alertOpen} updateOpen={handleAlertOpen}>
              {alertMsg}
            </CustomAlert>
          </Box>

          <FormControl className={classNames(classes.formControl)}>
            <TextareaAutosize
              className={classes.textField}
              minRows={10}
              maxRows={10}
              required
              placeholder="Enter signed transaction hex (0x..)"
              // value={byteCode}
              onChange={handleChangeText}
            />
            <div>
              <Button type="submit" variant="contained" className={classes.submitBtn} disableRipple>
                Send Transaction
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
      {!isEmptyObject(txReceipt) ? (
        <div className={classes.decodeTextDiv}>
          <div className={classes.titleDiv}>
            <p className={classes.decodeTitle}>Transaction Detail:</p>
          </div>
          <div>
            <p className={classes.decodeText}>Block Hash : {txReceipt.blockHash}</p>
            <p className={classes.decodeText}>Block Number : {txReceipt.blockNumber}</p>
            <p className={classes.decodeText}>Contract Address : {txReceipt.contractAddress}</p>
            <p className={classes.decodeText}>Cumulative Gas Used : {txReceipt.cumulativeGasUsed}</p>
            <p className={classes.decodeText}>From : {txReceipt.from}</p>
            <p className={classes.decodeText}>Gas Used : {txReceipt.gasUsed}</p>
            <p className={classes.decodeText}>Logs : {txReceipt.logs}</p>
            <p className={classes.decodeText}>Logs Bloom : {txReceipt.logsBloom}</p>
            <p className={classes.decodeText}>Status : {txReceipt.status}</p>
            <p className={classes.decodeText}>To : {txReceipt.to}</p>
            <p className={classes.decodeText}>Transaction Hash0 : {txReceipt.transactionHash}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  txReceipt: state.misc.txReceipt,
})

export default connect(mapStateToProps, { getTxnData })(PushTx)
