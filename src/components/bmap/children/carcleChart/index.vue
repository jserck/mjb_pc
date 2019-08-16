<template>
     <article class="m-carcleChart">
          <section class="g-con">
               <div
                    class="g-circle-con displayFlex flexColumn flexAlignJustifyCenter flexAlignItemsCenter"
               >
                    <span>{{objs.name}}</span>
                    <div class="g-circle">
                         <el-progress
                              ref="a"
                              :stroke-width="3.5"
                              :width="70"
                              :color="circleColor"
                              type="circle"
                              :percentage="num"
                         ></el-progress>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          objs: {
               type: Object,
               default() {
                    return {}
               }
          }
     },
     computed: {
          num() {
               return this.objs.percentage * 1;
          }
     },
     data() {
          return {
               // circleColor: 'url("linear-gradient(to bottom top, red , blue)")'
               circleColor: '#009AFB'
          }
     }
// option = {

//     series: [
//         {
//             name:'访问来源',
//             type:'pie',
//             radius: ['42%', '50%'],
//             avoidLabelOverlap: false,
//             legendHoverLink:false,
//             hoverAnimation:false,
//             startAngle:90,
//             labelLine: {
//                 normal: {
//                     show: true
//                 }
//             },
//             label:{
//                     show: true,
//                     position: 'center',
//                     normal:{
//                         position: 'center',
//                         textStyle: {
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         },
//                         formatter: [
//                                 '{title|{d}}','{ab|%}'
//                             ].join(''),
//                              rich: {
//                                 title: {
//                                     color: '#000',
//                                     align: 'center',
//                                     fontSize: '23',
//                                     lineHeight:23,
//                                     fontWeight: 'bold'
//                                 },
//                                 ab:{
//                                     color: '#000',
//                                     fontSize: '14',
//                                 }
//                             }
//                     },

//             },

//             data:[
//                 {
//                     value:40,
//                     name:'直接访问',
//                     itemStyle:{
//                         color: {
//                             type: 'linear',
//                             x: 0,
//                             y: 0,
//                             x2: 0,
//                             y2: 1,
//                             colorStops: [{
//                                 offset: 1, color: '#009AFB' // 0% 处的颜色
//                             }, {
//                                 offset: 0, color: '#02C1CC' // 100% 处的颜色
//                             }],
//                             global: false // 缺省为 false
//                         }
//                     },
//                 },
//                 {
//                     value:100,
//                     name:'邮件营销',
//                     itemStyle:{
//                         color:'#3a4252'
//                     },
//                     label:{
//                         show: false,
//                         textStyle: {
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 }
//             ]
//         }
//     ]
// };

}
</script>

<style lang="scss" scoped>
.m-carcleChart {
     .g-con {
          .g-circle-con {
               span {
                    @include setFont(12px);
                    font-weight: 400;
                    color: rgba(195, 202, 217, 1);
               }
               .g-circle {
                    margin: 15px 0;
                    width: 70px;
                    height: 70px;
                    border-radius: 70px;
               }
               @media screen and (max-width: 1919px) {
                    .g-circle {
                         width: 60px;
                         height: 60px;
                    }
               }
               @media screen and (max-width: 1919px) {
                    .g-circle {
                         width: 50px;
                         height: 50px;
                    }
               }
          }
     }
}
</style>
<style>
.m-carcleChart svg path:first-child {
     stroke: #3a4252;
}

.el-progress--circle .el-progress__text {
     font-size: 18px !important;
     font-weight: 500;
     color: rgba(255, 255, 255, 1);
}
@media screen and (max-width: 1919px) {
     .el-progress-circle {
          width: 60px !important;
          height: 60px !important;
     }
     .el-progress--circle .el-progress__text {
          font-size: 16px !important;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
     }
}

@media screen and (max-width: 1600px) {
     .el-progress-circle {
          width: 50px !important;
          height: 50px !important;
     }
     .el-progress--circle .el-progress__text {
          font-size: 14px !important;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
     }
}
</style>

