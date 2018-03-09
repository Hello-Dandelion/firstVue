<template>
  <div>
    <div id="chart1" class="echarts"></div>
    <div id="chart2" class="echarts"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import 'echarts-liquidfill';
    export default {
      data () {
        return {

        }
      },
      methods:{
        firstEchart(id){
          var myChart = echarts.init(document.getElementById(id)),
              $data=0.7,
              option = {
                series: [{
              type: 'liquidFill',
              data: [{
                value: $data,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#B19FEF'
                    }, {
                      offset: 1,
                      color: '#B19FEF'
                    }]),
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    opacity: 0.5
                  },
                  emphasis: {
                    opacity: 0.9
                  }
                }
              },{
                value: $data,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#8A6CF6'
                    }, {
                      offset: 1,
                      color: '#64b1ff'
                    }]),
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    opacity: 1
                  },
                  emphasis: {
                    opacity: 0.9
                  }
                }
              }],
              amplitude: 5,
              waveAnimation: 3,
              radius: '75%',
              label: {
                normal: {
                  position: ['45%', '50%'],
                  formatter: function() {
                    return  $data*100+'%';
                  },
                  textStyle: {
                    fontSize: 88,
                    color: '#8A6CF6',
                    fontWeight:500
                  }
                }
              },
              backgroundStyle: {
                color: '#fff'
              },
              outline: {
                borderDistance: 0,
                itemStyle: {
                  borderWidth: 2,
                  borderColor: '#B19FEF',
                  shadowBlur: 0
                }
              }
            }]
          };
          myChart.setOption(option);
        },
        secondEchart(id){
          var colorArr = ['#FF9700','#6240DD','#FF0000','#0DD1A7','#00D121'];
          var label = {
            show:true,
            formatter:'{c}',
            color:'#fff'
          };
          var mychart = echarts.init(document.getElementById(id));
          var option = {
            tooltip: {
              tooltip: {
                trigger: 'item',
                formatter: '{b}：{c}'
              },
            },
            color:colorArr,
            xAxis: {
              axisLabel: {
                interval: 0
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#aaa'
                }
              },
              data: ['A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'J', 'K', 'L', 'M', 'N'
              ]
            },
            yAxis: {
              axisLabel: {
                interval: 0
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#aaa'
                }
              },
              data: ['a', 'b', 'c', 'd', 'f',
                'f', 'g', 'h', 'j'
              ]
            },
            series: [{
              symbolSize: 26,
              type: 'scatter',
              data: [
                {
                  value:1,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value:3,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value:7,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value:5,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 4,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value:  7,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 2,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 6,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 8,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value:  7,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 4,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 6,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                },
                {
                  value: 5,
                  hoverAnimation:false,
                  label:label,
                  itemStyle:{color:randomColor(colorArr)}
                }
              ]
            }]
          };
          mychart.setOption(option);
          function randomColor(){
            return colorArr[Math.ceil(Math.random()*colorArr.length)];
          }

        }
      },
      //调用
      mounted(){
        this.$nextTick(function() {
          this.firstEchart('chart1');
          this.secondEchart('chart2');
        })
      }
    };
</script>

<style lang="scss" scoped>
  .echarts{
    margin: 0 auto;
    width: 600px;
    height: 400px;
  }
</style>
