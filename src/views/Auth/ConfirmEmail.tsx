import React from 'react'
import useStyles from './Authstyle'

function SuccessSignUp() {
  const classes = useStyles()

  return (
    <div className={classes.content} style={{ marginTop: '100px' }}>
      <h1 className={classes.titletext}>
        Confirm Your <span className={classes.subtitle}>Email</span>
      </h1>
      <div className={classes.registerOk}>
        <b>Congratulations!</b> Your account is successfully verified.
        <br /> You may proceed to log in with your user ID and password. <br />
        Enjoy your Zilionixx Services!
      </div>
    </div>
  )
}

export default SuccessSignUp
