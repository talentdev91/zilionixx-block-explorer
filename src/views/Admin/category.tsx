import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core'

//components
import { useStyles } from './styles'
import { Link } from 'react-router-dom'

export default function Category() {
  const classes = useStyles()
  const location = useLocation()
  const [tabIndex, setTabIndex] = useState('1')

  useEffect(() => { 
    if (location.pathname === '/admin') {
      setTabIndex('1')
    } else if (location.pathname.includes('/admin/token')) {
      setTabIndex('2')
    } else if (location.pathname === '/admin/statistics') {
      setTabIndex('3')
    } else if (location.pathname === '/admin/feedback') {
      setTabIndex('4')
    } else if (location.pathname === '/admin/advertise') {
      setTabIndex('5')
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabIndex])

  return (
    <div className={classes.contractInfo}>
      <Button className={tabIndex === '1' ? classes.activeTab : classes.tabBtn} disableRipple>
        <Link to="/admin">
          Account
        </Link>
      </Button>
      <Button className={tabIndex === '2' ? classes.activeTab : classes.tabBtn} disableRipple>
        <Link to="/admin/token">
          Token
        </Link>
      </Button>
      <Button className={tabIndex === '3' ? classes.activeTab : classes.tabBtn} disableRipple>
        <Link to="/admin/statistics">
          Statistics
        </Link>
      </Button>
      <Button className={tabIndex === '4' ? classes.activeTab : classes.tabBtn} disableRipple>
        <Link to="/admin/feedback">
          Feedback
        </Link>
      </Button>
      <Button className={tabIndex === '5' ? classes.activeTab : classes.tabBtn} disableRipple>
        <Link to="/admin/advertise">
          Advertise
        </Link>
      </Button>
    </div>
  )
}
