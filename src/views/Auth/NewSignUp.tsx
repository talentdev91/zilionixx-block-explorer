import React from 'react'
import useStyles from './Authstyle'
import { StyledLink } from '../../Styles'

function SuccessSignUp() {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <h1 className={classes.titletext}>
        Register a <span className={classes.subtitle}>New</span> Account
      </h1>
      <div className={classes.registerOk}>
        Your account has been successfully registered and pending for email verification.
      </div>
      <div className={classes.successTxt}>
        <p>
          We have sent an email with a confirmation link to your email address. In order to complete the sign-up
          process, please click on the confirmation link.
        </p>
        <p>
          If you do not receive a confirmation email, please check your spam folder and ensure your spam filters allow
          emails from noreply@FtmScan.com. Also, please verify that you entered a valid email address during
          registration.
        </p>
        <p>
          If you need any assistance, please
          <StyledLink to="/contactus">
            <span> contact us</span>
          </StyledLink>
          .
        </p>
      </div>
    </div>
  )
}

export default SuccessSignUp
