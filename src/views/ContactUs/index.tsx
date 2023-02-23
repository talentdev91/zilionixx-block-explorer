import React, { useState, useEffect } from 'react'
import useStyles from './style'
import Select from '@material-ui/core/Select'
import { Grid, Button } from '@material-ui/core'
import { contactUsSection } from '../../common/consts'
import { StyledPageContainer, StyledPagePager } from '../../Styles'
import GeneralInquiry from './GeneralInquiry'
import NameTagging from './NameTagging'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../store/configureStore'
interface ContactUsProps {
  status: boolean
}
function ContactUs({ status }: ContactUsProps) {
  const classes = useStyles()
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const selectId = urlParams.get('id');
  const address = urlParams.get('a');
  const history = useHistory()
  let initSelect
  if (!selectId) {
    initSelect = contactUsSection.init
  } else {
    initSelect = selectId
  }
  const [selectValue, setSelectValue] = useState(initSelect)
  const [disabledStatus, setDisabledStatus] = useState(false)

  const handleChange = (e: any) => {
    const value = e.target.value
    if (value === contactUsSection.update) {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSf80W6tmqN-mcF7zUa6PPYHagSdVtypY9_YCAIbuOc9nMZVEQ/viewform"
    }
    setSelectValue(value)
  }

  const handleInitSelect = () => {
    setSelectValue(contactUsSection.init)
    history.push('/contactus')
  }

  useEffect(() => {
    if (selectValue !== contactUsSection.init) {
      setDisabledStatus(true)
    } else {
      setDisabledStatus(false)
    }
  }, [selectValue])

  return (
    <StyledPageContainer>
      {
        selectValue === contactUsSection.init &&
        <div className={classes.contactHeader}>
          <h1 className={classes.conHeadtxt}>Contact Us</h1>
          <span className={classes.conRightTxt}>Contact Us</span>
        </div>
      }
      {
        selectValue === contactUsSection.general &&
        <div className={classes.contactHeader}>
          <h1 className={classes.conHeadtxt}>General Inquiry</h1>
          <span className={classes.conRightTxt}><span onClick={handleInitSelect} className={classes.link}>Contact Us</span> /
            General Inquiry</span>
        </div>
      }
      {
        selectValue === contactUsSection.support &&
        <div className={classes.contactHeader}>
          <h1 className={classes.conHeadtxt}>Support / Technical Issue</h1>
          <span className={classes.conRightTxt}><span onClick={handleInitSelect} className={classes.link}>Contact Us</span> /
            Support & Technical Issue</span>
        </div>
      }
      {
        selectValue === contactUsSection.nameTag &&
        <div className={classes.contactHeader}>
          <h1 className={classes.conHeadtxt}>Name Taggingy</h1>
          <span className={classes.conRightTxt}><span onClick={handleInitSelect} className={classes.link}>Contact Us</span> /
            Name Tagging</span>
        </div>
      }
      <Grid container className={classes.contactContent}>
        <Grid item lg={9} md={12} sm={12} xs={12} style={{ paddingRight: '15px' }}>
          <StyledPagePager>
            <div className={classes.contactForm}>Feedback Form</div>
            {
              status ?
                <div className={classes.successContent}>
                  <p className={classes.successMessage}>
                    <i className={"fa fa-chevron-right"} />
                    Thank you! Your Message has been successfully sent
                  </p>
                </div>
                :
                <div className={classes.contactFormCon}>
                  <p className={classes.contactFormLabel}>
                    Subject&nbsp;<span style={{ color: '#de4437' }}>*</span>
                  </p>
                  <Grid container className={classes.selectContainer} spacing={1}>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                      <Select
                        native
                        value={selectValue}
                        variant="outlined"
                        onChange={handleChange}
                        disabled={disabledStatus}
                        className={classes.contactSelect}
                      >
                        <option value={0}>Please Select Your Message Subject</option>
                        <option value={1}>1. General Inquiry (Non support related)</option>
                        <option value={2}>2. Support / Technical Issue</option>
                        <option value={3}>3. Name Tagging / Label Address</option>
                        <option value={4}>4. Update Token Info (for Contract Owners)</option>
                      </Select>
                    </Grid>
                    {
                      selectValue !== contactUsSection.init &&
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Button onClick={handleInitSelect} variant="contained" className={classes.startOverBtn} disableRipple>
                          Start Over
                        </Button>
                      </Grid>
                    }
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      {
                        selectValue === contactUsSection.init &&
                        <p className={classes.contactSubTxt}>
                          <strong>Note:</strong> Selecting an incorrect subject could result in a delayed or non response
                        </p>
                      }
                      {
                        selectValue === contactUsSection.general &&
                        <GeneralInquiry selectId={selectValue} />
                      }
                      {
                        selectValue === contactUsSection.support &&
                        <GeneralInquiry selectId={selectValue} />
                      }
                      {
                        selectValue === contactUsSection.nameTag &&
                        <NameTagging selectId={selectValue} address={address} />
                      }
                    </Grid>
                  </Grid>
                </div>
            }
          </StyledPagePager>
        </Grid>

        <Grid item lg={3} md={12} sm={12} xs={12} className={classes.helpContent}>
          <StyledPagePager>
            <div className={classes.contactForm}>Helpful Links</div>
            <div className={classes.contactFormCon}>
              <span className={classes.contactFormLabel}>Wallets:</span>
              <div>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://pwawallet.fantom.network"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      Zilionixx PWA Wallet
                    </a>
                  </span>
                  <span className={classes.contactPopper}>Popular</span>
                </p>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://fantom.foundation/ftm-wallet"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      Zilionixx Web Wallet
                    </a>
                  </span>
                </p>
                <p className={classes.contactLastLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://medium.com/fantomfoundation/fantom-desktop-web-wallets-guide-5ee8e320b105"
                      target="_blank"
                      className={classes.contactLink}
                      rel="noreferrer"
                    >
                      Creating a wallet
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className={classes.contactFormCon}>
              <span className={classes.contactFormLabel}>Others:</span>
              <div>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://fantom.foundation/intro-to-fantom"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      What is Zilionixx?
                    </a>
                  </span>
                </p>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://fantom.foundation/fantom-faq"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      Frequently asked questions
                    </a>
                  </span>
                </p>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://fantom.foundation/ftm-staking"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      Staking on Zilionixx to earn rewards
                    </a>
                  </span>
                </p>
                <p className={classes.contactTopLink}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://fantom.foundation/how-to-set-up-a-fantom-validator"
                      target="_blank"
                      rel="noreferrer"
                      className={classes.contactLink}
                    >
                      Setting up a Validator
                    </a>
                  </span>
                </p>
                <p className={classes.contactLastLink1}>
                  <span className={classes.contactLink}>
                    <i className="fas fa-external-link-alt"></i>&nbsp;
                    <a
                      href="https://bnbridge.exchange/"
                      rel="noreferrer"
                      target="_blank"
                      className={classes.contactLink}
                    >
                      Swap assets with Zilionixx Bridge
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </StyledPagePager>
        </Grid>
      </Grid>
    </StyledPageContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  status: state.contactus.status,
})
export default connect(mapStateToProps)(ContactUs)
