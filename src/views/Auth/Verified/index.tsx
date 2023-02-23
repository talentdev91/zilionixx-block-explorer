import React from 'react'
import useStyles from '../Authstyle'

import Verified from './VerifiedTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
function VerifiedList() {
  const classes = useStyles()

  return (
    <StyledPagePager>
      <div className={classes.contactForm}>
        <div className={classes.tableTop}>
          <div>
            My Verified Addresses
            <StyledDarkTooltip title="Verify Info" arrow placement="top">
              <span className={classes.profileSelect}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <SearchBtn placeholder="Search Address" />
        </div>
      </div>
      <div className={classes.contactFormCon}>
        <Verified />
      </div>
    </StyledPagePager>
  )
}

export default VerifiedList
