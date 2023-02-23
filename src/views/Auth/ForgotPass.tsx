import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputBase from '@material-ui/core/InputBase'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import { StyledContainer } from '../../components/StyledContainer'

import useStyles from './Authstyle'

interface IFormInput {
  email: string
}
export default function Forgotpass() {
  const classes = useStyles()
  const [values, setValues] = React.useState<IFormInput>({
    email: '',
  })

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <StyledContainer>
      <div className={classes.root}>
        <div className={classes.content}>
          <h1 className={classes.titletext}>Forgot your password?</h1>
          <p className={classes.subtitle2}>Enter your email address below and we'll get you back on track.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl variant="outlined" className={clsx(classes.textField)}>
              <FormHelperText id="standard-weight-helper-text" className={classes.label}>
                Email Address
              </FormHelperText>
              <InputBase
                className={classes.inputField}
                id="outlined-adornment-weight"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email address',
                  },
                })}
                value={values.email}
                onChange={handleChange('email')}
                aria-describedby="outlined-weight-helper-text"
                placeholder="Email Address"
              />
              <FormHelperText id="standard-weight-helper-text" className={classes.error}>
                {errors.email?.type === 'required' && 'Please enter a valid email address.'}
                {errors?.email?.message}
              </FormHelperText>
            </FormControl>

            <div className={clsx(classes.subtitle2, classes.signup)}>
              <Link to="/login" className={classes.link}>
                <p>Back to Sign in</p>
              </Link>
              <Button variant="contained" color="primary" type="submit" className={classes.submitButton}>
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </StyledContainer>
  )
}
