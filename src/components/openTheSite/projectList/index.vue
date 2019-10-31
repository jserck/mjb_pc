<template>
     <article class="m-theOverviewOfConstruction">
          <!-- 列表 -->
          <section class="g-The-overview-of-list">
               <div v-if="obj1.length > 0">
                    <ul
                         class="displayFlex flexWrap flexAlignJustifyStart"
                         :gutter="36"
                         type="flex"
                         justify="space-between"
                    >
                         <li v-for="(item1,index) in obj1 " :key="index" :xl="6">
                              <MjbProjectListLi @fn_clickli="fn_clickli2" :obj1="item1"></MjbProjectListLi>
                         </li>
                    </ul>
               </div>
               <div v-else>暂无数据</div>
          </section>
     </article>
</template>
<script>
import MjbProjectListLi from '../projectListLi/index'
export default {
     props: {
          obj1: {
               type: Array,
               default() {
                    return []
               }
          }
     },
     components: {
          MjbProjectListLi
     },
     data() {
          return {

          }
     },
     methods: {
          fn_clickli2(type) {
               this.$emit('fn_clickli', type);
          }
     },
     created() {

     }
}
</script>

<style lang="scss" scoped>
.m-theOverviewOfConstruction {
     width: 100%;
     .g-The-overview-of-list {
          width: 100%;
          ul {
               margin: auto;
               // max-width: 1752px;
               width: 100%;
               li {
                    padding: 0 18px;
                    @media screen and (max-width: 1660px) {
                         padding: 0 12px;
                    }
                    @media screen and (max-width: 1200px) {
                         padding: 0 10px;
                    }
                    @media screen and (max-width: 985px) {
                         padding: 0 8px;
                    }
                    width: 22.4265%;
               }
          }
     }
}
</style>
