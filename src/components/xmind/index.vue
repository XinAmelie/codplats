<template>
  <div id="app" style="height: 750px">
    <div id="map" style="height: 100%"></div>
  </div>
</template>

<script setup>

import MindElixir, { E } from 'mind-elixir'
import { onMounted } from 'vue'

const datas = {
  nodeData: {
    topic: 'abc',
    children: [
      {
        topic: '234',
        children: [
          {
            topic: '234',
            children: [
              {
                topic: 'ab'
              },
              {
                topic: 'ac'
              },
              {
                topic: 'ad'
              },
              {
                topic: 'am'
              }
            ]
          }
        ]
      }
    ]
  }
}
let ME
const initMindElixir = () => {
  ME = new MindElixir({
    el: '#map',
    direction: MindElixir.SIDE, // 默认方向 SIDE LEFT RIGHT-->
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
    locale: 'zh_CN', // [zh_CN,zh_TW,en,ja,pt]
    primaryLinkStyle: 2, // 1 2
    primaryNodeVerticalGap: 30, // 主节点垂直距离
    primaryNodeHorizontalGap: 30, // 主节点水平距离
    allowUndo: true, // 运行撤销
    overflowHidden: false,
    contextMenuOption: {
      focus: true,
      link: true,
      extend: [
        {
          name: 'Node edit',
          onclick: () => {
            alert('extend menu')
          }
        }
      ]
    }
  })
  ME.init(MindElixir.new('中心思想')) // MindElixir.new('中心思想')  datas
}
onMounted(() => {
  initMindElixir()

  ME.bus.addListener('operation', operation => {
    console.log(operation)
  })
  console.log(ME.getAllData())
})

</script>

<style lang="scss" scoped>

//背景色
:deep(.map-container .map-canvas){
      background-color: rgb(244 244 244);
    }
:deep(path){
  stroke: #0057fe;
}
:deep(.map-container .box > grp > t > tpc){
  background-color: #f4f4f4 ;
  border: 0;
  &:hover{
    outline: 2px solid blue;
  }
}
:deep(.map-container .box t tpc):hover{
  outline: 2px solid blue;
}

// 标签 cloor
  :deep(.map-container .box t tpc .tags span){
    color: rgb(0 87 254) ;
    background-color: rgb(232 244 255);
    border: 1px solid rgb(139 191 255);
    font-weight: bold;
  }

// 选中的状态
:deep(.map-container .map-canvas .selected){
  outline: 2px solid #3370ff ;
}

:deep(.map-container .box > grp > t > tpc #input-box){
    outline: 2px solid #3370ff;
    border-radius: 5px;
}

:deep(.map-container .map-canvas root tpc #input-box){
  outline: 2px solid #3370ff;
  border-radius: 5px;
}

:deep(.map-container .box t tpc #input-box){
  outline: 2px solid #3370ff;
  border-radius: 5px;
}

</style>
