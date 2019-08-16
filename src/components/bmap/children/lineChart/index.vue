<template>
     <article class="m-lineChart">
          <!-- <slot name="h1w"></slot> -->
          <div id="mjb_main" style="width: 370px;height:380px;"></div>
          <slot name="p2"></slot>
     </article>
</template>
<script>
import guangchengqu from '../../../../assets/img/mapSee/pic_guangchengqu_N.png'
import huijiqu from '../../../../assets/img/mapSee/pic_huijiqu_N.png'
import jinshuiqu from '../../../../assets/img/mapSee/pic_jinshuiqu_N.png'
import xingyangqu from '../../../../assets/img/mapSee/pic_xingyangqu_N.png'
import zhengdongxinqu from '../../../../assets/img/mapSee/pic_zhengdongxinqu_n.png'
//引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入折线图等组件
require('echarts/lib/chart/line')
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
     props: {
          bmaprightSliderPreList: {
               type: Object,
               default() {
                    return {}
               }
          }
     },
     data() {
          return {
               arr1: [],
               arr2: []
          }
     },
     created() {
          this.legendData();
     },
     mounted() {
          this.mapInit();
     },
     computed: {
          seriesList() {

          },
          mouthList() {

          }
     },
     methods: {
          legendData() {
               let arr1 = [`image://${zhengdongxinqu}`, `image://${xingyangqu}`, `image://${huijiqu}`, `image://${guangchengqu}`, `image://${jinshuiqu}`];
               let arr2 = [
                    {
                         name: '',
                         type: 'line',
                         lineStyle: {
                              color: {
                                   type: 'linear',
                                   x: 0,
                                   y: 0,
                                   x2: 0,
                                   y2: 1,
                                   colorStops: [{
                                        offset: 0, color: '#00D98B' // 0% 处的颜色
                                   }, {
                                        offset: 1, color: '#0CFF4B' // 100% 处的颜色
                                   }],
                                   global: false // 缺省为 false
                              }
                         },
                    },
                    {
                         type: 'line',
                         lineStyle: {
                              color: {
                                   type: 'linear',
                                   x: 0,
                                   y: 0,
                                   x2: 0,
                                   y2: 1,
                                   colorStops: [{
                                        offset: 0, color: '#F2596F' // 0% 处的颜色
                                   }, {
                                        offset: 1, color: '#E22436' // 100% 处的颜色
                                   }],
                                   global: false // 缺省为 false
                              }
                         }
                    },
                    {
                         type: 'line',
                         lineStyle: {
                              color: {
                                   type: 'linear',
                                   x: 0,
                                   y: 0,
                                   x2: 0,
                                   y2: 1,
                                   colorStops: [{
                                        offset: 0, color: '#00EAFF' // 0% 处的颜色
                                   }, {
                                        offset: 1, color: '#3C89E4' // 100% 处的颜色
                                   }],
                                   global: false // 缺省为 false
                              }
                         }
                    },
                    {
                         type: 'line',
                         lineStyle: {
                              color: {
                                   type: 'linear',
                                   x: 0,
                                   y: 0,
                                   x2: 0,
                                   y2: 1,
                                   colorStops: [{
                                        offset: 0, color: '#862CE2' // 0% 处的颜色
                                   }, {
                                        offset: 1, color: '#E33AA3' // 100% 处的颜色
                                   }],
                                   global: false // 缺省为 false
                              }
                         }
                    },
                    {
                         type: 'line',
                         lineStyle: {
                              color: {
                                   type: 'linear',
                                   x: 0,
                                   y: 0,
                                   x2: 0,
                                   y2: 1,
                                   colorStops: [{
                                        offset: 0, color: '#FFFC00' // 0% 处的颜色
                                   }, {
                                        offset: 1, color: '#FFA63D' // 100% 处的颜色
                                   }],
                                   global: false // 缺省为 false
                              }
                         }
                    }
               ];
               this.bmaprightSliderPreList.dataList.map((item, index) => {
                    item.icon = arr1[index];
                    item.type = arr2[index].type;
                    item.stack = arr2[index].stack;
                    item.lineStyle = arr2[index].lineStyle;
               });
               console.log(this.bmaprightSliderPreList.dataList);

               this.bmaprightSliderPreList.titleData.map((item, index) => {
                    let obj = {};
                    obj.textStyle = {
                         fontSize: 14,
                         color: '#fff'
                    };
                    obj.value = item + '月';
                    this.arr1.push(obj);
               });
          },
          mapInit() {
               // 基于准备好的dom，初始化echarts实例
               var myChart = echarts.init(document.getElementById('mjb_main'));
               // 指定图表的配置项和数据
               var option = {
                    title: {
                         show: true,
                         text: '近6个月郑州各区新房房价走势图',
                         left:'center',
                         textStyle: {
                              color: '#fff',
                              fontWeight: 500,
                              fontSize: 22,
                              lineHeight: 25,
                         }
                    },
                    tooltip: {
                         trigger: 'axis',
                         showContent:false
                    },
                    legend: {
                         show: true,
                         bottom: 8,
                         selectedMode: false,
                         align: 'left',
                         padding: [0, 0, 10, 0],
                         itemWidth: 8,
                         itemGap: 14,
                         textStyle: {
                              fontSize: 12,
                              color: '#fff'
                         },
                         data: this.bmaprightSliderPreList.dataList
                    },
                    grid: {
                         left: '5%',
                         right: '4%',
                         bottom: '15%',
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
                         scale: true,
                         offset: 10,
                         axisTick: {
                              show: false
                         },
                         splitLine: {
                              show: true,
                              lineStyle: {
                                   color: '#0E2241'
                              }
                         },
                         axisLine: {
                              lineStyle: {
                                   color: 'none'
                              }
                         },
                         data: this.arr1
                    },
                    yAxis: {
                         splitNumber: 3,
                         scale: true,
                         offset: 10,
                         axisTick: {
                              show: false
                         },
                         lineStyle: {
                              width: 0
                         },
                         splitLine: {
                              show: true,
                              lineStyle: {
                                   color: '#0E2241'
                              }
                         },
                         axisLine: {
                              lineStyle: {
                                   color: 'none'
                              }
                         },
                         axisLabel: {
                              formatter: function (val) {
                                   return val + 'w';
                              },
                              textStyle: {
                                   fontSize: 14,
                                   color: '#fff'
                              }
                         },
                    },
                    series: this.bmaprightSliderPreList.dataList
               };

               // 使用刚指定的配置项和数据显示图表。
               myChart.setOption(option);
          }
     }
}
</script>

