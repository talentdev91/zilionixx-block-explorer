import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import useStyles from './styles'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { getByteToOpcode } from '../../../store/actions/misc'
import { AppState } from '../../../store/configureStore'
import { useState } from 'react'

interface byteToOpcodeProps {
  getByteToOpcode: (bytecode: string) => void
  decodeData: any
}

function ByteToOpcode({ getByteToOpcode, decodeData }: byteToOpcodeProps) {
  const classes = useStyles()
  const [bytecode, setByteCode] = useState('')

  const handleTextChange = (e: any) => {
    setByteCode(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    getByteToOpcode(bytecode)
  }

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography variant="h6" color="textSecondary" className={classes.title}>
            Bytecode to Opcode Disassembler
          </Typography>
          <Divider />
          <Typography variant="body2" color="textPrimary" className={classes.textfieldLabel}>
            Attempts to decode the low level Contract ByteCodes to Opcodes
          </Typography>
          <FormControl className={classNames(classes.formControl)}>
            <TextareaAutosize
              className={classes.textField}
              maxRows={10}
              minRows={10}
              required
              placeholder="Enter Contract Bytecode(0x..)"
              // value={byteCode}
              onChange={handleTextChange}
            />
            <div>
              <Button type="submit" variant="contained" className={classes.submitBtn} disableRipple>
                Decode
              </Button>
            </div>
          </FormControl>
        </form>
        {decodeData.length > 0 ? (
          <div className={classes.decodeTextDiv}>
            <div className={classes.titleDiv}>
              <p className={classes.decodeTitle}>Decoded Bytecode:</p>
            </div>
            {decodeData.map((data: any, key: any) => {
              return (
                <p key={key} className={classes.decodeText}>
                  [{key + 1}] {data.name}
                  {data.pushData}
                </p>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  decodeData: state.misc.decodeData,
})

export default connect(mapStateToProps, { getByteToOpcode })(ByteToOpcode)
