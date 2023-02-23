import React from 'react'
import Typography from '@material-ui/core/Typography'
import { FormLabel } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { vyperVersions } from '../../../common/consts'
import { StyledLink } from '../../Resource/TopStatistics/components/CustomLink'

import classNames from 'classnames'
import useStyles from './styles'
import { useState } from 'react'

const Vyper: React.FC = () => {
  const classes = useStyles()
  let byteCode
  const [compilerVersion, setCompilerVersion] = useState('[Please Select]')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    window.alert('Your byte code is: ' + byteCode)
  }

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <Typography variant="h6" color="textSecondary" className={classes.title}>
          Vyper Online Compiler (Experimental)
        </Typography>
        <Divider />
        <Typography variant="body2" color="textPrimary" className={classes.textfieldLabel}>
          Compiles Vyper source code and outputs the ABI, ByteCode and Runtime Bytecode
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <FormLabel className={classes.formLable}>[Step 1] Select Compiler Version</FormLabel>

          <FormControl className={classNames(classes.formControl, classes.halfwidth)}>
            <Select
              className={classes.select}
              labelId="typesLabel"
              label="Types"
              IconComponent={KeyboardArrowDownIcon}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
                classes: { paper: classes.menuBg }
              }}
              input={<InputBase classes={{ input: classes.input }} />}
              value={compilerVersion}
              onChange={(e) => setCompilerVersion(e.target.value as string)}
              classes={{
                icon: classes.icon,
                iconOpen: classes.iconOpen,
                select: classes.selectSelect,
                root: classes.selected,
              }}
            >
              {vyperVersions.map((vyper) => (
                <MenuItem
                  style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                  key={vyper}
                  value={vyper}
                  className={classNames(classes.menuItem)}
                  classes={{ selected: classes.selected }}
                >
                  {vyper}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormLabel className={classes.formLable}>[Step 2] Enter Source Code Below</FormLabel>
          <FormControl className={classNames(classes.formControl)}>
            <TextareaAutosize
              className={classes.textField}
              minRows={10}
              maxRows={10}
              required
              placeholder="Please Enter Source Code"
            // value={byteCode}
            // onChange={(e) => setByteCode(e.target.value)}
            />
          </FormControl>
          <div>
            <Typography variant="body2" color="textPrimary" className={classes.formLable}>
              Tip: Try compiling the sample&nbsp;
              <StyledLink
                href="https://raw.githubusercontent.com/prysmaticlabs/prysm/62f304e668bc78c4078cd376ba141b58eea777ef/contracts/deposit-contract/depositContract.v.py"
                underline="none"
              >
                Prysmaticlabs Contract&nbsp;
              </StyledLink>
              (for vyper version 0.1.0b7)
            </Typography>
            <div className={classes.btnGroup}>
              <Button type="submit" variant="contained" className={classes.submitBtn} disableRipple>
                Compile Vyper
              </Button>
              <Button variant="contained" className={classes.resetBtn} disableRipple>
                Reset
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Vyper
