<template>
  <div>
    <a-table
      :columns="columns"
      :data="data"
      :scroll="scroll"
      column-resizable
      :bordered="{bodyCell:true,wrapper:false,headerCell:true}"
    >
      <template #PlanNameSlot="{record}">
          <span class="hoverstyle" @click="handclick(record.key)">{{record.PlanName}}</span>
      </template>
    </a-table>

  </div>
</template>

<script setup>
// 手工计划的tab组件

import { reactive, defineProps } from 'vue'
import { useRouter } from 'vue-router'
import md5 from 'md5'

const router = useRouter()
// 此处的props是父组件传过来的变量
defineProps({
  columns: {
    type: Object,
    required: true
  },
  data: {
    type: Object,
    required: true
  }

})

const scroll = {
  x: 2000
  // y: 200
}

const handclick = (id) => {
  id = md5(id)
  router.push(`/manageTask/manuPlanDetail/${id}`)
}

</script>

<style scoped  lang="scss">
:deep(.arco-table-pagination){
  display: none;
}

.hoverstyle:hover{
  color: #0057fe !important;
  cursor: pointer;
}

</style>
