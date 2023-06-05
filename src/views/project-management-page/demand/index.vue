<template>
  <div class="app_root">
    <a-card hoverable class="is-shadow" >
      <div>
        <a-alert closable>{{tips}}</a-alert>
      </div>

      <div style="display:flex;justify-content: space-between;margin-top: 5px" >
        <div style="display: flex;justify-content: flex-start">

          <a-space size="large">
            <a-radio-group type="button" default-value="shanghai" >
              <a-radio value="beijing">我的需求</a-radio>
              <a-radio value="shanghai">全部需求</a-radio>
            </a-radio-group>
          </a-space>

          <div  class="selStyle">
            <a-select :style="{height: '30px'}" placeholder="全部" default-value="Global E-Commerce (国际化电商)" >
              <a-option>Global E-Commerce (国际化电商)</a-option>
              <a-option>TikTok LIVE</a-option>
            </a-select>
          </div>

          <a-input :style="{width:'165px',height: '30px'}" placeholder="输入需求名称" allow-clear class="selStyle">
            <template #prefix>
              <icon-search />
            </template>
          </a-input>
        </div>
        <div style="display: flex;justify-content: flex-end">
          <a-button type="primary" @click="handclickdemand">新建需求</a-button>
        </div>

<!--        弹窗-->
        <a-drawer :width="1000" :visible="visible"  @ok="handleOk" @cancel="handleCancel" unmountOnClose>
          <template #title>
            新建需求
          </template>
          <newCreateDemandForm />
          <template #footer>
           <a-button @click="handleCancel">取消</a-button>
            <a-button @click="handleOk" type="primary">确认创建</a-button>
          </template>

        </a-drawer>

      </div>

      <div style="margin-top: 20px;overflow: hidden">
        <DemandTables></DemandTables>
        <div :style="{marginTop:'20px',float:'right'}">
          <a-pagination :total="50" :size="size" show-total show-page-size />
        </div>
      </div>
    </a-card>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import { IconSearch } from '@arco-design/web-vue/es/icon'
import DemandTables from '@/components/Tables/DemandTables'
import newCreateDemandForm from './newCreateDemandForm'

const size = ref('medium')

const customeTip = '受架构CN地区十一月变更管控规则限制，将在北京时间11月1日、11月11日、11月19日～11月22日及12月18日进行P0管控，在此期间建议不做重大变更，' +
  '所有上线需leader和SRE方向负责人审批。将在北京时间11月25日、12月6日及12月9日～12月11日进行P1管控，在此期间上线需直属leader审批。请点此了解更多详情：' +
  '《基础架构-十一月CN地区变更管控说明 》'

const tips = ref(customeTip)

const visible = ref(false)

const handclickdemand = () => {
  visible.value = !visible.value
  console.log(visible.value)
}

const handleOk = () => {
  visible.value = false
}

const handleCancel = () => {
  visible.value = false
}

</script>

<style scoped lang="scss">

.selStyle{
 margin-left: 20px;
}

.is-shadow{
  margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}

</style>
