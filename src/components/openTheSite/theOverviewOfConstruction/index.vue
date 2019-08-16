<template>
     <article class="m-theOverviewOfConstruction" v-show="isshow">
          <!-- 标题介绍 -->
          <section class="g-title-introduce">
               <div class="g-title displayFlex">
                    <h1 class="u-title">{{openTheSiteData.title}}</h1>
                    <span class="u-icon">{{openTheSiteData.tagName}}</span>
               </div>
               <p class="u-text">{{openTheSiteData.content}}</p>
          </section>
          <!-- 施工总览列表 -->
          <section class="g-The-overview-of-list">
               <el-row :gutter="36" type="flex" justify="space-between">
                    <el-col v-for="(item1,index) in mjbProjectList1 " :key="index" :xl="6">
                         <MjbProjectListLi @fn_clickli="fn_clickli2" :obj1="item1"></MjbProjectListLi>
                    </el-col>
               </el-row>
               <el-row :gutter="36" type="flex" justify="space-between">
                    <el-col v-for="(item2,index) in mjbProjectList2 " :key="index" :xl="6">
                         <MjbProjectListLi @fn_clickli="fn_clickli2" :obj1="item2"></MjbProjectListLi>
                    </el-col>
               </el-row>
          </section>
     </article>
</template>
<script>
import MjbProjectListLi from '../projectListLi/index'
export default {
     components: {
          MjbProjectListLi
     },
     data() {
          return {
               isshow: false,
               openTheSiteData: {},
               mjbProjectList1: [

               ],
               mjbProjectList2: [

               ]
          }
     },
     created() {
          this.getHttp();
     },
     methods: {
          fn_clickli2(type) {
               this.$emit('fn_clickli', type);
          },
          splitArr(arr) {
               this.mjbProjectList1 = arr.slice(0, 4);
               this.mjbProjectList2 = arr.slice(4, arr.length);
          },

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
                    background: 'rgba(0, 0, 0, 0.7)'
               });
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/buiding/getConstructionOverview`,
                    data: {
                         propertyId: this.$route.params.id
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         this.openTheSiteData = res.response.data;
                         this.splitArr(this.openTheSiteData.blockList);
                         this.$nextTick(() => {
                              this.isshow = true;
                              loading.close();
                         });
                    }
               }).catch((err) => {
                    console.log(err);
               })
          }
     }
}
</script>

<style lang="scss" scoped>
.m-theOverviewOfConstruction {
     padding: 0 20px;
     margin: auto;
     // max-width: 1716px;
     .g-title-introduce {
          .u-text {
               text-align: justify;
               letter-spacing: 0.6px;
               @include setFont(28px);
               font-weight: 400;
               color: rgba(139, 148, 158, 1);
               line-height: 44px;
          }
          .g-title {
               margin-bottom: 30px;
               .u-title {
                    @include setFont(36px);
                    font-weight: 500;
                    color: rgba(33, 40, 50, 1);
                    line-height: 36px;
               }
               .u-icon {
                    margin-left: 10px;
                    width: 232px;
                    height: 36px;
                    border-radius: 2px;
                    border: 1px solid rgba(0, 128, 255, 1);
                    @include setFont(24px);
                    font-weight: 400;
                    color: rgba(0, 128, 255, 1);
                    line-height: 36px;
                    text-align: center;
               }
          }
     }
}
</style>
