import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { useHistory, useLocation } from 'react-router'

import { StyledSimpleTabs, StyledSimpleTab } from './TabbarStyle'

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pl={0} pt={0}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
  pullRight: {
    textAlign: 'right',
  },
}))

interface TabProps {
  val: any
  tabs: {
    children?: React.ReactNode
    label: any
    index: any
    suburl: string
  }[]
}

const SimpleTabs: React.FC<TabProps> = ({ val, tabs }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const getTabValue = React.useCallback(
    (location: string) => {
      for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i]
        if (location === `#${tab.suburl}`) {
          return tab.index
        }
        // if (tab.suburl.includes(location.slice(1))) {
        //   return tab.index
        // }
      }
      return 0
    },
    [tabs],
  )

  const [value, setValue] = React.useState(getTabValue(location?.hash))

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    // setValue(newValue)
    // history.replace({
    //   hash: `${tabs[newValue].suburl}`,
    // })
    history.push({
      hash: `${tabs[newValue].suburl}`,
    })
  }

  var TabHeaders = tabs.map((tab, index) => (
    <StyledSimpleTab key={index.toString()} label={tab['label']} {...a11yProps(tab['index'])} />
  ))

  var TabContents = tabs.map((tab, index) => (
    <TabPanel key={index.toString()} value={value} index={tab['index']}>
      {tab['children']}
    </TabPanel>
  ))

  // update start
  React.useEffect(() => {
    const updatedValue = getTabValue(location?.hash)
    setValue(updatedValue)
  }, [location, getTabValue])
  // update finish

  return (
    <div className={classes.root}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={9}>
            <StyledSimpleTabs value={value} onChange={handleChange} aria-label="simple tabs example">
              {TabHeaders}
            </StyledSimpleTabs>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.pullRight}></Grid>
        </Grid>
      </div>
      {TabContents}
    </div>
  )
}

export default SimpleTabs
