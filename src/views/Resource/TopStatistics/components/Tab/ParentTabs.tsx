import React from 'react'
import Box from '@material-ui/core/Box'
import { StyledParentTabs, StyledParentTab } from './TabbarStyle'
import { useHistory, useLocation } from 'react-router'

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
      id={`parent-tabpanel-${index}`}
      aria-labelledby={`parent-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `parent-tab-${index}`,
    'aria-controls': `parent-tabpanel-${index}`,
  }
}

interface TabProps {
  val: any
  tabs: {
    id: string
    children?: React.ReactNode
    label: any
    index: any
    suburl: any
  }[]
}

const ParentTabs: React.FC<TabProps> = ({ val, tabs }) => {
  const history = useHistory()
  const location = useLocation()

  const getTabValue = React.useCallback(
    (location: string) => {
      for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i]
        if (tab.suburl.includes(location.slice(1))) {
          return tab.index
        }
      }
      return 0
    },
    [tabs],
  )
  const [value, setValue] = React.useState(getTabValue(location?.hash))

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    history.push({
      hash: `${tabs[newValue].suburl[0]}`,
    })
  }

  var TabHeaders = tabs.map((tab, index) => (
    <StyledParentTab key={index.toString()} label={tab['label']} {...a11yProps(tab['index'])} />
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
    <div>
      <div>
        <StyledParentTabs value={value} onChange={handleChange} aria-label="Top Statistic Tabs">
          {TabHeaders}
        </StyledParentTabs>
      </div>
      {TabContents}
    </div>
  )
}

export default ParentTabs
