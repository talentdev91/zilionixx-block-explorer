import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Typography, Grid } from '@material-ui/core'
import { useParams } from 'react-router'
import { nanoid } from 'nanoid'

// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { getErc20TopTokenHolders } from '../../../../../store/actions/token'
import { AppState } from '../../../../../store/configureStore'
import CustomTokensTable from './components/CustomTable/CustomTokensTable'
import { useStyles, StyledTooltip } from './style'

export const tokenCols = [
  {
    id: nanoid(),
    name: 'Rank',
  },
  {
    id: nanoid(),
    name: 'Address',
  },
  {
    id: nanoid(),
    name: 'Quantity (Token)',
  },
  {
    id: nanoid(),
    name: 'Percentage',
  },
]

interface topTokenHolderProps {
  getErc20TopTokenHolders: (showCount: any, tokenAddress: any) => void
  topTokenHolders: any,
  totalTokenSupply: any,
  selTokenSupply: any,
  tokenHolderCount: any,
  topHoldertokenName: any,
  loading: boolean
}

const makePieChartTopTokenHolderOption = (topTokenHolders: string | any[], curCount: number, tokenHolderCount: number, topHoldertokenName: string) => {
  var pieChartData = []
  var restPercent = 100
  var showTokenCount = curCount;
  if(showTokenCount > tokenHolderCount)
    showTokenCount = tokenHolderCount

  for (let i = 0; i < topTokenHolders.length; i++) {
    restPercent -= topTokenHolders[i]['percent']

    pieChartData.push({
      name: topTokenHolders[i]['address'],
      address: topTokenHolders[i]['address'],
      percent: topTokenHolders[i]['percent'],
      y: topTokenHolders[i]['percent'],
    })
  }
  
  if(restPercent <= 0)
    restPercent = 0

  if(curCount < tokenHolderCount)
  {
    pieChartData.push({
      name: 'OTHER ACCOUNTS',
      address: 'OTHER ACCOUNTS',
      percent: restPercent,
      y: restPercent,
    })
  }

  var options = {
    chart: {
      type: 'pie',
      events: {
        render() { },
      },
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: topHoldertokenName + ' Token Top ' + showTokenCount + ' Token Holders',
    },
    subtitle: {
      text: 'Source: Zilionixx.com',
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
      },
    },
    series: [
      {
        type: 'pie',
        data: pieChartData,
        tooltip: {
          pointFormat:
            '<table><tbody><tr><td>Address: </td><td><b>{point.address}</b></td></tr></tbody></table><br><br><table><tbody><tr><td>Percent: </td><td><b>{point.percent}</b></td></tr></tbody></table> <br>',
        },
      },
    ],
  }
  return options
}

