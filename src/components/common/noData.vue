<template>
     <article class="m-noData">
          <section v-if="isShow">
               <div class="g-noData">
                    <div class="g-img">
                         <el-image style="width: 100%; height: 100%" :src="nodataImg" fit="fill"></el-image>
                    </div>
                    <p>暂无数据</p>
               </div>
          </section>
     </article>
</template>

<script>
import nodataImg from '@/assets/img/common/nodata.png'
export default {
     props: ['isShow'],
     data() {
          return {
               nodataImg
          }
     }
}
</script>
<style lang="scss" scoped>
.m-noData {
     overflow: hidden;
     margin: auto;
     .g-noData {
          .g-img {
               width: 100%;
          }
          p {
               margin-top: 30px;
               text-align: center;
               font-size: 50px;
               font-weight: 400;
               color: rgba(139, 148, 158, 1);
               line-height: 70px;
               letter-spacing: 1px;
               @media screen and (max-width: 1900px) {
                    margin-top: 20px;
                    font-size: 40px;
               }
               @media screen and (max-width: 1600px) {
                    margin-top: 10px;
                    font-size: 30px;
               }
               @media screen and (max-width: 1200px) {
                    margin-top: 5px;
                    font-size: 20px;
               }
          }
     }
}
</style>