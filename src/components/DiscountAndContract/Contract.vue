<template>
        <div class="contract">
                <div class="contract-title">
                        <span class="add-mr" @click="hankCilck(1)" :style="{color:isHouseL?'#2E82FF':'#35373C'}">商品房买卖合同</span>
                        <span @click="hankCilck(2)" :style="{color:!isHouseL?'#2E82FF':'#35373C'}">装修合同</span>
                </div>
                <div class="contracts" v-show="isHouseL">
                        <div class="contract-right">
                                <div id="swiper-top1" class="swiper-container gallery-top ">
                                        <div class="swiper-wrapper">
                                                <div class="swiper-slide" v-for="(item,index) in housList" :key="index">
                                                        <div class="sw-img">
                                                                <img :src="item.imgUrl" alt="">
                                                        </div>
                                                        <div class="sw-word">
                                                                <div class="sw-zj" v-for="(i,s) in item.notes" :key="s">
                                                                        <div class="sw-zj-top">{{i.noteName}}</div>
                                                                        <div class="sw-zj-bom">{{i.noteContent}}</div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="pages">
                                                <div class="page-t prev1">
                                                        <span>上一页</span>
                                                        <img src="../../assets/img/common/icon_shangyiye.png" alt="">
                                                </div>
                                                <div class="page-t next1">
                                                        <span>下一页</span>
                                                        <img src="../../assets/img/common/icon_xiayiye.png" alt="">
                                                </div>
                                        </div>
                        </div>
                        <div class="scol" style="left:99.75%;"></div>
                        <div id="swiper-thumbs1" class="swiper-container gallery-thumbs contract-left">
                                <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(item,index) in housList" :key="index">
                                                <span>{{item.ind}}</span>
                                                <img class="swiper-img" :src="item.imgUrl" alt="">
                                                <img v-if="item.isNote" class="swiper-img2" src="../../assets/img/common/icon_zhushi.png" alt="">
                                        </div>
                                </div>
                                <div class="swiper-scrollbar"></div>
                        </div>
                        <div class="scol" style="height:98%;margin-top:0.5%;"></div>
                </div>
                <div class="contracts" v-show="!isHouseL">
                        <div class="contract-right">
                                <div id="swiper-top2"  class="swiper-container gallery-top ">
                                        <div class="swiper-wrapper">
                                                <div class="swiper-slide" v-for="(item,index) in decorateList" :key="index">
                                                        <div class="sw-img">
                                                                <img :src="item.imgUrl" alt="">
                                                        </div>
                                                        <div class="sw-word">
                                                                <div class="sw-zj" v-for="(i,s) in item.notes" :key="s">
                                                                        <div class="sw-zj-top">{{i.noteName}}</div>
                                                                        <div class="sw-zj-bom">{{i.noteContent}}</div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="pages">
                                                <div class="page-t prev2">
                                                        <span>上一页</span>
                                                        <img src="../../assets/img/common/icon_shangyiye.png" alt="">
                                                </div>
                                                <div class="page-t next2">
                                                        <span>下一页</span>
                                                        <img src="../../assets/img/common/icon_xiayiye.png" alt="">
                                                </div>
                                        </div>
                        </div>
                        <div class="scol" style="left:99.75%;"></div>
                        <div id="swiper-thumbs2"  class="swiper-container gallery-thumbs contract-left">
                                <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(item,index) in decorateList" :key="index">
                                                <span>{{item.ind}}</span>
                                                <img class="swiper-img" :src="item.imgUrl" alt="">
                                                <img v-if="item.isNote" class="swiper-img2" src="../../assets/img/common/icon_zhushi.png" alt="">
                                        </div>
                                </div>
                                <div class="swiper-scrollbar"></div>
                        </div>
                        <div class="scol" style="height:98%;margin-top:0.5%;"></div>
                </div>
                <!-- <div class="footer"></div> -->
        </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
        export default {
                components:{
                        Swiper
                },
                name:"Contract",
                data(){
                        return{
                                housList:[
                                        {
                                                imgUrl:require("../../assets/img/contract/h1.png"),
                                                isNote:false,
                                                ind:"1",
                                                notes:[

                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h2.png"),
                                                isNote:false,
                                                ind:"2",
                                                notes:[

                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h3.png"),
                                                isNote:false,
                                                ind:"3",
                                                notes:[
                                                     
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h4.png"),
                                                isNote:false,
                                                ind:"4",
                                                notes:[
                                               
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h5.png"),
                                                isNote:true,
                                                ind:"5",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意确认楼栋单元楼号的准确性"
                                                        },{
                                                                noteName:"注 B",
                                                                noteContent:"注意户型层高"
                                                        },{
                                                                noteName:"注 C",
                                                                noteContent:"注意户型套内面积与公摊面积"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h6.png"),
                                                isNote:true,
                                                ind:"6",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意后期产权登记，如果面积误差超过3%时，处理方法"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h7.png"),
                                                isNote:true,
                                                ind:"7",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"买房人如逾期付款的处理方式"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h8.png"),
                                                isNote:true,
                                                ind:"8",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意交房时间"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"确认项目可以交房的证明"
                                                        },{
                                                                noteName:"注 C",
                                                                noteContent:"开发商可以延期的交房的条件，有以下情况不算交房违约"
                                                        }
                                                ]
                                        },
                                         {
                                                imgUrl:require("../../assets/img/contract/h9.png"),
                                                isNote:true,
                                                ind:"9",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意逾期交房违约金万分比，是否低于市场正常开发商赔偿价格"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"因逾期解除合同的违约金"
                                                        },{
                                                                noteName:"注 C",
                                                                noteContent:"60日后，开发商逾期交房需支付的违约金"
                                                        }
                                                        ,{
                                                                noteName:"注 D",
                                                                noteContent:"如这些条款发生变更，出卖人必须通知买房人"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h10.png"),
                                                isNote:true,
                                                ind:"10",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"交付时，开发商需提供的资料"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"买房人未按时收房的，也会视为已交付"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h11.png"),
                                                isNote:true,
                                                ind:"11",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意供暖条件"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h12.png"),
                                                isNote:true,
                                                ind:"12",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"合同备案开发商需在30日之内办理"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h13.png"),
                                                isNote:true,
                                                ind:"13",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"公共部位和设施的使用性质，开发商不能更改"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h14.png"),
                                                isNote:false,
                                                ind:"14",
                                                notes:[
                                                        
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h15.png"),
                                                isNote:true,
                                                ind:"15",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"公摊面积说明"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h16.png"),
                                                isNote:true,
                                                ind:"16",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意层高，非楼层净高"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"注意房价是含增值税价格"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h17.png"),
                                                isNote:true,
                                                ind:"17",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意以下规划设计的变更开发商不构成违约"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h18.png"),
                                                isNote:false,
                                                ind:"18",
                                                notes:[
                                                      
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h19.png"),
                                                isNote:true,
                                                ind:"19",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意有些宣传资料开发商认为不具有约束力"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"以及周边配套也可能会有所更改"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h20.png"),
                                                isNote:false,
                                                ind:"20",
                                                notes:[
                                                       
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h21.png"),
                                                isNote:true,
                                                ind:"21",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"发票事宜"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h22.png"),
                                                isNote:true,
                                                ind:"22",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意产权登记的办理"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h23.png"),
                                                isNote:true,
                                                ind:"23",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"项目中设施应业主使用，根据此协议配套设施向社会开放"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/h24.png"),
                                                isNote:false,
                                                ind:"24",
                                                notes:[
                                                        
                                                ]
                                        }
                                ],
                                decorateList:[
                                        {
                                                imgUrl:require("../../assets/img/contract/d1.png"),
                                                isNote:true,
                                                ind:"1",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"暂无内容"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"注意户型中根据协议会改造的位置"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/d2.png"),
                                                isNote:false,
                                                ind:"2",
                                                notes:[
                                                   
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/d3.png"),
                                                isNote:true,
                                                ind:"3",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"注意装修交付时间"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"注意交付条件"
                                                        },
                                                        {
                                                                noteName:"注 C",
                                                                noteContent:"若对装修质量有异议应以书面形式提出整修意见"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/d4.png"),
                                                isNote:true,
                                                ind:"4",
                                                notes:[
                                                        {
                                                                noteName:"注 A",
                                                                noteContent:"后期需确认是否面积一致"
                                                        },
                                                        {
                                                                noteName:"注 B",
                                                                noteContent:"注意装修材料可能会出现替代"
                                                        },
                                                        {
                                                                noteName:"注 C",
                                                                noteContent:"甲方解除合同需要支付的违约金"
                                                        }
                                                ]
                                        },
                                        {
                                                imgUrl:require("../../assets/img/contract/d5.png"),
                                                isNote:false,
                                                ind:"5",
                                                notes:[
                                               
                                                ]
                                        }
                                ],
                                isHouseL:true,
                                currentList:[]
                        }
                },
                 created(){
                       this.currentList = this.housList;
                },
                methods:{
                        hankCilck(type){
                                if(type == 1){
                                        this.isHouseL = true;
                                        this.currentList = this.housList;
                                }else if(type == 2){
                                        this.isHouseL = false;
                                        this.currentList = this.decorateList;
                                }
                                this.swiperFun();
                        },
                         swiperFun(){
                                var galleryThumbs1 = new Swiper('#swiper-thumbs1', {
                                        spaceBetween: 10,
                                        direction: 'vertical',
                                         initialSlide :0,
                                        slidesPerView: 3,
                                        freeMode: true,
                                        watchSlidesVisibility: true,
                                        watchSlidesProgress: true,
                                        observer:true,
                                        observeSlideChildren:true,
                                        scrollbar: {
                                                el: '.swiper-scrollbar',
                                        },
                                        // centeredSlides:true
                                });
                                var galleryTop1 = new Swiper('#swiper-top1', {
                                        navigation: {
                                                nextEl: '.next1',
                                                prevEl: '.prev1',
                                                disabledClass: 'my-button-disableds'
                                        },
                                        spaceBetween: 10,
                                         initialSlide :0,
                                        direction: 'vertical',
                                        observer:true,
                                        watchSlidesVisibility: true,
                                        watchSlidesProgress: true,
                                        observeSlideChildren:true,
                                        thumbs: {
                                                swiper: galleryThumbs1
                                        },
                                        
                                });
                                 var galleryThumbs2 = new Swiper('#swiper-thumbs2', {
                                        spaceBetween: 10,
                                        direction: 'vertical',
                                         initialSlide :0,
                                        slidesPerView: 3,
                                        freeMode: true,
                                        watchSlidesVisibility: true,
                                        watchSlidesProgress: true,
                                        observer:true,
                                        observeSlideChildren:true,
                                        scrollbar: {
                                                el: '.swiper-scrollbar',
                                        },
                                        // centeredSlides:true
                                });
                                var galleryTop2 = new Swiper('#swiper-top2', {
                                        navigation: {
                                                nextEl: '.next2',
                                                prevEl: '.prev2',
                                                disabledClass: 'my-button-disabled'
                                        },
                                        spaceBetween: 10,
                                         initialSlide :0,
                                        direction: 'vertical',
                                        observer:true,
                                        watchSlidesVisibility: true,
                                        watchSlidesProgress: true,
                                        observeSlideChildren:true,
                                        thumbs: {
                                                swiper: galleryThumbs2
                                        },
                                        
                                });
                        }
                },
                mounted(){
                         this.swiperFun();
                }
        }
