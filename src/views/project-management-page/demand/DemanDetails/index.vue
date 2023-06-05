<template>
  <div>
    <a-card>
      <div style="background-color: rgb(245 248 249);display: flex;justify-content: flex-end">
        <a-dropdown position="br" trigger="hover">
          <a-button>图例</a-button>
          <template #content>
            <a-doption><i class="circleStatus" style="background-color:rgb(200 198 206) " ></i>&nbsp;&nbsp;未开始</a-doption>
            <a-doption><i class="circleStatus" style="background-color: rgb(252 183 9)"></i>&nbsp;&nbsp;进行中</a-doption>
            <a-doption><i class="circleStatus"  style="background-color: rgb(0, 180, 42)"></i>&nbsp;&nbsp;已完成</a-doption>
            <a-divider />
            <a-doption><i class="circleStatus" /><span style="background-color: #fff2ed;color: #980b0a">延期</span>&nbsp;延期节点</a-doption>
          </template>
        </a-dropdown>
      </div>
      <VueFlow
        v-model="elements"
        class="basicflow flowStyle"
        :default-zoom="1"
        :min-zoom="0.5"
        :max-zoom="4"
        :zoom-on-double-click="false"
        :nodes-draggable="false"
        :default-edge-options="{ type: 'smoothstep'}"
        :zoom-on-scroll="false"
        :prevent-scrolling="true"
        :pan-on-scroll="false"
        :nodes-connectable="false"
        auto-connect
      >

        <Background pattern-color="#aaa" gap="8" bgColor="rgb(245 248 249)"/>
        <MiniMap :pannable='true' mask-color="#a9aeb8" />
        <Controls />

        <template #node-toolbar="nodeProps">
          <!--          '&#x2600;' +-->
          <ToolbarNode :data="nodeProps.data" :label="nodeProps.label " :dataId="nodeProps.id"   :fontsize="fontsize" :fontsizeRadius="fontsizeRadius"/>
        </template>

      </VueFlow>
    </a-card>
    <!--    下方组件-->
    <BelowDemand01 :style="{display: isshow01}" />
    <BelowDemand02  :style="{display: isshow02}" />
    <BelowDemand03 :style="{display: isshow03}" />
    <BelowDemand04 :style="{display: isshow04}" />
  </div>

</template>

<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import { ref } from 'vue'
import { initialElements } from '@/components/workflow/initial-elements.js'
import ToolbarNode from '@/components/workflow/ToolbarNode.vue'
import BelowDemand01 from '@/components/workflow/BelowDemand01'
import BelowDemand02 from '@/components/workflow/BelowDemand02'
import BelowDemand03 from '@/components/workflow/BelowDemand03'
import BelowDemand04 from '@/components/workflow/BelowDemand04'

const { onConnect, addEdges, onNodeClick } = useVueFlow()

const elements = ref(initialElements)

// :pan-on-scroll-mode 允许在那个方向移动 horizontal  vertical free
const horizontal = ref('free')
// fit-view-on-init自动初始化布局
//      pan-on-drag
//      :pan-on-scroll-mode="horizontal"
//      :pan-on-scroll="false" 全局禁用
//      elements-selectable

onConnect((params) => addEdges([params]))

const mouseEnter = () => {
  console.log('进入了')
}

const isshow01 = ref('block')
const isshow02 = ref('none')
const isshow03 = ref('none')
const isshow04 = ref('none')
const fontsize = ref('2px solid rgb(56 87 236)')
const fontsizeRadius = ref('4px')
// 单击事件
onNodeClick(({ node }) => {
  console.log(node.label)
  if (node.label === '开始') {
    isshow01.value = 'block'
    isshow02.value = 'none'
    isshow03.value = 'none'
    isshow04.value = 'none'
    // fontsize.value = '400'
  } else if (node.label === '安全技术评审') {
    isshow02.value = 'block'
    isshow01.value = 'none'
    isshow03.value = 'none'
    isshow04.value = 'none'
    // fontsize.value = '400'
  } else if (node.label === '技术评审') {
    isshow03.value = 'block'
    isshow01.value = 'none'
    isshow02.value = 'none'
    // isshow04.value = 'none'
  } else if (node.label === 'Server估分') {
    isshow04.value = 'block'
    isshow03.value = 'none'
    isshow01.value = 'none'
    isshow02.value = 'none'
    // fontsize.value = '400'
  }
})

</script>

<style scoped lang="scss">
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";

.vue-flow__minimap {
  transform: scale(70%);
  transform-origin: bottom right;
}

.flowStyle{
  height: 400px;
}

:deep(.vue-flow__controls){
  height: 100px;
  width: 24px;
}

:deep(.vue-flow__controls-button){
  width: 16px !important;
}

// 方框样式
:deep(.vue-flow__node){
  width: auto;
  line-height: 7px;
  max-width: 200px;
  border: 2px solid #a9aeb8;
  border-radius: 4px;
  &:hover{
    background-color: rgb(232 232 235);
  }
}

//:deep(.vue-flow__container){
//  margin-top: 10px;
//}

:deep(.vue-flow__minimap){
  cursor: pointer;
}

//选中的时候
:deep(.selected){
  border: 3px solid rgb(56 87 236);
  font-weight: bold;
}

.circleStatus{
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  vertical-align: middle;
  margin-right: 4px;
}

//链接点
:deep(.vue-flow__handle.connectable){
  background-color: rgb(195 199 202);
}

</style>
