<template>
     <article class="m-map-see">
          <!-- 地图实例 -->
          <section class="g-map">
               <Mjb-bmap-charts></Mjb-bmap-charts>
          </section>
          <!-- 数据展示 -->
          <section class="g-data" v-if="isHttp">
               <!-- header -->
               <div class="g-header">
                    <Mjb-bmap-header :headerText="headerText"></Mjb-bmap-header>
               </div>
               <main>
                    <section class="g-main displayFlex flexJustifybetween">
                         <!-- left slider-->
                         <div class="g-left">
                              <Mjb-bmap-left :bmapLeftSliderList="bmapLeftSliderList"></Mjb-bmap-left>
                         </div>
                         <!-- right slider-->
                         <div class="g-right displayFlex flexColumn flexJustifyAround">
                              <!-- 折线图 -->
                              <div class="g-line-chart">
                                   <Mjb-bmap-line :bmaprightSliderPreList="bmaprightSliderPreList">
                                        <!-- <h1 slot="h1w">2019年近6个月郑州各区新房房价走势图</h1> -->
                                        <p slot="p2">说明：房价参考贝壳平台发布的房价数据</p>
                                   </Mjb-bmap-line>
                              </div>
                              <!-- 环形图 -->
                              <div class="g-aricle-chart">
                                   <h1>在建楼盘工程进度统计</h1>
                                   <div class="g-aricle-chart-con">
                                        <ul
                                             class="g-aricle-chart-list displayFlex flexJustifybetween"
                                        >
                                             <li
                                                  v-for="(item,index) in bmaprightSlidercircleList"
                                                  :key="index"
                                             >
                                                  <Mjb-bmap-carcle :objs="item"></Mjb-bmap-carcle>
                                             </li>
                                        </ul>
                                        <ul
                                             class="g-aricle-chart-label displayFlex flexAlignJustifyCenter"
                                        >
                                             <li class="displayFlex flexAlignItemsCenter">
                                                  <img
                                                       src="@/assets/img/mapSee/pic_weijiankong_n.png"
                                                       alt
                                                  />
                                                  <span>未监控</span>
                                             </li>
                                             <li class="displayFlex flexAlignItemsCenter">
                                                  <img
                                                       src="@/assets/img/mapSee/pic_yijiankong_n.png"
                                                       alt
                                                  />
                                                  <span>已监控</span>
                                             </li>
                                        </ul>
                                   </div>
                                   <p>说明：开放工地监控楼盘地基阶段、工程主体、装修装饰、竣工交房全过程。</p>
                              </div>
                              <div class="g-date">
                                   <p>监控中心数据统计日期：{{updateDate}}</p>
                              </div>
                         </div>
                    </section>
               </main>
          </section>
     </article>
</template>
<script>
import MjbBmapHeader from './children/bmapHeader/index'
import MjbBmapCharts from './children/bmapEcharts/index'
import MjbBmapLeft from './children/bmapLeftSlider/index'
import MjbBmapCarcle from './children/carcleChart/index'
import MjbBmapLine from './children/lineChart/index'
import imgSrc from '../../assets/img/mapSee/icon_loudonggongchengjiansheshujuliang_n.jpg'
export default {
     components: {
          MjbBmapHeader,
          MjbBmapLeft,
          MjbBmapCarcle,
          MjbBmapLine,
          MjbBmapCharts
     },
     data() {
          return {
               isHttp: false,
               headerText: "鹰眼鉴房(郑州)质量监控中心",
               bmaprightSliderPreList: {},
               bmaprightSlidercircleList: [],
               updateDate: '',
               bmapLeftSliderList: []
          }
     },
     created() {
          this.getHttp();
     },
     methods: {
          getHttp() {
               /**
               * @name 获取数据
               * @method post
               * @param propertyId 楼盘ID
               */
               const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0,0,0,0.7)'
               });
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/getCityMonitorCountInfo`,
                    data: {
                         cityId: this.$route.params.id,
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         let data = res.response.data;
                         console.log(res);

                         this.bmapLeftSliderList = data.countList;
                         this.bmaprightSliderPreList = data.priceTrends;
                         this.bmaprightSlidercircleList = data.buildingSpeedOfProgressList;
                         this.updateDate = data.updateDate;
                         this.isHttp = true;
                    }
                    this.$nextTick(() => {
                         loading.close();
                    });
               }).catch((err) => {
                    console.log(err);
               })
          }
     }
}
</script>

<style lang="scss" scoped>
.m-map-see {
     position: relative;
     overflow: hidden;
     width: 100%;
     height: 100%;
     .g-map {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 9;
     }
     .g-data {
          position: relative;
          width: 100%;
          height: 100%;
          .g-header {
               position: absolute;
               top: 0;
               z-index: 9;
               width: 100%;
          }

          main {
               padding: 0 40px;
               height: 100%;
               .g-main {
                    position: relative;
                    height: calc(100% - 107px);
                    padding-top: 107px;
                    .g-left,
                    .g-right {
                         position: relative;
                         z-index: 11;
                         height: calc(100% - 80px);
                    }
                    .g-right {
                         height: calc(100% - 150px);
                         .g-line-chart {
                              h1 {
                                   @include setFont(22px);
                                   font-weight: 500;
                                   color: rgba(195, 202, 217, 1);
                              }
                              p {
                                   @include setFont(14px);
                                   font-weight: 400;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 18px;
                              }
                         }
                         .g-aricle-chart {
                              h1 {
                                   @include setFont(22px);
                                   font-weight: 500;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 22px;
                              }
                              p {
                                   margin-top: 21px;
                                   max-width: 356px;
                                   @include setFont(14px);
                                   font-weight: 400;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 18px;
                              }
                              @media screen and (max-width: 1919px) {
                                   p {
                                        margin-top: 15px;
                                   }
                              }
                              @media screen and (max-width: 1919px) {
                                   p {
                                        margin-top: 11px;
                                   }
                              }
                              .g-aricle-chart-con {
                                   .g-aricle-chart-list {
                                        padding: 0 15px;
                                        margin-top: 31px;
                                   }
                                   @media screen and (max-width: 1919px) {
                                        .g-aricle-chart-list {
                                             padding: 0 15px;
                                             margin-top: 21px;
                                        }
                                   }
                                   @media screen and (max-width: 1919px) {
                                        .g-aricle-chart-list {
                                             padding: 0 15px;
                                             margin-top: 11px;
                                        }
                                   }
                                   .g-aricle-chart-label {
                                        li {
                                             margin-left: 21px;
                                        }
                                        img {
                                             width: 8px;
                                        }
                                        span {
                                             margin-left: 4px;
                                             @include setFont(12px);
                                             font-weight: 400;
                                             color: rgba(195, 202, 217, 1);
                                        }
                                   }
                              }
                         }
                         .g-date {
                              p {
                                   @include setFont(14px);
                                   font-weight: 400;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 18px;
                              }
                         }
                    }
               }
          }
     }
}
</style>
