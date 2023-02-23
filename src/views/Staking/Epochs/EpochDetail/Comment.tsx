import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import CheckIcon from '@material-ui/icons/Check'

import ViewComment from './Viewcomment'
import Znxscan from './ZNXscan'
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
  const [state, setState] = React.useState({
    right: false,
  })

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  const toggleDrawer = (anchor: 'right', open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: 'right') => (
    <div role="presentation" className={classes.list}>
      <div className={classes.znxheader}>
        <div>
          <img src="/images/Blocks/znx.png" alt="price" className={classes.znximage} />
        </div>
        <div className={classes.znxsubheader}>
          <h3 className={classes.znxtitle}>ZNXScan</h3>
          <Button variant="contained" color="primary" className={classes.znxbutton}>
            Follow
          </Button>
        </div>
      </div>
      <Divider />
      <Znxscan />
      <Divider />
      <div style={{ display: 'flex', margin: '7px' }}>
        <div>
          <img src="/images/Blocks/logo.png" width="100" height="30" alt="price" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', color: '#687a86' }}>
          <HomeIcon />
          <span>Disqus Home</span>

          <CheckIcon />
          <span>FeedBack?</span>
          <i className="fas fa-share"></i>
          <span>Get Help</span>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <p>
        Make sure to use the "Vote Down" button for any spammy posts, and the "Vote Up" for interesting conversations.
      </p>
      <Paper square className={classes.subtab}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="0Comments" {...a11yProps('one')} />
          <React.Fragment key={'right'}>
            <Button onClick={toggleDrawer('right', true)}>ZNXSCAN</Button>
            <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
              {list('right')}
            </Drawer>
          </React.Fragment>
          <a
            href="https://help.disqus.com/en/articles/1717103-disqus-privacy-policy"
            target="_blank"
            rel="noreferrer"
            className={classes.dislink}
          >
            Disqus' Privacy Policy
          </a>

          <p style={{ marginLeft: 'auto', marginRight: '10px' }}>Login</p>
        </Tabs>
      </Paper>
      <TabPanel value={value} index="one">
        <ViewComment />
      </TabPanel>
      <TabPanel value={value} index="two">
        <Znxscan />
      </TabPanel>
    </div>
  )
}
