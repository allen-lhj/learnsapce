<template>
  <div id="chartDom" style="width:800px;height:300px"></div>
</template>

<script>
var data = []
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
import {
    LineChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
);
export default {
  name: 'Echarts',
  data() {
    return {
      myChart: null,
      now: new Date(1997, 9, 3),
      oneDay: 24 * 3600 * 1000,
      value: Math.random() * 1000,
      option: {
      title: {
          text: '动态数据 + 时间坐标轴'
      },
      tooltip: {
          trigger: 'axis',
          formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
          },
          axisPointer: {
              animation: false
          }
      },
      xAxis: {
          type: 'time',
          splitLine: {
              show: false
          }
      },
      yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
              show: false
          }
        },
      series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }]
      }
    }
  },
  mounted() {
    this.draw()
    
    setInterval(() => {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(this.randomData());
    }
    console.log(data)
    this.myChart.setOption({
        series: [{
            data: data
        }]
    });
    }, 1000)
  },
  methods: {
    randomData() {
      const now = new Date(this.now + this.oneDay);
      const value = this.value + Math.random() * 21 - 10;
      return {
        name: this.now.toString(),
        value: [
            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
            Math.round(value)
        ]
      }
    },
    draw() {
      var chartDom = document.getElementById('chartDom');
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.option);
    }
  }
}
</script>