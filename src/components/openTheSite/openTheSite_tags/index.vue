<template>
     <article class="m-openTheSite-tags">
          <section class="g-openTheSite-tags-con">
               <el-row class="g-tags-list">
                    <el-col
                         v-for="(item,index) in tagsList"
                         :key="index"
                         class="u-col-li"
                         :span="colTagsSpan"
                    >
                         <span
                              :class="[changeIndex == index ?tagsActive:'']"
                              @click="fn_changeTags(index)"
                         >{{item}}</span>
                    </el-col>
               </el-row>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          tagsList: {
               type: Array,
               default() {
                    return [];
               }
          }
     },
     data() {
          return {
               tagsActive: 'active',
               changeIndex: 0
          }
     },
     computed: {
          colTagsSpan() {
               if (this.tagsList.length != 0) {
                    return 24 / this.tagsList.length;
               }
               return 0;
          }
     },
     methods: {
          fn_changeTags(index) {
               this.changeIndex = index;
               this.$emit('changeTags', index);
          }
     }
}
</script>

<style lang="scss" scoped>
.m-openTheSite-tags {
     .g-openTheSite-tags-con {
          .g-tags-list {
               .u-col-li {
                     @include setFont(32px);
                    font-weight: 400;
                    color: rgba(139, 148, 158, 1);
               }
               .active {
                    color: #0080ff;
                    position: relative;
                    &:before {
                         content: "";
                         display: block;
                         position: absolute;
                         left: 50%;
                         margin-left: -40px;
                         bottom: 0;
                         background: #0080ff;
                         width: 80px;
                         height: 4px;
                    }
               }
          }
     }
}
</style>
