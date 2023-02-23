import React from 'react'
// Import Highcharts
import Highcharts from 'highcharts'
import wordCloud from 'highcharts/modules/wordcloud.js'
import HighchartsReact from 'highcharts-react-official'

import { wordCloudData } from '../../Mockup'

wordCloud(Highcharts)

Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (relativeWeight) {
  var maxFontSize = 25
  // Will return a fontSize between 0px and 25px.
  return Math.floor(maxFontSize * relativeWeight)
}

const options = {
  plotOptions: {
    series: {
      cursor: 'pointer',
      events: {
        click: function (event) {
          //open a new window when click ,actullay it should be real link based on name
          window.open('https://www.highcharts.com/')
        },
      },
    },
  },
  series: [
    {
      type: 'wordcloud',
      //   spiral: 'archimedean',
      data: wordCloudData,
      rotation: {
        from: 0,
        to: 0,
      },
      title: {
        text: 'Top Tokens',
        align: 'center',
        style: {
          color: 'Red',
          fontSize: '60px',
        },
      },
      minFontSize: 10,
      name: 'Occurrences',
      tooltip: {
        headerFormat: '<b>Top tokens</b><br><Divider />',
        pointFormat:
          '<table><tbody><tr><td>tooltip1</td><td>tooltip1</td></tr><br><tr><td>tooltip1</td><td>tooltip1</td></tr></tbody></table><table><tbody><tr><td>tooltip1</td><td>tooltip1</td></tr><br><tr><td>tooltip1</td><td>tooltip1</td></tr></tbody></table>',
        clusterFormat: 'Who am I?',
      },
    },
  ],
}

export const CustomWordCloud: React.FC = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
