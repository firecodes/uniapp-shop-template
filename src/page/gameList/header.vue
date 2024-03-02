<template>
  <div class="w-full fixed-sticky">
    <div class="top-header border-bottom header-bgbuy">
      <h2 class="f36">我要买</h2>
      <div class="top-right"><a href="/" class="back-home" style="display: none;"></a></div>
      <div class="top-right"><a class="fl history"></a></div>
    </div>
    <div class="equipment-seach  equipment-bg header-bgbuy" style="z-index: 66;">
      <div class="container-ms px-20 pb-15 pt-10">
        <div class="container-inp bg-fff"><span class="color-ccc f30">搜索游戏</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.top-header {
  z-index: 62 !important
}

.abs-top {
  position: absolute !important;
  top: -.96rem;
  max-width: 768px
}


.show-right {
  position: fixed;
  z-index: 63 !important;
  top: 0;
  right: 0;
  min-width: 10%;
  font-size: 0;
  height: .96rem;
  line-height: .96rem;
  -webkit-text-size-adjust: none;
  text-align: right
}

.sharelist {
  display: inline-block;
  height: .96rem;
  min-width: .75rem;
  width: 100%;
  text-indent: -9999px;
  background-size: .49rem
}

.header-bgsell {
  background: #197fee !important;
  border-color: #197fee !important
}

.header-bgbuy,
.header-bgsell {
  height: .88rem !important;
  line-height: .88rem !important;
  border-bottom: none !important
}

.header-bgbuy {
  background: #f60 !important;
  border-color: #f60 !important
}

.header-bgbuy h2,
.header-bgsell h2 {
  color: #fff;
  height: .88rem !important;
  line-height: .88rem !important
}

.header-bgbuy .top-right,
.header-bgsell .top-right {
  height: .88rem !important
}

.top-header .top-right .history {
  display: inline-block;
  height: .88rem;
  width: .66rem;
  text-indent: -9999px;
  background-size: .38rem
}

.dl_seek {
  height: .96rem;
  line-height: .96rem;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: .3rem;
  color: #1864ff
}

.mb-97 {
  margin-bottom: -.97rem
}

.abs-top {
  position: absolute !important;
  top: -.96rem;
  max-width: 768px
}

.swiper-container3 {
  white-space: nowrap;
  width: 100% !important;
  padding: 0
}

.swiper-container3 .swiper-slide {
  display: inline-block;
  width: 20% !important
}

.swiper-container3 .swiper-wrapper {
  width: 100%;
  margin-top: .96rem;
  padding: .3rem 0;
  height: auto
}

.search-game img {
  margin: auto
}

.home {
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
  height: auto;
  max-width: 768px
}

.search-game .tab {
  display: block;
  overflow: hidden;
  height: auto;
  position: relative
}

.search-game .tab-letter {
  overflow-y: auto;
  padding-bottom: 2.3rem;
  position: absolute;
  display: block;
  overflow-x: hidden
}

.search-game .tab-class01 {
  margin-bottom: 0 !important;
  background-color: #fff
}

.search-game .tab-letter-relative {
  position: relative
}

.search-game .tab-letter-fixed {
  position: fixed !important;
  top: 1.63rem;
  overflow-y: auto
}

.search-game .tab-body {
  background-color: #f1f1f1
}

.search-game ul li {
  padding: 0
}

.index-header {
  z-index: 20
}

.index-header .index-header-search {
  width: 59%;
  float: left
}

.index-header .index-header-search .text-input {
  background: #fff;
  padding-left: 0;
  text-align: center;
  width: 100%
}

.index-header .index-header-search .text-input span {
  display: inline-block;
  background-size: .33rem;
  height: .72rem;
  padding-left: .45rem
}

.dialog_cover {
  position: fixed;
  _position: absolute;
  left: 0;
  top: 0;
  display: block;
  z-index: 555;
  width: 100%;
  height: 100%;
  filter: alpha(opacity=70);
  opacity: .7;
  background: #000
}

#dialog_show {
  left: 50%;
  margin-left: -3.6rem;
  opacity: 1;
  top: 3rem;
  position: fixed;
  width: 7.2rem;
  z-index: 1001;
  display: block
}

.see {
  height: .48rem;
  line-height: .68rem
}

.dialog-message {
  height: auto;
  display: block;
  overflow: hidden
}

.fwright {
  display: block;
  height: .5rem;
  width: .13rem;
  background-size: .13rem
}

.fw>.tile {
  width: 95% !important
}

.equipment-seach {
  height: auto;
  display: block;
  overflow: hidden;
  position: relative;
  padding: 0;
  background: #c9c9ce
}

.container-ms {
  text-align: center
}

.container-ms .container-inp {
  display: block;
  height: .6rem;
  line-height: .6rem;
  border-radius: .1rem
}

.container-ms span {
  display: inline-block;
  padding-left: .45rem;
  background-size: .33rem
}

.mb-95 {
  margin-bottom: .95rem !important
}
</style>
