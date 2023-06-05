<template>
  <div style="display: flex;justify-content: space-between;background-color: #292f40;position: fixed;z-index: 1000;width: 100%;">
    <div style="display: flex;justify-content: flex-start">
      <div style="display: flex;
      justify-content: flex-start;
      align-items: center;
      "
           class="rightLayout"
      >
        <a-dropdown trigger="hover">
          <span
            style="cursor: pointer;
                    padding: 0 16px;
                    width: 50px;
                    line-height: 44px;
                    "
                    >
            <icon-lark-color />
            <span style="color: #c9cdd4;margin-left: 5px">Bits</span>
          </span>

          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
          </template>
        </a-dropdown>
      </div>
      <a-menu mode="horizontal" :default-selected-keys="['1']">
        <a-menu-item key="1">首页</a-menu-item>
        <a-menu-item key="2">测试用例</a-menu-item>
        <a-menu-item key="3">测试计划</a-menu-item>
        <a-menu-item key="4">质量服务</a-menu-item>
        <a-menu-item key="5">质量数据</a-menu-item>
        <a-menu-item key="6">设置</a-menu-item>
      </a-menu>
    </div>
    <div style="display:flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 16px;"
    >
      <span class="iconStyle">
        <a-tooltip content="消息"  position="bottom">
              <icon-notification  :style="itStyle" />
        </a-tooltip>
      </span>
      <span class="iconStyle">
        <a-tooltip content="文档" position="bottom">
          <icon-file :style="itStyle" />
        </a-tooltip>
      </span>
      <span class="iconStyle">
        <a-tooltip content="中文"  position="bottom">
          <icon-chinese-fill :style="itStyle"/>
        </a-tooltip>
      </span>
      <span >

        <a-dropdown>
          <a-avatar :style="{ backgroundColor: '#00d0b6', cursor: 'pointer',width: '32px',height: '32px' }">Design</a-avatar>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption @click="logout">退出登录</a-doption>
          </template>
    </a-dropdown>

      </span>
    </div>
  </div>

</template>

<script setup>
import { IconChineseFill, IconFile, IconNotification, IconLarkColor } from '@arco-design/web-vue/es/icon'
import { reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 登出

const logout = () => {
  store.dispatch('user/logout')
}

// 图标的样式
const itStyle = reactive({
  width: '16px',
  height: '16px'
})

</script>

<style scoped lang="scss">

//<!--//或者直接在任意组件中通过 vue3 提供的 :global() 修改全局样式。以题中的例子为例：-->
//<!--@import "~@/styles/variables.module.scss";-->

:deep(.arco-menu-inner){
  width: 800px !important;
  margin-left: 15%;
}

:deep(.arco-menu-horizontal .arco-menu-inner){
  padding: 0;
}

:deep(.arco-menu-light){
background-color: #292f40 ;
}

:deep(.arco-menu-item){
  background-color: #292f40;
  color: #c9cdd4;
}
:deep(.arco-menu-horizontal .arco-menu-item, .arco-menu-horizontal .arco-menu-pop){
  background-color: #292f40 ;
  color: rgb(201 205 212);
}

:deep(.arco-menu-selected-label){
  display: none;
}
:deep(.arco-menu-light .arco-menu-item.arco-menu-selected){
  color: #fff;
  background: hsla(0,0%,100%,.1) !important;
   }

:deep(.arco-menu-light .arco-menu-item:hover){
  color: #fff;
  background-color: hsla(0,0%,100%,.1);
    }

:deep(.arco-menu-light.arco-menu-horizontal .arco-menu-item.arco-menu-selected:hover){
  background: hsla(0,0%,100%,.1);
}

/*顶部导航Nav 的图标样式*/
.iconStyle{
  &:hover{
     color: #fff;
   }
  margin-right: 30px !important;
  cursor: pointer;
  color: #c9cdd4;
}

.rightLayout{
    &:hover{
        background-color: rgb(0 87 254);
    }
}

</style>
