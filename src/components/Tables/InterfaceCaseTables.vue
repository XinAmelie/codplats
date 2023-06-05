<template>
    <div>
      <a-table row-key="InterfaceURL"
               :columns="columns"
               :data="datas"
               :row-selection="rowSelection"
               column-resizable
               :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
               :scroll="scroll"
      >
            <template #urlSlot="{record}">
              <span class="hoveStyle" @click="handleclick(record.key)">{{record.InterfaceURL}}</span>
                  <span v-if="record.Method === 'GET' " class="typeStyle" style="background-color: #FAAC7B ">{{record.Method}}</span>
                  <span v-else-if="record.Method === 'POST' " class="typeStyle" style="background-color: #4CD263">{{record.Method}}</span>
                  <span v-else-if="record.Method === 'PUT' " class="typeStyle" style="background-color: #94BFFF">{{record.Method}}</span>
                  <span v-else-if="record.Method === 'DELETE' "  class="typeStyle" style="background-color: #a9aeb8">{{record.Method}}</span>
            </template>

        <template #opeartor="{record}">
          <span style="color: #0057fe;cursor: pointer">{{record.operation}}</span> <span style="color: #0057fe;cursor: pointer">{{record.operation1}}</span>
        </template>

      </a-table>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import md5 from 'md5'
const store = useStore()
const router = useRouter()
const scroll = {
  x: 1500
}

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false
})

const columns = [
  {
    title: '接口URL',
    dataIndex: 'InterfaceURL',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    slotName: 'urlSlot',
    width: '320'
  },
  {
    title: '协议类型',
    dataIndex: 'AgreementType',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '用例生成数量',
    dataIndex: 'casesGenerated',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '用例通过率',
    dataIndex: 'CasePass',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '数据来源',
    dataIndex: 'data-sources',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '更新时间',
    dataIndex: 'UpdateTime',
    ellipsis: true,
    tooltip: true,
    align: 'left'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    ellipsis: true,
    tooltip: true,
    align: 'left',
    slotName: 'opeartor'
  }
]

// 获取接口用例的data数据
const datas = ref('')
store.dispatch('testcases/getInterfaceList')
  .then(data => {
    datas.value = data[0]
  })

  .catch(err => {
    console.log(err)
  })

const handleclick = (id) => {
  id = md5(id)
  router.push(`/manageCase/IfCaseDetails/${id}`)
}

</script>

<style scoped lang="scss">
  :deep(.arco-table-pagination){
    display: none;
  }
  .typeStyle{
    border-radius: 3px;
    display: inline-block;
    padding: 0 5px;
    margin-left: 5px;
    color: #E8FFFB;
    }
  .hoveStyle:hover{
    color: #0057fe !important;
    cursor: pointer;
  }

</style>
