import React from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import Divider from '@material-ui/core/Divider'
// import FileBase from 'react-file-base64'
import { useStyles } from '../styles'
import { TextField, Button } from '@material-ui/core'
import { createTokenInfo } from '../../../store/actions/token'
import { StyledPagePager, StyledLink } from '../../../Styles'

interface IFormInput {
  email: string
  name: string
  contract: string
  official: string
  logo: string
  description: string
  officialcontract: string
  blog: string
  reddit: string
  slack: string
  facebook: string
  twitter: string
  bitcoin: string
  github: string
  telegram: string
  whitepaper: string
  ticker: string
  comment: string
}

interface TokenInfoDetailProps {
  createTokenInfo: (data: any, address: any) => void
}

function TokenInfo({ createTokenInfo }: TokenInfoDetailProps) {
  const initialState = {
    email: '',
    name: '',
    contract: '',
    official: '',
    logo: '',
    description: '',
    officialcontract: '',
    blog: '',
    reddit: '',
    slack: '',
    facebook: '',
    twitter: '',
    bitcoin: '',
    github: '',
    telegram: '',
    whitepaper: '',
    ticker: '',
    comment: '',
  }
  const { address } = useParams<any>()

  const [values, setValues] = React.useState<IFormInput>(initialState)

  const classes = useStyles()
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>()

  const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    createTokenInfo(values, address)
    setValues(initialState)
  }

  const clearForm = async (): Promise<void> => {
    setValues(initialState)
  }

  return (
    <Grid item xs={12} sm={11} md={10} lg={6} xl={6} style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Grid item>
        <StyledPagePager style={{ marginTop: '12px' }}>
          <div className={classes.tokenInfoTop}></div>
          <div className={classes.tokenForm}>
            <h1 className={classes.tokenInfoToptitle}>Zilionixx Token Information Update Form</h1>
            <div className={classes.tokenInfoContent}>
              <p>Notes:</p>
              <br />
              <p>1. Kindly ensure that the token information is complete and verified.</p>
              <p>2. The deployed token contract must be compliant.</p>
              <p> 3. The contract source code must be verified on Zilionixx.</p>
              <br />
              <p> To update your ZNX token information, please provide us with the following information:</p>
            </div>
            <Divider />
            <div className={classes.tokenInfoContent}>
              <p>
                <span>
                  <b>kirylkrauchuk@gmail.com</b> <StyledLink to="/">Switch account</StyledLink>
                </span>
                <span style={{ float: 'right' }}>Draft saved</span>
              </p>
            </div>
          </div>
        </StyledPagePager>
      </Grid>
      <form onSubmit={onSubmit}>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Email&nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                {...register('email', {
                  required: true,
                })}
                onChange={handleChange('email')}
                autoFocus
                id="email"
                value={values.email}
                placeholder="Your Email"
                type="text"
                fullWidth={false}
              />
              <p>{errors.email?.type === 'required' && 'This is a required question'}</p>
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Requester's Name &nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                onChange={handleChange('name')}
                autoFocus
                id="name"
                value={values.name}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Token Contract Address &nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                autoFocus
                onChange={handleChange('contract')}
                id="contract"
                value={values.contract}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Official Site URL&nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                autoFocus
                onChange={handleChange('official')}
                id="official"
                value={values.official}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Link to download a 128x128px png icon logo&nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                autoFocus
                id="logo"
                value={values.logo}
                onChange={handleChange('logo')}
                placeholder="Your Answer"
                type="text"
                fullWidth
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>
                Project Description&nbsp;<span className={classes.required}>*</span>
              </p>
              <TextField
                autoFocus
                id="description"
                value={values.description}
                onChange={handleChange('description')}
                placeholder="Your Answer"
                type="text"
                fullWidth
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Official Contact Email Address</p>
              <TextField
                autoFocus
                id="officialcontract"
                value={values.officialcontract}
                onChange={handleChange('officialcontract')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Blog (optional)</p>
              <TextField
                autoFocus
                id="blog"
                value={values.blog}
                placeholder="Your Answer"
                onChange={handleChange('blog')}
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Reddit (optional)</p>
              <TextField
                autoFocus
                id="reddit"
                value={values.reddit}
                onChange={handleChange('reddit')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Slack/Discord (optional)</p>
              <TextField
                autoFocus
                id="slack"
                value={values.slack}
                onChange={handleChange('slack')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Facebook (optional)</p>
              <TextField
                autoFocus
                id="facebook"
                value={values.facebook}
                onChange={handleChange('facebook')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Twitter (optional)</p>
              <TextField
                autoFocus
                id="twitter"
                value={values.twitter}
                onChange={handleChange('twitter')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Bitcointalk (optional)</p>
              <TextField
                autoFocus
                id="bitcoin"
                value={values.bitcoin}
                onChange={handleChange('bitcoin')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Github (optional)</p>
              <TextField
                autoFocus
                id="github"
                value={values.github}
                onChange={handleChange('github')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to Telegram (optional)</p>
              <TextField
                autoFocus
                id="telegram"
                value={values.telegram}
                onChange={handleChange('telegram')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Link to whitepaper (optional)</p>
              <TextField
                autoFocus
                id="whitepaper"
                value={values.whitepaper}
                onChange={handleChange('whitepaper')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Price data - coin ticker (optional)</p>
              <TextField
                autoFocus
                id="ticker"
                value={values.ticker}
                onChange={handleChange('ticker')}
                placeholder="Your Answer"
                type="text"
                fullWidth={false}
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <StyledPagePager style={{ marginTop: '12px' }}>
            <div className={classes.tokenForm}>
              <p className={classes.tokenInfoContent}>Comments</p>
              <TextField
                autoFocus
                id="comment"
                value={values.comment}
                onChange={handleChange('comment')}
                placeholder="Your Answer"
                type="text"
                fullWidth
              />
            </div>
          </StyledPagePager>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit" size="large" className={classes.tokenInfobutton}>
            Submit
          </Button>
          <Button variant="text" color="primary" size="large" onClick={clearForm} className={classes.tokenInfoClear}>
            Clear Form
          </Button>
        </Grid>
      </form>
    </Grid>
  )
}

export default connect(null, { createTokenInfo })(TokenInfo)
