import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { StyledPagePager } from '../../Styles'
import { StyledVerticalTabs, StyledVerticalTab } from './Authstyle'
import { Link } from 'react-router-dom'
import { PROFILE_ROUTES } from '../../common/consts'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pl={0} pt={0}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  pullRight: {
    textAlign: 'right',
  },
  tabs: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

interface TabProps {
  tabs: {
    id: any
    children?: React.ReactNode
    label?: React.ReactNode
    index: any
  }[]
  active: number
}

const ResponsiveVerticalTabs: React.FC<TabProps> = ({ tabs, active }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(active)
  //Initialize vertical tab index
  localStorage.setItem('curProfileIndex', '0')
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
    localStorage.setItem('curProfileIndex', newValue.toString())
  }

  var TabHeaders = tabs.map((tab, index) => (
    <StyledVerticalTab
      wrapped
      key={tab.id}
      label={tab['label']}
      component={Link}
      to={PROFILE_ROUTES[index]}
      {...a11yProps(tab['index'])}
      disableRipple
    />
  ))

  var TabContents = tabs.map((tab, index) => (
    <TabPanel key={tab.id} value={value} index={tab['index']}>
      {tab['children']}
    </TabPanel>
  ))

  return (
    <div className={classes.root}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <StyledPagePager>
              <StyledVerticalTabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                {TabHeaders}
              </StyledVerticalTabs>
            </StyledPagePager>
          </Grid>
          <Grid item xs={12} sm={9}>
            {TabContents}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ResponsiveVerticalTabs
