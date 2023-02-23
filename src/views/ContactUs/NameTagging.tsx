import React, { useState, useEffect } from 'react'
import useStyles, { StyledPaper } from './style'
import {
  Grid,
  Button,
  FormControl,
  FormHelperText,
  InputBase,
  TextareaAutosize,
  Divider,
  Select,
  Box,
  IconButton,
} from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import { requestNametagging } from '../../store/actions/contactus'
import { connect } from 'react-redux'

interface NameTaggingProps {
  selectId: String
  address: string
  requestNametagging: (
    type: number,
    name: string,
    email: string,
    comName: string,
    comSite: string,
    selectValue: string,
    link: string,
    comment: string,
    nameTag: object,
  ) => void
}

interface SmartContractNameTagProps {
  address: string
  nameTag: string
  website: string
  categoryLabel: string
  shortDesc: string
  errorAddress: boolean
  errorNameTag: boolean
  errorWebsite: boolean
  errorDescription: boolean
}

function NameTagging({ selectId, address, requestNametagging }: NameTaggingProps) {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comName, setComName] = useState('')
  const [comSite, setComSite] = useState('')
  const [selectValue, setSelectValue] = useState('0')
  const [link, setLink] = useState('')
  const [comment, setComment] = useState('')

  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorComName, setErrorComName] = useState(false)
  const [errorSelectValue, setErrorSelectValue] = useState(false)

  const [smartContractsCount, setSmartContractCount] = useState(1)
  var initContent: SmartContractNameTagProps = {
    address: '',
    nameTag: '',
    website: '',
    categoryLabel: '',
    shortDesc: '',
    errorAddress: false,
    errorNameTag: false,
    errorWebsite: false,
    errorDescription: false,
  }

  const [smartContractsContents, setSmartContractContents] = useState([initContent])
  const [changeContent, setChangeContent] = useState(false)

  const handleSelect = (e: any) => {
    setSelectValue(e.target.value)
  }

  const handleAddMoreNameTag = () => {
    if (smartContractsCount < 5) {
      var count = smartContractsCount + 1
      setSmartContractCount(count)
      var newSmartContract: SmartContractNameTagProps = {
        address: '',
        nameTag: '',
        website: '',
        categoryLabel: '',
        shortDesc: '',
        errorAddress: false,
        errorNameTag: false,
        errorWebsite: false,
        errorDescription: false,
      }
      var temp = smartContractsContents
      temp.push(newSmartContract)
      setSmartContractContents(temp)
    }
  }

  const handleSmartContractNameTags = (index: number, prop: string, value: string) => {
    var newContents = smartContractsContents
    if (prop === 'address') {
      newContents[index].address = value
    } else if (prop === 'nameTag') {
      newContents[index].nameTag = value
    } else if (prop === 'website') {
      newContents[index].website = value
    } else if (prop === 'categoryLabel') {
      newContents[index].categoryLabel = value
    } else if (prop === 'shortDesc') {
      newContents[index].shortDesc = value
    }
    setChangeContent(!changeContent)
    setSmartContractContents(newContents)
  }
  const handleClose = (key: number) => {
    let newContents: SmartContractNameTagProps[] = []
    if (key === smartContractsContents.length - 1) {
      newContents = newContents.concat(smartContractsContents.slice(0, -1))
    } else {
      newContents = newContents.concat(smartContractsContents.slice(0, key), smartContractsContents.slice(key + 1))
    }
    setSmartContractCount(smartContractsCount - 1)
    setSmartContractContents(newContents)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let status = true
    if (!name) {
      setErrorName(true)
      status = false
    }
    //eslint-disable-next-line
    let regEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,9}[\.][a-z]{1,5}/g
    if (!regEmail.test(email)) {
      setErrorEmail(true)
      status = false
    } else if (!email) {
      setErrorEmail(true)
      status = false
    }
    if (!comName) {
      setErrorComName(true)
      status = false
    }
    if (!comSite) {
      status = false
    }
    if (!selectValue) {
      setErrorSelectValue(true)
      status = false
    }
    let newContracts: any = []
    smartContractsContents.map((contract, index) => {
      if (!contract.address) {
        contract.errorAddress = true
        status = false
      }
      if (!contract.nameTag) {
        contract.errorNameTag = true
        status = false
      }
      if (!contract.website) {
        contract.errorWebsite = true
        status = false
      }
      if (!contract.shortDesc) {
        contract.errorDescription = true
        status = false
      }
      newContracts.push({
        address: contract.address,
        nameTag: contract.nameTag,
        website: contract.website,
        categoryLabel: contract.categoryLabel,
        shortDesc: contract.shortDesc,
      })
      return (true)
    })
    if (status) {
      requestNametagging(3, name, email, comName, comSite, selectValue, link, comment, newContracts)
    }
  }

  useEffect(() => { }, [changeContent])

  return (
    <div>
      <Divider className={classes.divider} />
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl variant="outlined" className={classes.textField}>
              <FormHelperText className={classes.label}>
                Name&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                <span className={classes.helperText}>(required)</span>
              </FormHelperText>
              <InputBase
                className={classes.inputField}
                onChange={(event) => setName(event.target.value)}
                placeholder="John Doe"
              />
              <FormHelperText className={classes.error}>{errorName && 'Please enter your name'}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl variant="outlined" className={classes.textField}>
              <FormHelperText className={classes.label}>
                Email Address&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                <span className={classes.helperText}>(required)</span>
              </FormHelperText>
              <InputBase
                className={classes.inputField}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="johndoe@cryptokitties.com"
              />
              <FormHelperText className={classes.error}>
                {errorEmail && 'Please enter a valid email address'}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl variant="outlined" className={classes.textField}>
              <FormHelperText className={classes.label}>
                Company Name&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                <span className={classes.helperText}>(required)</span>
              </FormHelperText>
              <InputBase
                className={classes.inputField}
                onChange={(event) => setComName(event.target.value)}
                placeholder="CryptoKitties"
              />
              <FormHelperText className={classes.error}>
                {errorComName && 'Please enter your company name'}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl variant="outlined" className={classes.textField}>
              <FormHelperText className={classes.label}>
                Company Website&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                <span className={classes.helperText}>(required)</span>
              </FormHelperText>
              <InputBase
                className={classes.inputField}
                onChange={(event) => setComSite(event.target.value)}
                placeholder="https://cryptokitties.com"
              />
              <FormHelperText className={classes.error}>
                {errorEmail && 'Please enter your company website'}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormControl variant="outlined" className={classes.textField}>
              <FormHelperText className={classes.label}>
                Is this an address owner or a user submission?&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                <span className={classes.helperText}>(required)</span>
              </FormHelperText>
              <Select
                native
                value={selectValue}
                variant="outlined"
                onChange={handleSelect}
                className={classes.contactSelect}
              >
                <option value={0}>Please select the field</option>
                <option value={1}>I'm the address owner</option>
                <option value={2}>I'm a user</option>
              </Select>
              <FormHelperText className={classes.error}>{errorSelectValue && 'Please select the field'}</FormHelperText>
            </FormControl>
          </Grid>
          {selectValue === '2' && (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <FormControl variant="outlined" className={classes.textField}>
                <FormHelperText className={classes.label}>
                  Where did you discover this address?&nbsp;{' '}
                  <a
                    href="https://compound.finance/developers"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.linkExample}
                  >
                    Example Link <i className={'far fa-external-link-alt'} />
                  </a>
                </FormHelperText>
                <TextareaAutosize
                  className={classes.textAreaField}
                  minRows={1}
                  maxRows={1}
                  placeholder="Project' s developer page at https://compound.finance/developers"
                  onChange={(event) => setLink(event.currentTarget.value as string)}
                />
              </FormControl>
            </Grid>
          )}
        </Grid>
        <Divider className={classes.divider} />
        <p className={classes.nametaggingTitle}>Name Tagging</p>
        {smartContractsContents.map((item: any, key: number) => {
          return (
            <Box mt={2} mb={2} key={key} className={classes.smartContractBox}>
              {' '}
              <StyledPaper variant="outlined">
                <Box pl={1} pr={1}>
                  <Grid container>
                    {key !== 0 && (
                      <IconButton onClick={() => handleClose(key)} component="span" className={classes.closeBtn}>
                        <Close />
                      </IconButton>
                    )}
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <FormControl variant="outlined" className={classes.textField}>
                        <FormHelperText className={classes.label}>
                          Smart Contract / Address&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                          <span className={classes.helperText}>(required)</span>
                        </FormHelperText>
                        <InputBase
                          className={classes.inputField}
                          onChange={(event) =>
                            handleSmartContractNameTags(key, 'address', event.currentTarget.value as string)
                          }
                          placeholder="0x..."
                          value={item.address}
                        />
                        <FormHelperText className={classes.error}>
                          {item.errorAddress && 'Please enter your address'}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Box>
                <Box p={1}>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <FormControl variant="outlined" className={classes.textField}>
                        <FormHelperText className={classes.label}>
                          Suggested Name Tag&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                          <span className={classes.helperText}>(required)</span>
                        </FormHelperText>
                        <InputBase
                          className={classes.inputField}
                          onChange={(event) =>
                            handleSmartContractNameTags(key, 'nameTag', event.target.value as string)
                          }
                          placeholder="e.g. Compound Contract"
                          value={item.nameTag}
                        />
                        <FormHelperText className={classes.error}>
                          {item.errorNameTag && 'Please enter your name tag'}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <FormControl variant="outlined" className={classes.textField}>
                        <FormHelperText className={classes.label}>
                          Website &nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                          <span className={classes.helperText}>(required)</span>
                        </FormHelperText>
                        <InputBase
                          className={classes.inputField}
                          onChange={(event) =>
                            handleSmartContractNameTags(key, 'website', event.target.value as string)
                          }
                          placeholder="https://www.example.com"
                          value={item.website}
                        />
                        <FormHelperText className={classes.error}>
                          {item.errorWebsite && 'Please enter your website'}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <FormControl variant="outlined" className={classes.textField}>
                        <FormHelperText className={classes.label}>Category Label</FormHelperText>
                        <InputBase
                          className={classes.inputField}
                          onChange={(event) =>
                            handleSmartContractNameTags(key, 'categoryLabel', event.target.value as string)
                          }
                          placeholder="e.g. DeFi"
                          value={item.categoryLabel}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Box>
                    <FormControl variant="outlined" className={classes.textField}>
                      <FormHelperText className={classes.label}>
                        Short Description &nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;
                        <span className={classes.helperText}>(required)</span>
                      </FormHelperText>
                      <TextareaAutosize
                        className={classes.textAreaField}
                        minRows={1}
                        maxRows={1}
                        onChange={(event) =>
                          handleSmartContractNameTags(key, 'shortDesc', event.target.value as string)
                        }
                        value={item.shortDesc}
                      />
                      <FormHelperText className={classes.error}>
                        {item.errorDescription && 'Please enter short description'}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Box>
              </StyledPaper>
            </Box>
          )
        })}
        <Box m={2}>
          {smartContractsCount < 5 ? (
            <span className={classes.addMore} onClick={handleAddMoreNameTag}>
              <i className="fas fa-plus-circle"></i> Add more name tagging
            </span>
          ) : (
            <span className={classes.addMoreDisable}>
              <i className="fas fa-plus-circle"></i> Add more name tagging (maximum 5 entries)
            </span>
          )}
        </Box>

        <Divider className={classes.divider} />
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <FormControl variant="outlined" className={classes.textField}>
            <FormHelperText className={classes.label}>Additional Comment</FormHelperText>
            <TextareaAutosize
              className={classes.textAreaField}
              minRows={1}
              maxRows={1}
              onChange={(event) => setComment(event.currentTarget.value as string)}
            />
          </FormControl>
        </Grid>
        <div className={classes.submitContent}>
          <Button variant="contained" type="submit" className={classes.submitButton} disableRipple>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}
export default connect(null, { requestNametagging })(NameTagging)
