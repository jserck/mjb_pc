<template>
     <article class="m-bmapEcharts">
          <section class="g-bmapEcharts">
               <div style="height:100%;width:100%" id="mjb_bmap"></div>
               <div class="g-goBack" v-show="!isBack">
                    <img @click="fn_goBack" src="@/assets/img/mapSee/pic_fanhui_n.png" alt />
               </div>
               <div class="g-mobanl">
                    <img src="@/assets/img/mapSee/pic_zuoce_n.png" alt />
               </div>
               <div class="g-mobanr">
                    <img src="@/assets/img/mapSee/pic_youce_n.png" alt />
               </div>
          </section>
     </article>
</template>
<script>

import pic_shuzihualoupan_n from '../../../../assets/img/mapSee/pic_shuzihualoupan_n.png'
import pic_qitaloupan_n from '../../../../assets/img/mapSee/pic_qitaloupan_n.png'
export default {
     name: "echarts",
     data() {
          return {
               chart: null,
               map: null,
               districtExplorer: null,
               arr: [],
               isBack: true,
               adCode: 410100,
               arrClick: [],
               isArea: 1,
               loading: null
          };
     },
     mounted() {
          this.fn_createScriptTag();
     },
     methods: {
          fn_goBack() {
               /**
                * @name 返回按钮操作
                * 更改返回状态
                * 清空地图
                * 初始化code
                * 重新画行政区
                */
               if (this.isBack) { return }
               this.isBack = true;
               this.clearMap();
               this.adCode = 410100;
               this.fn_districtExplorer();
          },
          clearMap() {
               /**
                * @name 清空地图
                */
               // this.districtExplorer.clearFeaturePolygons();
               // 清除地图上所有添加的覆盖物
               this.map.clearMap();
          },
          fn_clickHref(type, adcode, isArea) {
               /**
                * @name 区域btn点击操作
                * @prams adcode，isArea
                * 储存当前的code
                * 清空画布
                * 更改当前的返回状态
                * 储存是否需要画行政区
                * 请求当前区的楼盘撒点重新撒
                */
               if (!this.isBack || !adcode) { return };
               this.districtExplorer.clearFeaturePolygons();
               this.clearMap();
               this.isBack = false;
               this.adCode = adcode;
               this.isArea = isArea;
               this.getHttp();
          },
          fn_forMarker() {
               /**
                * @name 绘制标记点和楼盘信息窗体
                * 判断是否是返回状态，处理相应的楼盘数据
                * 根据当前的数据画标记点或者楼盘信息窗体
                */
               var self = this;
               var arr = self.isBack ? self.arr : self.arrClick;
               arr.map((itm, index) => {
                    self.createText(itm);
                    if (!self.isBack) {
                         itm.propertyList.map((item1, index1) => {
                              if (item1.isLightenUp) {
                                   self.createInfoWindow(item1);
                              }
                         });
                    } else {
                         itm.propertyList.map((item1, index1) => {
                              self.createMaker(item1);
                         });
                    }
               });
          },
          fn_noIsArea() {
               /**
                * @name 不需要画行政区时执行的操作
                * 缩放地图
                * 定位当前区的中心点
                * 绘制当前区域标记点或者楼盘信息窗体
                */
               this.map.setZoom(13);
               this.map.setCenter([this.arrClick[0].longitude, this.arrClick[0].latitude]);
               this.fn_forMarker();
          },
          fn_districtExplorer() {
               /**
                * @name 绘制行政区域划分
                * 实例化高德UI插件
                * 绘制行政区子区域和父区域
                * 绘制所有区域标记点或者楼盘信息窗体
                */
               var self = this;
               AMapUI.loadUI(['geo/DistrictExplorer'], function (DistrictExplorer) {
                    //创建一个实例
                    self.districtExplorer = new DistrictExplorer({
                         eventSupport: true,
                         map: self.map
                    });
                    // if (self.isBack) {
                    //      //feature被点击
                    //      self.districtExplorer.on('featureClick', function (e, feature) {
                    //           self.fn_clickHref('1', feature.properties.adcode);
                    //      });
                    // }
                    function renderAreaNode(areaNode) {
                         var fillColor = '#5b71a3';
                         var strokeColor = '#485b86';
                         if ([self.adCode].indexOf(areaNode.getAdcode()) >= 0) {
                              //绘制子区域
                              self.districtExplorer.renderSubFeatures(areaNode, function (feature, i) {
                                   return {
                                        cursor: 'default',
                                        bubble: true,
                                        strokeColor: strokeColor, //线颜色
                                        strokeOpacity: 0.5, //线透明度
                                        strokeWeight: 1, //线宽
                                        fillColor: fillColor, //填充色
                                        fillOpacity: 0, //填充透明度
                                   };
                              });
                         }

                         //绘制父区域
                         self.districtExplorer.renderParentFeature(areaNode, {
                              cursor: 'default',
                              bubble: true,
                              strokeColor: strokeColor, //线颜色
                              strokeOpacity: 0.5, //线透明度
                              strokeWeight: 1, //线宽
                              fillColor: fillColor, //填充色
                              fillOpacity: 0.08, //填充透明度
                         });
                    }
                    var adcodes = [
                         self.adCode, //上海
                    ];
                    self.districtExplorer.loadMultiAreaNodes(adcodes, function (error, areaNodes) {
                         //设置定位节点，支持鼠标位置识别
                         //注意节点的顺序，前面的高优先级
                         self.districtExplorer.setAreaNodesForLocating(areaNodes);
                         //清除已有的绘制内容
                         self.districtExplorer.clearFeaturePolygons();
                         for (var i = 0, len = areaNodes.length; i < len; i++) {
                              renderAreaNode(areaNodes[i]);
                         }
                         //更新地图视野
                         self.map.setFitView(self.districtExplorer.getAllFeaturePolygons());
                         self.fn_forMarker();
                         // self.map.setFitView(); //自适应所有覆盖物
                    });
               });
          },
          createText(item) {
               /**
               * @name 绘制区域点击btn
               * 按照缩放等级隐藏某些区域
               * 添加点击事件，展示点击区域的相信信息
               */
               var self = this;
               var markerContent = self.isBack ? '' +
                    '<div class="g-markerText displayFlex flexColumn flexAlignJustifyCenter"><p class="u-p1">' + item.districtName + '</p><p class="u-p2">' + item.propertyCount + '个楼盘' + '</p></div>' : '' +
                    '<div class="g-markerText2"><p class="u-p1">' + item.districtName + '</p></div>'
               //优化方面
               var minZoom = item.code == "410105" || item.code == "410104" || item.code == "410102"
                    ? 12 : 10;
               var style = [
                    {
                         icon: {
                              img: '',
                              size: [0, 0],//图标的原始大小
                              ancher: [0, 0],//锚点，图标原始大小下锚点所处的位置，相对左上角
                              //可缺省，当使用精灵图时可用，标示图标在整个图片中左上角的位置
                              imageSize: [0, 0],
                              //可缺省，当使用精灵图时可用，整张图片的大小
                              fitZoom: 10,//最合适的级别，在此级别下显示为原始大小
                              scaleFactor: 1,//地图放大一级的缩放比例系数
                              maxScale: 1,//最大放大比例
                              minScale: 1,//最小放大比例
                         },
                         label: {
                              content: markerContent,
                              offset: [-50, -50],
                              minZoom: minZoom
                         }
                    }
               ];
               var zoomStyleMapping2 = {
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 0,
                    20: 0
               };
               var marker = new AMap.ElasticMarker({
                    position: new AMap.LngLat(item.longitude, item.latitude),
                    styles: style,
                    topWhenClick: true,
                    zoomStyleMapping: zoomStyleMapping2,
                    zIndex: 200
               })
               if (self.isBack) {
                    marker.on('click', function (e) {
                         self.fn_clickHref('2', item.code, item.isArea);
                    })
               }
               // 将 markers 添加到地图
               this.map.add(marker);
          },
          createMaker(item) {
               /**
               * @name 绘制楼盘撒点标记
               */
               // isLightenUp
               if (item.longitude && item.latitude) {
                    // 创建一个 icon
                    var self = this;
                    var src = item.isLightenUp == 1 ? pic_shuzihualoupan_n : pic_qitaloupan_n;
                    var size = item.isLightenUp == 1 ? 26 : 12;
                    // 创建 AMap.Icon 实例：
                    var icon = new AMap.Icon({
                         size: new AMap.Size(40, 50),    // 图标尺寸
                         image: src,  // Icon的图像
                         imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
                         imageSize: new AMap.Size(size, size),   // 根据所设置的大小拉伸或压缩图片
                    });
                    // 将 Icon 实例添加到 marker 上:
                    var marker = new AMap.Marker({
                         position: new AMap.LngLat(item.longitude, item.latitude),
                         offset: new AMap.Pixel(-10, -10),
                         icon: icon, // 添加 Icon 实例
                         title: item.propertyName,
                         anchor: 'center-center',
                    });

                    // marker.on('click', function (e) {
                    //      self.fn_clickHref('3', item.code);
                    // })

                    this.map.add(marker);
               }
          },
          createInfoWindow(item) {
               /**
               * @name 绘制区域楼盘信息窗体
               */
               //实例化blue窗体
               var contentBlue = [];
               contentBlue.push('<div class="content-blue-card">');
               contentBlue.push('<i class="u-blue-icon">');
               contentBlue.push('</i>');
               contentBlue.push('<p>');
               contentBlue.push(item.propertyName);
               contentBlue.push('</p>');
               contentBlue.push('<p>');
               contentBlue.push(item.price);
               contentBlue.push('</p>');
               contentBlue.push('</div>');
               //实例化green窗体
               var contentGreen = [];
               contentGreen.push('<div class="content-green-card">');
               contentGreen.push('<i class="u-green-icon">');
               contentGreen.push('</i>');
               contentGreen.push('<div class="content-green-con displayFlex flexAlignItemsCenter">');
               contentGreen.push("<span class='u-img'>");
               contentGreen.push("</span>");
               contentGreen.push('<div>');
               contentGreen.push('<p class="p1">');
               contentGreen.push(item.propertyName);
               contentGreen.push('</p>');
               contentGreen.push('<p class="p2">');
               contentGreen.push(item.price);
               contentGreen.push('</p>');
               contentGreen.push('</div>');
               contentGreen.push('</div>');
               contentGreen.push('<ul class="displayFlex flexNoWrap">');
               for (let index = 0; index < item.tagList.length; index++) {
                    contentGreen.push('<li>' + item.tagList[index].tagName + '</li>');
               }
               contentGreen.push('</ul>');
               contentGreen.push('</div>');
               var content = item.isLightenUp == 1 ? contentGreen : contentBlue;
               var zIndex = item.isLightenUp == 1 ? 200 : 100;
               var position = new AMap.LngLat(item.longitude, item.latitude);
               var text = new AMap.Text({
                    text: content.join(""),
                    anchor: 'bottom-center',
                    cursor: 'pointer',
                    position: position,
                    zIndex: zIndex,
                    topWhenClick: true
               });
               text.setMap(this.map);
          },
          getHttp(code) {
               /**
               * @name 获取数据
               * @method post
               * @param cityId 楼盘ID
               * @param code 区域code
               * 根据当前返回的状态保存对应的数据list
               * 根据是否需要画行政区来指定如何渲染
               */
               var url = !this.isBack ? `/maijiabangService-1.0-SNAPSHOT/h5/getCityMonitorAreaPoint` : `/maijiabangService-1.0-SNAPSHOT/h5/getCityMonitorPointInfo`;
               let options = {
                    urls: url,
                    data: {
                         cityId: this.$route.params.id,
                         code: this.adCode
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    console.log(res);

                    if (res.code == 0) {
                         if (!this.isBack) {
                              this.arrClick = res.response.data.list;
                         } else {
                              this.arr = res.response.data.list;
                              this.arr.map((item, index) => {
                                   item.propertyList.map((item1, index1) => {
                                        item1.code = item.code;
                                   });
                              });
                         }
                         if (this.isArea == 1) {
                              this.fn_districtExplorer();
                         } else {
                              this.fn_noIsArea();
                         }

                    }
                    this.$nextTick(() => {
                         this.loading.close();
                    });
               }).catch((err) => {
                    console.log(err);
               })
          },
          fn_createScriptTagMapUi() {
               /**
               * @name 局部引入高德地图UI插件
               * 加载完成以后创建地图实例
               */
               this.loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0,0,0,0.7)'
               });
               var sc = document.createElement('script');
               var self = this;
               sc.type = 'text/javascript';
               sc.onload = function () {
                    self.fn_mapCreate();
               }
               sc.src = "//webapi.amap.com/ui/1.0/main.js?v=1.0.11";
               document.body.appendChild(sc);
          },
          fn_createScriptTag() {
               /**
               * @name 局部引入高德地图
               * 加载完成以后以执行引入UI插件
               */
               var sc = document.createElement('script');
               var self = this;
               sc.type = 'text/javascript';
               sc.onload = function () {
                    self.fn_createScriptTagMapUi();
               }
               sc.src = 'https://webapi.amap.com/maps?v=1.4.15&key=40ec28363721adcdcabb89d4e5005944&plugin=AMap.DistrictSearch,ElasticMarker';
               document.body.appendChild(sc);
          },
          fn_mapCreate() {
               /**
               * @name 实例化高德地图
               * 地图加载完成以后请求数据并根据相应的数据绘制
               */
               var self = this;
               var myChart = null;
               this.map = new AMap.Map('mjb_bmap', {
                    zooms: [10, 30],
                    center: [113.62, 34.75],//中心点坐标
                    showLabel: false, //不显示地图文字标记
                    mapStyle: 'amap://styles/b21afa0f6e2f71b2f8e5afbf896907d8',
               });
               this.map.on('complete', function () {
                    //中心撒点
                    self.getHttp();
               });
          }
     }
}
</script>

