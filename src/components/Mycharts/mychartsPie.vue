<template>

<!--    <div :id="id" ref="canvs" :style= "style" ></div>-->
  <div :id="id" ref="canvs" style="height: 337px;width: 300px" ></div>
<!--    <div>{{style}}</div>-->
</template>

<script setup>
import { getCurrentInstance, onMounted, ref, defineProps, computed, watch } from 'vue'

// 通信信息
const props = defineProps({
  height: {
    type: String,
    default: '800px'
  },
  width: {
    type: String,
    required: true
  },
  optionData: {
    type: Object,
    required: true
  }
})

// 计算属性

const style = computed(() => {
  return { width: props.width, height: props.height }
})

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
  mychart.setOption(props.optionData)
}

// 指定图表的配置项和数据
// const option = {
//   title: {
//     text: 'ECharts 入门示例'
//   },
//   tooltip: {},
//   legend: {
//     data: ['销量']
//   },
//   xAxis: {
//     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
//   },
//   yAxis: {},
//   series: [
//     {
//       name: '销量',
//       type: 'bar',
//       data: [5, 20, 36, 10, 10, 20]
//     }
//   ]
// }

// 监听事件

watch(() => props.width, () => {
  setTimeout(() => {
    mychart.resize()
  }, 0)
}, { immediate: true })

</script>

<style scoped>

</style>
