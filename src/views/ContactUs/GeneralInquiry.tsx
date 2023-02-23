import React, { useState } from 'react'
import useStyles from './style'
import { Grid, Button, FormControl, FormHelperText, InputBase, TextareaAutosize, Divider } from '@material-ui/core'
import { contactUsSection } from '../../common/consts'
import { connect } from 'react-redux'
import { requestGeneralInquiry } from '../../store/actions/contactus'
interface GeneralInquiryProps {
    selectId: String
    requestGeneralInquiry: (name: string, email: string, message: string) => void
}

function GeneralInquiry({ requestGeneralInquiry, selectId }: GeneralInquiryProps) {
    const classes = useStyles()

    let initMsg
    if (selectId === contactUsSection.general) {
        initMsg = ''
    } else if (selectId === contactUsSection.support) {
        initMsg = 'Where applicable please provide the following information \n\n1. Txn hash (Transaction receipt): \n\n2. Wallet provider Or exchange service: \n\n3. Your question/issue:'
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(initMsg)
    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let status = true
        if (!name) {
            setErrorName(true)
            status = false
        }
        //eslint-disable-next-line
        let regEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,9}[\.][a-z]{1,5}/g;
        if (!regEmail.test(email)) {
            setErrorEmail(true)
            status = false
        }
        if (!email) {
            setErrorEmail(true)
            status = false
        }
        if (!message) {
            setErrorMessage(true)
            status = false
        }
        if (status) {
            requestGeneralInquiry(name, email, message)
        }
    }

    return (
        <div>
            <Divider className={classes.divider} />
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <FormControl variant="outlined" className={classes.textField}>
                            <FormHelperText className={classes.label}>Name&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;<span className={classes.helperText}>(required)</span></FormHelperText>
                            <InputBase
                                className={classes.inputField}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="John Doe"
                            />
                            <FormHelperText className={classes.error}>
                                {errorName && 'Please enter your name'}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <FormControl variant="outlined" className={classes.textField}>
                            <FormHelperText className={classes.label}>Email Address&nbsp; <span style={{ color: '#de4437' }}>*</span>&nbsp;<span className={classes.helperText}>(required)</span></FormHelperText>
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
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <FormControl variant="outlined" className={classes.textField}>
                            <FormHelperText className={classes.label}>Message (English only)&nbsp; <span style={{ color: '#de4437' }}>*</span></FormHelperText>
                            <TextareaAutosize
                                className={classes.textAreaField}
                                defaultValue={message}
                                minRows={15}
                                maxRows={15}
                                onChange={(event) => setMessage(event.currentTarget.value as string)}
                            />
                            <FormHelperText className={classes.error}>
                                {errorMessage && 'Please enter your name'}
                            </FormHelperText>
                        </FormControl>
                    </Grid>
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
export default connect(null, { requestGeneralInquiry })(GeneralInquiry)