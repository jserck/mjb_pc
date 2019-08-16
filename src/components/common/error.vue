<template>
     <section class="m-error">
          <h1>404</h1>
          <p>鹰眼鉴房提醒您，页面未找到/页面错误</p>
     </section>
</template>
<script>
export default {
     data() {
          return {

          }
     },
     created() {
          console.log(this.$route.params.pathMatch);
     }
}
</script>
<style lang="scss" scoped>
.m-error {
     padding-top: 15%;
     width: 100%;
     h1,
     p {
          text-align: center;
          line-height: 50px;
     }
     h1 {
          font-size: 30px;
     }
     p {
         font-size: 28px;
     }
}
</style>
