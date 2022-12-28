var chartDom = document.getElementById('3PA_win_lose');
var myChart = echarts.init(chartDom);
var option;

// prettier-ignore
let dataAxis = ['2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
// prettier-ignore
let data = [14.4,15.7,15.66,16.9,18.2,18.16,18.09,18.2,18.31,19.78,21.36,22.36,24.21,26.54,28.52,32.34,33.67,33.84];
let data2 = [
  15, 15.3, 15.7, 16.7, 17.6, 17.9, 18.15, 17.96, 18.23, 19.56, 21.32, 22.78,
  24.08, 26.21, 28.24, 32.1, 33.89, 33.87
];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {
  title: {
    text: 'Three point shots attempted evolution'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: false
      // color: '#fff'
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#999'
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#562104' },
          { offset: 0.5, color: '#ab4e1b' },
          { offset: 1, color: '#e37439' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#eba103' },
            { offset: 0.7, color: '#fade53' },
            { offset: 1, color: '#ffd500' }
          ])
        }
      },
      data: data
    },
    {
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#5d1902' },
          { offset: 0.5, color: '#ae2e03' },
          { offset: 1, color: '#f13e03' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#eba103' },
            { offset: 0.7, color: '#fade53' },
            { offset: 1, color: '#ffd500' }
          ])
        }
      },
      data: data2
    }
  ]
};
// Enable data zoom when user click bar.
const zoomSize = 6;
myChart.on('click', function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  myChart.dispatchAction({
    type: 'dataZoom',
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
  });
});

option && myChart.setOption(option);