<style lang="scss" scoped>
.m-bmapEcharts {
     height: 100%;
     .g-bmapEcharts {
          height: 100%;
          background: #000916;
          position: relative;
          .g-goBack {
               position: absolute;
               bottom: 84px;
               right: 70px;
               z-index: 20;
               width: 100px;
          }
          @media screen and (max-width: 1919px) {
               .g-goBack {
                    position: absolute;
                    bottom: 44px;
                    right: 70px;
                    z-index: 20;
                    width: 70px;
               }
          }
          .g-mobanr,
          .g-mobanl {
               position: absolute;
               width: 15%;
               height: 100%;
               top: 0;
               z-index: 12;
               img {
                    width: 100%;
                    height: 100%;
               }
          }
          .g-mobanr {
               right: 0;
          }

          .g-mobanl {
               left: 0;
          }
          height: 100%;
          #mjb_bmap {
               width: 100%;
               height: 100%;
          }
     }
}
</style>
<style>
/* content-blue-card 样式 */
.content-blue-card {
     position: relative;
     padding: 7px 10px;
     /* width: 109px; */
     /* height: 41px; */
     background: url("~@/assets/img/mapSee/pic_qitaloupandise_N.png") no-repeat;
     background-size: 100% 100%;
     line-height: 55px;
}
.content-blue-card .u-blue-icon {
     display: inline-block;
     position: absolute;
     bottom: -8px;
     left: 0;
     right: 0;
     margin: auto;
     width: 10px;
     height: 10px;
     background: url("~@/assets/img/mapSee/pic_qitaloupandise_xiaojiao_N.png")
          no-repeat;
     background-size: 100% 100%;
}

