import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import { InputBase, Button } from '@material-ui/core'
import { BackendURL, BackendUploadURL } from '../../../config/config'
import axios from 'axios'

// components
import { StyledContainer } from '../../../components/StyledContainer'
import Category from '../category'

// styles
import { useStyles } from './styles'

function Accounts() {
  const classes = useStyles()

  const [isPreview, setIsPreview] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('0')

  var linkUrl = ''
  var uploadUrl = ''
  var type = 0

  useEffect(() => {
    axios
      .get<any>(`${BackendURL}/admin/getAdvertise`)
      .then(function (response) {
        const { success, data } = response.data

        if (success) {
          linkUrl = data[0].ad_link
          uploadUrl = data[0].ad_url
          type = data[0].type

          setIsPreview(true)
            ; (document.getElementById('linkurl') as HTMLInputElement).value = linkUrl

          let Url = BackendUploadURL + uploadUrl

          if (type === 1) {
            setStatus('1')
              ; (document.getElementById('image') as HTMLImageElement).src = Url
          } else if (type === 2) {
            setStatus('2')
              ; (document.getElementById('video_v') as HTMLImageElement).src = Url
              ; (document.getElementById('video_o') as HTMLImageElement).src = Url
          }
        } else {
          alert('There is no advertise data.')
        }
      })
      .catch(function (error) {
        alert(error)
      })
  }, [])

  const handleFileUpload = (event: any) => {
    var type = ''

    if (event.currentTarget.files[0]) type = event.currentTarget.files[0].type
    else return

    if (type.includes('video') || type.includes('image')) {
      if (type.includes('image')) setStatus('1')
      else setStatus('2')

      setSelectedFile(event.target.files[0])
      setIsPreview(true)

      setFile(URL.createObjectURL(event.target.files[0]))
    }
  }

  const OnBtnDel = () => {
    setIsPreview(false)
    setSelectedFile(null)
    setStatus('0')
    uploadUrl = ''
  }

  const OnBtnSave = async (e: any) => {
    e.preventDefault()

    linkUrl = (document.getElementById('linkurl') as HTMLInputElement).value

    if (!isPreview) {
      alert('No Image or Video')
      return
    }
    if (linkUrl === '') {
      alert('No Url')
      return
    }

    const formData = new FormData();
    var BackUrl = BackendURL;
    if (selectedFile) {
      formData.append('file', selectedFile);
      formData.append('adLink', linkUrl);
      formData.append('type', status);
      BackUrl += '/admin/createAdvertise';

      axios.post(BackUrl, formData)
        .then(function (response) {
          const { success, data } = response.data;

          if (success) {
            alert("Save Success.");
          } else {
            alert("Save Failed.");
          }
        })
        .catch(function (error) {
          alert(error);
        })
    } else {
      BackUrl += '/admin/updateAdvertise';
      var req = { adurl: uploadUrl, adLink: linkUrl, type: status }

      axios.post(BackUrl, req)
        .then(function (response) {
          const { success, data } = response.data;

          if (success) {
            alert("Save Success.");
          } else {
            alert("Save Failed.");
          }
        })
        .catch(function (error) {
          alert(error);
        })
    }


  }

  return (
    <div>
      <StyledContainer>
        <Category />
        <div>
          <Grid container spacing={2} className={classes.adTitle}>
            <Grid item xs={12}>
              <span> Advertisement </span>
            </Grid>
            <Grid item xs={6} sm={1} className={classes.adLabel}>
              <span> Preview: </span>
            </Grid>

            <Grid item xs={6} sm={5} className={classes.adUpload}>
              {isPreview ? (
                <>
                  {status === '1' ? (
                    // <img width="100%" id="image" src="">
                    <img width="100%" id="image" src={file} alt="Ads"></img>
                  ) : (
                    <video width="100%" id="video" autoPlay loop>
                      <source id="video_v" src={file} type="video/mp4" />
                      <source id="video_o" src={file} type="video/ogg" />
                    </video>
                  )}
                </>
              ) : (
                <input
                  type="file"
                  onChange={handleFileUpload}
                  title="Choose a image or video file to upload"
                  accept=".jpg, .png, .bmp, .mp4, .avi, .mpg"
                  id="upload-button"
                />
              )}
            </Grid>
            <Grid item xs={6} sm={1} className={classes.adLabel}>
              <span> LinkURL: </span>
            </Grid>
            <Grid item xs={6} sm={4}>
              <InputBase placeholder="Enter a LinkURL" id="linkurl" fullWidth className={classes.InputField} />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                {isPreview ? (
                  <Button variant="contained" className={classes.button} onClick={OnBtnDel}>
                    Delete
                  </Button>
                ) : (
                  <div></div>
                )}
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" className={classes.button} onClick={OnBtnSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </StyledContainer>
    </div>
  )
}

// const mapStateToProps = (state: AppState) => ({
//   accounts: state.address.accounts,
//   totalBalance: state.address.totalBalance,
// })

export default Accounts
