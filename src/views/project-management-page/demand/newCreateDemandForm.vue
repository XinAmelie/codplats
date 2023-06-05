<template>
  <div>
    <a-card class="is-shadow">
      <a-form :model="form">
        <a-form-item field="Retitle" label="需求标题" required>
            <a-input v-model="form.Retitle" placeholder="待填写"></a-input>
        </a-form-item>
        <span>【Product module】Feature Summary //【产品域】 需求概括</span>

        <a-form-item field="LineBusiness" label="业务线" required>
          <a-select placeholder="待填写"  v-model="form.LineBusiness"  allow-create  allow-clear >
            <a-option value="section one">Section One</a-option>
            <a-option value="section two">Section Two</a-option>
            <a-option value="section three">Section Three</a-option>
            <a-option value="section four">Section Four</a-option>
          </a-select>
        </a-form-item>

        <a-form-item field="demandClass" label="需求分类" required>
          <a-select placeholder="待填写"  v-model="form.demandClass"  allow-create  allow-clear >
            <a-option value="section one">业务需求</a-option>
            <a-option value="section two">技术需求</a-option>
          </a-select>
        </a-form-item>
        <span>选择需求属于业务、技术类</span>

        <a-form-item field="DemandType" label="需求类型" required>
          <a-select placeholder="待填写"  v-model="form.DemandType"  allow-create  allow-clear >
            <a-option value="section one">标准流程需求</a-option>
            <a-option value="section two">快速发布需求</a-option>
          </a-select>
        </a-form-item>

        <a-form-item field="OwningEnd" label="所属端" required>
          <a-select placeholder="待填写"  v-model="form.OwningEnd"  allow-create  allow-clear >
            <a-option value="section one">FE前端</a-option>
            <a-option value="section two">Android端</a-option>
            <a-option value="section three">Server服务端</a-option>
            <a-option value="section Four">ios端</a-option>
          </a-select>
        </a-form-item>

        <a-form-item label="checklist(后期可扩展为模板)" >
          <a-checkbox-group :default-value="['1']">
            <a-checkbox value="1">需要综合评审</a-checkbox>
            <a-checkbox value="2">需要翻译</a-checkbox>
            <a-checkbox value="3">需要埋点</a-checkbox>
          </a-checkbox-group>
        </a-form-item>

        <a-form-item field="PRD" label="PRD" required>
          <a-input v-model="form.PRD" placeholder="待填写"></a-input>
        </a-form-item>
        <span>这是模板的链接: <a-link href="#"></a-link></span>

        <a-form-item field="priority" label="优先级" required>
          <a-input v-model="form.priority" placeholder="待填写"></a-input>
        </a-form-item>

        <a-form-item label="适用地区 Launch Region" >
          <a-select placeholder="待填写"  v-model="form.Region"  allow-create  allow-clear >
            <a-option value="section one">us</a-option>
            <a-option value="section two">uk</a-option>
            <a-option value="section three">id</a-option>
            <a-option value="section Four">my</a-option>
          </a-select>
        </a-form-item>
        <span>Communication</span>
              <RolesAndPersonnelGird></RolesAndPersonnelGird>
      </a-form>

    </a-card>
  </div>
</template>

<script setup>

import RolesAndPersonnelGird from '@/components/GirdDemo2/RolesAndPersonnelGird'

import { reactive } from 'vue'

const form = reactive({
  Retitle: '',
  LineBusiness: '',
  demandClass: '',
  DemandType: '',
  OwningEnd: '',
  PRD: '',
  priority: '',
  Region: ''
})

</script>

<style scoped lang="scss">
.is-shadow{
  margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}
</style>
