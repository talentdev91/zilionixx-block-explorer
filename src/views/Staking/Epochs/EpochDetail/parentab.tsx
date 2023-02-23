import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { StyledParentTabs, StyledParentTab } from './epochstyle'

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: '8px',
    boxShadow: '0 0.5rem 1.2rem rgb(189 197 209 / 6%)',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
}))

interface TabProps {
  val: any
  tabs: {
    children?: React.ReactNode
    label: string
    index: any
  }[]
}

const ParentTabs: React.FC<TabProps> = ({ val, tabs }) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  var TabHeaders = tabs.map((tab, index) => (
    <StyledParentTab key={index.toString()} label={tab['label']} {...a11yProps(tab['index'])} />
  ))

  var TabContents = tabs.map((tab, index) => (
    <TabPanel key={index.toString()} value={value} index={tab['index']}>
      {tab['children']}
    </TabPanel>
  ))

  return (
    <div className={classes.root}>
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
