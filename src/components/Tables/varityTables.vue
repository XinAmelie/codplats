<template>
  <div>
    <a-table
      :columns="columns"
      :data="datas"
      :scroll="scroll"
      column-resizable
      :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
      :row-selection="rowSelection"
    >

      <template #optNUm>
        <a-tooltip content="支持以时间维度排序！"><span>创建时间</span></a-tooltip>
      </template>

      <template #opt>
<!--        <span>操作</span><a-tooltip content="设置"><IconSettings style="margin-left: 5px;cursor: pointer"/></a-tooltip>-->
<!--  动态图标的写法-->
        <span>操作</span><a-tooltip content="设置"><component :is="icons" style="margin-left: 5px;cursor: pointer"></component></a-tooltip>
      </template>

      <template #caselistSlot="{ record }">
        <span><span class="hoverIcon"><icon-layers /></span><span style="margin-left: 5px">{{record.caselist}}</span></span>
      </template>

      <template #creatorSlot="{record}">
        <span><a-avatar :style="{ backgroundColor: '#00d0b6', cursor: 'pointer',width: '32px',height: '32px' }"><img :src="record.avatar_url"></a-avatar>{{record.founder}}</span>
      </template>

      <template #Associate="{record}">
        <span style="cursor: pointer"> <a-link href="#">{{record.associatedScript}}</a-link></span>
      </template>
    </a-table>

  </div>
</template>

<script setup>
import { reactive, defineProps, h, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { IconLayers } from '@arco-design/web-vue/es/icon'

// 此处的props是父组件传过来的变量
// defineProps({
//   columns: {
//     type: Object,
//     required: true
//   },
//   data: {
//     type: Object,
//     required: true
//   }
//
// })

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: true
})

// 接口请求数据
const store = useStore()

// 变量要唯一
const datas = ref('')
store.dispatch('testcases/getCaselist')
  .then(data => {
    datas.value = data[0]
  })
  .catch(err => {
    console.log(err)
  })

const scroll = {
  x: 1500
  // minWidth: 1300
  // y: 200
}
const icons = ref('IconSettings')
// summaryCellStyle: (record) => {
//   if (record.salary > 100000) {
//     return {
//       backgroundColor: 'rgb(var(--arcoblue-6))',
//       color: '#fff'
//     }
//   }
// }
// }

// table
const columns = reactive(
  [
    {
      title: '用例/用例集名称',
      dataIndex: 'caselist',
      fixed: 'left',
      width: 300,
      ellipsis: true,
      tooltip: true,
      align: 'left',
      slotName: 'caselistSlot'

    },
    {
      title: '优先级',
      dataIndex: 'priority',
      ellipsis: true,
      tooltip: true,
      width: 80,
      align: 'left'
      // 自定义样式
      // bodyCellStyle: (record) => {
      //   if (record.salary > 1000) {
      //     return {
      //       backgroundColor: '#ee1b1b',
      //       color: '#ffffff',
      //       minWidth: '100px !important'
      //     }
      //   }
      // }

      // 自定义头部的样式
      // headerCellStyle: {
      //   backgroundColor: '#ee1b1b',
      //   color: '#ffffff',
      //   minWidth: '100px !important',
      // }
    },
    {
      title: '关联脚本',
      dataIndex: 'associatedScript',
      ellipsis: true,
      tooltip: true,
      width: 200,
      align: 'left'

    },
    {
      title: '关联需求',
      dataIndex: 'AssociatedRequirements',
      ellipsis: true,
      tooltip: true,
      width: 300,
      align: 'left',
      slotName: 'Associate'
    },
    {
      title: '创建人',
      dataIndex: 'founder',
      ellipsis: true,
      tooltip: true,
      width: 150,
      align: 'left',
      slotName: 'creatorSlot'

    },
    {
      dataIndex: 'creationTime',
      ellipsis: true,
      tooltip: true,
      sortable: {
        sortDirections: ['ascend', 'descend'],
        defaultSortOrder: 'ascend'

      },
      align: 'left',
      titleSlotName: 'optNUm'
    },
    {
      dataIndex: 'operate',
      fixed: 'right',
      width: 130,
      ellipsis: true,
      tooltip: true,
      titleSlotName: 'opt',
      align: 'left'
    }

  ]

)

// const data = reactive([
//   {
//     key: '1',
//     caselist: 'Jane Doe',
//     priority: 23000,
//     associatedScript: '32 Park Road, London',
//     AssociatedRequirements: '32 Park Road, London',
//     founder: 'jane.doe@example.com',
//     creationTime: '2022-11-01',
//     operate: '...'
//   }, {
//     key: '2',
//     caselist: 'Jane Doe',
//     priority: 23000,
//     associatedScript: '32 Park Road, London',
//     AssociatedRequirements: '32 Park Road, London',
//     founder: 'jane.doe@example.com',
//     creationTime: '2022-11-02',
//     operate: '...'
//   }, {
//     key: '3',
//     caselist: 'Jane Doe',
//     priority: 23000,
//     associatedScript: '32 Park Road, London',
//     AssociatedRequirements: '32 Park Road, London',
//     founder: 'jane.doe@example.com',
//     creationTime: '2022-11-03',
//     operate: '...'
//   }, {
//     key: '4',
//     caselist: 'Jane Doe',
//     priority: 23000,
//     associatedScript: '32 Park Road, London',
//     AssociatedRequirements: '32 Park Road, London',
//     founder: 'jane.doe@example.com',
//     creationTime: '2022-11-04',
//     operate: '...'
//   }, {
//     key: '5',
//     caselist: 'Jane Doe',
//     priority: 23000,
//     associatedScript: '32 Park Road, London',
//     AssociatedRequirements: '32 Park Road, London',
//     founder: 'jane.doe@example.com',
//     creationTime: '2022-11-05',
//     operate: '...'
//   }
// ])
</script>

<style scoped  lang="scss">

// tab的cel的宽度
:deep(.arco-table-cell){
  padding: 9px 16px;
}

:deep(.arco-table-col-fixed-left){
  cursor: pointer;
}

:deep(.arco-table-col-fixed-left):hover{
  .hoverIcon{
      color: #0057fe;
      }
}

</style>
