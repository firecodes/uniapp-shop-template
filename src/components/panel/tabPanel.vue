<template>
  <div class="w-full">
    <div class="tab-class01">
      <ul>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">逆水寒手游专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">使命召唤手游专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">新石器时代专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">王者荣耀专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">火炬之光:无限专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">全民江湖专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">晶核专区</p>
          </a></li>
        <li><a>
            <span><img src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"></span>
            <p class="f28 color-000">原神专区</p>
          </a></li>
      </ul>
    </div>
    <a href="/vue/gameList/2">
      <div class="tab-more border-top"><a class="more f30 color-666">更多游戏</a></div>
    </a>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.tab-class01 {
  width: 100%;
  padding: .3rem 0 .1rem;
  height: auto;
  display: block;
  overflow: hidden
}

.tab-class01 ul li {
  width: 25%;
  padding: .1rem 0 .2rem;
  font-size: .28rem;
  line-height: .5rem;
  text-align: center;
  float: left
}

.tab-class01 ul li a {
  display: block;
  text-align: center;
  color: #333
}

.tab-class01 ul li img {
  display: block;
  margin-bottom: .05rem;
  width: 1.28rem;
  height: 1.28rem;
  border-radius: 15%;
  margin: 0px auto;
}

.tab-class01 ul li a p {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  padding: 0 5%;
  text-overflow: ellipsis
}
</style>
