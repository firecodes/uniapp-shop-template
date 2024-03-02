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
  background: #fff url(/dist/src/assets/images/search4.png?f1c7c4fe050302588bbeed8011ab1ff2) no-repeat 3%;
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
  background: #fff url(/dist/src/assets/images/search4.png?f1c7c4fe050302588bbeed8011ab1ff2) no-repeat 0;
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
  background: url(/dist/src/assets/images/index/list-ico.png?1fdc344f0e516c687dd855f7b42e589f) no-repeat 0 0;
  width: .12rem;
  height: .12rem;
  margin: 0 .05rem;
  background-size: .12rem
}

.banner-list a.active {
  background: url(/dist/src/assets/images/index/list-ico-hov.png?b7d3fc549d80b0669e43c140b269c018) no-repeat 0 0;
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

.index-swiper .swiper-slide span.class01 {
  background: url(/dist/src/assets/images/bi.png?4c17463a1925e13a40170217577e62ff) no-repeat top
}

.index-swiper .swiper-slide span.class02 {
  background: url(/dist/src/assets/images/hao.png?c3a58bd59c949e960a9442af51210275) no-repeat top
}

.index-swiper .swiper-slide span.class03 {
  background: url(/dist/src/assets/images/shouyou.png?0536c7ed8a15ea34b62f7775037f6543) no-repeat top
}

.index-swiper .swiper-slide span.class04 {
  background: url(/dist/src/assets/images/lian.png?07fabf522f071639e96502c893f43739) no-repeat top
}

.index-swiper .swiper-slide span.class05 {
  background: url(/dist/src/assets/images/zhuan.png?52af8f07dee3e69275a6de1be64ae737) no-repeat top
}

.index-swiper .swiper-slide span.class06 {
  background: url(/dist/src/assets/images/jf.png?87b72fa95e6c4ba81365d8665c5f0bbe) no-repeat top
}

.index-swiper .swiper-slide span.class07 {
  background: url(/dist/src/assets/images/fuwucenter.png?fcba20865a347567da381457706941b7) no-repeat top
}

.index-swiper .swiper-slide span.class08 {
  background: url(/dist/src/assets/images/peiwan.png?001c97205a538d8206c7dd4d2f81cb8a) no-repeat top
}

.index-swiper .swiper-slide span.class09 {
  background: url(/dist/src/assets/images/peiwanzq.png?be1f9f10b9bfc01ecc3e44c243ed0ee1) no-repeat top
}

.index-swiper .swiper-slide span.class10 {
  background: url(/dist/src/assets/images/bi2.png?7364c295dfadf008a4a1cc0b3fb64eb8) no-repeat top
}

.zpfl {
  position: fixed;
  top: 80%;
  z-index: 20
}

.zpfl2 {
  width: 1.6rem
}

.ind-search-game,
.ind-search-game .tab,
.ind-search-game .tab .tab-head,
.ind-search-game .tab .tab-nav {
  height: auto;
  display: block;
  overflow: hidden
}

.ind-search-game .tab .tab-nav li {
  float: left;
  width: 50%;
  text-align: center
}

.ind-search-game .tab .tab-nav li a {
  width: 100%;
  float: left;
  box-sizing: border-box;
  border-right: 1px solid #e8e8e8;
  font-size: .32rem;
  color: #000;
  line-height: 1.03rem;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
  background: #f8f8f8
}

.ind-search-game .tab .tab-nav li a span {
  display: inline-block;
  padding-left: .52rem
}

.ind-search-game .tab .tab-nav li a span.dn {
  background: #f8f8f8 url(/dist/src/assets/images/diannao-gray.png?a6d0e512732f06bdeb9d1530d8052d9d) 0 no-repeat;
  background-size: .38rem
}

.ind-search-game .tab .tab-nav li.active a span.dn {
  background: url(/dist/src/assets/images/diannao.png?9ccb587acf7c109f1d495bbc36825819) 0 no-repeat;
  background-size: .38rem
}

.ind-search-game .tab .tab-nav li a span.sj {
  background: #f8f8f8 url(/dist/src/assets/images/shouji-gray.png?90cb2a52e384a988dc9bd7c01ff672d4) 0 no-repeat;
  background-size: .38rem
}

.ind-search-game .tab .tab-nav li.active a span.sj {
  background: url(/dist/src/assets/images/shouji.png?ce932ec3c49ad0783e50afc2a0078e45) 0 no-repeat;
  background-size: .38rem
}

.ind-search-game .tab .tab-nav .active a {
  cursor: default;
  color: #f60;
  background: #fff;
  border-bottom: 1px solid #fff
}

.ind-search-game .game-list {
  float: left;
  width: 100%;
  position: relative;
  border-top: 1px solid #e8e8e8;
  background: #fff;
  padding-top: .2rem
}



.ind-search-game .tab-class02 {
  width: 100%;
  padding: .3rem .5% .1rem;
  height: auto;
  display: block;
  overflow: hidden
}

.ind-search-game .tab-class02 ul li {
  width: 25%;
  padding: .1rem 0 .2rem;
  font-size: .28rem;
  line-height: .5rem;
  text-align: center;
  float: left
}

.ind-search-game .tab-class02 ul li a {
  display: block;
  text-align: center;
  color: #333
}

.ind-search-game .tab-class02 ul li img {
  display: block;
  margin-bottom: .05rem;
  width: 1.42rem;
  height: 1.42rem;
  border-radius: 15%
}

.index-record {
  height: auto;
  display: block;
  overflow: hidden
}

.index-record .record-titl {
  height: .52rem;
  line-height: .52rem
}


.mbgmes-con-index .mbl-cper .mbl-icon i {
  display: inline-block;
  float: left;
  width: .45rem;
  height: .58rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.tu {
  background: url(/dist/src/assets/images/Icon/mbl-tu.png?92a6a6f87aa0588e9af12fb7abee2c75) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.ji {
  background: url(/dist/src/assets/images/Icon/equ-ji.png?5c6d0465168b9c680004414913361955) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.tou {
  background: url(/dist/src/assets/images/Icon/equ-tou.png?ca2811f629ee714f2a0419e6f3166bff) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.pei {
  background: url(/dist/src/assets/images/Icon/equ-pei.png?9b514fd176c9de77e6f70cc3c2802f17) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.an {
  background: url(/dist/src/assets/images/Icon/equ-an.png?cc5f38d8707ae96bbaa5b2be43540917) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.shi {
  background: url(/dist/src/assets/images/Icon/equ-shi.png?0ad49ae97c358b5a1dea6ac53fb963d9) no-repeat 100%;
  background-size: .32rem
}

.mbgmes-con-index .mbl-cper .mbl-icon i.bao {
  background: url(/dist/src/assets/images/Icon/equ-bao.png?4a5c57113dfd473a4b0aeb37e5354bdb) no-repeat 100%;
  background-size: .32rem
}

.mbl-parea,
.mbl-parea span {
  line-height: .48rem
}

.mbl-parea span {
  display: inline-block;
  width: 1.08rem;
  height: .48rem;
  border-radius: .1rem
}

.mbl-parea p.mbl-qfu {
  width: 74%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

.index-proving,
.index-proving .prov-titl {
  height: auto;
  display: block;
  overflow: hidden
}

.index-proving .prov-titl h2 {
  height: .5rem;
  line-height: .5rem
}

.index-proving .prov-titl p {
  line-height: .48rem
}

.index-proving .prov-conn {
  height: auto;
  display: block;
  overflow: hidden
}

.index-proving .prov-conn .prov-input {
  height: .8rem;
  line-height: .8rem;
  background: url(/dist/src/assets/images/curent.jpg?fbc7f18e85cda413e70becd06d7c8ab6) no-repeat 0;
  background-size: .06rem;
  border: none;
  outline: none;
  padding-left: .25rem;
  width: 70%
}

.index-proving .prov-conn .prov-btn {
  width: 1.9rem;
  height: .8rem;
  line-height: .8rem;
  border-radius: .1rem
}

.index-feedback {
  height: auto;
  display: block;
  overflow: hidden
}

.index-feedback .fdback-titl {
  height: .9rem;
  line-height: .9rem
}

.index-feedback .fdback-conn {
  height: auto;
  display: block;
  overflow: hidden
}

.index-feedback .fdback-conn ul li {
  width: 33.3%;
  height: 1.08rem;
  text-align: center
}

.index-feedback .fdback-conn ul li span {
  display: inline-block;
  line-height: 1.08rem;
  padding-left: .82rem
}

.index-feedback .fdback-conn ul li span.zhix {
  background: url(/dist/src/assets/images/kefu/callmenu10.png?56d651e008710d9490e555dcf836f9f2) no-repeat 0;
  background-size: .62rem
}

.index-feedback .fdback-conn ul li span.tous {
  background: url(/dist/src/assets/images/kefu/callmenu11.png?a4a1422d28a79b70bbd24db1aa601f7c) no-repeat 0;
  background-size: .62rem
}

.index-feedback .fdback-conn ul li span.jiany {
  background: url(/dist/src/assets/images/kefu/callmenu12.png?3ae5b57abf661b72a5ee12dfac6d1b21) no-repeat 0;
  background-size: .62rem
}

.dialog-main .dialog-foot a.color-000 {
  color: #000
}

.hb-activity-box {
  width: 6.78rem;
  height: 7.98rem;
  background: url(/dist/src/assets/images/secure/hb-activity-bg.png?8fe29f1c9e8ebbf3b668f637a1155cbb) no-repeat top;
  background-size: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  margin-top: -3.99rem;
  margin-left: -3.39rem
}

.hb-activity-box .hb-icon-close {
  width: .8rem;
  height: .77rem;
  display: inline-block;
  background: url(/dist/src/assets/images/secure/hb-close.png?b15d0befa42c54de936146fae16d09c3) no-repeat 50%;
  background-size: .8rem;
  position: absolute;
  top: 7.4rem;
  left: 50%;
  margin-left: -.4rem
}

.hb-activity-box .hb-download-btn {
  width: 4.44rem;
  height: 1.5rem;
  display: inline-block;
  background: url(/dist/src/assets/images/secure/hb-download-btn.png?0f109b8a94db7166b2940de4fcbec1b1) no-repeat 50%;
  background-size: 100%;
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  margin-left: -2.24rem
}

.mbl-cper .mbl-icon i.zhao {
  background: url(/dist/src/assets/images/Icon/equ-zhao.png?4e0f5fe250f279111e6534601a694820) no-repeat 100%;
  background-size: .32rem
}

.mbl-cper .mbl-icon i.mai {
  background: url(/dist/src/assets/images/Icon/mbl-mai.png?d77354a87637fb5c51108b28ea58ad92) no-repeat 100%;
  background-size: .32rem
}

.mbl-cper .mbl-icon i.shang {
  background: url(/dist/src/assets/images/Icon/equ-shang.png?2ee04601c75d2b0f08983b2dd686ef93) no-repeat 100%;
  background-size: .32rem
}

.index-steam,
.index-steam .steam-enter {
  height: auto;
  overflow: hidden;
  display: block
}

.index-steam .steam-enter {
  padding: 0 .15rem .3rem
}

.index-steam .steam-enter ul li {
  float: left;
  margin-top: .3rem;
  text-align: center;
  width: 50%
}

.index-steam .steam-enter ul li img {
  width: 3.38rem;
  height: 2.05rem
}

.notice-bomb {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 999
}

.notice-bomb .box {
  width: 6rem;
  height: 6.46rem;
  background: url(/dist/src/assets/images/common/notice-bg.png?1190d6e8c21a6d926f4fc723dac8b8c8) no-repeat 50%;
  background-size: 100%
}

.notice-bomb .close-bomb {
  width: .8rem;
  height: .8rem;
  background: url(/dist/src/assets/images/common/close.png?bc6ed4a7d3d8a6242f2606b43345db0f) no-repeat 50%;
  background-size: .4rem;
  border-radius: 100%;
  border: .04rem solid #fff;
  margin: 0 auto;
  margin-top: .4rem
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
