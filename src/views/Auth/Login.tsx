import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import clsx from 'clsx'
import { Link } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Bluetool from './bluetooltip'
import Button from '@material-ui/core/Button'
import Alerts from '../../components/Alert/LoginAlert'
import { StyledContainer } from '../../components/StyledContainer'
import { AppState } from '../../store/configureStore'
import { loginUser, logoutUser } from '../../store/actions/auth'
import useStyles from './Authstyle'
import { useHistory } from 'react-router-dom'
import store from '../../store/configureStore'
import { GetRegistRequest } from '../../store/actions/action.types'

interface LoginProps {
  loginUser: (values: any) => void
  logoutUser: () => void
  confirm: any
  user: any
  loading: boolean
  isAuthenticated: boolean
  error: any
}

function Login({ loginUser, logoutUser, confirm, user, loading, isAuthenticated, error }: LoginProps) {
  const classes = useStyles()
  const history = useHistory()

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [state, setState] = React.useState({
    checkedA: false,
  })

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const logoutStatus = urlParams.get('cmd')
  const txrouter = urlParams.get('returntx')

  useEffect(() => {
    if (logoutStatus === 'logout') {
      logoutUser()
      history.push('/login')
    } else if (isAuthenticated) {
      if (txrouter) {
        history.push(`/tx/${txrouter}`)
      } else {
        history.push('/myaccount')
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, confirm, isAuthenticated])

  const gotoSignup = () => {
    store.dispatch({
      type: 'GET_REGIST_REQUEST',
      payload: {
        status: false,
        error: '',
      },
    } as GetRegistRequest)
  }

  const handleRemeber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !password) {
      setErrorName('Username is required.')
      setErrorPassword('Your password is invalid. Please try again.')
    } else {
      console.log('name: ', name)
      loginUser({ name: name, password: password })
    }
  }

  useEffect(() => {
    if (error !== '') {
      setOpenAlert(true)
    }
  }, [error])

  return (
    <StyledContainer>
      <div className={classes.root}>
        <div className={classes.content}>
          <h1 className={classes.titletext}>
            Welcome <span className={classes.subtitle}>Back</span>
          </h1>
          <p className={classes.subtitle2}>Login to your account</p>
          {confirm === 1 && (
            <div className={classes.verify}>
              Please verify your email address first. If you have misplaced your welcome email you can have it
              <br />
              <Link to={`/confirmemail/${user.email}/${user.id}`}>
                <span className={classes.resend}>[resend again].</span>
              </Link>
            </div>
          )}
          <Alerts openAlert={openAlert} />
          <form onSubmit={handleSubmit}>
            <FormControl variant="outlined" className={clsx(classes.textField)}>
              <FormHelperText className={classes.label}>UserName</FormHelperText>
              <InputBase
                className={classes.inputField}
                onChange={(event) => setName(event.target.value)}
                placeholder="User Name"
              />
              <FormHelperText className={classes.error}>{errorName && 'Username is required'}</FormHelperText>
            </FormControl>

            <FormControl variant="outlined" className={clsx(classes.textField)}>
              <div className={classes.password}>
                <FormHelperText className={classes.label}>Password</FormHelperText>
                <Link to="/forgot" className={classes.forgot}>
                  <p className={classes.forgotText}>Forgot your password?</p>
                </Link>
              </div>
              <InputBase
                className={classes.inputField}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
              <FormHelperText className={classes.error}>
                {errorPassword && 'Your password is invalid. Please try again.'}
              </FormHelperText>
            </FormControl>
            <Bluetool title="Please do not check this box if you are using public or shared PC">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedA}
                    onChange={handleRemeber}
                    name="checkedA"
                    className={classes.checkcolor}
                    size="small"
                  />
                }
                label="Remember & Auto Login"
                className={classes.subtitle2}
              />
            </Bluetool>
            <div className={clsx(classes.subtitle2, classes.signup)}>
              <p>Don't have an account?</p>&nbsp;
              <Link to="/signup" className={classes.link} onClick={gotoSignup}>
                <p>Click to Sign up</p>
              </Link>
              <Button variant="contained" type="submit" className={classes.submitButton} disableRipple>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  confirm: state.auth.confirm,
  user: state.auth.user,
  loading: state.auth.loadingLogin,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
})
export default connect(mapStateToProps, { loginUser, logoutUser })(Login)
