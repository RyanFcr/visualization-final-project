  var dom = document.getElementById('gdppart');
  var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var app = {};
  var option;

  $.get('http://127.0.0.1:5500/' + '/data_pos.json', function (data) {
    // myChart.hideLoading();
    var itemStyle = {
      opacity: 0.8
    };
    var sizeFunction = function (x) {
      // var y = Math.sqrt(x / 5e8) + 0.1; y * 80
      return x;
    };
    // Schema:
    var schema = [
      { name: 'pc', index: 0, text: '3P%', unit: '' },
      { name: 'ar', index: 1, text: '3PAr', unit: '' },
      { name: 'pos', index: 2, text: 'Position', unit: '' },
      { name: 'pop', index: 3, text: 'Population', unit: '' }
    ];
    option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          orient: 'vertical',
          autoPlay: true,
          inverse: true,
          playInterval: 1000,
          left: null,
          right: 0,
          top: 20,
          bottom: 20,
          width: 55,
          height: null,
          symbol: 'none',
          checkpointStyle: {
            borderWidth: 2
          },
          controlStyle: {
            showNextBtn: false,
            showPrevBtn: false
          },
          data: []
        },
        title: [
          {
            text: data.timeline[0],
            textAlign: 'center',
            left: '63%',
            top: '55%',
            textStyle: {
              fontSize: 100
            }
          },
          {
            text: '3P% and 3PAr of Players in Five Positions',
            left: 'center',
            top: 10,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 20
            }
          }
        ],
        tooltip: {
          padding: 5,
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            // prettier-ignore
            return schema[2].text + ':' + value[3] + '<br>'
                          + schema[0].text + ':' + value[1] + schema[1].unit + '<br>'
                          + schema[1].text + ':' + value[0] + schema[2].unit + '<br>'
                          + schema[3].text + ':' + value[2] + '<br>';
          }
        },
        grid: {
          top: 100,
          containLabel: true,
          left: 30,
          right: '110'
        },
        xAxis: {
          type: 'value',
          name: '3-Point Field Goal Attempt Rate',
          max: 0.5,
          min: 0,
          nameGap: 25,
          nameLocation: 'middle',
          nameTextStyle: {
            fontSize: 18
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'value',
          name: '3-Point Field Goal Percentage',
          max: 0.5,
          min: 0,
          nameTextStyle: {
            fontSize: 18
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        visualMap: [
          {
            show: false,
            dimension: 3,
            categories: data.positions,
            inRange: {
              color: (function () {
                // prettier-ignore
                var colors = ['#d95850', '#eb8146', '#ffb248', '#f2d643', '#ebdba4', '#893448', '#d95850', '#d95850', '#d95850', '#d95850'];
                return colors.concat(colors);
              })()
            }
          }
        ],
        series: [
          {
            type: 'scatter',
            itemStyle: itemStyle,
            data: data.series[0],
            symbolSize: function (val) {
              return sizeFunction(val[2]);
            }
          }
        ],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
      },
      options: []
    };
    for (var n = 0; n < data.timeline.length; n++) {
      option.baseOption.timeline.data.push(data.timeline[n]);
      option.options.push({
        title: {
          show: true,
          text: data.timeline[n] + ''
        },
        series: {
          name: data.timeline[n],
          type: 'scatter',
          itemStyle: itemStyle,
          data: data.series[n],
          symbolSize: function (val) {
            return sizeFunction(val[2]);
          }
        }
      });
    }
    myChart.setOption(option);
  });

  // myChart.setOption(option);
