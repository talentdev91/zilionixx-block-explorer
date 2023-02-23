import React from 'react'
import classNames from 'classnames'
import { Grid, FormControl, Select, TextareaAutosize, Paper, Button } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
import MenuItem from '@material-ui/core/MenuItem'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStyles, StyledTooltip } from './styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import { licenseTypes } from '../../../../../common/consts'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { BackendURL } from '../../../../../config/config'
import axios from 'axios'

import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { verifyStandardJsonSolidity } from '../../../../../store/actions/misc'

interface verifySolidityStandardJsonProps {
  verifyStandardJsonSolidity: (address: string, compiler: string, constructorArguments: string) => void
  loading: boolean
  error: string
  req: any
  rep: any
}

//components
function VerifySource({ verifyStandardJsonSolidity }: verifySolidityStandardJsonProps) {
  const classes = useStyles()
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const address = urlParams.get('a')
  const compilerVersion = urlParams.get('c')
  const licenseType = parseInt(urlParams.get('lictype'))
  const [expanded, setExpanded] = React.useState<string | false>('panel1')
  // const [errUpload, setErrUpload] = React.useState<string>('')
  const [selectedFile, setSelectedFile] = React.useState<File>()
  const [isFilePicked, setIsFilePicked] = React.useState(false)
  const [constructorArguments, setConstructorArguments] = React.useState('')

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.currentTarget.files[0])
    event.target.files[0] && setIsFilePicked(true)
  }

  const handleUploadSubmit = async (e: any) => {
    // HANDLING FILE AS SENDING FILE INTO BACKEND
    e.preventDefault()
    if (!isFilePicked) return
    const formData = new FormData()
    formData.append('File', selectedFile)
    formData.append('address', address)
    await axios.post(`${BackendURL}/contract/verifyContract/solidity/upload/standardJson/${address}`, formData)
  }
  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    verifyStandardJsonSolidity(address, compilerVersion, constructorArguments)
    // let response = await axios.post(`${BackendURL}/contract/verifyContract/solidity/standardJson`, {
    //   address: address,
    //   compiler: compilerVersion,
    //   constructorArguments: constructorArguments,
    // })
    // console.log(response)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.topside}>
          <p className={classes.description}>
            1. Contract sources in the json file must be formatted as{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://solidity.readthedocs.io/en/v0.5.7/using-the-compiler.html#input-description"
              className={classes.link}
            >
              Literal contents
            </a>{' '}
            and NOT as urls
          </p>
          <p className={classes.description}>
            2. Use multiple literal &#123;"content": "", ...&#125; for multi part contracts containing multiple source
            files
          </p>
          <p className={classes.description}>
            3. A serializing{' '}
            <a target="_blank" href="https://znxscan.com/json-serialize" rel="noreferrer" className={classes.link}>
              raw text tool
            </a>{' '}
            for converting objects to JSON string is also available.
          </p>
        </Grid>
      </Grid>
      <form onSubmit={handleVerify}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Contract Address</p>
              <InputBase fullWidth readOnly value={address} className={classes.inputField} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <p className={classes.contract}>Compiler</p>
              <InputBase fullWidth value={compilerVersion} className={classes.inputFieldCompiler} disabled />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Paper variant="outlined" className={classes.backgroundPaper}>
              <div className={classes.uploadPan}>
                <p className={classes.contractcode}>
                  Please select the Standard-Input-Json (*.json) file to upload <span style={{ color: 'red' }}>*</span>
                </p>
                <p>
                  <span className={classes.stepName}>Step 1: </span>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    title="Choose a single json-input formatted source code file to upload"
                    accept=".json"
                    id="upload-button"
                    className={classes.uploadFileBtn}
                  />
                </p>
                <p>
                  <span className={classes.stepName}>Step 2: </span>
                  <input
                    type="submit"
                    onClick={handleUploadSubmit}
                    value="Click to Upload selected files"
                    className={classes.uploadSubmitBtn}
                  ></input>
                  <span className={classes.uploadDescription}>{/* <b> {errUpload}</b> */}</span>
                </p>
              </div>
            </Paper>
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
                      value={constructorArguments}
                      onChange={(e) => setConstructorArguments(e.target.value as string)}
                      className={classes.textField}
                      minRows={5}
                      maxRows={5}
                    />
                  </StyledTooltip>
                  <div className={classes.accordionsummaryFooter}>
                    For additional information on Constructor Arguments{' '}
                    <a
                      target="_blank"
                      className={classes.link}
                      rel="noreferrer"
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
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  loading: state.misc.verifySolidityStandardJsonContractLoading,
  error: state.misc.verifySolidityStandardJsonContractError,
  req: state.misc.verifySolidityStandardJsonContractRequest,
  rep: state.misc.verifySolidityStandardJsonContractSuccessResponse,
})

export default connect(mapStateToProps, { verifyStandardJsonSolidity })(VerifySource)
