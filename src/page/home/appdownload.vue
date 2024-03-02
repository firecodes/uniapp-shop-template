<template>
  <div class="appdownload">
    <div class="appload-conn fl">
      <div class="appload-close fl"><a href="javascript:void(0);" class="appclose"></a></div>
      <div class="appload-ico fl pt-15"><img
          src="https://m.5173.com/dist/src/assets/images/coins/5173app-ico.png?70b4622143271e0cdffe16fe46453c11"></div>
      <div class="appload-info fl pt-15">
        <div class="appinfo-titl f28 color-fff">下载5173APP</div>
        <div class="appinfo-text f22 color-fff">安全 便捷 随时随地</div>
      </div>
    </div>
    <div class="appload-btn fr"><a href="javascript:;" class="appbtn f30 color-fff">立即下载</a></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.bdtop {
  border-top: .2rem solid #f1f1f1
}

.bdbottom {
  border-bottom: .2rem solid #f1f1f1
}

.footer-wrapp {
  height: auto
}

.appdownload {
  background-color: #232323
}

.appdownload,
.appload-conn {
  height: auto;
  display: block;
  overflow: hidden
}

.appload-conn {
  width: 72%
}

.appload-conn .appload-close {
  width: 15%;
  height: .96rem
}

.appload-conn .appload-close .appclose {
  height: .96rem;
  background: url(/dist/src/assets/images/coins/5173app-close.png?4b42fe779dc76c2ad7ad05cec2994911) no-repeat 50%;
  display: block;
  background-size: .36rem;
  float: left;
  width: 100%
}

.appload-conn .appload-ico {
  width: .7rem;
  height: .96rem
}

.appload-conn .appload-ico img {
  width: .68rem;
  height: .68rem
}

.appload-conn .appload-info {
  height: auto;
  display: block;
  overflow: hidden;
  margin-left: 4%
}

.appload-conn .appload-info .appinfo-titl {
  height: .38rem;
  line-height: .38rem
}

.appload-conn .appload-info .appinfo-text {
  height: .3rem;
  line-height: .3rem
}

.appload-btn {
  height: auto;
  display: block;
  width: 28%;
  overflow: hidden;
  background-color: #f60
}

.appload-btn .appbtn {
  display: block;
  width: 100%;
  height: .96rem;
  line-height: .96rem;
  text-align: center
}

.appdownload-box {
  width: 6.54rem;
  height: 8.78rem;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  margin-top: -3.5rem;
  margin-left: -3.39rem
}

.appbox-conn {
  height: 7.56rem;
  display: block;
  background: url(/dist/src/assets/images/coins/apploadbox-bj.png?6967bf08dd3973363e7eb6667ead41d7) no-repeat 0 0;
  background-size: 100%;
  text-align: center;
  padding-top: 2.94rem
}

.appbox-conn .appbox-ico {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 auto
}

.appbox-conn .appbox-ico img {
  width: 100%;
  height: 100%
}

.appbox-conn .appbox-titl {
  margin-top: .24rem;
  height: .6rem;
  line-height: .6rem
}

.appbox-conn .appbox-text {
  height: .58rem;
  line-height: .58rem
}

.appbox-conn .appbox-text em {
  color: #ff1501
}

.appbox-conn .appbox-btn {
  margin-top: .33rem
}

.appbox-conn .appbox-btn .appboxbtn {
  display: inline-block;
  width: 5.26rem;
  height: .88rem;
  line-height: .88rem;
  background: url(/dist/src/assets/images/coins/appboxbtn-bj.png?7670905e4e7b55d824b466e2cbce537c) no-repeat 0 0;
  background-size: 100%
}

.appbox-close {
  height: 1.22rem;
  display: block;
  text-align: center
}

.appbox-close .appboxclose {
  height: 1.22rem;
  width: .73rem;
  display: inline-block;
  background: url(/dist/src/assets/images/coins/apploadbox-close.png?cf6a0692aaefa5c047aa4cf3e1791462) no-repeat top;
  background-size: 100%
}

.applist-info,
.applist-wrpp {
  height: auto;
  display: block;
  overflow: hidden
}

.applist-wrpp {
  position: relative
}

.applist-info .applist-ico {
  width: 1.54rem;
  height: 1.51rem;
  text-align: center
}

.applist-info .applist-ico img {
  width: .74rem !important;
  height: 1.51rem !important
}

.applist-info .applist-conn {
  height: auto;
  display: block
}

.applist-info .applist-conn .applist-titl {
  height: .58rem;
  line-height: .58rem
}

.applist-info .applist-conn .applist-titl em {
  color: #f60
}

.applist-info .applist-conn .applist-btn {
  height: auto;
  display: block;
  overflow: hidden;
  margin-top: .08rem
}

.applist-info .applist-conn .applist-btn .applistbtn {
  display: block;
  width: 1.6rem;
  height: .7rem;
  line-height: .7rem;
  background-color: #f60;
  text-align: center;
  border-radius: .06rem;
  color: #fff;
  cursor: pointer
}

.applist-info .applist-close {
  position: absolute;
  width: .66rem;
  height: .66rem;
  background: url(/dist/src/assets/images/coins/5173app-close.png?4b42fe779dc76c2ad7ad05cec2994911) no-repeat 50%;
  background-size: .36rem;
  right: 0;
  top: 0
}
</style>
