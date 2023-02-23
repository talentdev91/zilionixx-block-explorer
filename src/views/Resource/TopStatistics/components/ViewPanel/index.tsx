import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Divider } from '@material-ui/core'

import { StyledLink } from '../CustomLink'
import { StyledPaper, StyledBox } from './PanelStyle'

interface ViewPanelProps {
  type: string
  label: string
  url: string
  children?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  pullRight: {
    float: 'right',
  },
}))

const ViewPanel: React.FC<ViewPanelProps> = ({ type, label, url, children }) => {
  const classes = useStyles()
  var title
  if (type === 'LabelAndUrl') {
    title = (
      <StyledBox>
        <Grid container>
          <Grid item xs={12} sm={6}>
            {label}
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledLink className={classes.pullRight} href={url} underline="none">
              View Top 20
            </StyledLink>
          </Grid>
        </Grid>
      </StyledBox>
    )
  } else {
    title = <StyledBox>{label}</StyledBox>
  }

  return (
    <div className={classes.root}>
      <StyledPaper variant="outlined">
        {title}
        <Divider />
        {children}
      </StyledPaper>
    </div>
  )
}

export default ViewPanel
