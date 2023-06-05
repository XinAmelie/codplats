<template>
  <div>
    <!-- 要播放的大视频窗口 -->
    <div id="bigBox">
      <Teleport to="#smallBox" :disabled="disabled" v-if="isShow">
        <videoPlaer :id="xid"></videoPlaer>
      </Teleport>
    </div>
    <!-- 要传送的小视频窗口 -->
    <div id="smallBox"></div>
    <!-- 模拟滚动 -->
    <div style="height: 2000px;"></div>
  </div>

</template>
<script setup>
import { onMounted, ref } from 'vue'
import videoPlaer from '../../../playerMedia/components/video'
import { useIntersectionObserver } from '@vueuse/core'

const disabled = ref(false)
const isShow = ref(false) // 控制 Teleport内置组件的挂载时机（要延迟一下）
const xid = ref('mse')

onMounted(() => {
  intersectionObserver()
  //  为了确保传送的目标dom挂载时机在Teleport组件之间  所以这里延迟挂载Teleport内置组件
  setTimeout(() => {
    isShow.value = true
  })
})

// 监听 指定的dom元素是否在 可视区域内
const intersectionObserver = () => {
  const { stop } = useIntersectionObserver(document.getElementById('bigBox'), ([{ isIntersecting }]) => {
    // isIntersecting  一个布尔值， true -> 代表在可视区域； false -> 表示不再可是区域
    console.log(isIntersecting)
    disabled.value = isIntersecting
  })

  // setTimeout(() => {
  //   stop()  // 不需要监听的时候 调用stop
  // },10000)
}
</script>
<style scoped lang="scss">
#bigBox {
  width: 640px;
  height: 360px;
  z-index: 99;
}
#smallBox {
  position: fixed;
  bottom: 20px;
  right: 160px;
  width: 300px;
  height: 200px;
}
</style>
