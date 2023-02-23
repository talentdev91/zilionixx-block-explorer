import React, { useState } from 'react'
//material-ui components
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, FormHelperText } from '@material-ui/core'
import { connect } from 'react-redux'

import useStyles from './ModalStyle'
import { addTokenInfo } from '../../../../../../store/actions/admin'

interface AddModalProps {
  addTokenInfo: (email: any, name: any, tokenAddress: any, officialUrl: any, logoIcon: any, description: any,
    officialEmailAdd: any, blog: any, reddit: any, slack: any, facebook: any, twitter: any,
    bitcointalk: any, github: any, telegram: any, whitepaper: any, priceData: any, comments: any) => void
}

function AddModal({ addTokenInfo }: AddModalProps) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [tokenAddress, setTokenAddress] = useState('')
  const [officialUrl, setOfficialUrl] = useState('')
  const [logoIcon, setLogoIcon] = useState('')
  const [description, setDescription] = useState('')
  const [officialEmailAdd, setOfficialEmailAdd] = useState('')
  const [blog, setBlog] = useState('')
  const [reddit, setReddit] = useState('')
  const [slack, setSlack] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [bitcointalk, setBitcointalk] = useState('')
  const [github, setGithub] = useState('')
  const [telegram, setTelegram] = useState('')
  const [whitepaper, setWhitepaper] = useState('')
  const [priceData, setPriceData] = useState('')
  const [comments, setComments] = useState('')

  const [errorEmail, setErrorEmail] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorTokenAddress, setErrorAddress] = useState('')
  const [errorOffiUrl, setErrorOffiUrl] = useState('')
  const [errorLogoIcon, setErrorLogoIcon] = useState('')
  const [errorDesc, setErrorDesc] = useState('')
  const [errorOffiEmailAdd, setErrorOffiEmailAdd] = useState('')
  const [errorBlog, setErrorBlog] = useState('')
  const [errorReddit, setErrorReddit] = useState('')
  const [errorSlack, setErrorSlack] = useState('')
  const [errorFacebook, setErrorFacebook] = useState('')
  const [errorTwitter, setErrorTwitter] = useState('')
  const [errorBitcointalk, setErrorBitcointalk] = useState('')
  const [errorGithub, setErrorGithub] = useState('')
  const [errorTelegram, setErrorTelegram] = useState('')
  const [errorWhitepaper, setErrorWhitepaper] = useState('')
  const [errorPriceData, setErrorPriceData] = useState('')

  const handleOpen = () => {
    setErrorEmail('')
    setErrorName('')
    setErrorAddress('')
    setErrorOffiUrl('')
    setErrorLogoIcon('')
    setErrorDesc('')
    setErrorOffiEmailAdd('')
    setErrorBlog('')
    setErrorReddit('')
    setErrorSlack('')
    setErrorFacebook('')
    setErrorTwitter('')
    setErrorBitcointalk('')
    setErrorGithub('')
    setErrorTelegram('')
    setErrorWhitepaper('')
    setErrorPriceData('')

    setEmail('')
    setName('')
    setTokenAddress('')
    setOfficialUrl('')
    setLogoIcon('')
    setDescription('')
    setOfficialEmailAdd('')
    setBlog('')
    setReddit('')
    setSlack('')
    setFacebook('')
    setTwitter('')
    setBitcointalk('')
    setGithub('')
    setTelegram('')
    setWhitepaper('')
    setPriceData('')
    setComments('')

    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleSubmit = async () => {
    let statusFlag = true

    let regEmail = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{1,9}[\.][a-z]{1,5}/g
    let regUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g
    if (!regEmail.test(email)) {
      setErrorEmail('Entered value does not match email format')
      statusFlag = false
    } else if (!email) {
      setErrorEmail('Please enter a valid email address.')
      statusFlag = false
    } else {
      setErrorEmail('')
    }

    if (!name) {
      setErrorName('Username is invalid')
      statusFlag = false
    } else if (name.length < 5 || name.length > 30) {
      setErrorName('Username is invalid')
      statusFlag = false
    } else {
      setErrorName('')
    }

    if (!tokenAddress) {
      setErrorAddress('Token Contract Address is invalid')
      statusFlag = false
    } else if (tokenAddress.length !== 42) {
      setErrorAddress('Token Contract Address is invalid')
      statusFlag = false
    } else {
      setErrorAddress('')
    }

    if (!regUrl.test(officialUrl)) {
      setErrorOffiUrl('Entered value does not match url format')
      statusFlag = false
    } else if (!officialUrl) {
      setErrorOffiUrl('Please enter a Official Site URL.')
      statusFlag = false
    } else {
      setErrorOffiUrl('')
    }

    if (!logoIcon) {
      setErrorLogoIcon('Please enter a value')
      statusFlag = false
    } else {
      setErrorLogoIcon('')
    }

    if (!description) {
      setErrorDesc('Please enter a project description')
      statusFlag = false
    } else {
      setErrorDesc('')
    }

    if (officialEmailAdd.length> 0 && !regUrl.test(officialEmailAdd)) {
      setErrorOffiEmailAdd('Entered value does not match Official Contact Email Address format')
      statusFlag = false
    } else {
      setErrorOffiEmailAdd('')
    }

    if (blog.length > 0 && !regUrl.test(blog)) {
      setErrorBlog('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorBlog('')
    }

    if (slack.length > 0 && !regUrl.test(slack)) {
      setErrorSlack('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorSlack('')
    }

    if (reddit.length > 0 && !regUrl.test(reddit)) {
      setErrorReddit('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorReddit('')
    }

    if (facebook.length > 0 && !regUrl.test(facebook)) {
      setErrorFacebook('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorFacebook('')
    }

    if (twitter.length > 0 && !regUrl.test(twitter)) {
      setErrorTwitter('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorTwitter('')
    }

    if (bitcointalk.length > 0 && !regUrl.test(bitcointalk)) {
      setErrorBitcointalk('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorBitcointalk('')
    }

    if (github.length > 0 && !regUrl.test(github)) {
      setErrorGithub('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorGithub('')
    }

    if (telegram.length > 0 && !regUrl.test(telegram)) {
      setErrorTelegram('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorTelegram('')
    }

    if (whitepaper.length > 0 && !regUrl.test(whitepaper)) {
      setErrorWhitepaper('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorWhitepaper('')
    }

    if (priceData.length > 0 && !regUrl.test(priceData)) {
      setErrorPriceData('Entered value does not match url format')
      statusFlag = false
    } else {
      setErrorPriceData('')
    }

    if (statusFlag) {
      addTokenInfo(email, name, tokenAddress, officialUrl, logoIcon, description, officialEmailAdd, blog, reddit, slack, facebook, 
        twitter, bitcointalk, github, telegram, whitepaper, priceData, comments)
      setOpen(false)
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} className={classes.addBtn} size="large" disableRipple>
        <span>Add</span>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title">Token Information Update</DialogTitle>
        <DialogContent>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Email :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setEmail(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorEmail}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Requestor's name :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setName(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorName}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Token Contract Address :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setTokenAddress(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorTokenAddress}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Official Site URL :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setOfficialUrl(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorOffiUrl}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Logo icon :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setLogoIcon(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorLogoIcon}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Project Description :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setDescription(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorDesc}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Official Contact Email Address :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setOfficialEmailAdd(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorOffiEmailAdd}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Blog :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setBlog(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorBlog}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Reddit :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setReddit(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorReddit}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Slack/Discord :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setSlack(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorSlack}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Facebook :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setFacebook(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorFacebook}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Twitter :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setTwitter(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorTwitter}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Bitcointalk :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setBitcointalk(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorBitcointalk}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Github :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setGithub(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorGithub}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to Telegram :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setTelegram(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorTelegram}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Link to whitepaper :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setWhitepaper(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorWhitepaper}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Price data - coin ticker :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setPriceData(event.currentTarget.value as string)}/>
            <FormHelperText className={classes.error}>{errorPriceData}</FormHelperText>
          </div>
          <div className={classes.tokenInfoField}>
            <span className={classes.modalSubtitle}>Comments :</span>
            <InputBase placeholder="Your answer" className={classes.inputField}
              onChange={(event) => setComments(event.currentTarget.value as string)}/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} className={classes.viewBtn} disableRipple>
            Add
          </Button>
          <Button onClick={handleClose} className={classes.sendBtn} disableRipple>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { addTokenInfo })(AddModal)