import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { FormHelperText, InputBase } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import SuccessSign from './NewSignUp'
import { StyledContainer } from '../../components/StyledContainer'
import { AppState } from '../../store/configureStore'
import { registerUser } from '../../store/actions/auth'
import Alerts from '../../components/Alert/RegisterAlert'
import useStyles from './Authstyle'
const { passwordStrength } = require('check-password-strength')

interface SignupProps {
  registerUser: (values: any) => void
  status: any
  serverError: any
}

function Signup({ registerUser, status, serverError }: SignupProps) {
  const classes = useStyles()
  const [openAlert, setOpenAlert] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setConfirmPassword] = useState('')
  const [termsChecked, setTermsChecked] = useState(false)
  const [newsletterChecked, setNewsletterChecked] = useState(false)

  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')

  useEffect(() => {
    if (serverError !== '') {
      setOpenAlert(true)
    }
  }, [serverError])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsChecked(!termsChecked)
  }
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterChecked(!newsletterChecked)
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pwd = event.target.value
    if (pwd.length > 5) {
      setErrorPassword(passwordStrength(pwd).value)
    }
    setPassword(event.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let statusFlag = true
    if (!name) {
      setErrorName('Username is invalid')
      statusFlag = false
    } else if (name.length < 5 || name.length > 30) {
      setErrorName('Username is invalid')
      statusFlag = false
    } else {
      setErrorName('')
    }
    //eslint-disable-next-line
    let regEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,9}[\.][a-z]{1,5}/g
    if (!regEmail.test(email)) {
      setErrorEmail('Entered value does not match email format')
      statusFlag = false
    } else if (!email) {
      setErrorEmail('Please enter a valid email address.')
      statusFlag = false
    } else {
      setErrorEmail('')
    }
    if (!password || password.length < 5) {
      setErrorPassword('Your password must be at least 5 characters long.')
      statusFlag = false
    } else {
      setErrorPassword('')
    }
    if (!passwordConfirm || passwordConfirm.length < 5) {
      setErrorPasswordConfirm('Your password must be at least 5 characters long.')
      statusFlag = false
    } else if (password !== passwordConfirm) {
      setErrorPasswordConfirm('Password does not match, please check again.')
      statusFlag = false
    } else {
      setErrorPasswordConfirm('')
    }
    if (statusFlag) {
      registerUser({
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        conditionCheck: termsChecked,
        newsletterCheck: newsletterChecked,
      })
    }
  }

  const txt = (
    <p className={classes.subtitle3}>
      I agree to the{' '}
      <Link to="/terms" className={classes.linkTerms}>
        Terms and Coditions
      </Link>
    </p>
  )
  const txt1 = (
    <p className={classes.subtitle3}>
      I agree to receive the ZnxScan newsletter and understand that I can unsubscribe at any time.
    </p>
  )
  return (
    <StyledContainer>
      <div className={classes.root}>
        {status ? (
          <SuccessSign />
        ) : (
          <div className={classes.content}>
            <h1 className={classes.titletext}>
              Register a <span className={classes.subtitle}>New</span> Account
            </h1>
            <p className={classes.subtitle2}>Full out the form to get started</p>
            <Alerts openAlert={openAlert} content={serverError} />
            <form onSubmit={handleSubmit}>
              <FormControl variant="outlined" className={clsx(classes.textField)}>
                <FormHelperText className={classes.label}>UserName</FormHelperText>
                <InputBase
                  className={classes.inputField}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Username has to be from 5 to 30 characters in length, only alphanumeric characters allowed."
                />
                <FormHelperText className={classes.error}>{errorName}</FormHelperText>
              </FormControl>
              <FormControl variant="outlined" className={clsx(classes.textField)}>
                <FormHelperText className={classes.label}>Email Address</FormHelperText>
                <InputBase
                  className={classes.inputField}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="A confirmation code will be sent to this address"
                />
                <FormHelperText className={classes.error}>{errorEmail}</FormHelperText>
              </FormControl>
              <div className={classes.password}>
                <FormControl variant="outlined" className={clsx(classes.textField)}>
                  <FormHelperText className={classes.label}>Password</FormHelperText>
                  <InputBase
                    className={classes.inputField}
                    onChange={handlePassword}
                    placeholder="******"
                    type="password"
                  />
                  <FormHelperText className={classes.error}>{errorPassword}</FormHelperText>
                </FormControl>
                <div style={{ width: '40px' }}></div>
                <FormControl variant="outlined" className={clsx(classes.textField)}>
                  <FormHelperText className={classes.label}>Confirm Password</FormHelperText>
                  <InputBase
                    className={classes.inputField}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="******"
                    type="password"
                  />
                  <FormHelperText className={classes.error}>{errorPasswordConfirm}</FormHelperText>
                </FormControl>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsChecked}
                    onChange={handleChange}
                    className={classes.checkcolor}
                    size="small"
                  />
                }
                label={txt}
                className={classes.subtitle2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={newsletterChecked}
                    onChange={handleChange1}
                    className={classes.checkcolor}
                    size="small"
                  />
                }
                label={txt1}
                className={classes.subtitle2}
              />
              <div className={clsx(classes.subtitle2, classes.signup)}>
                <p>Already have an account?</p>
                <Link to="/login" className={classes.link}>
                  <p>&nbsp;Click to Sign in&nbsp;</p>
                </Link>
                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                  Create an Account
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  serverError: state.auth.error,
  status: state.auth.status,
})
export default connect(mapStateToProps, { registerUser })(Signup)
