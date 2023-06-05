<template>
  <div>
    <a-table
      :columns="columns"
      :data="datas"
      :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
      column-resizable
      :row-selection="rowSelection"
      row-key="RequirementName"
      :scroll="scroll"
     >
      <template #RequireSlot="{record}">
        <span class="Restyle" @click="handclickHref(record.key)">{{record.RequirementName}}</span>

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
const scroll = {
  x: 1300
}

const datas = ref(null)

// 请求需求的接口
store.dispatch('testcases/getdemandLists')
  .then(res => {
    datas.value = res[0]
  })
  .catch(err => {
    console.log(err)
  })
const columns = [
  {
    title: '需求标题',
    dataIndex: 'RequirementName',
    width: 200,
    ellipsis: true,
    tooltip: true,
    align: 'left',
    slotName: 'RequireSlot'
  },
  {
    title: '业务线',
    dataIndex: 'LineofBusiness',
    width: 300,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '国家',
    dataIndex: 'country',
    width: 80,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '创建时间',
    dataIndex: 'CreationTime',
    width: 120,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '优先级',
    dataIndex: 'priority',
    width: 80,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '创建者',
    dataIndex: 'creator',
    width: 120,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '需求状态',
    dataIndex: 'DemandStatus',
    width: 120,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '操作',
    dataIndex: 'operate',
    // width: 300,
    ellipsis: true,
    tooltip: true,
    align: 'left'
  }
]
const handclickHref = (id) => {
  id = md5(id)
  router.push(`/manageProject/Dedetail/${id}`)
}

// 打开一个新的窗口页面
const goTo = (id) => {
  const routerData = router.resolve({
    path: `/manageProject/Dedetail/${id}`
  })
  window.open(routerData.href, '_blank')
}

</script>

<style scoped lang="scss">
:deep(.arco-table-pagination){
  display: none;
}

.Restyle{
  &:hover{
    color: #0057fe !important;
    cursor: pointer;

  }
}

</style>
