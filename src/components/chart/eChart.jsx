import React, { Component } from 'react';
import ReactEcharts from "echarts-for-react";
// import { fas } from '@fortawesome/free-solid-svg-icons';

class EChartOne extends Component {
  getOption = () => {
    return {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        formatter: "{b} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Roboto', sans-serif",
          fontSize: 12
        }
      },
      legend: {
        show: false,      
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        // animation: true,
        radius: ['90%', '30%'],
        // color: ['#0d469f','#557ebd', '#0a3984', '#1c4584'],
        color: ['#2E86C1','#138D75','#BA4A00','#D4AC0D'],
        label:{
          show: false,
        },        
        data: [{
          value: 50,
          name: 'Pre-Sale participants'
        }, {
          value: 25,
          name: 'Public-sale participants'
        }, {
          value: 10,
          name: 'Founders, Team'
        }, {
          value: 15,
          name: 'Marketing'
        }]
      }
      ]
    };
  };
  render() {
    return <ReactEcharts option={this.getOption()} style={{ height: "400px" }} />;
  }
}

export default EChartOne;