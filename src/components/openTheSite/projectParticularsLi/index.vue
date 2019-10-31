<template>
     <article class="m-projectParticularsLi">
          <section class="g-projectParticularsLi">
               <div class="g-media">
                    <div v-if="obj1.isVideo == 2" class="g-img">
                         <el-image style="width: 100%; height: 100%" :src="imageUrl" fit="fill"></el-image>
                    </div>
                    <div v-else class="g-video">
                         <div
                              class="g-video-img"
                              v-if="!obj1.isPlay"
                              :style="`background:url(${videoPreImage})  no-repeat center center`"
                         >
                              <div class="u-icon_zanting_n" @click="fn_videoPlay">
                                   <img src="@/assets/img/common/icon_zanting_n.png" alt />
                              </div>
                         </div>
                         <div style="width:100%;height:100%" v-if="obj1.isPlay">
                              <video
                                   ref="myVideo"
                                   id="myVideo"
                                   preload="auto"
                                   style="width:100%;height:100%;"
                                   :src="obj1.videoInfo.videoUrl"
                                   controls
                                   webkit-displaying-fullscreen="false"
                                   x-webkit-airplay="true"
                                   x5-playsinline="true"
                                   webkit-playsinline="true"
                                   playsinline="true"
                              ></video>
                              <!-- videoInfo.videoUrl videoPreImage -->
                         </div>
                    </div>
               </div>
               <div class="g-con">
                    <div class="g-name displayFlex flexJustifybetween flexAlignItemsCenter">
                         <div class="g-people displayFlex flexJustifybetween flexAlignItemsCenter">
                              <span class="u-img" :style="`background:url(${obj1.avatar})`"></span>
                              <span class="u-name">{{obj1.userName}}</span>
                         </div>
                         <span class="u-time">{{obj1.publishDate}}</span>
                    </div>
                    <p class="g-tit">{{obj1.title}}</p>
                    <p class="g-text">{{obj1.subtitle}}</p>
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
                    return {}
               }
          },
          index: {
               type: Number,
               default() {
                    return 0
               }
          }
     },
     data() {
          return {
               isPlay: false
          }
     },
     computed: {
          imageUrl() {
               return ImgUrl(this.obj1.imageUrl);
          },
          videoPreImage() {
               return ImgUrl(this.obj1.videoInfo.videoPreImage);
          }
     },
     mounted() {
          // var myVideo = this.$refs.myVideo;
          // myVideo.addEventListener('play', function () {
          //      console.log('play');
          // });
          // myVideo.addEventListener('pause', function () {
          // })
     },
     methods: {
          fn_videoPlay() {
               // this.isPlay = true;
               this.$emit('videPlayBtn', this.index);
               this.$nextTick(() => {
                    $('Video').trigger('play');
                    // $('#myVideo').trigger('pause');
               });
          },
     }
}
</script>

<style lang="scss" scoped>
.m-projectParticularsLi {
     height: 100%;
     .g-projectParticularsLi {
          overflow: hidden;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 11px 0px rgba(169, 183, 197, 0.3);
          border-radius: 3px;
          .g-media {
               position: relative;
               width: 100%;
               height: 348px;
               .g-img {
                    // display: none;
                    // position: absolute;
                    width: 100%;
                    height: 100%;
                    background-size: cover !important;
                    img {
                         width: 100%;
                    }
               }
               .g-video {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    .g-video-img {
                         position: absolute;
                         width: 100%;
                         height: 100%;
                         background-size: cover !important;
                    }
                    .u-icon_zanting_n {
                         position: absolute;
                         left: 50%;
                         top: 50%;
                         margin-left: -41px;
                         margin-top: -41px;
                         width: 82px;
                    }
               }
          }
          .g-con {
               padding: 0 22px;
               .g-name {
                    .g-people {
                         margin: 14px 0;
                         .u-img {
                              width: 30px;
                              height: 30px;
                              border-radius: 30px;
                              background-size: cover;
                         }
                         .u-name {
                              margin-left: 7px;
                              @include setFont(17px);
                              font-weight: 400;
                              color: rgba(139, 148, 158, 1);
                              line-height: 17px;
                         }
                    }
                    .u-time {
                         @include setFont(15px);
                         font-weight: 400;
                         color: rgba(185, 192, 200, 1);
                         line-height: 17px;
                    }
               }
               .g-tit {
                    overflow: hidden;
                    @include setFont(28px);
                    font-weight: 500;
                    color: rgba(33, 40, 50, 1);
                    line-height: 34px;
               }
               .g-text {
                    overflow: hidden;
                    margin: 16px 0 40px 0;
                    @include setFont(24px);
                    font-weight: 400;
                    color: rgba(77, 83, 93, 1);
                    line-height: 32px;
                    letter-spacing: 2px;
               }
          }
     }
}
</style>
