var chartDom = document.getElementById('3PA3PP');
var myChart = echarts.init(chartDom,'essos');
var option;

option = {
  title: {
    text: '3 Points Ball Win or Lose'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['3PA_Win', '3PA_Lose', '3P%_Win', '3P%_Lose']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [
      '2003',
      '2004',
      '2005',
      '2006',
      '2007',
      '2008',
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '3PA_Win',
      type: 'line',
      data: [
        15, 15.3, 15.7, 16.7, 17.6, 17.9, 18.15, 17.96, 18.23, 19.56, 21.32,
        22.78, 24.08, 26.21, 28.24, 32.1, 33.89, 33.87
      ]
    },
    {
      name: '3PA_Lose',
      type: 'line',
      data: [
        14.4, 15.7, 15.66, 16.9, 18.2, 18.16, 18.09, 18.2, 18.31, 19.78, 21.36,
        22.36, 24.21, 26.54, 28.52, 32.34, 33.67, 33.84
      ]
    },
    {
      name: '3P%_Win',
      type: 'line',
      data: [
        37.57, 38.42, 38.45, 38.03, 38.32, 38.35, 38.02, 37.96, 37.45, 38.21,
        38.24, 38.04, 38.16, 38.36, 38.34, 38.23, 38.25, 39.1
      ]
    },
    {
      name: '3P%_Lose',
      type: 'line',
      data: [
        30.2, 31.24, 31.22, 31.45, 31.65, 32.43, 31.39, 31.65, 31.47, 31.75,
        31.85, 31.67, 31.73, 31.76, 32.86, 32.64, 32.76, 32.8
      ]
    }
  ]
};

option && myChart.setOption(option);