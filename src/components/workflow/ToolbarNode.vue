<template>
  <NodeToolbar
    style="display: flex; gap: 0.5rem; align-items: center"
    :is-visible="data.toolbarVisible"
    :position="data.toolbarPosition"
  >
    <div style="width: 100px;height: 50px;margin-bottom:10px;">
      <a-card>
        <i class="circleStatus"></i>{{ label }}
      </a-card>

    </div>

  </NodeToolbar>

  <!--  <div :style="{ padding: '10px' }" v-if="label === '开始' "  >-->
  <!--    <i class="circleStatus"></i><span :id="dataId">{{ label }}</span>-->
  <!--  </div>-->
  <div :style="{ padding: '10px' }" :id="dataId" class="mouseEvent">
    <i class="circleStatus"></i><span>{{ label }}</span>
    <!--    <a-card class="content" style="display: none" v-if="dataId === label">{{dataId}}</a-card>-->
  </div>

  <Handle type="target" :position="Position.Right" v-if="label === '开始' "/>
  <Handle type="target" :position="Position.Left" v-else/>
  <Handle type="source" :position="Position.Left" v-if="label === '结束' "/>
  <Handle type="source" :position="Position.Left" v-else-if="label === '安全技术评审' "/>
  <Handle type="source" :position="Position.Right" v-else/>

</template>
<script setup>
import $ from 'jquery'
import { Handle, Position } from '@vue-flow/core'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import { defineProps, onMounted, ref, watch } from 'vue'
// import { useVueFlow } from '_@vue-flow_core@1.6.4@@vue-flow/core'
import { useVueFlow } from '@vue-flow/core'

const {
  onConnect,
  addEdges,
  onNodeClick,
  onPaneClick
} = useVueFlow()
const props = defineProps(['data', 'label', 'dataId', 'fontsize', 'fontsizeRadius'])

const newList = []

onMounted(() => {
  setTimeout((k) => {
    if (props.dataId === '6') {
      const el = document.getElementById(props.dataId)
      // el.style.borderRadius = props.fontsizeRadius
      // el.style.border = props.fontsize
      el.click()
    }
  }, 500)

  // 移入移除事件
  $('.mouseEvent').hover(
    function () {
      const els = $('.mouseEvent')
      // $('.content').show()
    },
    function () {
      // $('.content').hide()
    }
  )
})

</script>

<style scoped lang="scss">
//小圆球
.circleStatus {
  display: inline-block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: rgb(0, 180, 42);
  vertical-align: middle;
  margin-right: 4px;
}
</style>
