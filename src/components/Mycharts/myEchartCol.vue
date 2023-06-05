<template>
  <div :id="id" ref="canvs" style="height: 337px;width: 300px" ></div>
</template>

<script setup>
import { optionCol } from '@/components/Mycharts/optionData'
import { getCurrentInstance, onMounted, ref } from 'vue'

const renderId = () => {
  new Date().getTime()
}
const id = renderId()
// # 获取dom
const canvs = ref()
canvs.value = id
// # 获取echarts的实例
let mychart = null

onMounted(() => {
  rendCharts()
})

const { proxy } = getCurrentInstance() // 获取全局配置项

const rendCharts = () => {
  mychart = proxy.$echarts.init(canvs.value) // 初始化mychart
  mychart.setOption(optionCol)
}
</script>

<style scoped>

</style>
