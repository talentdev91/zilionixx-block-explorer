import React, { useState } from 'react'
import classNames from 'classnames'
import { Grid, FormControl, Select, TextareaAutosize, Paper, Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined'
import { useStyles, StyledIconButton, StyledSvgIcon, StyledTooltip } from './styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import { licenseTypes, EVMVersion } from '../../../../../common/consts'
import { ErrMsgs } from '../../../../../common/msgs'
import axiosInstance from '../../../../../axios.config'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { BackendURL } from '../../../../../config/config'

//components
function VerifySource() {
  const classes = useStyles()
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const address = urlParams.get('a');
  const compilerVersion = urlParams.get('c');
  const licenseType = urlParams.get('lictype')
  const [EVMVersionValue, setEVMVersionValue] = useState('default (compiler defaults)')
  const [expanded, setExpanded] = React.useState<string | false>('panel1')
  const [errUpload, setErrUpload] = React.useState<string>('')
  const [uploadFileNum, setUploadFileNum] = React.useState<number>(0)

  const formData = new FormData()
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const handleEVMVersion = (e: React.FormEvent<HTMLFormElement>): any => {
    setEVMVersionValue(e.target.value as string)
  }

  const handleFileUpload = (e: React.FormEvent<HTMLFormElement>): any => {
    setUploadFileNum(e.target.files.length)
    formData.append('contractAddress', address)
    formData.append('uploadFile', e.target.files[0])
  }

  const handleUploadSubmit = (e: any) => {
    e.preventDefault();
    if (uploadFileNum === 0) {
      setErrUpload(ErrMsgs.uploadFileSelect.noSelect)
    } else if (uploadFileNum === 1) {
      setErrUpload(ErrMsgs.uploadFileSelect.oneSelect)
    } else {
      axiosInstance.post<any>(`${BackendURL}/contract/verifyContract/solidity/multiUpload`, formData)
    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.topside}>
          <p className={classes.description}>
            1. If it compiles correctly at <a target="_blank" rel="noreferrer" href="https://remix.ethereum.org/" className={classes.link}>REMIX</a>, it should also compile correctly here.
          </p>
          <p className={classes.description}>
            2. As this is an beta release module , there is limited support for external libraries
          </p>
          <p className={classes.description}>
            3. There is a timeout of up to 45 seconds for each contract compiled, if you need longer compilation times (up to 3 mins) check out this <a target="_blank" href="https://docs.znxscan.com/api-endpoints/contracts" rel="noreferrer" className={classes.link}>API endpoint</a>
          </p>
        </Grid>
      </Grid >
      <form>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Contract Address</p>
              <InputBase
                fullWidth
                readOnly
                value={address}
                className={classes.inputField}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Compiler</p>
              <InputBase
                fullWidth
                value={compilerVersion}
                className={classes.inputFieldCompiler}
                disabled
              />
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
                value={'no'}
                // onChange={(e) => setCompiler(e.target.value as string)}
                classes={{
                  icon: classes.icon,
                  iconOpen: classes.iconOpen,
                  select: classes.selectSelect,
                  root: classes.selected,
                }}
              >
                <MenuItem
                  style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                  key='yes'
                  value='yes'
                  className={classNames(classes.menuItem)}
                  classes={{ selected: classes.selected }}
                >
                  &nbsp;Yes
                </MenuItem>
                <MenuItem
                  style={{ fontSize: '14px', padding: '0 20px 0 14px' }}
                  key='no'
                  value='no'
                  className={classNames(classes.menuItem)}
                  classes={{ selected: classes.selected }}
                >
                  &nbsp;No
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" className={classes.backgroundPaper}>
              <div className={classes.uploadPan}>
                <p className={classes.contractcode}>
                  Please select the Solidity (*.sol) files for upload <span style={{ color: 'red' }}>*</span>
                </p>
                <p>
                  <span className={classes.stepName}>Step 1: </span>
                  <input type="file" multiple="multiple" title="CTRL click to select Multiple files" accept=".sol" id="upload-button" onChange={handleFileUpload} className={classes.uploadFileBtn} />
                </p>
                <p>
                  <span className={classes.stepName}>Step 2: </span>
                  <input type="button" onClick={handleUploadSubmit} value="Click to Upload selected files" className={classes.uploadSubmitBtn}></input>
                  <span className={classes.uploadDescription}><b> {errUpload}</b></span>
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary
                  className={classes.accordionsummary}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>Constructor Arguments <a href="https://solidity.readthedocs.io/en/develop/abi-spec.html" target="_blank" rel="noreferrer" className={classes.link}>ABI-encoded</a> <span className={classes.accordionsummaryDisableText}>(for contracts that were created with constructor parameters)</span></p>
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
                      required
                    />
                  </StyledTooltip>
                  <div className={classes.accordionsummaryFooter}>
                    For additional information on Constructor Arguments <a target="_blank" className={classes.link} rel="noreferrer" href="https://info.znxscan.com/contract-verification-constructor-arguments/" >see Our KB Entry</a>
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
                  <p>Contract Library Address <span className={classes.accordionsummaryDisableText}>(for contracts that use libraries, supports up to 10 libraries)</span></p>
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
                            // onChange={(e) => setContractAddress(e.target.value as string)}
                            fullWidth
                            // required
                            placeholder="0x..."
                            className={classes.inputField2}
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
                            // onChange={(e) => setContractAddress(e.target.value as string)}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_4 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_5 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_6 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_7 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_8 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_9 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={8} className={classes.libraryDiv}>
                      <FormControl className={classes.formControl}>
                        <p className={classes.library}>Library_10 Name:</p>
                        <InputBase
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                          // onChange={(e) => setContractAddress(e.target.value as string)}
                          fullWidth
                          // required
                          placeholder="0x..."
                          className={classes.inputField2}
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
                <p>Mics Settings <span className={classes.accordionsummaryDisableText}>(Runs, EvmVersion & License Type Settings)</span></p>
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
                          value='200'
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
                        value={licenseTypes[licenseType]}
                        // onChange={(e) => setCompiler(e.target.value as string)}
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
    </div >
  )
}
export default VerifySource
