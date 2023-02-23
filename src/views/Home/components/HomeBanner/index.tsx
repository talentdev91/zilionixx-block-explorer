import React from 'react'
import { Card, Grid } from '@material-ui/core'

// components
import Price from './Price'
import Block from './Block'
import History from './History'
import { useStyles } from './style'

export default function OutlinedCard() {
  const classes = useStyles()
  return (
    <Card className={classes.homeBanner}>
      <div className={classes.content}>
        <Grid container>
          <Grid item md={4} sm={6} xs={12}>
            <Price />
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Block />
          </Grid>

          <Grid item md={4} sm={12} xs={12}>
            <History />
          </Grid>
        </Grid>
      </div>
    </Card>
  )
}
