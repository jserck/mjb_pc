<template>
     <article class="m-openTheSite">
          <el-container>
               <!-- HEADER -->
               <el-header height="90px">
                    <el-row type="flex" justify="space-between" align="middle" class="g-header-row">
                         <el-col :span="6">
                              <h1>开放工地</h1>
                         </el-col>
                         <el-col :lg="14" :xl="11">
                              <Mjb-tags
                                   @changeTags="fn_changeTags"
                                   :tagsList="['施工总览','楼栋工程','户内工程','园区工程']"
                              ></Mjb-tags>
                         </el-col>
                    </el-row>
               </el-header>
               <!-- MAIN -->
               <el-main>
                    <!-- 施工总览 -->
                    <section style="margin-top:40px" v-show="mjbTagsIndex==0">
                         <MjbTheOverviewOfConstruction @fn_clickli="fn_clickli"></MjbTheOverviewOfConstruction>
                    </section>
                    <!-- 工程列表 -->
                    <section v-show="mjbTagsIndex==1">
                         <MjbprojectList :obj1="mjbprojectListData" @fn_clickli="fn_clickli"></MjbprojectList>
                    </section>
                    <!-- 工程详情 -->
                    <section v-show="mjbTagsIndex==2">
                         <MjbprojectParticulars
                              @scrollHttp="scrollHttp"
                              @videPlayBtn="videPlayBtn"
                              :disabled="disabled"
                              :count="count"
                              :obj="theOverviewOfConstructionData"
                         ></MjbprojectParticulars>
                    </section>
               </el-main>
               <!-- FOOTER -->
               <el-footer height="auto">
                    <Mjb-back @fn_back="fn_back"></Mjb-back>
               </el-footer>
          </el-container>
     </article>
</template>
<script>
import MjbTags from './openTheSite_tags/index'
import MjbBack from './openTheSite_footer_back/index'
import MjbTheOverviewOfConstruction from './theOverviewOfConstruction/index'
import MjbprojectList from './projectList/index'
import MjbprojectParticulars from './projectParticulars/index'
export default {
     components: {
          MjbTags,
          MjbBack,
          MjbTheOverviewOfConstruction,
          MjbprojectList,
          MjbprojectParticulars,
     },
     computed: {
          disabled() {
               return this.loading || this.noMore
          }
     },
     data() {
          return {
               noMore: false,
               activeName: '',
               mjbTagsIndex: 0,
               parIndex: 0,
               mjbprojectListData: [],
               theOverviewOfConstructionData: [],
               loading: false,
               count: 1,
               tableIndex: 0
          }
     },
     methods: {
          videPlayBtn(index) {
               this.theOverviewOfConstructionData.map((item) => {
                    this.$set(item, 'isPlay', false);
               });
               this.$set(this.theOverviewOfConstructionData[index], 'isPlay', true);
          },
          repeat() {
               this.noMore = false;
               this.loading = false;
               this.count = 1;
          },
          openLoading() {
               const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
               });
          },
          fn_changeTags(index) {
               this.tableIndex = index;
               this.repeat();
               if (index > 0 && this.mjbTagsIndex != 1) {
                    this.mjbTagsIndex = 1;
               } else if (index == 0 && this.mjbTagsIndex != 0) {
                    this.mjbTagsIndex = 0;
               }
               // this.mjbprojectListData++;
               if (this.mjbTagsIndex != 1) return;
               this.getHttp(index);
          },
          fn_clickli(index) {
               this.parIndex = index;
               this.getTheOverviewOfConstruction();
               this.mjbTagsIndex = 2;
          },
          fn_back() {
               if (this.mjbTagsIndex == 1 || this.mjbTagsIndex == 0) {
                    this.$router.push({
                         path: '/openTheSite/' + this.$route.params.id,
                         query: {
                              backType: 'goBack'
                         }
                    });
                    return;
               };
               this.repeat();
               if (this.tableIndex == 0) {
                    this.mjbTagsIndex = 0;
                    return;
               }
               this.mjbTagsIndex = 1;
               this.getHttp(this.tableIndex);
          },
          scrollHttp(count) {
               console.log('sdfsdf', count);
               if (!count) {
                    return;
               }
               this.getTheOverviewOfConstruction(count);
          },
          getTheOverviewOfConstruction(count) {
               /**
               * @name 获取数据
               * @method post
               * @param propertyId 楼盘ID
               */
               let loading = null;
               loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
               });
               if (count) {
                    this.loading = true;
               }
               let pageNum = count || 1;
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/buiding/getContributionFallList1_6_1`,
                    data: {
                         propertyId: this.$route.params.id,
                         type: this.parIndex,
                         pageNum,
                         pageSize: 9
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         if (count) {
                              let arr1 = this.theOverviewOfConstructionData;
                              let arr2 = res.response.data.constructionSiteDetailList;
                              this.loading = false;
                              if (arr2.length == 0) {
                                   this.noMore = true;
                                   this.$nextTick(() => {
                                        loading.close();
                                   });
                                   return;
                              }
                              this.count++;
                              this.theOverviewOfConstructionData = arr1.concat(arr2);
                         } else {
                              this.theOverviewOfConstructionData = res.response.data.constructionSiteDetailList;
                         }
                         this.theOverviewOfConstructionData.map((item, index) => {
                              this.$set(item, 'isPlay', false);
                         });
                         this.$nextTick(() => {
                              loading.close();
                         });
                    }
               }).catch((err) => {
                    console.log(err);
               })
          },
          getHttp(index) {
               console.log(index);

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
                    urls: `/maijiabangService-1.0-SNAPSHOT/buiding/getEngineeringInfo`,
                    data: {
                         propertyId: this.$route.params.id,
                         type: index
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         this.mjbprojectListData = res.response.data.projectList;
                         this.$nextTick(() => {
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
.m-openTheSite {
     .g-header-row {
          width: 100%;
          height: 80px;
          line-height: 80px;
          h1 {
               width: 128px;
               height: 32px;
               @include setFont(32px);
               font-weight: bold;
               color: rgba(33, 40, 50, 1);
               line-height: 32px;
          }
     }
     .el-header,
     .el-footer {
          color: #333;
          text-align: center;
     }
     .el-header {
          position: fixed;
          width: 100%;
          // line-height: 100px;
          background: #fff;
          padding: 10px 105px 0 122px;
          box-shadow: 0px 2px 4px 0px rgba(225, 225, 225, 0.5);
     }
     .el-footer {
          padding: 0;
          position: fixed;
          bottom: 0;
          z-index: 999;
          width: 100%;
          background-color: #fff;
     }
     .el-main {
          padding: 100px 102px;
          // padding-bottom: 100px;
          width: 100%;
          margin: auto;
     }
}
</style>
<style>
</style>