</script>

<style scoped>
        .contract{
                width: calc(100% - 300px);
                height: 100%;
                padding: 110px 150px 61px ;
        }
        .contracts{
                width: 100%;
                height: calc(100vh - 407px);
                position: relative;
        }
        .contract-title{
                padding-left:calc(21.8% + 133px);
                color: #35373C;
                font-size: 30px;
                font-family: PingFangSC-Semibold;
                margin-bottom: 55px;
                font-weight: 600;
                cursor: pointer;
        }
        .contract-left{
                /* overflow-y: scroll; */
                float: left;
        }
        .contract-right{
                 float: right;
                 height: calc(100% - 42px);
                width:  calc(79.6% - 134px);
                margin-left: 134px;
        }
        .scol{
                width: 3px;
                height: 100%;
                background: #E2E5ED;
                position: absolute;
                left: 20%;
                top: 0px;
                z-index: 999;
        }
        .swiper-scrollbar::-webkit-scrollbar-thumb ,.sw-word::-webkit-scrollbar-thumb {
                background: #E2E5ED;
                width: 10px;
                border-radius: 10px;
        }
        .swiper-scrollbar::-webkit-scrollbar-track,.sw-word::-webkit-scrollbar-track {
                background: #fff;
                border-radius: 10px;
                width: 2px!important;
        }
        .swiper-scrollbar::-webkit-scrollbar,.sw-word::-webkit-scrollbar {
                display: block;
                /* width: 2px; */
        }
        .swiper-scrollbar{
                background: #fff!important;
                width: 10px;
        }
        .swiper-scrollbar-drag{
                    background: #E2E5ED!important;
        }
        .swiper-container {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
    .gallery-top {
                height: 100%;
                width:  100%;
    }
    .gallery-thumbs {
        width:20.4%;
        height: 100%;
        box-sizing: border-box;
        padding: 0px;
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
    .gallery-thumbs .swiper-slide {
      /* height: 232px!important; */
      /* height: 33.33%!important; */
      width: 100%;
      background: #fff;
      position: relative;
    }
     .gallery-thumbs .swiper-slide .swiper-img{
             width: 150px;
             /* height: 212px; */
             height: 90%;
             box-shadow: 0 1px 12px 0 rgba(0,0,0,0.15);
             margin-top: 10px;
     }
     .gallery-thumbs .swiper-slide span{
             color: #000;
             font-size: 16px;
             vertical-align: top;
             font-family: PingFangSC-Semibold;
             margin-right:10px;
             margin-top: 10px;
             font-weight: 600;
     }
    .gallery-thumbs .swiper-slide-thumb-active {
      /* background: #F7F7F7; */
    }
    .swiper-slide-thumb-active .swiper-img{
            border: 4px solid #0080FF;
    }
    .swiper-img2{
            width: 20px;
            vertical-align: top;
            margin-left: 8px;
            margin-top: 10px;
    }
   .pages{
           width: 470px;
           height: 38px;
           font-size: 16px;
           line-height: 38px;
           text-align: center;
           color: #4D535D;
           margin-top: 23px;
   }
   .page-t{
           width: calc(50% - 1px);
           height: 100%;
           cursor: pointer;
           float: left;
   }
   .page-t img{
           width: 20px;
           vertical-align: sub;
           margin-left: 10px;
   }
   .prev{
           border-right: 1px solid #E2E5ED;
   }
   .sw-img{
           width: calc(40% - 40px);
           height: calc(100% - 40px);
           padding: 20px;
           float: left;
   }
   .sw-word{
           width:40%;
           height: 100%;
           float: left;
           margin-left: 12%;
           padding-right: 8%;
               padding-top: 20px;
           /* overflow-y: scroll; */
   }
   .sw-img img{
           max-width: 100%;
           max-height: 100%;
           box-shadow: 0 1px 20px 0 rgba(0,0,0,0.15);
   }
   .sw-zj{
           width: 100%;
           height: auto;
   }
   .sw-zj-top{
           width: 72px;
           height: 31px;
           text-align: center;
           background: #0080FF;
           line-height: 31px;
           font-size: 20px;
           border-radius: 4px;
           color: #fff;
   }
     .sw-zj-bom{
           padding: 10px 18px;
           height: auto;
           background: #E4EFFF;
           line-height: 25px;
           font-size:16px;
           border-radius: 4px;
           color: #000;
           margin: 10px 0px 33px;
   }
   .footer{
                width: 100%;
                height: 61px ;
                background: rgba(54,61,73,0.9);
                position: fixed;
                left: 0px;
                bottom: 0px;
   }
   .add-mr{
           margin-right:70px;
   }
    @media screen and (min-width: 2120px) {
            .gallery-thumbs{
                    width: 16.4%;
            }
            .gallery-thumbs .swiper-slide{
                    /* height: 465px!important; */
            }
            .contract {
                        padding: 220px 300px 122px;
                            width: calc(100% - 600px);
                }
                .contracts{
                        width: 100%;
                        height: calc(100vh -  648px);
                        position: relative;
                }
              .gallery-thumbs .swiper-slide .swiper-img{
                      width: 300px;
                        /* height: 425px; */
                        height: 90%;
                        margin-top: 20px;
              }
              .swiper-img2{
                        width: 40px;
                        vertical-align: top;
                        margin-left: 20px;
                        margin-top: 20px;
                }
                .gallery-thumbs .swiper-slide span{
                        font-size: 30px;
                        margin-top: 20px;
                }
                 .contract-title{
                         font-size: 60px;
                         margin-bottom: 110px;
                         padding-left: calc(21.8% + 133px);
                 }
                    .sw-img{
                        width: calc(43% - 40px);
                        height: calc(100% - 40px);
                        padding: 20px;
                        float: left;
                }
                .sw-word{
                        width:40%;
                        height: 100%;
                        float: left;
                        margin-left: 11%;
                        padding-right: 6%;
                        padding-top: 20px;
                        /* overflow-y: scroll; */
                }
                 .scol{
                        width: 4px;
                        left: calc(16.2% - 3px);
                }
                .contract-right{
                        width: calc(83.6% - 268px);
                        margin-left: 268px;
                }
                   .page-t img{
                        width: 40px;
                        vertical-align: sub;
                        margin-left: 20px;
                }
                .prev{
                        border-right: 2px solid #E2E5ED;
                }
                  .pages{
                        width:1000px;
                        height: 76px;
                        font-size: 30px;
                        line-height: 76px;
                        margin-top: 46px;
                }
                .sw-zj-top{
                        width: 145px;
                        height: 62px;
                        line-height: 62px;
                        font-size: 40px;
                        border-radius: 8px;
                }
                .sw-zj-bom{
                        padding: 20px 36px;
                        height: auto;
                        background: #E4EFFF;
                        line-height:50px;
                        font-size:30px;
                        border-radius: 8px;
                        margin: 20px 0px 66px;
                }
                 .add-mr{
                        margin-right:140px;
                }
    }
</style>