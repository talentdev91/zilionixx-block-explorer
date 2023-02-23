import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import TwitterIcon from '@material-ui/icons/Twitter'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Divider from '@material-ui/core/Divider'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import IconButton from '@material-ui/core/IconButton'
import DisqusLogin from './DisqusLogin'
import Whitetooltip from './commentooltip'

import useStyles from './Style'

export default function AlignItemsList(data: any) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const white = (
    <div style={{ margin: '8px' }}>
      <p className={classes.disign}>Disqus is a discussion network</p>
      <p className={classes.discontent}>● Don't be a jerk or do anything illegal. </p>
      <p className={classes.discontent1}>Everything is easier that way.</p>
      <Button variant="contained" color="primary" className={classes.disbutton}>
        Red full terms and conditions
      </Button>
    </div>
  )
  const newest = (
    <List>
      <ListItem button>Best</ListItem>
      <ListItem button>Newest</ListItem>
      <ListItem button>Oldest</ListItem>
    </List>
  )

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <div>
        <Grid container style={{ display: 'flex', alignItems: 'center' }}>
          <Grid item>
            <span>
              <i className="fas fa-heart" style={{ color: 'red' }}></i>
            </span>
            <span>Recommended</span>
          </Grid>
          <Grid item style={{ paddingLeft: '10px' }}>
            <div className={classes.twitter}>
              <TwitterIcon />
              <span>Tweet</span>
            </div>
          </Grid>
          <Grid item style={{ paddingLeft: '10px' }}>
            <div className={classes.facebook}>
              <span style={{ marginRight: '5px', marginLeft: '5px' }}>
                <i className="fab fa-facebook-f" />
              </span>
              <span>Share</span>
            </div>
          </Grid>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Grid item style={{ marginLeft: 'auto' }}>
              <Whitetooltip
                title={newest}
                classes={{ tooltip: classes.customWidth1 }}
                interactive={true}
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
              >
                <Button variant="text" color="primary" onClick={handleTooltipOpen} className={classes.sortfont}>
                  Sort by Newest
                  <span>
                    <i className="fas fa-caret-down"></i>
                  </span>
                </Button>
              </Whitetooltip>
            </Grid>
          </ClickAwayListener>
        </Grid>
        <Grid container>
          <Grid item style={{ width: '5%' }}>
            <img src="/images/Blocks/avatar.png" width="48" height="48" alt="price" />
          </Grid>
          <Grid item style={{ width: '95%' }}>
            <TextareaAutosize
              aria-label="empty textarea"
              style={{ width: '100%', height: '100%', maxHeight: '350px' }}
              placeholder="Start the Discussion..."
            />
          </Grid>
        </Grid>
        <Grid container style={{ marginLeft: '60px' }}>
          <Grid item style={{ width: '15%' }}>
            <p style={{ fontWeight: 700, fontSize: '11px', color: '#687a86', margin: '10px 0 10px', lineHeight: 1 }}>
              LOG IN WITH
            </p>
            <div style={{ display: 'flex' }}>
              <img
                src="/images/Blocks/disqus.png"
                width="38px"
                height="39px"
                alt="price"
                style={{ marginRight: '5px' }}
              />
              <img
                src="/images/Blocks/face.png"
                width="38px"
                height="39px"
                alt="price"
                style={{ marginRight: '5px' }}
              />
              <img
                src="/images/Blocks/twitter.png"
                width="38px"
                height="39px"
                alt="price"
                style={{ marginRight: '5px' }}
              />
              <img src="/images/Blocks/goo.png" alt="price" />
            </div>
          </Grid>
          <Grid item style={{ width: '80%' }}>
            <div
              style={{
                fontWeight: 700,
                fontSize: '11px',
                color: '#687a86',
                margin: '10px 0 10px',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>OR SIGN UP WITH DISQUS</span>
              <Whitetooltip title={white} classes={{ tooltip: classes.customWidth }} interactive={true}>
                <IconButton aria-label="delete" style={{ padding: 0 }}>
                  <HelpOutlineIcon />
                </IconButton>
              </Whitetooltip>
            </div>
            <div>
              <DisqusLogin />
            </div>
            <p
              style={{ lineHeight: '107px', textAlign: 'center', paddingTop: '30px', color: '#2a2e2e', opacity: '.6' }}
            >
              Be the first to comment.
            </p>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div style={{ display: 'flex', fontSize: '12px' }}>
        <p style={{ marginRight: '15px' }}>
          <span>
            <i className="far fa-envelope"></i>&nbsp;
          </span>
          Subscribe
        </p>
        <p>
          <img src="/images/Blocks/disqus1.png" width="16" height="15" alt="price" />
          &nbsp;
        </p>
        <p>
          <span>Add Disqus to your site</span>
        </p>
        <p style={{ marginLeft: '15px' }}>
          <span>
            <i className="fas fa-exclamation-triangle"></i>&nbsp;
          </span>
          Do Not Sell My Data
        </p>
        <p style={{ marginLeft: 'auto' }}>
          <img src="/images/Blocks/logo.png" width="86" height="16" alt="price" />
        </p>
      </div>
    </div>
  )
}
