import React from 'react'
import clsx from 'clsx'
import { useForm, SubmitHandler } from 'react-hook-form'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

import useStyles from './epochstyle'

interface IFormInput {
  password: string
  username: string
  email: string
}

export default function Login() {
  const classes = useStyles()
  const [values, setValues] = React.useState<IFormInput>({
    password: '',
    username: '',
    email: '',
  })

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div className={classes.root1}>
      <div className={classes.content1}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant="outlined" className={clsx(classes.textField1)}>
            <OutlinedInput
              {...register('username', {
                required: true,
              })}
              value={values.username}
              placeholder="Name"
              classes={{ input: classes.outfield }}
            />
          </FormControl>
          <FormControl variant="outlined" className={clsx(classes.textField1)}>
            <OutlinedInput
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
              placeholder="Email"
              classes={{ input: classes.outfield }}
            />
          </FormControl>
          <FormControl variant="outlined" className={clsx(classes.textField1)}>
            <OutlinedInput
              {...register('password', {
                required: true,
              })}
              value={values.password}
              type="password"
              onChange={handleChange('password')}
              placeholder="Password"
              classes={{ input: classes.outfield }}
            />
          </FormControl>
          <p style={{ marginTop: '0', fontSize: '13px', color: '#687a86' }}>
            Please access our <span style={{ color: '#288ce4' }}>Privacy Policy</span> to learn what personal data
            Disqus collects and your choices about how it is used. All users of our service are also subject to our
            <span style={{ color: '#288ce4' }}>Terms of Service</span>.
          </p>
          <Button variant="contained" type="submit" color="primary" className={classes.button}>
            <ArrowRightAltIcon />
          </Button>
        </form>
      </div>
    </div>
  )
}
