import React from 'react'

// material-ui
import Grid from '@material-ui/core/Grid'
import Badge from '@material-ui/core/Badge'
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'
// components
import { StyledContainer } from '../../components/StyledContainer'
import LatestTransactions from './components/LatestTransactions'
import SearchBox from '../../components/SearchBox/SearchBox'
import LatestBlocks from './components/LatestBlocks'
import HomeBanner from './components/HomeBanner'
import useStyles from './style'

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 30,
      top: 25,
      zIndex: 5,
      fontSize: '14px',
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '4px 8px',
    },
  }),
)(Badge)

function Home() {
  const classes = useStyles()
  return (
    <div>
      <section className={classes.section}>
        <StyledContainer>
          <Grid container>
            <Grid item lg={9} md={12} sm={12} xs={12}>
              <Grid item xs={12} style={{ display: 'flex' }}>
                <span>
                  <img src="/images/goldenOx.png" alt="validator" />
                </span>
                <h1 className={classes.title}>ZNX Blockchain Explorer</h1>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.search}>
                  <SearchBox />
                </div>
              </Grid>
            </Grid>
            <Grid item lg={3} md={12} sm={12} xs={12}>
              <span>
                <StyledBadge badgeContent={`Ad`} color="secondary">
                  <span>
                    <video className={classes.adimg} autoPlay loop>
                      {/* <source src={`${BackendUploadURL}/advertise/zilionixxapp.mp4`} type="video/mp4" /> */}
                      <source src="/images/zilionixxapp.mp4" type="video/ogg" />
                      {/* <source src="/images/zilionixxapp.mp4" type="video/mp4" /> */}
                    </video>
                  </span>
                </StyledBadge>
              </span>
            </Grid>
          </Grid>
        </StyledContainer>
      </section>
      <StyledContainer>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={12}>
            <HomeBanner />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={12}>
            <LatestBlocks />
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={12}>
            <LatestTransactions />
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  )
}

export default Home
