import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router'
import { connect } from 'react-redux'
import { AppState } from '../../store/configureStore'
import copy from 'copy-text-to-clipboard'

// material-ui
import { Box, Grid, CssBaseline, Typography, Divider, Paper, Chip } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

// components
import { IconTooltip } from '../Resource/TopStatistics/components/ViewPanel/PanelBody/PanelItem'
import { StyledContainer } from '../../components/StyledContainer'
import { useStyles } from './styles'
import Spinner from '../../components/Spinner/Spinner'
import DropDownMenu from './popper'
import ContractDetail from './ContractDetail'
import Popper from './components/popper'
import CustomModal from './components/CustomModal'
import QRCode from 'react-qr-code'
import { Dialog, DialogTitle } from '@material-ui/core'
import makeBlockie from 'ethereum-blockies-base64'
// functions
import { getAddressDetailInfo } from '../../store/actions/address'
import { createAddressNote, getOneAddressNote, editAddressNote, deleteAddressNote } from '../../store/actions/user'
import { numberWithCommas } from '../../common/utils'

interface AccountProps {
  getAddressDetailInfo: (address: any) => void
  createAddressNote: (username: any, address: any, nameTag: any, addressNote: any, page: any) => void
  getOneAddressNote: (username: any, address: any) => void
  editAddressNote: (username: any, address: any, nameTag: any, addressNote: any, page: any) => void
  deleteAddressNote: (username: any, address: any) => void
  addressInfo: any
  loading: any
  isAuthenticated: any
  user: any
  addressNote: any
  addressMsg: any
  ZNXPrice: any
}

