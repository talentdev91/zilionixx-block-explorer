import React, { useState } from 'react'
import Divider from '@material-ui/core/Divider'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import classNames from 'classnames'
import Checkbox from '@material-ui/core/Checkbox'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

//import consts
import {
  compilerTypes,
  solidityVersions,
  vyperVersions,
  Vyper,
  NoSelection,
  licenseTypes,
  licenseTypesValue,
  Solidity_single,
  Solidity_multi,
  Solidity_standard,
} from '../../../common/consts'
import useStyles from './styles'

import undrawSvg from '../../../assets/img/undraw_security.svg'
import { FormControl, Select, FormHelperText } from '@material-ui/core'

const VerifyContract: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  const [contractAddress, setContractAddress] = useState('')
  const [contractAddressError, setContractAddressError] = useState('')
  const [compiler, setCompiler] = useState('[Please Select]')
  const [compilerError, setCompilerError] = useState('')
  const [compilerVersion, setCompilerVersion] = useState('[Please Select]')
  const [compilerVersionError, setCompilerVersionError] = useState('')
  const [licenseType, setLicenseType] = useState('[Please Select]')
  const [licenseTypeError, setLicenseTypeError] = useState('')

  const handleReset = () => {
    setContractAddress('')
    setContractAddressError('')
    setCompiler('[Please Select]')
    setCompilerError('')
    setCompilerVersion('[Please Select]')
    setCompilerVersionError('')
    setLicenseType('[Please Select]')
    setLicenseTypeError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    let errorFlag = false
    if (contractAddress === '') {
      setContractAddressError('Require')
      errorFlag = true
    }
    if (compiler === NoSelection) {
      setCompilerError('Please Select Compiler Type')
      errorFlag = true
    }
    if (compilerVersion === NoSelection) {
      setCompilerVersionError('Please Select Compiler Version')
      errorFlag = true
    }
    if (licenseType === NoSelection) {
      setLicenseTypeError('Please Select License Type')
      errorFlag = true
    }

    if (!errorFlag) {
      if (compiler === Solidity_single) {
        history.push({
          pathname: '/verifyContract-solc',
          search: `?a=${contractAddress}&c=${compilerVersion}&lictype=${licenseType}`
        })
      } else if (compiler === Solidity_multi) {
        history.push({
          pathname: '/verifyContract-solc-multiple',
          search: `?a=${contractAddress}&c=${compilerVersion}&lictype=${licenseType}`
        })
      } else if (compiler === Solidity_standard) {
        history.push({
          pathname: '/verifyContract-solc-json',
          search: `?a=${contractAddress}&c=${compilerVersion}&lictype=${licenseType}`
        })
      }
    }
  }
  const handleContractAddress = (e: React.FormEvent<HTMLFormElement>) => {
    setContractAddressError('')
    if (e.currentTarget.value.length < 40) {
      setContractAddressError('Invalid Length')
    }
    if (e.currentTarget.value.length === 0) {
      setContractAddressError('Require')
    }
    setContractAddress(e.currentTarget.value as string)
  }
  const handleCompiler = (e: React.FormEvent<HTMLFormElement>) => {
    setCompilerError('')
    setCompiler(e.currentTarget.value as string)
  }
  const handleCompilerVersion = (e: React.FormEvent<HTMLFormElement>) => {
    setCompilerVersionError('')
    setCompilerVersion(e.currentTarget.value as string)
  }
  const handleLicenceType = (e: React.FormEvent<HTMLFormElement>) => {
    setLicenseTypeError('')
    setLicenseType(e.currentTarget.value as string)
  }
  const selectSolidityVersion = (
    <FormControl className={classes.formControl}>
      <p>Please select Compiler Version</p>
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
        }}
        input={<InputBase classes={{ input: classes.input }} />}
        value={compilerVersion}
        onChange={handleCompilerVersion}
        classes={{
          icon: classes.icon,
          iconOpen: classes.iconOpen,
          select: classes.selectSelect,
          root: classes.selected,
        }}
      >
        {solidityVersions.map((solidity) => (
          <MenuItem
            style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
            key={solidity}
            value={solidity}
            className={classNames(classes.menuItem)}
            classes={{ selected: classes.selected }}
          >
            {solidity}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText className={classes.errorMessage}>
        {compilerVersionError && compilerVersionError}
      </FormHelperText>
    </FormControl>
  )

  const selectVyperVersion = (
    <FormControl className={classes.formControl}>
      <p>Please select Compiler Version</p>
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
        }}
        input={<InputBase classes={{ input: classes.input }} />}
        value={compilerVersion}
        onChange={(e) => setCompilerVersion(e.currentTarget.value as string)}
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
      <FormHelperText className={classes.errorMessage}>
        {compilerVersionError && compilerVersionError}
      </FormHelperText>
    </FormControl>
  )

  return (
    <div className={classes.root}>
      <div className={classes.styleDiv}>
        <p className={classes.title}>Verify & Publish Contract Source Code</p>
        <small className={classes.subTitle}>COMPILER TYPE AND VERSION SELECTION</small>
        <Divider className={classes.divider} />
        <div className={classes.description}>
          <img className={classes.undrawSvg} src={undrawSvg} alt="undrawSvg" />
          <span>
            Source code verification provides <b>transparency</b> for users interacting with smart contracts. By
            uploading the source code, ZnxScan will match the compiled code with that on the blockchain. Just like
            contracts, a "smart contract" should provide end users with more information on what they are "digitally
            signing" for and give users an opportunity to audit the code to independently verify that it actually does
            what it is supposed to do.
          </span>
        </div>
        <Grid container className={classes.formDiv}>
          <Grid item xs={12} sm={12}>
            <div className={classes.inputGroups}>
              <form onSubmit={handleSubmit}>
                <FormControl className={classes.formControl}>
                  <p>Please enter the Contract Address you would like to verify</p>
                  <input
                    onChange={handleContractAddress}
                    maxLength="42"
                    placeholder="0x..."
                    value={contractAddress}
                    className={classes.inputField}
                  />
                  <FormHelperText className={classes.errorMessage}>
                    {contractAddressError && contractAddressError}
                  </FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <p>Please select Compiler Type</p>
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
                    }}
                    input={<InputBase classes={{ input: classes.input }} />}
                    value={compiler}
                    onChange={handleCompiler}
                    classes={{
                      icon: classes.icon,
                      iconOpen: classes.iconOpen,
                      select: classes.selectSelect,
                      root: classes.selected,
                    }}
                  >
                    {compilerTypes.map((type) => (
                      <MenuItem
                        style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                        key={type}
                        value={type}
                        className={classNames(classes.menuItem)}
                        classes={{ selected: classes.selected }}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText className={classes.errorMessage}>
                    {compilerError && compilerError}
                  </FormHelperText>
                  {/* <FormHelperText>Here's my helper text</FormHelperText> */}
                </FormControl>
                {compiler !== NoSelection && compiler === Vyper ? selectVyperVersion : ''}
                {compiler !== NoSelection && compiler !== Vyper ? selectSolidityVersion : ''}
                <FormControl className={classes.formControl}>
                  <p>Please select Open License Type</p>
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
                    }}
                    input={<InputBase classes={{ input: classes.input }} />}
                    value={licenseType}
                    onChange={handleLicenceType}
                    classes={{
                      icon: classes.icon,
                      iconOpen: classes.iconOpen,
                      select: classes.selectSelect,
                      root: classes.selected,
                    }}
                  >
                    {licenseTypes.map((license, index) => (
                      <MenuItem
                        style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                        key={index}
                        value={licenseTypesValue[index]}
                        className={classNames(classes.menuItem)}
                        classes={{ selected: classes.selected }}
                      >
                        {license}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText className={classes.errorMessage}>
                    {licenseTypeError && licenseTypeError}
                  </FormHelperText>
                </FormControl>
                <div className={classes.submitGroup}>
                  <div className={classes.agree}>
                    <Checkbox
                      checked={true}
                    />
                    <span>
                      I agree{' '}
                      <Link className={classes.link} to="/terms" underline="none">
                        terms of Service
                      </Link>
                    </span>
                  </div>
                  <div className={classes.btnGroup}>
                    <Button type="submit" variant="contained" className={classes.submitBtn} disableRipple>
                      Continue
                    </Button>
                    <Button variant="contained" onClick={handleReset} className={classes.resetBtn} disableRipple>
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default VerifyContract
