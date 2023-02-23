import React from 'react'
import { connect, useSelector } from 'react-redux'

import { AppState } from '../../../../../store/configureStore'

//material-ui components
import { createToken, updateToken } from '../../../../../store/actions/token'
import {
  DialogActions,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from '@material-ui/core'

interface createTokenProps {
  createToken: (data: any) => void
  updateToken: (data: any) => void
  clearData: () => void
  handleClose: () => void
  id: any
  setCurrentId: any
  open: any
  data: any
  setData: any
  initialState: any
}

function KeepMountedModal({
  createToken,
  id,
  open,
  data,
  setData,
  initialState,
  handleClose,
  clearData,
  updateToken,
}: createTokenProps) {
  // const initialState = {
  //   email: '',
  //   name: '',
  //   contract: '',
  //   official: '',
  //   logo: '',
  //   description: '',
  //   officialcon: '',
  //   blog: '',
  //   reddit: '',
  //   slack: '',
  //   facebook: '',
  //   twitter: '',
  //   bitcoin: '',
  //   github: '',
  //   telegram: '',
  //   whitepaper: '',
  //   ticker: '',
  //   comment: '',
  // }
  // console.log(id)
  // const [data, setData] = React.useState(initialState)
  // const handleChange = (prop: keyof IFormInput) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, [prop]: event.target.value })
  // }

  const tokenDetails = useSelector((state: AppState) =>
    id ? state.token.getTokenInfos.find((c: any) => c._id === id) : null,
  )

  React.useEffect(() => {
    if (tokenDetails) setData(tokenDetails)
  }, [tokenDetails, setData])

  // React.useEffect(() => {
  //   if (tokenDetails) {
  //     setData(tokenDetails)
  //   } else {
  //     setData({
  //       address: '',
  //       name: '',
  //       type: '',
  //       symbol: '',
  //     })
  //   }
  // }, [tokenDetails, open])
  // const clearData = () => {
  //   setData(initialState)
  //   setCurrentId(0)
  // }
  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    handleClose()
    if (id === 0) createToken(data)
    else updateToken(data)
    clearData()
  }

  return (
    <Dialog
      open={open}
      onClose={() => {
        setData(initialState)
        handleClose()
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Contact Details</DialogTitle>
      <DialogContent>
        <DialogContentText>{`To ${id === 0 ? 'add' : 'update'} your contact details from here`}</DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="text"
          fullWidth
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="name"
          label="Full Name"
          type="name"
          fullWidth
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="contract"
          label="Contract"
          type="text"
          fullWidth
          value={data.contract}
          onChange={(e) => setData({ ...data, contract: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="official"
          label="Official"
          type="text"
          fullWidth
          value={data.official}
          onChange={(e) => setData({ ...data, official: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="logo"
          label="Logo"
          type="text"
          fullWidth
          value={data.logo}
          onChange={(e) => setData({ ...data, logo: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="officialcon"
          label="Officialcon"
          type="text"
          fullWidth
          value={data.officialcon}
          onChange={(e) => setData({ ...data, officialcon: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="blog"
          label="Blog"
          type="text"
          fullWidth
          value={data.blog}
          onChange={(e) => setData({ ...data, blog: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="reddit"
          label="Reddit"
          type="text"
          fullWidth
          value={data.reddit}
          onChange={(e) => setData({ ...data, reddit: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="slack"
          label="Slack"
          type="text"
          fullWidth
          value={data.slack}
          onChange={(e) => setData({ ...data, slack: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="facebook"
          label="Facebook"
          type="text"
          fullWidth
          value={data.facebook}
          onChange={(e) => setData({ ...data, facebook: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="twitter"
          label="Twitter"
          type="text"
          fullWidth
          value={data.twitter}
          onChange={(e) => setData({ ...data, twitter: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="bitcoin"
          label="Bitcoin"
          type="text"
          fullWidth
          value={data.bitcoin}
          onChange={(e) => setData({ ...data, bitcoin: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="github"
          label="Github"
          type="text"
          fullWidth
          value={data.github}
          onChange={(e) => setData({ ...data, github: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="telegram"
          label="Telegram"
          type="text"
          fullWidth
          value={data.telegram}
          onChange={(e) => setData({ ...data, telegram: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="whitepaper"
          label="Whitepaper"
          type="text"
          fullWidth
          value={data.whitepaper}
          onChange={(e) => setData({ ...data, whitepaper: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="ticker"
          label="Ticker"
          type="text"
          fullWidth
          value={data.ticker}
          onChange={(e) => setData({ ...data, ticker: e.target.value })}
        />
        <TextField
          // autoFocus
          margin="dense"
          id="comment"
          label="Comment"
          type="text"
          fullWidth
          value={data.comment}
          onChange={(e) => setData({ ...data, comment: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={() => {
            setData(initialState)
            handleClose()
          }}
        >
          Close
        </Button>
        <Button color="primary" onClick={onSubmit}>
          {`${id === 0 ? 'Add' : 'Update'} TokenInfo`}
        </Button>
      </DialogActions>
    </Dialog>
    // <div>
    //   <Modal
    //     keepMounted
    //     open={open}
    //     onClose={handleClose}
    //     aria-labelledby="keep-mounted-modal-title"
    //     aria-describedby="keep-mounted-modal-description"
    //   >
    //     <Box className={classes.modal}>
    //       <form onSubmit={onSubmit}>
    //         <Grid container>
    //           <Grid item xs={12}>
    //             <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
    //               ERC-20Token Modal
    //             </Typography>
    //             <Divider />
    //           </Grid>
    //           <Grid item xs={12} className={classes.modalline}>
    //             <Grid item xs={12}>
    //               <span className={classes.modaltext}>Address:</span>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <BootstrapInput
    //                 className={classes.modalinput}
    //                 onChange={handleChange('address')}
    //                 value={data.address}
    //               ></BootstrapInput>
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={12} className={classes.modalline}>
    //             <Grid item xs={12}>
    //               <span className={classes.modaltext}>Name:</span>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <BootstrapInput
    //                 className={classes.modalinput}
    //                 value={data.name}
    //                 onChange={handleChange('name')}
    //               ></BootstrapInput>
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={12} className={classes.modalline}>
    //             <Grid item xs={12}>
    //               <span className={classes.modaltext}>Symbol:</span>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <BootstrapInput
    //                 className={classes.modalinput}
    //                 value={data.symbol}
    //                 onChange={handleChange('symbol')}
    //               ></BootstrapInput>
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={12} className={classes.modalline}>
    //             <Grid item xs={12}>
    //               <span className={classes.modaltext}>Type:</span>
    //             </Grid>
    //             <Grid item xs={12}>
    //               <BootstrapInput
    //                 className={classes.modalinput}
    //                 value={data.type}
    //                 onChange={handleChange('type')}
    //               ></BootstrapInput>
    //             </Grid>
    //           </Grid>
    //           <Grid item xs={12} className={classes.modalline}>
    //             <StyledPendingSearchBtn onClick={handleClose}>
    //               <span className={classes.modalBtn}>Cancel</span>
    //             </StyledPendingSearchBtn>
    //             <StyledPendingSearchBtn type="submit">
    //               <span className={classes.modalBtn}>Save</span>
    //             </StyledPendingSearchBtn>
    //           </Grid>
    //         </Grid>
    //       </form>
    //     </Box>
    //   </Modal>
    // </div>
  )
}

export default connect(null, { createToken, updateToken })(KeepMountedModal)
