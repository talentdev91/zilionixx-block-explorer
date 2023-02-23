import React from 'react'
import useStyles from './Authstyle'
import { nanoid } from 'nanoid'
import Myprofile from './MyProfile'
import WatchList from './WatchList'
import MyTxnNote from './MyTxnNote'
import AddressNote from './AddressNote'
import TokenIgnore from './TokenIgnore'
import ApiKey from './APIkeys'
import Verified from './Verified'
import CustomAbi from './CustomABI'

import { Grid } from '@material-ui/core'
import VerticalTab from './VerticalTabs'
import { StyledPageContainer } from '../../Styles'

interface ProfileProps {
  index: number
}

function Profile({ index }: ProfileProps) {
  const classes = useStyles()
  // const [tabIndex, setTabIndex] = React.useState(index)
  const tabContent = [
    {
      id: nanoid(),
      children: <Myprofile />,
      label: (
        <span>
          <i className="fas fa-user-circle"></i>&nbsp;My Profile
        </span>
      ),
      index: 0,
    },
    {
      id: nanoid(),
      children: <WatchList />,
      label: (
        <span>
          <i className="fas fa-heart"></i>&nbsp;Watch List
        </span>
      ),
      index: 1,
    },
    {
      id: nanoid(),
      children: <MyTxnNote />,
      label: (
        <span>
          <i className="far fa-sticky-note"></i>&nbsp; Txn Private Notes
        </span>
      ),
      index: 2,
    },
    {
      id: nanoid(),
      children: <AddressNote />,
      label: (
        <span>
          <i className="far fa-sticky-note"></i>&nbsp; Address Private Notes
        </span>
      ),
      index: 3,
    },
    {
      id: nanoid(),
      children: <TokenIgnore />,
      label: (
        <span>
          <i className="fas fa-eye-slash"></i>&nbsp; Token Ignore List
        </span>
      ),
      index: 4,
    },
    {
      id: nanoid(),
      children: <ApiKey />,
      label: (
        <span>
          <i className="fas fa-key"></i>&nbsp; API-KEYs
        </span>
      ),
      index: 5,
    },
    {
      id: nanoid(),
      children: <Verified />,
      label: (
        <span>
          <i className="fas fa-user-check"></i>&nbsp; Verified Addresses
        </span>
      ),
      index: 6,
    },
    {
      id: nanoid(),
      children: <CustomAbi />,
      label: (
        <span>
          <i className="fas fa-tasks"></i>&nbsp; Custom ABIs
        </span>
      ),
      index: 7,
    },
  ]

  return (
    <StyledPageContainer>
      <Grid container className={classes.accountContent}>
        <Grid item lg={12} md={12} style={{ paddingRight: '15px' }}>
          <VerticalTab tabs={tabContent} active={index} />
        </Grid>
      </Grid>
    </StyledPageContainer>
  )
}

export default Profile
