<template>

  <!-- // 动画要element_plus-->

    <el-breadcrumb  class="breadcrumb">
      <el-breadcrumb-item>
        <el-icon>
          <House></House>
        </el-icon>
      </el-breadcrumb-item>
      <transition-group name="breadcrumb" >
        <el-breadcrumb-item :to="{ path: item.path }" v-for="(item) in BreadcrumData" :key="item.path"><span class="t_right">{{item.meta.title}}</span></el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>

  <!--  无动效果版-->

<!--    <a-breadcrumb-item >-->
<!--      <template #separator>-->
<!--        <icon-right />-->
<!--      </template>-->
<!--      <icon-home/>-->
<!--    </a-breadcrumb-item>-->

<!--    <a-breadcrumb :routes="BreadcrumData" >-->
<!--      <template #separator>-->
<!--        <icon-right />-->
<!--      </template>-->

<!--        <template #item-render="{route, paths}" >-->

<!--          <a-link :href="'/#'+ paths.join('/')" >-->
<!--            {{route.meta.title}}-->
<!--          </a-link>-->

<!--        </template>-->

<!--    </a-breadcrumb>-->

</template>

<script setup>
import { useRoute } from 'vue-router'
import { IconRight, IconHome } from '@arco-design/web-vue/es/icon'
import { ref, watch } from 'vue'
import { CaretRight, House } from '@element-plus/icons'

// 路由的信息 useRouter（跳转）, useRoute（获取路由参数,也就是返回当前路由的上下路由或者父亲的路由信息）
// routes.matched 包含当前路由的所有嵌套路径片段的路由记录
// 添加一个监听的事件,监听路由的变化

const routes = useRoute()
// 响应式数据

const BreadcrumData = ref([])
const getBreadcrumdate = () => {
  BreadcrumData.value = routes.matched
}
// 监听
watch(routes, () => {
  getBreadcrumdate()
},
{
  immediate: true
})

</script>

<style scoped lang="scss">

//去掉下拉的图标
.arco-breadcrumb-item-dropdown-icon{
  display: none;
}

.breadcrumb{
 padding: 10px 5px 5px;
}

</style>
