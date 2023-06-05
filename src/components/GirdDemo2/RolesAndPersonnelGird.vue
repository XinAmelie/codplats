<template>
  <a-form :model="RoleForm" >
    <a-row class="grid-demo" :gutter="1" justify="start" align="center">
      <a-col :span="2" :order="1">
        <span >角色和人员</span>
      </a-col>
      <a-col :span="1" :order="2">
            <span style="margin-left: 25px"><icon-delete /></span>
      </a-col>
      <a-col :span="5" :order="3">
         <a-form-item field="key">
           <a-select placeholder="请选择角色"  v-model="RoleForm.key"  allow-create  allow-clear >
             <a-option value="section one">QA</a-option>
             <a-option value="section two">PM</a-option>
             <a-option value="section three">Tech Owner</a-option>
             <a-option value="section Four">FE</a-option>
             <a-option value="section Five">Server</a-option>
             <a-option value="section six">QA Owner</a-option>
           </a-select>
         </a-form-item>
      </a-col>
      <a-col :span="16" :order="4">
          <a-form-item field="value">
            <a-select placeholder="请选择人员"  v-model="RoleForm.value"  allow-create  allow-clear >
            </a-select>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>

</template>

<script setup>
import { IconDelete } from '@arco-design/web-vue/es/icon'
import { reactive } from 'vue'

const RoleForm = reactive({
  key: '',
  value: ''
})

</script>

<style scoped lang="scss">
.grid-demo .arco-col {
  height: 48px;
  line-height: 48px;
  color: #86909c;
  text-align: center;
  //background-color: rgba(var(--arcoblue-6), 0.9);
}

:deep(.arco-form-item-content-flex){
  display: block;
}

</style>
