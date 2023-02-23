import VerifySource from './VerifySource'
import VerifySourceOutput from './VerifySource/output'
import useStyles, { StyledParentTabs, StyledParentTab } from '../styles'
import React from 'react'
import { Box } from '@material-ui/core'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
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
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function ContractSourceCode() {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>
          <StyledParentTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <StyledParentTab label="Contract Source Code" {...a11yProps(0)} />
            <StyledParentTab label="Comment" {...a11yProps(1)} />
          </StyledParentTabs>
        </div>
        <TabPanel value={value} index={0}>
          <VerifySource />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <VerifySourceOutput />
        </TabPanel>
      </div>
    </div>
  )
}
