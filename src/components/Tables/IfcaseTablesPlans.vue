<template>
  <div>
    <a-table row-key="TaskName"
             :columns="columns"
             :data="datas"
             :row-selection="rowSelection"
             v-model:selectedKeys="selectedKeys"
             column-resizable
             :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
             :scroll="scroll"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const scroll = {
  x: 1300
}
const selectedKeys = ref(['1', '2'])

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true
})

const columns = [
  {
    title: '任务ID',
    dataIndex: 'TaskID',
    width: 88,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '任务名称',
    dataIndex: 'TaskName',
    width: 100,
    ellipsis: true,
    tooltip: true
  },
  {
    title: 'PSM',
    dataIndex: 'PSMServer',
    width: 88,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '执行状态',
    dataIndex: 'ExecutionStatus',
    width: 100,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '执行结果',
    dataIndex: 'ImpleResults',
    width: 100,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '协议类型',
    dataIndex: 'ProtType',
    width: 100,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '任务类型',
    dataIndex: 'TaskType',
    width: 100,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '触发源',
    dataIndex: 'TriggerSource',
    width: 88,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '起止时间',
    dataIndex: 'StartAndEnd',
    width: 200,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '创建人',
    dataIndex: 'CreatedBy',
    width: 88,
    ellipsis: true,
    tooltip: true
  },
  {
    title: '操作',
    dataIndex: 'Operation',
    ellipsis: true,
    tooltip: true
  }
]
// 请求接口
const datas = ref('')
store.dispatch('testcases/getPlanIfListas')
  .then(res => {
    datas.value = res[0]
  })
  .catch(err => {
    console.log(err)
  })

</script>

<style scoped lang="scss">
:deep(.arco-table-pagination){
  display: none;
}

// 解决中文失效的问题
//:deep(.arco-table-cell){
//  min-width: 88px !important;
//  box-sizing: border-box;
//}

</style>
