import React from 'react'

// material-ui
import { Grid, Box, Divider, Typography } from '@material-ui/core'

// components
import { useStyles } from './style'

const ValidatorDetail = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} className={classes.leftPart}>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Validator ID :</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>23</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Amount Staked</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0 ZNX</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Amount Delegated</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0 XNX</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Staking Total</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0 ZNX</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Staking Start Epoch:</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>15</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Staking Start Time</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>2019-12-29 22:57:58 +00:00</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.partDivider} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Proof of Importance</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Origination Score</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Validation Score</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Active</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0 ZNX</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Online:</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>15</Typography>
            </Grid>
          </Grid>
          <Divider className={classes.listDivider} />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={5} md={4}>
              <Typography className={classes.leftListItem}>Downtime</Typography>
            </Grid>
            <Grid item xs={7} md={8}>
              <Typography className={classes.rightListItem}>0 s</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ValidatorDetail
