import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import { StyledDarkTooltip } from '../../../../Styles'
import { Grid, Divider, FormHelperText, InputBase } from '@material-ui/core'
import { useStyles } from '../Style'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getAccountSetting, editAccountSetting } from '../../../../store/actions/user'
import Alert from '../../../../components/Alert'

interface Props {
  getAccountSetting: (name: string) => void
  editAccountSetting: (
    name: string,
    email: string,
    oldPassword: string,
    password: string,
    passwordConfirm: string,
  ) => void
  user: any
  loading: boolean
  error: string
  name: string
  email: string
  loadingEdit: boolean
  editMsg: string
  editError: string
}

function TabsWrappedLabel({
  getAccountSetting,
  editAccountSetting,
  user,
  loading,
  error,
  name,
  email,
  loadingEdit,
  editMsg,
  editError,
}: Props) {
  const classes = useStyles()

  const [oldPassword, setOldPassword] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')

  const [openAlert, setOpenAlert] = React.useState(false)
  const [alertContent, setAlertContent] = React.useState('')
  const [alertType, setAlertType] = React.useState('')

  const [errorPassword, setErrorPassword] = React.useState('')
  const [errorPasswordConfirm, setErrorPasswordConfirm] = React.useState('')

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }

  React.useEffect(() => {
    getAccountSetting(user.name)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name])

  React.useEffect(() => {
    console.log('editMsg', editMsg)
    console.log('editError', editError)

    if (editMsg) {
      setAlertContent(editMsg)
      setOpenAlert(true)
      setAlertType('success')
    }
    if (editError) {
      setAlertContent(editError)
      setOpenAlert(true)
      setAlertType('error')
    }
  }, [editMsg, editError])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value)
  }

  const handleSubmit = () => {
    let status = true
    if (!password || password.length < 5) {
      setErrorPassword('Your password must be at least 5 characters long.')
      status = false
    }
    if (!passwordConfirm || passwordConfirm.length < 5) {
      setErrorPasswordConfirm('Your password must be at least 5 characters long.')
      status = false
    }
    if (password !== passwordConfirm) {
      setErrorPasswordConfirm('Password does not match, please check again.')
      status = false
    }
    if (status) {
      editAccountSetting(name, email, oldPassword, password, passwordConfirm)
    }
  }
  const handleChangeNewPwd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorPassword('')
    setPassword(event.currentTarget.value)
  }
  const handleChangePwdConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(event.currentTarget.value)
    setErrorPasswordConfirm('')
  }

  return (
    <div>
      <Grid item xs={9} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
        <Grid item xs={12} className={classes.profileLabel}>
          YOUR USER LOGIN SETTINGS
        </Grid>
        <Alert openAlert={openAlert} alertContent={alertContent} closeAlert={handleCloseAlert} alertType={alertType} />

        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            <b>UserName</b>
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            {name}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Email address
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip title="You will need to reconfirm your email address if changed" arrow placement="top">
                <OutlinedInput placeholder="User Name" readOnly value={email} className={classes.profileInput} />
              </StyledDarkTooltip>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-envelope"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Enter OLD password
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip title="Leave the password box empty if no changes" arrow placement="top">
                <InputBase
                  className={classes.inputField}
                  onChange={handleChange}
                  placeholder="Old Password"
                  type="password"
                  value={oldPassword}
                />
              </StyledDarkTooltip>
              {/* <FormHelperText className={classes.error}>{errorPassword}</FormHelperText> */}
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-lock"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Enter NEW password
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip title="Leave the password box empty if no changes" arrow placement="top">
                <InputBase
                  className={classes.inputField}
                  onChange={handleChangeNewPwd}
                  placeholder="New Password"
                  type="password"
                  value={password}
                />
              </StyledDarkTooltip>
              <FormHelperText className={classes.error}>{errorPassword}</FormHelperText>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-lock"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Re-Confirm password
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip
                title="Re-enter your password confirmation if you changed your password above"
                arrow
                placement="top"
              >
                <InputBase
                  className={classes.inputField}
                  onChange={handleChangePwdConfirm}
                  placeholder="Old Password"
                  type="password"
                  value={passwordConfirm}
                />
              </StyledDarkTooltip>
              <FormHelperText className={classes.error}>{errorPasswordConfirm}</FormHelperText>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-lock"></i>
            </div>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Divider className={classes.profileDivider} />
        </Grid>
        <Grid item xs={12} className={classes.profileLabel}>
          <div>Zilionixx PROFILE INFO</div>
          <div className={classes.profileStatus}>
            <b>Status:</b>&nbsp;User
          </div>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            <StyledDarkTooltip
              title="Your PUBLIC Profile information can be viewed publicly.Please do not enter sensitive information like your private keys here."
              arrow
              placement="top"
            >
              <span>
                <b>Public Profile Name</b>&nbsp;
                <span style={{ color: '#00c9a7' }}>
                  <i className="far fa-question-circle"></i>
                </span>
              </span>
            </StyledDarkTooltip>
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip
                title="This is your public user profile name (Alphanumeric with minimum of 7 and not more than 35 characters)."
                arrow
                placement="top"
              >
                <OutlinedInput placeholder="Public user profile name" className={classes.profileInput} />
              </StyledDarkTooltip>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-user"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Public Profile Picture
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <div>
              <img src="/images/profile-image.png" alt="dailytrans" className={classes.profileAvarta} />
            </div>
            <div>
              <StyledDarkTooltip title="Select your Profile Picture Type" arrow placement="top">
                <span className={classes.profileSelect}>Select</span>
              </StyledDarkTooltip>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Public Profile Bio
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip title="Tell us more about yourself (Up to 155 characters)" arrow placement="top">
                <OutlinedInput placeholder="Public bio profile" className={classes.profileInput} />
              </StyledDarkTooltip>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="far fa-address-book"></i>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} className={classes.profileGrid}>
            Profile Website
          </Grid>
          <Grid item xs={8} className={classes.profileGrid}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <StyledDarkTooltip
                title="Your website URL including the https or https <br>(i.e https://yourdomain.com )"
                arrow
                placement="top"
              >
                <OutlinedInput placeholder="https://yourwebsite.com" className={classes.profileInput} />
              </StyledDarkTooltip>
            </FormControl>
            <div className={classes.profileIcon}>
              <i className="fas fa-globe"></i>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.profileDivider} />
        </Grid>
        <Grid item xs={12} className={classes.profileLabel}>
          MONTHLY NEWSLETTER SUBSCRIPTION AND GIVEAWAYS
        </Grid>
        <Grid item xs={4} className={classes.profileGrid}>
          Newsletter
        </Grid>
        <Grid item xs={8} className={classes.profileGrid}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange1}
                name="checkedA"
                color="primary"
                size="small"
              />
            }
            label="(click to Subscribe for Newsletter)"
          />
        </Grid>
        <Grid item xs={4} className={classes.profileGrid}></Grid>
        {!state.checkedA && (
          <Grid item xs={8} className={classes.profileOptGrid}>
            <p className={classes.profileOptLabel}>Please let us know why you unsubscribed:</p>

            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="email" control={<Radio />} label="I no longer want to receive these emails" />
                <FormControlLabel value="list" control={<Radio />} label="I never signed up for this mailing list" />
                <FormControlLabel value="inapp" control={<Radio />} label="The emails are inappropriate" />
                <FormControlLabel value="spam" control={<Radio />} label="The emails are spam and should be reported" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Grid>
        )} */}

        <Grid item xs={12}>
          <Divider className={classes.profileDivider} />
        </Grid>
        <Grid item xs={12} className={classes.profileLastGrid}>
          <div>
            <span className={classes.profileSelect} onClick={handleSubmit}>
              Save Changes
            </span>
            <span className={classes.profileCancel}>Cancel</span>
          </div>
          <div>
            <span className={classes.profileDelete}>
              <i className="far fa-trash-alt"></i>&nbsp;Delete Account
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
  loading: state.user.loadingOverview,
  error: state.user.overviewError,
  name: state.user.name,
  email: state.user.email,
  loadingEdit: state.user.loadingEditProfile,
  editMsg: state.user.editProfileMsg,
  editError: state.user.editProfileError,
})
export default connect(mapStateToProps, { getAccountSetting, editAccountSetting })(TabsWrappedLabel)
