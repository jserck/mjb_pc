<template>
     <article class="m-theOverviewOfConstruction">
          <!-- 列表 -->
          <section class="g-The-overview-of-list">
               <div v-if="obj.length>0">
                    <ul
                         class="list displayFlex flexWrap flexAlignJustifyStart"
                         v-infinite-scroll="load"
                         infinite-scroll-disabled="disabled"
                         infinite-scroll-immediate="false"
                         infinite-scroll-distance="20"
                    >
                         <li class="list-item" v-for="(item1,index) in obj " :key="index" :xl="6">
                              <MjbprojectParticularsLi
                                   :index="index"
                                   @videPlayBtn="videPlayBtn"
                                   :obj1="item1"
                              ></MjbprojectParticularsLi>
                         </li>
                    </ul>
               </div>
               <div class="g-nodata" v-else>
                    <MjbNoData :isShow="true"></MjbNoData>
               </div>
          </section>
     </article>
</template>
<script>
import MjbprojectParticularsLi from '../projectParticularsLi/index'
import MjbNoData from '../../common/noData'
export default {
     props: {
          obj: {
               type: Array,
               default() {
                    return []
               }
          },
          disabled: {
               type: Boolean,
               default: false
          },
          count: {
               type: Number,
               default: 0
          },
     },
     components: {
          MjbprojectParticularsLi,
          MjbNoData
     },
     methods: {
          videPlayBtn(index) {
               this.$emit('videPlayBtn', index);
          },
          load() {
               this.$emit('scrollHttp', this.count);
          },
     }
}
</script>

<style lang="scss" scoped>
.m-theOverviewOfConstruction {
     .g-The-overview-of-list {
          .g-nodata {
               margin: auto;
               margin-top: 190px;
               width: 17.482517%;
               @media screen and (max-width: 1900px) {
                    margin-top: 150px;
               }
               @media screen and (max-width: 1600px) {
                    margin-top: 120px;
               }
               @media screen and (max-width: 1600px) {
                    margin-top: 100px;
               }
          }
          ul {
               height: calc(100vh - 260px);
               // @media screen and (min-height: 1080px) {
               //      height: 1280px;
               // }
               // @media screen and (min-height: 1280px) {
               //      height: 1480px;
               // }
               overflow-y: scroll;
               -webkit-overflow-scrolling: touch;
               margin: auto;
               margin-top: 40px;
               // max-width: 1752px;
               width: 100%;
               padding-top: 5px;
               li {
                    margin-bottom: 44px;
                    padding: 0 1.0498%;
                    width: 31%;
                    height: 594px;
                    @media screen and (max-width: 1660px) {
                         padding: 0 15px;
                    }
                    @media screen and (max-width: 1310px) {
                         padding: 0 10px;
                    }
                    @media screen and (max-width: 985px) {
                         padding: 0 8px;
                    }
               }
          }
     }
}
</style>
