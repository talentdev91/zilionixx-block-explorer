import React from 'react'
// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { pieChartSeries } from '../../Mockup'

var options = {
  chart: {
    type: 'pie',
    events: {
      render() {
        console.log('render')
      },
    },
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
  },
  title: {
    text: 'Account vs Gas used',
  },
  tooltip: {
    // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    pointFormat: '<b>Top Account</b>: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      depth: 35,
      dataLabels: {
        enabled: true,
        format: '{point.name}',
      },
    },
  },
  series: pieChartSeries,
}

export const CustomPieChart: React.FC = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
