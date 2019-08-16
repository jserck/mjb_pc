<template>
     <article class="m-bmapHeader">
          <section class="g-bmapHeader">
               <div class="g-header">
                    <span>{{headerText}}</span>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          headerText: {
               type: String,
               default: '--'
          }
     }
}
</script>

<style lang="scss" scoped>
.m-bmapHeader {
     position: relative;
     z-index: 99;
     .g-bmapHeader {
          .g-header {
               width: 100%;
               height: 107px;
               background: url("~@/assets/img/mapSee/pic_toubu_n.png") center
                    center no-repeat;
               background-size: cover;
               text-align: center;
               font-size: 38px;
               font-weight: 500;
               color: rgba(104, 216, 254, 1);
               line-height: 107px;
          }
     }
}
</style>
