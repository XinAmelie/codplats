<template>
  <div class="layout-demo">

    <a-layout style="height: 100vh" >
      <a-layout-header>
        <NavBar></NavBar>
      </a-layout-header>
      <a-layout>
        <a-layout-sider
          collapsible
        >
          <SiderBar></SiderBar>
          <template #trigger="{ collapsed }">
            <icon-menu-fold v-if="collapsed"></icon-menu-fold>
            <icon-menu-unfold  v-else></icon-menu-unfold >
          </template>
        </a-layout-sider>

        <a-layout style="padding: 0 24px">
          <Breadcrumb></Breadcrumb>
          <a-layout-content  id="basic-demo">
            <AppMain></AppMain>
            <a-back-top target-container="#basic-demo"  :visible-height="10"/>
            <!--   content-->
          </a-layout-content>

        </a-layout>

      </a-layout>
<!--      <a-layout-footer>Footer</a-layout-footer>-->
    </a-layout>

  </div>
</template>
<script setup>
import SiderBar from '@/components/Layout/SiderBar'
import NavBar from '@/components/Layout/NavBar'
import Breadcrumb from '@/components/BreadCrumb'
import AppMain from '@/components/Layout/AppMain'
import { IconMenuUnfold, IconMenuFold } from '@arco-design/web-vue/es/icon'

</script>

<style scoped lang="scss">

:deep(.arco-layout-sider-children){
  height: 100%;
}

.layout-demo :deep(.arco-layout-header){
  height: 44px;
  overflow: hidden;

}

.layout-demo :deep(.arco-layout-sider) {

}

:deep(.arco-layout-has-sider){
  overflow: auto;
}

.layout-demo :deep(.arco-layout-content) {
  overflow-y: auto;
  overflow-x: hidden;
          }

:deep(.arco-layout-sider-trigger-light){
      width: 0;
}
:deep(.arco-layout-sider-trigger){
  background-color: #f7f8fa;
  position: fixed;
  bottom: 24px;
  z-index: 100;
  &:hover{
    background-color: #dee0e3;
  }
  height: 24px !important;
}

// backTop 的按钮
:deep(.arco-back-top){
  right: 50px;
}
:deep(.arco-back-top-btn:hover){
      border-radius: 4px;

      }

</style>
