<template>

<!--        <a-sub-menu :key="item.name" :index = "index" :title="item.meta.title" v-for="(item,index) in routeslistset" >-->
<!--          <template #icon><component :is="item.meta.icon"></component></template>-->
<!--          <a-menu-item-->
<!--            :key="it.name"-->
<!--            v-for="it in item.children"-->
<!--            @click="goto('/'+item.path +'/'+ it.path)"-->
<!--          >-->
<!--           {{it.meta.title}}-->
<!--          </a-menu-item>-->

<!--        </a-sub-menu>-->

<!--  <a-menu-item :key= "itSingle.name"-->
<!--               v-for="itSingle in routelistsingle"-->
<!--               @click="goto('/'+itSingle.path)"-->
<!--  >-->
<!--    <template #icon><component :is="itSingle.meta.icon"></component></template>-->
<!--    {{itSingle.meta.title}}-->
<!--  </a-menu-item>-->

        <a-sub-menu :key="routesupdate.path"  :title="routesupdate.meta.title" v-if="routesupdate.children.length > 0"  >
          <template #icon>
            <component :is="routesupdate.meta.icon"></component>
          </template>
          <a-menu-item
            :key="item.path"
            v-for="item in routesupdate.children"
            @click="goto(item.path)"
          >
            {{item.meta.title}}
          </a-menu-item>

        </a-sub-menu>

      <a-menu-item :key= "routesupdate.path"
                   @click="goto(routesupdate.path)"
                   v-else
                   :index="routesupdate.path"
      >
        <template #icon><component :is="routesupdate.meta.icon"></component></template>
        {{routesupdate.meta.title}}
      </a-menu-item>

</template>

<script setup>

import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 定义props
const props = defineProps({
  routeslistset: {
    type: Object,
    required: true
  },
  routelistsingle: {
    type: Object,
    required: true
  },
  routesupdate: {
    type: Object,
    required: true
  }

})

// 路由跳转
const goto = (ele) => {
  router.push(ele)
}

</script>

<style scoped>

</style>
