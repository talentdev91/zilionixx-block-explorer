import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AccessBlockchainData from '../../../assets/images/api-symbols/icon-1.svg'
import VerifyContracts from '../../../assets/images/api-symbols/icon-2.svg'
import BuildingDAPPs from '../../../assets/images/api-symbols/icon-21.svg'
import CommunityDriven from '../../../assets/images/api-symbols/icon-25.svg'
import ResponsiveVerticalTabs from './ResponsiveVerticalTabs'
import useStyles from './styles'
import { nanoid } from 'nanoid'
import { TitlePaper } from './components/TitlePaper'

import { Introduction } from './Introduction'
import { Contracts } from './Contracts'
import { PublicRPCNodes } from './PublicRPCNodes'
import { Stats } from './Stats'
import { Accounts } from './Accounts'
import { Tokens } from './Tokens'

const Apis: React.FC = () => {
  const classes = useStyles()
  const tabContent = [
    {
      id: nanoid(),
      children: <TitlePaper title="Introduction" children={<Introduction />} />,
      label: 'Introduction',
      index: 0,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Account APIs" children={<Accounts />} />,
      label: 'Accounts',
      index: 1,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Contract APIs" children={<Contracts />} />,
      label: 'Contracts',
      index: 2,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Token Info APIs" children={<Tokens />} />,
      label: 'Tokens',
      index: 3,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="General States APIs" children={<Stats />} />,
      label: 'Stats',
      index: 4,
    },
    {
      id: nanoid(),
      children: <TitlePaper title="Public FTM RPC Nodes" children={<PublicRPCNodes />} />,
      label: 'Public RPC Nodes',
      index: 5,
    },
  ]
  return (
    <div className={classes.root}>
      <div className={classes.styledDiv}>
        <Typography className={classes.mainTitle} variant="h5">
          Zilionixx Developer APIs
        </Typography>
        <div className={classes.categories}>
          <Grid container>
            <Grid item xs={12} sm={12} md={2}></Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img src={AccessBlockchainData} alt="None" className={classes.symbolImg} />
              <Typography className={classes.titleDescription} variant="body1">
                Access Blockchain Data
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img src={VerifyContracts} alt="None" className={classes.symbolImg} />
              <Typography className={classes.titleDescription} variant="body1">
                Access Blockchain Data
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img src={BuildingDAPPs} alt="None" className={classes.symbolImg} />
              <Typography className={classes.titleDescription} variant="body1">
                Access Blockchain Data
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={2}>
              <img src={CommunityDriven} alt="None" className={classes.symbolImg} />
              <Typography className={classes.titleDescription} variant="body1">
                Access Blockchain Data
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={2}></Grid>
          </Grid>
        </div>
        <ResponsiveVerticalTabs tabs={tabContent} />
      </div>
    </div>
  )
}

export default Apis
