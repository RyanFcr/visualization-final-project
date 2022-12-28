var chartDom = document.getElementById('3PP_win_lose');
var myChart = echarts.init(chartDom);
var option;

// prettier-ignore
let dataAxis = ['2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];
// prettier-ignore
let data = [37.57,38.42,38.45,38.03,38.32,38.35,38.02,37.96,37.45,38.21,38.24,38.04,38.16,38.36,38.34,38.23,38.25,39.1];
let data2 = [
  30.2, 31.24, 31.22, 31.45, 31.65, 32.43, 31.39, 31.65, 31.47, 31.75, 31.85,
  31.67, 31.73, 31.76, 32.86, 32.64, 32.76, 32.8
];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
option = {
  title: {
    text: 'Three point shots percentages evolution'
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
