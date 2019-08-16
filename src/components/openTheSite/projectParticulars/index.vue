<template>
     <article class="m-theOverviewOfConstruction">
          <!-- 列表 -->
          <section class="g-The-overview-of-list">
               <ul
                    class="list displayFlex flexWrap flexAlignJustifyStart"
                    v-infinite-scroll="load"
                    infinite-scroll-disabled="disabled"
                    infinite-scroll-immediate="false"
               >
                    <li class="list-item" v-for="(item1,index) in obj " :key="index" :xl="6">
                         <MjbprojectParticularsLi
                              :index="index"
                              @videPlayBtn="videPlayBtn"
                              :obj1="item1"
                         ></MjbprojectParticularsLi>
                    </li>
               </ul>
          </section>
     </article>
</template>
<script>
import MjbprojectParticularsLi from '../projectParticularsLi/index'
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
          MjbprojectParticularsLi
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
          ul {
               height: 1080px;
               @media screen and (min-height: 1080px) {
                    height: 1280px;
               }
               @media screen and (min-height: 1280px) {
                    height: 1480px;
               }
               overflow-y: scroll;
               margin: auto;
               margin-top: 40px;
               // max-width: 1752px;
               width: 100%;
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
