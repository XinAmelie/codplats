<template>
  <a-table
    :columns="columns"
    :data="dataTree"
    :bordered="{bodyCell:true,wrapper:true,headerCell:true}"
    column-resizable
  >
    <template #CaseNameSlot="{record}">
      <a-checkbox @change="handleChangeAll"  v-if="record.tags === undefined"  @click="handclick(record.key)">
        <icon-layers />{{record.CaseName}}
      </a-checkbox>
      <a-checkbox :value="record.key" v-else  v-model="data"><icon-experiment />{{record.CaseName}}</a-checkbox>
    </template>
  </a-table>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { IconLayers, IconExperiment } from '@arco-design/web-vue/es/icon'
const data = ref([])
const handleChangeAll = (value) => {
  if (!value) {
    data.value = []
  }
}

const handclick = (id) => {
  if (id < 3) {
    data.value = [3, 4, 5]
  }
}

const columns = [
  {
    title: '名称',
    dataIndex: 'CaseName',
    width: 350,
    align: 'left',
    ellipsis: true,
    tooltip: true,
    slotName: 'CaseNameSlot',
    fixed: 'left'
  },
  {
    title: '标签',
    dataIndex: 'tags',
    width: 300,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '优先级',
    dataIndex: 'Priority',
    ellipsis: true,
    width: 120,
    tooltip: true,
    align: 'left'
  },
  {
    title: '分配给',
    dataIndex: 'Persons',
    width: 120,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '执行结果',
    dataIndex: 'ExecutionResults',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '操作',
    dataIndex: 'Operate',
    width: 120,
    ellipsis: true,
    tooltip: true,
    align: 'left',
    fixed: 'right'
  }
]

const dataTree = reactive([
  {
    key: 1,
    CaseName: 'xxxxxxxxxxxxxxxxxx111',
    children: [
      {
        key: 2,
        CaseName: 'xxxxxxxxxxxxxxxxxx222',
        children: [
          {
            key: 3,
            CaseName: 'xxxxxxxxxxxxxxxxxx333',
            tags: '异常',
            Priority: 'P0',
            Persons: '王某人',
            ExecutionResults: '通过',
            Operate: '...'
          },
          {
            key: 5,
            CaseName: 'xxxxxxxxxxxxxxxxxx444',
            tags: '异常',
            Priority: 'P0',
            Persons: '王某人',
            ExecutionResults: '通过',
            Operate: '...'
          }
        ]
      },
      {
        key: 4,
        CaseName: 'xxxxxxxxxxxxxxxxxx555',
        tags: '异常',
        Priority: 'P0',
        Persons: '王某人',
        ExecutionResults: '通过',
        Operate: '...'
      }

    ]
  }

])

// const datas = ref(null)

// store.dispatch('testcases/getdemandLists')
//   .then(res => {
//     console.log(res)
//     datas.value = res[0]
//   })
//   .catch(err => {
//     console.log(err)
//   })

</script>

<style scoped lang="scss">
//:deep(.arco-table-td){
//  border-bottom: 0 solid yellow;
//}
//
//:deep(.arco-table-th){
// border-bottom: 1px solid #eee;
//  border-top: 1px solid #eee ;
//  background-color: #fff;
//}
//
////该类的子元素给我隐藏起来
//:deep(.arco-table-th.arco-table-operation.arco-table-checkbox > span){
//  display: none;
//}

</style>
