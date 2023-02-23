import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'

//material-ui
import Box from '@material-ui/core/Box'
//components
import { StyledParentTabs } from '../Style'
import { StyledParentTab } from '../../../Styles'
import Spinner from '../../../components/Spinner/Spinner'

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
    children?: React.ReactNode
    label: string
    index: any
    visible: boolean
  }[]
  loading: any
}

const TransactionDetailTab: React.FC<TabProps> = ({ val, tabs, loading }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  const TabHeaders = tabs.map((tab, index) => {
    if (tab['visible'] === true) {
      return <StyledParentTab key={index.toString()} label={tab['label']} {...a11yProps(tab['index'])} />
    } else
      return (
        <StyledParentTab
          key={index.toString()}
          style={{ display: 'none' }}
          label={tab['label']}
          {...a11yProps(tab['index'])}
        />
      )
  })

  const TabContents = tabs
    .filter((tab) => tab['visible'] === true)
    .map((tab, index) => {
      return (
        <TabPanel key={index.toString()} value={value} index={tab['index']}>
          {tab['children']}
        </TabPanel>
      )
    })

  return (
    <>
      <StyledParentTabs
        style={{ color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df' : 'rgba(74,79,85,.8)'}` }}
        value={value}
        onChange={handleChange}
        aria-label="Top Statistic Tabs"
      >
        {TabHeaders}
      </StyledParentTabs>
      {loading ? (
        <div style={{ marginLeft: '45%', marginTop: '20px', marginBottom: '20px' }}>
          <Spinner />
        </div>
      ) : (
        TabContents
      )}
    </>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.transaction.loading,
})

export default connect(mapStateToProps)(TransactionDetailTab)
