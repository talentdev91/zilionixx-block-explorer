import React from 'react'
import { connect } from 'react-redux'

import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Bluetool from './bluetooltip'
import Button from '@material-ui/core/Button'

import { StyledContainer } from '../../components/StyledContainer'
import { AppState } from '../../store/configureStore'
import { loginUser } from '../../store/actions/auth'

import useStyles from './Authstyle'
import { useHistory } from 'react-router-dom'

interface IFormInput {
    password: string
    name: string
}

function LostPassword() {
    const classes = useStyles()
    const history = useHistory()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

    }

    return (
        <StyledContainer>
            <div className={classes.root}>
                <div className={classes.content}>
                    <h1 className={classes.titletext}>
                        Forgot your password?
                    </h1>
                    <p className={classes.subtitle2}>Enter your email address below and we'll get you back on track.</p>
                    <form onSubmit={onSubmit}>
                        <FormControl variant="outlined" className={clsx(classes.textField)}>
                            <FormHelperText className={classes.label}>Email Address</FormHelperText>
                            <OutlinedInput
                                className={classes.inputField}
                                {...register('name', {
                                    required: true,
                                    minLength: { value: 2, message: 'Username must be more than 2 letters' },
                                    maxLength: { value: 20, message: 'Username must be less than 20 letters' },
                                })}
                                onChange={handleChange('name')}
                                placeholder="User Name"
                            />
                            <FormHelperText className={classes.error}>
                                'sdfsdfsd'
                            </FormHelperText>
                        </FormControl>

                        <FormControl variant="outlined" className={clsx(classes.textField)}>
                            <div className={classes.password}>
                                <FormHelperText className={classes.label}>Password</FormHelperText>
                                <Link to="/forgot" className={classes.forgot}>
                                    <p className={classes.forgotText}>Forgot your password?</p>
                                </Link>
                            </div>
                            <OutlinedInput
                                {...register('password', {
                                    required: true,
                                })}
                                value={values.password}
                                type="password"
                                onChange={handleChange('password')}
                                placeholder="Password"
                            />
                            <FormHelperText className={classes.error}>
                                {errors.password?.type === 'required' && 'Your password is invalid. Please try again.'}
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
                            <p>Don't have an account?</p>
                            <Link to="/signup" className={classes.link}>
                                <p>Click to Sign up</p>
                            </Link>
                            <Button variant="contained" type="submit" className={classes.button}>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </StyledContainer>
    )
}

export default LostPassword
