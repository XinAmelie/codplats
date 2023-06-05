<template>
  <div>
    <a-table
      :columns="columns"
      :data="datas"
      :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
      column-resizable
      :scroll="scroll"
      :row-selection="rowSelection"
      row-key="DefectTitle"
    >

      <template #TitleSlot="{record}">
        <span class="Restyle" @click="handclickHref(record.key)">{{record.DefectTitle}}</span>
      </template>

    </a-table>
  </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import md5 from 'md5'

const router = useRouter()

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true
})

const store = useStore()
const datas = ref('')
store.dispatch('testcases/getdefectListtables')
  .then(res => {
    datas.value = res[0]
  })
  .catch(err => {
    console.log(err)
  })

const columns = [
  {
    title: '缺陷标题',
    dataIndex: 'DefectTitle',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    fixed: 'left',
    width: 250,
    slotName: 'TitleSlot'
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 80
  },
  {
    title: '所属端',
    dataIndex: 'OwningEnd',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 80
  },
  {
    title: '当前负责人',
    dataIndex: 'responsibleOwner',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '报告人',
    dataIndex: 'reporter',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 80
  },
  {
    title: '测试环节归因',
    dataIndex: 'ProblemAttribution',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '状态',
    dataIndex: 'curStatus',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '问题根因',
    dataIndex: 'RootCause',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  }, {
    title: 'RD解决结果',
    dataIndex: 'RdResults',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: 'QA确认解决结果',
    dataIndex: 'QAResults',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '业务线',
    dataIndex: 'LineBusiness',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '创建时间',
    dataIndex: 'CreateTime',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '问题发现方法',
    dataIndex: 'Findmethods',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '缺陷发现阶段',
    dataIndex: 'discoveryStage',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: 'IssueType',
    dataIndex: 'IssueType',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '经办人',
    dataIndex: 'operator',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  },
  {
    title: '操作',
    dataIndex: 'operate',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    width: 100
  }
]

const handclickHref = (id) => {
  id = md5(id)
  router.push(`/manageProject/defectDetails/${id}`)
}

</script>

<style scoped lang="scss">
.Restyle{
&:hover{
   color: #0057fe !important;
   cursor: pointer;
 }
}

</style>