function HolderChart({getErc20TopTokenHolders, topTokenHolders, totalTokenSupply, selTokenSupply, tokenHolderCount, topHoldertokenName, loading }: topTokenHolderProps) {
  const classes = useStyles()
  const [showCount, setShowCount] = useState(100)
  const { tokenAddress } = useParams<any>()
  const [rowsData, setRowsData] = useState([])
  const [selTotalTopTokenSupply, setTotalTopTokenSupply] = useState(selTokenSupply)
  const [selTotalPercent, setTotalPercent] = useState(0)
  const [pieChartOption, setPieChartOption] = React.useState({})

  React.useEffect(() => {
    getErc20TopTokenHolders(500, tokenAddress)
  }, [])

  React.useEffect(() => {
    if (!loading) {
      let rowsDataTmp = topTokenHolders.slice(0,showCount);
      setRowsData(rowsDataTmp)
    
      let selTotalTopTokenTmp = 0
      let selTotalPercentTmp = 0;
      for(let i=0; i<rowsDataTmp.length; i++)
      {
        selTotalTopTokenTmp += parseFloat(rowsDataTmp[i].holdingTokens.balance)
        selTotalPercentTmp += parseFloat(rowsDataTmp[i].percent)
      }
      setTotalTopTokenSupply(selTotalTopTokenTmp)
      setTotalPercent(selTotalPercentTmp)    
  
      let pieChartTopHolderOptionsTmp = {}
        pieChartTopHolderOptionsTmp = makePieChartTopTokenHolderOption(rowsDataTmp, showCount, tokenHolderCount, topHoldertokenName)
      setPieChartOption(pieChartTopHolderOptionsTmp)
    }
    
  }, [showCount, loading])

  return !loading ? (
    <div className={classes.container}>
      <div className={classes.header}>
        <Grid container>
          <Grid item xs={7}>
            <Typography variant="h6" color="textPrimary">
              {topHoldertokenName} Token Holders
            </Typography>
            {/* <StyledTooltip title="Wrapped tokens that are backed by tokens vaults in Binance" arrow placement="top">
              <span className={classes.holdpietitle}>
                Binance-Peg &nbsp;&nbsp;<i className="fas fa-info-circle"></i>
              </span>
            </StyledTooltip> */}
          </Grid>
          <Grid item xs={5} className={classes.headerLink}>
            <nav className={classes.navStyle}>
              <a href="/home/" className={classes.navLinkStyle}>Home</a> &nbsp;&nbsp;/&nbsp;&nbsp;
              <a href="/tokens/" className={classes.navLinkStyle}>ERC-20 Tokens</a> &nbsp;&nbsp;/&nbsp;&nbsp;
              <a>Token Holders Chart</a>
            </nav>
          </Grid>
        </Grid>
      </div>
      <div className={classes.chartTable}>
        <div className={classes.fiterTable}>
          <i className="fas fa-filter"></i>&nbsp;
          Range: &nbsp;
          <select onChange={(e) => setShowCount(parseInt(e.target.value))}
                  className={classes.selectStyle}>
            <option value="3">Top 3</option>
            <option value="5">Top 5</option>
            <option value="10">Top 10</option>
            <option value="25">Top 25</option>
            <option value="50">Top 50</option>
            <option selected value="100">Top 100</option>
            <option value="250">Top 250</option>
            <option value="500">Top 500</option>
          </select>
        </div>
        <div className={classes.table}>
          <div className={classes.chartTitle}>
            <Grid container>
              <Grid item xs={6} className={classes.chartTitleEther}>
                <i className="far fa-lightbulb" style={{color: '#3498db'}}></i>
                &nbsp;The top &nbsp;
                {
                  showCount >= rowsData.length ?
                  (
                    rowsData.length
                  )
                  :
                  (
                    showCount
                  )
                }&nbsp;
                holders collectively own {selTotalPercent}% <br></br>
                <span>({selTotalTopTokenSupply} Tokens) of {topHoldertokenName} Token</span>
              </Grid>
              <Grid item xs={6} className={classes.chartTitleHolder}>
                <i className="far fa-lightbulb"></i>
                &nbsp;Token Total Supply: {totalTokenSupply} Token &nbsp;|&nbsp; Total <br></br>
                <span>Token Holders: {tokenHolderCount}</span>
              </Grid>
            </Grid>
          </div>
          <div className={classes.chartContent}>
            <Grid item xs={12} className={classes.chart}>
              <HighchartsReact highcharts={Highcharts} options={pieChartOption} />
            </Grid>
            <div className={classes.resultSupply}>
              <p>
                (A total of {selTotalTopTokenSupply} tokens held by the top &nbsp;
                {
                  showCount >= rowsData.length ?
                  (
                    rowsData.length
                  )
                  :
                  (
                    showCount
                  )
                }&nbsp;
                accounts from the total supply of {totalTokenSupply} token)
                <br></br>
                <br></br>
              </p>
            </div>
            <Grid item xs={12}>
              <CustomTokensTable columns={tokenCols} rows={rowsData} />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Typography variant="h6" color="textPrimary" className={classes.loading}>
      Loading...
    </Typography>
  )
}

const mapStateToProps = (state: AppState) => ({
  topTokenHolders: state.token.topTokenHolders,
  totalTokenSupply: state.token.totalTokenSupply,
  selTokenSupply: state.token.selTokenSupply,
  tokenHolderCount: state.token.tokenHolderCount,
  topHoldertokenName: state.token.topHoldertokenName,
  loading: state.token.loadingHolders,
})

export default connect(mapStateToProps, { getErc20TopTokenHolders })(HolderChart)