function Account({
  getAddressDetailInfo,
  createAddressNote,
  getOneAddressNote,
  editAddressNote,
  deleteAddressNote,
  addressInfo,
  loading,
  isAuthenticated,
  user,
  addressNote,
  addressMsg,
  ZNXPrice,
}: AccountProps) {
  const { address } = useParams<any>()
  const classes = useStyles()
  const [modalValue1, setModalValue1] = useState('')
  const [modalValue2, setModalValue2] = useState('')
  const [modalType, setModalType] = useState('')
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const [qrModalOpen, setQrModalOpen] = React.useState(false)
  const [copyAddress, setcopyAddress] = React.useState(true)

  const addNewWatchList = () => {
    history.push({
      pathname: '/myaddress',
      search: `?cmd=addnew&a=${address}#add`,
    })
  }

  const handleAddressNoteSubmit = (username: string, nameTag: string, addressNote: string, type: string) => {
    if (type === 'create') {
      createAddressNote(username, address, nameTag, addressNote, 0)
    } else if (type === 'update') {
      editAddressNote(username, address, nameTag, addressNote, 0)
    } else {
      console.log('Unknown Token')
    }
    setOpen(false)
  }

  const handleCopyAddress = () => {
    copy(address)
    setcopyAddress(!copyAddress)
    const timer = setTimeout(() => {
      setcopyAddress(true)
    }, 1000)
    return () => clearTimeout(timer)
  }

  const handleAddressNoteClose = () => {
    setOpen(false)
  }

  const handleOpenModal = (status: string) => {
    if (status === 'create') {
      setModalValue1(null)
      setModalValue2(null)
      setModalType('create')
      setOpen(true)
    } else {
      setModalValue1(addressNote.nameTag)
      setModalValue2(addressNote.note)
      setModalType('update')
      setOpen(true)
    }
    setOpen(true)
  }

  const handlePrivateNoteModal = (status: any) => {
    handleOpenModal(status)
  }

  const handleQrOpen = () => {
    setQrModalOpen(true)
  }

  const handleQrClose = () => {
    setQrModalOpen(false)
  }
  React.useEffect(() => {
    getAddressDetailInfo(address)
    if (isAuthenticated) {
      getOneAddressNote(user.name, address)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, addressMsg, getAddressDetailInfo])
  return (
    <div>
      <CssBaseline />
      <StyledContainer>
        <Box p={2}>
          <Box className={classes.contractInfo}>
            {/* <img src={contractImg} alt="Contract logo" className={classes.contractImg} /> */}
            <img src={makeBlockie(address)} className={classes.contractImg} alt="A" />
            &nbsp;
            {addressInfo && addressInfo.type === 'wallet' ? 'Address' : 'Contract'}
            &nbsp;
            <span className={classes.address}>{address}</span>&nbsp;
            <IconTooltip title="Click to view qrcode">
              <span onClick={handleQrOpen} className={classes.circleicon}>
                <i className="fas fa-qrcode mr-1"></i>
              </span>
            </IconTooltip>
            <IconTooltip title="Copy address to clipboard">
              <span onClick={handleCopyAddress} className={classes.circleicon}>
                {(copyAddress && <i className="far fa-copy"></i>) || (
                  <span>
                    <i className="fa fa-check mr-1"></i>
                  </span>
                )}
              </span>
            </IconTooltip>
          </Box>
          {/* <Box>
            <span className={classes.anyswap}>SpookySwap</span>
            <Link to="/accounts/label/anyswap" style={{ textDecoration: 'none' }}>
              <span className={classes.anyswap}>Anyswap</span>
            </Link>
            <Link to="/tokens/label/token-contract" style={{ textDecoration: 'none' }}>
              <span className={classes.tokencontract}>Token Contract</span>
            </Link>
          </Box> */}
        </Box>
        <Divider className={classes.divider} />

        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper variant="outlined" className={classes.infoCard}>
                <Box className={classes.cardHeader}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Box>
                        <Typography className={classes.headerTitle}>Overview</Typography>
                      </Box>
                    </Grid>

                    {/* <Grid item xs={12} sm={6} style={{ alignSelf: 'center' }}>
                      <Box p={0.5} bgcolor="#F1F2F4" className={classes.pullRight} style={{ borderRadius: '15%' }}>
                        <IconTooltip title="Public name tag, visible by anyone">
                          <span>SpookySwap: Route</span>
                        </IconTooltip>
                        <IconTooltip title="External site, more info">
                          <StyledLink href="#" underline="none">
                            <ExitToAppRoundedIcon style={{ fontSize: 12 }} />
                          </StyledLink>
                        </IconTooltip>
                      </Box>
                    </Grid> */}
                  </Grid>
                </Box>
                <Divider />
                {(loading && (
                  <div className={classes.cardBody}>
                    <Spinner />
                  </div>
                )) || (
                    <div className={classes.cardBody}>
                      <Box>
                        <Grid container>
                          <Grid item xs={12} sm={4}>
                            <Typography className={classes.cardBodyText}>Balance:</Typography>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <Typography className={classes.cardBodyText}>
                              {addressInfo ? numberWithCommas(addressInfo.balance / Math.pow(10, 18)) : 0} ZNX
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Divider className={classes.bodyDivider} />
                      <Box>
                        <Grid container>
                          <Grid item xs={12} sm={4}>
                            <Typography className={classes.cardBodyText}>ZNX Value:</Typography>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <Typography className={classes.cardBodyText}>
                              $&nbsp;
                              {addressInfo ? numberWithCommas((addressInfo.balance / Math.pow(10, 18)) * ZNXPrice) : 0}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                      <Divider className={classes.bodyDivider} />
                      <Box>
                        <Grid container>
                          <Grid item xs={12} sm={4}>
                            <Typography className={classes.cardBodyText}>Token:</Typography>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <Popper />
                          </Grid>
                        </Grid>
                      </Box>
                    </div>
                  )}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper variant="outlined" className={classes.infoCard} style={{ minHeight: '100%' }}>
                <Box className={classes.cardHeader}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Box>
                        <Typography className={classes.headerTitle}>More Info</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} className={classes.actionBox}>
                      <IconTooltip title="Add Address to Watch List">
                        <FavoriteIcon onClick={addNewWatchList} className={classes.favoriteIcon} />
                      </IconTooltip>
                      {isAuthenticated && addressNote !== undefined ? (
                        addressNote.nameTag === undefined ? (
                          <DropDownMenu
                            address={address}
                            handlePopper={handlePrivateNoteModal}
                            privateNoteStatus={'create'}
                          />
                        ) : (
                          <DropDownMenu
                            address={address}
                            handlePopper={handlePrivateNoteModal}
                            privateNoteStatus={'update'}
                          />
                        )
                      ) : (
                        <DropDownMenu
                          address={address}
                          handlePopper={handlePrivateNoteModal}
                          privateNoteStatus={'login'}
                        />
                      )}
                      {/* <DropDownMenu /> */}
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <div className={classes.cardBody}>
                  <Box>
                    <Grid container>
                      <Grid item xs={12} sm={4}>
                        <Typography className={classes.cardBodyText}>
                          <IconTooltip title="Name tags or notes can be attached to an address for identifying addresses of interest. (This info is private and can ONLY be viewed by you)">
                            <HelpOutlineIcon className={classes.helpIcon} />
                          </IconTooltip>
                          My name tag:
                        </Typography>
                      </Grid>
                      {isAuthenticated && addressNote !== undefined ? (
                        addressNote.nameTag === undefined ? (
                          <Grid item xs={12} sm={8}>
                            <Typography className={classes.cardBodyText}>
                              Not available,&nbsp;
                              <IconTooltip
                                title="To use this feature, please login to Zillionixx account and return to this page"
                                placement="top"
                              >
                                <span onClick={() => handleOpenModal('create')} className={classes.loginLink}>
                                  Update?
                                </span>
                              </IconTooltip>
                            </Typography>
                          </Grid>
                        ) : !addressNote.nameTag ? (
                          <Grid item xs={12} sm={8}>
                            <Typography className={classes.cardBodyText}>
                              Not available,&nbsp;
                              <IconTooltip
                                title="To use this feature, please login to Zillionixx account and return to this page"
                                placement="top"
                              >
                                <span onClick={() => handleOpenModal('update')} className={classes.loginLink}>
                                  Update?
                                </span>
                              </IconTooltip>
                            </Typography>
                          </Grid>
                        ) : (
                          <Grid item xs={12} sm={8}>
                            <div className={classes.nameTagContent}>
                              <IconTooltip title={addressNote.nameTag} placement="top">
                                <Chip size="small" label={addressNote.nameTag} />
                              </IconTooltip>
                              <IconTooltip title="View/Update Private Name Tag or Note" placement="top">
                                <span onClick={() => handleOpenModal('update')} className={classes.editIcon}>
                                  <i className={'far fa-edit'} />
                                </span>
                              </IconTooltip>
                            </div>
                          </Grid>
                        )
                      ) : (
                        <Grid item xs={12} sm={8}>
                          <Typography className={classes.cardBodyText}>
                            Not available,&nbsp;
                            <IconTooltip
                              title="To use this feature, please login to Zillionixx account and return to this page"
                              placement="top"
                            >
                              <Link to="/login" className={classes.loginLink}>
                                login to update
                              </Link>
                            </IconTooltip>
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Box>
                  <Divider className={classes.bodyDivider} />
                  {/* <Box>
                    <Grid container>
                      <Grid item xs={12} sm={4}>
                        <Typography className={classes.cardBodyText}>ContractCreator:</Typography>
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <div className={classes.inlineCenter}>
                          <StyledEllipsisTypography>
                            <IconTooltip title="0x95478c4f7d22d1048f46100001c2c69d2ba57380">
                              <StyledLink noWrap href="#" underline="none">
                                0x95478c4f7d22d1048f46100001c2c69d2ba57380
                              </StyledLink>
                            </IconTooltip>
                          </StyledEllipsisTypography>
                          <span>at txn</span>&nbsp;
                          <StyledEllipsisTypography>
                            <IconTooltip title="0x8f6be9c28c752f08946b0226324e1ae99818134d66f18b70328a739435d17395">
                              <StyledLink noWrap href="#" underline="none">
                                0x8f6be9c28c752f08946b0226324e1ae99818134d66f18b70328a739435d17395
                              </StyledLink>
                            </IconTooltip>
                          </StyledEllipsisTypography>
                        </div>
                      </Grid>
                    </Grid>
                  </Box> */}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledContainer>
      <ContractDetail />
      <CustomModal
        handleClick={handleAddressNoteSubmit}
        handleClose={handleAddressNoteClose}
        open={open}
        modalValue1={modalValue1}
        modalValue2={modalValue2}
        modalType={modalType}
        modalTitle="My Address Private Note"
      />

      <Dialog
        open={qrModalOpen}
        onClose={handleQrClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.qrModal}
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <span className={classes.modalTitle}>{address}</span>
          <span className={classes.modalClose} onClick={handleQrClose} aria-hidden="true">
            <i className={'fas fa-times'}></i>
          </span>
        </DialogTitle>
        <div className={classes.qrPaper}>
          <QRCode value={address} size={230} />
        </div>
      </Dialog>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  addressInfo: state.address.addressInfo,
  loading: state.address.loading,
  addressNote: state.user.addressNote,
  addressError: state.user.addressNoteError,
  addressMsg: state.user.addressNoteMsg,
  isAuthenticated: state.auth.isAuthenticated,
  ZNXPrice: state.price.ZNXPriceSuccessResponse,
  user: state.auth.user,
})

export default connect(mapStateToProps, {
  getAddressDetailInfo,
  createAddressNote,
  getOneAddressNote,
  editAddressNote,
  deleteAddressNote,
})(Account)
