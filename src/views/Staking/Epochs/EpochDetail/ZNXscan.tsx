import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import useStyles from './epochstyle'

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
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

export default function TabsWrappedLabel() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div>
      <Paper square className={classes.subtab}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" variant="fullWidth">
          <Tab value="one" label="Latest Discussions" {...a11yProps('one')} />
          <Tab value="two" label="TopCommenters" {...a11yProps('two')} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index="one">
        Here is Latest discussion
      </TabPanel>
      <TabPanel value={value} index="two">
        <div style={{ textAlign: 'center' }}>
          Darn. No one comments in this community.
          <br />
          <a href="https://disqus.com/" target="_blank" rel="noreferrer" style={{ textDecorationLine: 'none' }}>
            Head back home to find interesting discussions »
          </a>
        </div>
      </TabPanel>
    </div>
  )
}
