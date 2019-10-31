<template>
     <div id="app">
          <router-view></router-view>
     </div>
</template>
<script>
export default {
     name: 'App'
}
</script>
<style  lang="scss">
#app {
     position: relative;
     margin: auto;
     width: 100%;
     height: 100%;
}
.el-input__inner{
        border:1px solid #979797!important;
        color: #4D535D;
        // font-weight: 600;
        color: #000000;
        height: 100%;
}
.el-select>.el-input{
        height: 100%;
}
 .swiper-scrollbar-drag{
                    background: #E2E5ED!important;
        }
@media screen and (min-width: 2120px) {
        .el-input__inner{
                font-size: 32px;
        }
        .el-select-dropdown__item{
                font-size: 32px;
                height: 68px;
                line-height: 68px;
        }
}

</style>
