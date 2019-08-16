<template>
     <article class="m-bmapLeftSlider">
          <section class="g-bmapLeftSlider">
               <ul class="g-bmapLeftSlider-list displayFlex flexColumn flexJustifyAround">
                    <li v-for="(item,index) in bmapLeftSliderList" :key="index">
                         <div class="g-li displayFlex flexAlignItemsCenter flexAlignJustifyStart">
                              <div class="g-li-img">
                                   <img :src="item.iconUrl" alt />
                              </div>
                              <div class="g-li-con displayFlex flexColumn flexAlignJustifyCenter">
                                   <span class="u-num">{{item.count}}</span>
                                   <span class="u-name">{{item.tagName}}</span>
                              </div>
                         </div>
                    </li>
               </ul>
          </section>
     </article>
</template>
<script>
import imgSrc from '../../../../assets/img/mapSee/icon_loudonggongchengjiansheshujuliang_n.jpg'
export default {
     data() {
          return {
               imgSrc
          }
     },
     props: {
          bmapLeftSliderList: {
               type: Array,
               default() {
                    return []
               }
          }
     }
}
</script>

<style lang="scss" scoped>
.m-bmapLeftSlider {
     height: 100%;
     .g-bmapLeftSlider {
          height: 100%;
          .g-bmapLeftSlider-list {
               height: 100%;
               li {
                    .g-li {
                         // margin-top: 24px;
                         .g-li-img {
                              margin-right: 25px;
                              width: 100%;
                              max-width: 38px;
                         }
                         .g-li-con {
                              .u-num {
                                   @include setFont(32px);
                                   font-weight: 500;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 32px;
                              }
                              .u-name {
                                   margin-top: 5px;
                                   @include setFont(16px);
                                   font-weight: 400;
                                   color: rgba(195, 202, 217, 1);
                                   line-height: 16px;
                              }
                         }
                    }
               }
          }
     }
}
</style>
