var nameset=[];//数组初始化
var numset1=[];
var numset2=[];




var chartDom = document.getElementById('final');
var myChart = echarts.init(chartDom,'essos');
var option;


option = {
    title: {
      text: 'Final 3 points'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['FGA', 'FG', 'TPA', 'TP']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018',]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'FGA',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [92,85.33,91.83,88.5,92.86,90.5,88.83,90.67,75.86,79.25,86.8,80.8,79.67,90.67,74.71,85.75,79,74.83,75.5,67.4,85.33,77.8,72.25,74.5,73.2,71.86,72.83,72,77.33,83.2,76.29,72.67,77,82.17,72.4,83,82.43,91,84.75]
      },
      {
        name: 'FG',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [45,40.17,45.5,43,42,46.33,43.67,46.67,35.43,41.75,39.4,42.6,40.17,43.83,31.86,40.5,32.83,32.33,32.5,30,41,36.2,36.5,32.17,31.4,30.86,33.33,32,34.33,38,31.86,33,35.33,38,38.2,36.17,37.57,43.2,43.5]
      },
      {
        name: 'TPA',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0.67,2.83,1.5,0.75,3.29,3.83,5.33,6.83,5.71,5,11.2,4.2,10.83,11.5,17.29,23,22.83,18.67,14.67,12.4,15.33,15,15.25,12.5,13.2,18.29,17.5,19.5,20.17,17.2,17.86,20.67,20.5,20.5,23.6,31,24.29,37.2,34]
      },
      {
        name: 'TP',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0.5,0.17,0,1.29,1.33,1.67,2.67,1.43,1.25,5,1,4.17,5.33,5.29,9.25,6,6.5,4.33,4.2,5.83,7.2,7.25,4,4.2,7.29,5.33,7.25,8.67,6.4,5,8.5,8.33,9.33,11,11.17,8,14.2,12.75]
      }
    ]
};
myChart.setOption(option);