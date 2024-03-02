<template>
  <div class="index-header">
    <div class="index-header-logo"><img
        src="https://m.5173.com/dist/src/assets/images/logo.png?25a3aad3b8e42b11f4561e000b488914" alt="5173游戏交易平台"
        class="img-responsive">
    </div> <a>
      <div class="index-header-search">
        <div class="text-input"><span class="f30">搜索游戏</span></div>
      </div>
    </a> <a rel="nofollow" class="toPc"><img
        src="https://m.5173.com/dist/src/assets/images/pc.png?5daa97d53cdb5966311191303356dd35"></a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.index-header {
  padding: .12rem 0;
  background-color: #f60;
  width: 100%;
  position: relative;
  height: .97rem;
  display: block;
  overflow: hidden;
  z-index: 10
}

.index-header .index-header-logo2 {
  float: Left;
  position: relative;
  width: 1.48rem;
  padding-left: 144rem
}

.index-header .index-header-logo2 img {
  width: 100%
}

.index-header .index-header-search2 {
  float: right;
  width: 5.904rem;
  height: .72rem;
  position: relative
}

.index-header .index-header-search2 .text-input2 {
  float: left;
  height: .72rem;
  box-sizing: border-box;
  border-radius: 0;
  width: 4.848rem;
  font-size: .3rem;
  line-height: .42rem;
  color: #bbb;
  padding-left: .576rem;
  background-size: .33rem
}

.index-header .index-header-search2 a {
  float: right;
  position: relative;
  width: 1.056rem;
  text-align: right;
  margin-top: -.12rem
}

.index-header .index-header-search2 a img {
  height: .96rem
}

.index-header .index-header-logo {
  float: Left;
  position: relative;
  width: 2.04rem;
  top: .06rem
}

.index-header .index-header-logo img {
  padding: 0;
  margin-left: .12rem;
  width: 1.8rem !important
}

.index-header .index-header-search {
  float: left;
  width: 62%;
  height: .73rem;
  position: relative;
  background: #fff
}

@media screen and (min-width:769px) {
  .index-header .index-header-search {
    width: 81% !important
  }
}

.index-header .index-header-search .text-input {
  float: left;
  height: .73rem;
  box-sizing: border-box;
  border-radius: 0;
  width: 100%;
  line-height: .73rem;
  color: #bbb;
  text-align: center
}

.index-header .index-header-search .text-input span {
  background-size: .33rem;
  padding-left: .47rem
}

.index-header .toPc {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  width: 1.056rem;
  height: .96rem;
  text-align: right;
  line-height: .96rem
}

.index-header .toPc img {
  height: .96rem;
  width: .96rem
}

.appGc img {
  height: .65rem !important;
  width: .8rem !important
}

.appDownload {
  position: fixed;
  right: .2rem;
  top: 50%;
  width: 1.2rem;
  height: 1.45rem;
  display: block
}

.appDownloadBox {
  width: 100%;
  height: 100%;
  position: relative
}

.appDownloadBox span {
  z-index: 888;
  width: .4rem;
  height: .4rem
}

.appBox,
.appDownloadBox span {
  position: absolute;
  display: block;
  left: 0;
  top: 0
}

.appBox {
  z-index: 100
}

.appBox,
.appDownload img {
  width: 100%;
  height: 100%
}

.img-responsive {
  display: block;
  max-width: 100%;
  height: auto;
  vertical-align: middle
}

.index-banner {
  height: auto;
  display: block;
  overflow: hidden;
  position: relative
}

.index-banner .banner-img {
  height: 2.92rem;
  width: 100%
}

.index-banner .banner-img .demo {
  height: 2.92rem;
  display: block;
  overflow: hidden
}

.index-banner .banner-img .demo img {
  height: 100%
}

.banner-list {
  position: absolute;
  bottom: .2rem;
  width: 100%;
  text-align: center
}

.banner-list a {
  display: inline-block;
  width: .12rem;
  height: .12rem;
  margin: 0 .05rem;
  background-size: .12rem
}

.banner-list a.active {
  background-size: .12rem
}

.index-swiper {
  height: auto;
  display: block;
  overflow: hidden;
  padding: 0 1%
}

.index-swiper .swiper-slide {
  width: 20%;
  height: auto;
  display: block;
  overflow: hidden;
  margin-top: .1rem
}

.index-swiper .swiper-slide p {
  height: .35rem;
  line-height: .3rem
}

.index-swiper .swiper-slide span {
  width: 1.09rem;
  height: 1.09rem;
  display: inline-block;
  background-size: 100% !important
}

.zpfl {
  position: fixed;
  top: 80%;
  z-index: 20
}

.zpfl2 {
  width: 1.6rem
}


.notice-bomb .box .bomb-title {
  padding: .5rem 0
}

.notice-bomb .box .bomb-content .title {
  color: #b4664d;
  font-size: .34rem;
  text-align: center;
  padding: .2rem 0 .26rem
}

.notice-bomb .box .bomb-content .content {
  height: 3.54rem;
  padding: 0 .38rem;
  line-height: .4rem;
  color: #b4664d;
  font-size: .28rem;
  overflow-y: scroll
}

.notice-bomb img {
  max-width: 7.5rem
}
</style>
