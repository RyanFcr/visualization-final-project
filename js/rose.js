var myChart = echarts.init(document.getElementById('rose'),'essos');
var option = {
    title: {
      text: '3 Pointer Ball fraction V.S. age',
      subtext: 'The percentage of threes among different ages players',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        '80s-85s',
        '85s-90s',
        '90s-95s',
        '95s-00s',
        '00s-05s',
        '05s-10s',
        '10s-15s',
        '15s-17s'
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'age < 23',
        type: 'pie',
        radius: [20, 140],
        center: ['15%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.02, name: '80s-85s' },
          { value: 0.04, name: '85s-90s' },
          { value: 0.08, name: '90s-95s' },
          { value: 0.15, name: '95s-00s' },
          { value: 0.2, name: '00s-05s' },
          { value: 0.19, name: '05s-10s' },
          { value: 0.26, name: '10s-15s' },
          { value: 0.32, name: '15s-17s' }
        ]
      },
      {
        name: '23 < age <27',
        type: 'pie',
        radius: [20, 140],
        center: ['38%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.03, name: '80s-90s' },
          { value: 0.05, name: '85s-90s' },
          { value: 0.1, name: '90s-95s' },
          { value: 0.23, name: '95s-00s' },
          { value: 0.2, name: '00s-05s' },
          { value: 0.25, name: '05s-10s' },
          { value: 0.3, name: '10s-15s' },
          { value: 0.41, name: '15s-17s' }
        ]
      },
      {
        name: '27 < age < 31',
        type: 'pie',
        radius: [20, 140],
        center: ['62%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.03, name: '80s-85s' },
          { value: 0.06, name: '85s-90s' },
          { value: 0.11, name: '90s-95s' },
          { value: 0.27, name: '95s-00s' },
          { value: 0.21, name: '00s-05s' },
          { value: 0.31, name: '05s-10s' },
          { value: 0.31, name: '10s-15s' },
          { value: 0.45, name: '15s-17s' }
        ]
      },
      {
        name: 'age > 31',
        type: 'pie',
        radius: [20, 140],
        center: ['85%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.03, name: '80s-85s' },
          { value: 0.05, name: '85s-90s' },
          { value: 0.1, name: '90s-95s' },
          { value: 0.22, name: '95s-00s' },
          { value: 0.24, name: '00s-05s' },
          { value: 0.31, name: '05s-10s' },
          { value: 0.39, name: '10s-15s' },
          { value: 0.43, name: '15s-17s' }
        ]
      }
    ]
  };

  myChart.setOption(option);