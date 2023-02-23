import React from 'react'
import Box from '@material-ui/core/Box'
import { StyledFilterButton, StyledTextOverflow, StyledParentTabs, StyledParentTab, StyledTooltip, useStyles } from './TabbarStyle'
import { useHistory, useLocation, useParams } from 'react-router'
import SearchBox from '../SearchBox/SearchBox'
import { Button, Grid } from '@material-ui/core'

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
  const classes = useStyles()
  const cur_params = useParams<any>()
  const tokenAddress = cur_params.tokenAddress
  
  const searchIndex = location.search
  const querySearch = new URLSearchParams(searchIndex);
  const searchAddress = querySearch.get('a');

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
      search: location.search,
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

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let query = params.get('a');
  
  let filterButton;
  if (query !== null && query !== '' && (query.length === 42 || query.length === 66))
  {
    filterButton = (
      <StyledFilterButton>
        <div className={classes.clearButton}>
          <StyledTooltip title="Filtered by Address" arrow placement="top">
            <span className={classes.filterText}><StyledTextOverflow>{searchAddress}</StyledTextOverflow></span>
          </StyledTooltip>
          <StyledTooltip title="Clear filter Address / Txn Hash / Token ID" arrow placement="top">
            <Button href={`/token/${tokenAddress}`} variant="contained" className={classes.clearFilter} disableRipple>
              <i className={'fas fa-times'}></i>
            </Button>
          </StyledTooltip>
        </div>
        <SearchBox />
      </StyledFilterButton>
    )
  } else {
    filterButton = (
      <StyledFilterButton>
        <SearchBox />
      </StyledFilterButton>
    )
  }

  // update start
  React.useEffect(() => {
    const updatedValue = getTabValue(location?.hash)
    setValue(updatedValue)
  }, [location, getTabValue])
  
  // update finish
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={8}>
          <StyledParentTabs value={value} onChange={handleChange} aria-label="Top Statistic Tabs" >
            {TabHeaders}
          </StyledParentTabs>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.tabSearch}>
          {filterButton}
        </Grid>
      </Grid>
      {TabContents}
    </div>
  )
}

export default ParentTabs
