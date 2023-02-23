import React, { useState } from 'react'
import classNames from 'classnames'
import { Grid, FormControl, Select, TextareaAutosize, Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
import { useStyles, StyledIconButton, StyledSvgIcon, StyledTooltip } from './styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import { licenseTypes, EVMVersion, matchingEvms } from '../../../../../common/consts'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { verifySingleSolidity } from '../../../../../store/actions/misc'

interface verifySoliditySingleProps {
  verifySingleSolidity: (
    address: string,
    compiler: string,
    optimization: string,
    sourceCode: string,
    library1Name: string,
    library1Address: string,
    library2Name: string,
    library2Address: string,
    library3Name: string,
    library3Address: string,
    library4Name: string,
    library4Address: string,
    library5Name: string,
    library5Address: string,
    library6Name: string,
    library6Address: string,
    library7Name: string,
    library7Address: string,
    library8Name: string,
    library8Address: string,
    library9Name: string,
    library9Address: string,
    library10Name: string,
    library10Address: string,
    optimizerRuns: string,
    evmVersion: string,
    licenseType: string,
    constructorArguments: string,
  ) => void
  loading: boolean
  error: string
  req: any
  rep: any
}

//components
function VerifySource({ verifySingleSolidity }: verifySoliditySingleProps) {
  const classes = useStyles()
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const address: string = urlParams.get('a')!
  var compilerVersion = urlParams.get('c')!
  compilerVersion = compilerVersion.split(' ').join('+')!
  const licenseType: string = urlParams.get('lictype')!
  const [EVMVersionValue, setEVMVersionValue] = useState('default (compiler defaults)')
  const [evm, setEvm] = useState(matchingEvms[0])
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  //set request params as local state

  const [opt, setOpt] = React.useState('no')
  const [sourceCode, setSourceCode] = React.useState('')
  const [library1Name, setLibrary1Name] = React.useState('')
  const [library2Name, setLibrary2Name] = React.useState('')
  const [library3Name, setLibrary3Name] = React.useState('')
  const [library4Name, setLibrary4Name] = React.useState('')
  const [library5Name, setLibrary5Name] = React.useState('')
  const [library6Name, setLibrary6Name] = React.useState('')
  const [library7Name, setLibrary7Name] = React.useState('')
  const [library8Name, setLibrary8Name] = React.useState('')
  const [library9Name, setLibrary9Name] = React.useState('')
  const [library10Name, setLibrary10Name] = React.useState('')
  const [library1Address, setLibrary1Address] = React.useState('')
  const [library2Address, setLibrary2Address] = React.useState('')
  const [library3Address, setLibrary3Address] = React.useState('')
  const [library4Address, setLibrary4Address] = React.useState('')
  const [library5Address, setLibrary5Address] = React.useState('')
  const [library6Address, setLibrary6Address] = React.useState('')
  const [library7Address, setLibrary7Address] = React.useState('')
  const [library8Address, setLibrary8Address] = React.useState('')
  const [library9Address, setLibrary9Address] = React.useState('')
  const [library10Address, setLibrary10Address] = React.useState('')
  const [optimizerRuns, setOptimizerRuns] = React.useState('200')
  const [licType, setLicType] = React.useState<string>(licenseTypes[parseInt(licenseType)])
  const [constructorArguments, setConstructorArguments] = React.useState('')

  React.useEffect(() => {
    var evmVersionIndex = 0
    for (let i = 0; i < EVMVersion.length; i++) {
      if (EVMVersionValue === EVMVersion[i]) {
        evmVersionIndex = i
      }
    }
    if (evmVersionIndex === 0) {
      let solc_minor = parseInt(
        compilerVersion
          .match(/v\d+?\.\d+?\.\d+?[+-]/gi)[0]
          .match(/\.\d+/g)[0]
          .slice(1),
      )
      let solc_patch = parseInt(
        compilerVersion
          .match(/v\d+?\.\d+?\.\d+?[+-]/gi)[0]
          .match(/\.\d+/g)[1]
          .slice(1),
      )
      if (solc_minor < 5) {
        setEvm('byzantium')
      } else if (solc_minor === 5) {
        if (solc_patch < 5) {
          setEvm('byzantium')
        } else if (solc_patch < 14) {
          setEvm('petersburg')
        } else {
          setEvm('istanbul')
        }
      } else {
        setEvm('istanbul')
      }
    } else {
      setEvm(matchingEvms[evmVersionIndex])
    }
    // eslint-disable-next-line
  }, [EVMVersionValue])
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const handleEVMVersion = (
    e: React.ChangeEvent<{
      name?: string
      value: unknown
    }>,
    child: React.ReactNode,
  ) => {
    console.log('e.target.value', e.target.value)
    setEVMVersionValue(e.target.value as string)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('Evm ', evm)
    verifySingleSolidity(
      address,
      compilerVersion,
      opt,
      sourceCode,
      library1Name,
      library1Address,
      library2Name,
      library2Address,
      library3Name,
      library3Address,
      library4Name,
      library4Address,
      library5Name,
      library5Address,
      library6Name,
      library6Address,
      library7Name,
      library7Address,
      library8Name,
      library8Address,
      library9Name,
      library9Address,
      library10Name,
      library10Address,
      optimizerRuns,
      evm,
      licType,
      constructorArguments,
    )
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.topside}>
          <p className={classes.description}>
            1. If the contract compiles correctly at{' '}
            <a target="_blank" rel="noreferrer" href="https://remix.ethereum.org/" className={classes.link}>
              REMIX
            </a>
            , it should also compile correctly here.
          </p>
          <p className={classes.description}>
            2. We have limited support for verifying contracts created by another contract and there is a timeout of up
            to 45 seconds for each contract compiled.
          </p>
          <p className={classes.description}>
            3. For programatic contract verification, check out the{' '}
            <a target="_blank" rel="noreferrer" href="https://znxscan.com/apis#contracts" className={classes.link}>
              Contract API Endpoint
            </a>
          </p>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Contract Address</p>
              <InputBase fullWidth readOnly value={address} className={classes.inputField} />
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Compiler</p>
              <InputBase fullWidth value={compilerVersion} className={classes.inputFieldCompiler} disabled />
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Optimization</p>
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
                value={opt}
                onChange={(e) => setOpt(e.target.value as string)}
                classes={{
                  icon: classes.icon,
                  iconOpen: classes.iconOpen,
                  select: classes.selectSelect,
                  root: classes.selected,
                }}
              >
                <MenuItem
                  style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                  key="yes"
                  value="yes"
                  className={classNames(classes.menuItem)}
                  classes={{ selected: classes.selected }}
                >
                  &nbsp;Yes
                </MenuItem>
                <MenuItem
                  style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                  key="no"
                  value="no"
                  className={classNames(classes.menuItem)}
                  classes={{ selected: classes.selected }}
                >
                  &nbsp;No
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <p className={classes.contractcode}>
                Enter the Solidity Contract Code below <span style={{ color: 'red' }}>*</span>
              </p>
              <TextareaAutosize
                className={classes.textField}
                minRows={10}
                maxRows={10}
                required
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  className={classes.accordionsummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>
                    Constructor Arguments{' '}
                    <a
                      href="https://solidity.readthedocs.io/en/develop/abi-spec.html"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.link}
                    >
                      ABI-encoded
                    </a>{' '}
                    <span className={classes.accordionsummaryDisableText}>
                      (for contracts that were created with constructor parameters)
                    </span>
                  </p>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <StyledTooltip
                    placement="top"
                    title="This option ONLY applies to contracts that accept constructor arguments, if you are unsure you most likely dont need this. The constructor arguments should be in ABI-ENCODED values and will be appended to the contract bytecode."
                    arrow
                  >
                    <TextareaAutosize
                      className={classes.textField}
                      minRows={5}
                      maxRows={5}
                      value={constructorArguments}
                      onChange={(e) => setConstructorArguments(e.target.value)}
                    />
                  </StyledTooltip>
                  <div className={classes.accordionsummaryFooter}>
                    For additional information on Constructor Arguments{' '}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={classes.link}
                      href="https://info.znxscan.com/contract-verification-constructor-arguments/"
                    >
                      see Our KB Entry
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Accordion elevation={0} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  className={classes.accordionsummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>
                    Contract Library Address{' '}
                    <span className={classes.accordionsummaryDisableText}>
                      (for contracts that use libraries, supports up to 10 libraries)
                    </span>
                  </p>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetail}>
                  <Grid container>
                    <Grid item xs={12}>
                      <p className={classes.text1}>
                        Note: Library names are case sensitive and affects the keccak library hash
                      </p>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_1 Name:</p>
                        <StyledTooltip
                          placement="top"
                          title="This option ONLY applies to contracts that use libraries. The source code should contain the concatenated contract and library source code in a single page"
                          arrow
                        >
                          <InputBase
                            fullWidth
                            placeholder="0x..."
                            className={classes.inputField2}
                            value={library1Name}
                            onChange={(e) => setLibrary1Name(e.target.value as string)}
                          />
                        </StyledTooltip>
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_1 Contract Address:</p>
                        <StyledTooltip placement="top" title="Corresponding Contract Library Address." arrow>
                          <InputBase
                            value={library1Address}
                            onChange={(e) => setLibrary1Address(e.target.value as string)}
                            fullWidth
                            // required
                            placeholder="0x..."
                            className={classes.inputField2}
                          />
                        </StyledTooltip>
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_2 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library2Name}
                          onChange={(e) => setLibrary2Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_2 Contract Address:</p>
                        <InputBase
                          value={library2Address}
                          onChange={(e) => setLibrary2Address(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_3 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library3Name}
                          onChange={(e) => setLibrary3Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_3 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library3Address}
                          onChange={(e) => setLibrary3Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_4 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library4Name}
                          onChange={(e) => setLibrary4Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_4 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library4Address}
                          onChange={(e) => setLibrary4Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_5 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library5Name}
                          onChange={(e) => setLibrary5Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_5 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library5Address}
                          onChange={(e) => setLibrary5Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_6 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library6Name}
                          onChange={(e) => setLibrary6Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_6 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library6Address}
                          onChange={(e) => setLibrary6Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_7 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library7Name}
                          onChange={(e) => setLibrary7Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_7 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library7Address}
                          onChange={(e) => setLibrary7Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_8 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library8Name}
                          onChange={(e) => setLibrary8Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_8 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library8Address}
                          onChange={(e) => setLibrary8Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_9 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library9Name}
                          onChange={(e) => setLibrary9Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_9 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library9Address}
                          onChange={(e) => setLibrary9Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_10 Name:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library10Name}
                          onChange={(e) => setLibrary10Name(e.target.value as string)}
                        />
                      </FormControl>
                      <StyledIconButton>
                        <StyledSvgIcon>
                          <ArrowRightAltOutlinedIcon />
                        </StyledSvgIcon>
                      </StyledIconButton>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_10 Contract Address:</p>
                        <InputBase
                          fullWidth
                          placeholder="0x..."
                          className={classes.inputField2}
                          value={library10Address}
                          onChange={(e) => setLibrary10Address(e.target.value as string)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Accordion elevation={0} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                className={classes.accordionsummary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>
                  Mics Settings{' '}
                  <span className={classes.accordionsummaryDisableText}>
                    (Runs, EvmVersion & License Type Settings)
                  </span>
                </p>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetail}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    {' '}
                    <FormControl className={classes.formControl}>
                      <p className={classes.contract}>Runs (Optimizer)</p>
                      <StyledTooltip
                        placement="top"
                        title="Do not change if you are unsure. Previous versions of truffle defaulted to a value of 0"
                        arrow
                      >
                        <InputBase
                          fullWidth
                          value={optimizerRuns}
                          onChange={(e) => setOptimizerRuns(e.target.value as string)}
                          className={classes.inputField}
                        />
                      </StyledTooltip>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <p className={classes.contract}>EVM Version to target</p>
                      <StyledTooltip
                        placement="top"
                        title="A list of target EVM versions and the compiler-relevant changes introduced at each version. Backward compatibility is not guaranteed between each version."
                        arrow
                      >
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
                          value={EVMVersionValue}
                          onChange={handleEVMVersion}
                          classes={{
                            icon: classes.icon,
                            iconOpen: classes.iconOpen,
                            select: classes.selectSelect,
                            root: classes.selected,
                          }}
                        >
                          {EVMVersion.map((type) => (
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
                      </StyledTooltip>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl className={classes.formControl}>
                      <p className={classes.contract}>LicenseType</p>
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
                        value={licenseTypes[parseInt(licType)]}
                        onChange={(e) => setLicType(e.target.value as string)}
                        classes={{
                          icon: classes.icon,
                          iconOpen: classes.iconOpen,
                          select: classes.selectSelect,
                          root: classes.selected,
                        }}
                      >
                        {licenseTypes.map((type) => (
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
                    </FormControl>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <div className={classes.btnGroup}>
              <Button type="submit" variant="contained" className={classes.submitVerifyBtn} disableRipple>
                Verify and Publish
              </Button>
              <Button variant="contained" className={classes.resetVerifyBtn} disableRipple>
                Reset
              </Button>
              <Button variant="contained" className={classes.resetVerifyBtn} disableRipple>
                Return to Main
              </Button>
            </div>
          </Grid>
        </Grid>

        {/* <ReCAPTCHA sitekey="Your client site key" /> */}
      </form>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.misc.verifySoliditySingleContractLoading,
  error: state.misc.verifySoliditySingleContractError,
  req: state.misc.verifySoliditySingleContractRequest,
  rep: state.misc.verifySoliditySingleContractSuccessResponse,
})

export default connect(mapStateToProps, { verifySingleSolidity })(VerifySource)
