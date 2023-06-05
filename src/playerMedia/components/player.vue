<template>
  <div id="root">
    <!-- 搜索框 -->
    <header>
      <input type="text" @keyup.enter="search" v-model="inputParam">
      <a-button type="primary" size="mini"  :style="{marginLeft:'10px'}" @click="search">确定</a-button>
    </header>

    <!-- 歌曲展示区域 -->
    <section class="class02" style="margin-top: 20px">
      <ul v-for="(items,indexs) in result" :key="indexs" style="list-style: none">
      <!-- 7777 {{indexs+1}}{{items.name}} -->
        <li>
          {{indexs+1}}&nbsp;&nbsp;&nbsp;&nbsp;{{items.name}} <a-button type="primary" shape="circle" size="mini" @click="play(items.id)"><icon-play-arrow /></a-button>
<!--          {{items}}-->
        </li>
      </ul>

    </section>
    <!-- 播放区域 -->
    <footer>
      <audio :src="songurl" controls autoplay loop></audio>
    </footer>

  </div>
</template>

<script setup>

// 'https://autumnfish.cn/song/url'  网易云api
import axios from 'axios'
import { ref } from 'vue'
import { IconPlayArrow } from '@arco-design/web-vue/es/icon'

const localSource = ref('')
// 获取本地的json文件 默认放在public中
axios.get('/Jsondata/music.json').then((res) => {
  localSource.value = res
})

const search = () => {
  alert('要提交吗?')
  axios({
    method: 'get',
    url: 'https://autumnfish.cn/search',
    params: {
      keywords: inputParam.value
    },
    timeout: 3000
  }).then((res) => {
    // 三元表达式 ？号
    console.log(res.data.result.songs)

    // 循环要用array []
    result.value = res.data.result.songs === undefined ? localSource.value.data : res.data.result.songs
    console.log(result.value)
  })
}

const inputParam = ref('')
const result = ref('')
const songid = ref('')
const songurl = ref('')
const play = (id) => {
  songid.value = id
  axios({
    method: 'get',
    url: 'https://autumnfish.cn/song/url',
    params: {
      id: songid.value
    },
    timeout: 5000
  }).then((res) => {
    console.log(res.data.data[0].url)
    songurl.value = res.data.data[0].url
  })
}

</script>

<style scoped lang="scss">

</style>