.content-blue-card p {
     overflow: hidden;
     white-space: nowrap;
     text-align: center;
     line-height: 18px;
     font-weight: 500;
     color: rgba(182, 194, 224, 1);
}
.content-blue-card p:nth-child(1) {
     font-size: 14px;
}
.content-blue-card p:nth-child(2) {
     font-size: 12px;
}
/* content-green-card 样式 */
.content-green-card {
     display: inline-block;
     border: 1px solid rgba(255, 255, 255, 0);
     background: url("~@/assets/img/mapSee/pic_zhongdianloupandise_N.png")
          no-repeat;
     background-size: 100% 100%;
}
.content-green-card .u-green-icon {
     display: inline-block;
     position: absolute;
     bottom: -17px;
     left: 0;
     right: 0;
     margin: auto;
     width: 20px;
     height: 20px;
     background: url("~@/assets/img/mapSee/pic_zhongdianloupandise_xiaojiao_N.png")
          no-repeat;
     background-size: 100% 100%;
}
.content-green-card .u-img {
     margin-right: 10px;
     width: 49px;
     height: 49px;
     background: url("~@/assets/img/mapSee/icon_loupan_n.png") no-repeat;
     background-size: 100% 100%;
}
.content-green-card .content-green-con,
.content-green-card ul {
     padding: 0 10px;
}
.content-green-card .content-green-con {
     position: relative;
     margin-top: 9px;
}
.content-green-card ul {
     margin-top: 5px;
     margin-bottom: 6px;
}
.content-green-card .content-green-con .p1 {
     white-space: nowrap;
     overflow: hidden;
     font-size: 24px;
     font-weight: 500;
     color: rgba(255, 255, 255, 1);
}
.content-green-card .content-green-con .p2 {
     font-size: 16px;
     font-weight: 500;
     color: rgba(255, 255, 255, 1);
}
.content-green-card ul li {
     /* width: 90px; */
     text-align: center;
     padding: 3px 4px;
     margin-right: 8px;
     border: 1px solid #fff;
     font-size: 14px;
     font-weight: 400;
     color: rgba(255, 255, 255, 1);
     line-height: 100%;
     flex-shrink: 0;
     overflow: hidden;
}
.amap-overlay-text-container {
     background: none;
     padding: 0;
     border: none;
     overflow: initial;
}
.amap-marker-label {
     background: none;
     border: none;
}
.g-markerText {
     width: 100px;
     height: 100px;
     border-radius: 100px;
     background: #009dff52;
     box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
     -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.3);
}
.g-markerText,
.g-markerText2 p {
     text-align: center;
     white-space: nowrap;
     line-height: 20px;
     color: #b9d7eb;
}
.g-markerText .u-p1,
.g-markerText2 .u-p1 {
     font-size: 18px !important;
     font-family: PingFangSC-Semibold;
}
.g-markerText .u-p2 {
     font-size: 14px !important;
     font-family: PingFangSC-Semibold;
}
</style>
