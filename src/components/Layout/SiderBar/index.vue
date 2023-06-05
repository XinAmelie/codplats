<template>
  <div class="menu-demo">
    <a-menu
      :default-selected-keys="['/interface-tool']"
    >

      <SiderItem
        :routeslistset="routeslistset"
        :routelistsingle = "routelistsingle"
        :routesupdate="item"
        v-for="item in routesup"
        :key="item.path"
      />

    </a-menu>

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import SiderItem from '@/components/Layout/SiderBar/SiderItem.vue'
import { filterRouters, generateMenus } from '@/utils/route'

const router = useRouter()

// 获取全部的路由信息 （两种路由的取值方式）
// option1
// const routes = router.getRoutes()

// const routeslist = routes.reverse()[0].children

const routesup = computed(() => {
  const fRoutes = filterRouters(router.getRoutes())
  console.log(fRoutes)
  return generateMenus(fRoutes)
})

console.log(JSON.stringify(routesup.value))

// const routeslistset = [] // 放子路由
// const routelistsingle = [] // 放非子路由,就是单个的
// for (let i = 0; i < routeslist.length; i++) {
//   if (routeslist[i].children !== undefined) {
//     routeslistset.push(routeslist[i])
//   } else {
//     routelistsingle.push(routeslist[i])
//   }
// }

//  剔除新建计划以及新建接口计划的路由，不渲染；

// for (let k = 0; k < routeslistset.length; k++) {
//   if (routeslistset[k].path === 'manageTask') {
//     const curFirstpath = routeslistset[k].children
//     for (let l = 0; l < curFirstpath.length; l++) {
//       console.log(curFirstpath)
//       if (curFirstpath[l].path === 'createPlan' || curFirstpath[l].path === 'createIfPlan') {
//         curFirstpath.splice(l, 1)
//       }
//       // } else if (curFirstpath[l].path === 'createIfPlan') {
//       //   curFirstpath.splice(l, 1)
//       // }
//     }
//   }
// }

// for (let k = 0; k < routeslistset.length; k++) {
//   if (routeslistset[k].path === 'manageTask') {
//     const curFirstpath = routeslistset[k].children
//     for (let l = 0; l < curFirstpath.length; l++) {
//       switch (true) {
//         case curFirstpath[l].path === 'createPlan':
//           curFirstpath.splice(l, 1)
//         case curFirstpath[l].path === 'createIfPlan':
//           curFirstpath.splice(l, 1)
//         default:
//           console.log('草没找到')
//       }
//     }
//   }
// }

</script>
<style scoped lang="scss">
.menu-demo {
  box-sizing: border-box;
  background-color: var(--color-neutral-2);
  position: fixed;
  top: 44px;
}
:deep(.arco-menu-inner){
  width: 105%;
}
</style>
