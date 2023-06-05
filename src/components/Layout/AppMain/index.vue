<template>
  <div v-if="animation === true"
       style="text-align: center;
       background-color: #f2f3f5;
       height: 100vh;
       padding: 10%;
          "
  >
<!--    <interfaceLoad :loading="loading" />-->
    <interfaceLoad :animation="animation"  />

  </div>
<!--  可以参考vue3的动画，下面都是固定的写法 " -->
  <div class="app-main " v-else >
    <router-view v-slot="{ Component,route }">
        <transition name="fade-transform"  mode="out-in"  >
          <keep-alive>
            <component :is="Component" :key="route.path" >
            </component>
          </keep-alive>
        </transition>
      </router-view>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'
import interfaceLoad from '@/components/Loadding/InterfaceLoad'

import { ref } from 'vue'

// 响应式的数据 // 骨架屏幕和loading
const loading = ref(true)
const animation = ref(true)

setTimeout(() => {
  animation.value = false
}, 2000)

const route = useRoute()
console.log(route.path)

</script>

<style scoped lang="scss">

//动画
//@import "~@/styles/transition.scss";

.app-main {
  width: 100%;
  position: relative;

}

</style>

<style lang="scss">
body{
  background-color: #f2f3f5;
}

</style>
