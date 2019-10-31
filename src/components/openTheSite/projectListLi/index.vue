<template>
     <article class="m-projectListLi">
          <section class="g-projectListLi">
               <div
                    class="g-projectListLi-con"
                    @click.capture="fn_clickli1(obj1.type,$event)"
                    @mousedown="fn_touchstart($event)"
                    @mouseup="fn_touchend($event)"
               >
                    <h2 class="u-title">{{obj1.title}}</h2>
                    <div
                         class="u-img"
                         ref="clicks"
                         :style="`background:url(${imageUrl||imageList}) center center`"
                    >
                         <div class="g-noData" v-if="false"></div>
                         <div class="g-seeAll" v-if="obj1.totalCount">查看全部（{{obj1.totalCount}}）</div>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
import ImgUrl from '../../../assets/js/replaceImgSrc'
export default {
     props: {
          obj1: {
               type: Object,
               default() {
                    return {
                         tit: '',
                         src: ''
                    }
               }
          }
     },
     data() {
          return {
               timerStart: 0,
               timerEnd: 0
          }
     },
     computed: {
          imageUrl() {
               return ImgUrl(this.obj1.imageUrl);
          },
          imageList() {
               return ImgUrl(this.obj1.imageList[0].imageUrl);
          }
     },
     methods: {
          fn_clickli1(type, e) {
               if (this.timerEnd - this.timerStart == 0 || this.timerEnd - this.timerStart < 100) {
                    this.$emit('fn_clickli', type);
               } else {
                    return;
               }
          },
          fn_touchstart(e) {
               this.timerStart = new Date().getTime();
          },
          fn_touchend(e) {
               this.timerEnd = new Date().getTime();
          }
     }
}
</script>

<style lang="scss" scoped>
.m-projectListLi {
     .g-projectListLi {
          .g-projectListLi-con {
               .u-title {
                    margin-top: 44px;
                    @include setFont(28px);
                    font-weight: 600;
                    color: rgba(77, 83, 93, 1);
                    line-height: 28px;
                    letter-spacing: 1px;
               }
               .u-img {
                    overflow: hidden;
                    position: relative;
                    margin-top: 26px;
                    width: 100%;
                    height: 0;
                    padding-bottom: 69.34%;
                    background-size: cover !important;
                    box-shadow: 0px 0px 15px 0px rgba(169, 183, 197, 0.3);
                    border-radius: 4px;
                    .g-noData {
                         position: absolute;
                         top: 0;
                         width: 100%;
                         height: 100%;
                         background: url(~@/assets/img/openTheSite/pic_niaokantu_n.png);
                         background-repeat: no-repeat;
                         background-size: 100% 100%;
                    }
                    .g-seeAll {
                         position: absolute;
                         padding: 21px 0;
                         bottom: 0;
                         width: 100%;
                         @include setFont(28px);
                         font-weight: 400;
                         color: rgba(255, 255, 255, 1);
                         line-height: 30px;
                         background: rgba(0, 0, 0, 0.5);
                         text-align: center;
                    }
               }
          }
     }
}
</style>
