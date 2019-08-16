<template>
     <article class="m-openTheSite-footer-back">
          <section class="g-openTheSite-footer-back clearfix displayFlex flexAlignItemsCenter">
               <span @click="fn_back" class="u-btn fl"></span>
          </section>
     </article>
</template>
<script>
export default {
     props: {

     },
     data() {
          return {

          }
     },
     methods: {
          fn_back() {
               console.log('back');
               this.$emit('fn_back');
          }
     }
}
</script>

<style lang="scss" scoped>
.m-openTheSite-footer-back {
     .g-openTheSite-footer-back {
          box-shadow: 0px 0px 0px 2px rgba(225, 225, 225, 0.5);
          padding-left: 42px;
          height: 72px;
          .u-btn {
               width: 100px;
               height: 40px;
               background: url("~@/assets/img/common/icon_fanhui@3x.png") center
                    center no-repeat;
               background-size: 100% 100%;
          }
     }
}
</style>
