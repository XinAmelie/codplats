<template>
  <div>
    <a-card hoverable class="is-shadow" >
      <div style="display:flex;justify-content: space-between;margin-top: 5px" >
        <div style="display: flex;justify-content: flex-start">

          <a-space size="large">
              <a-dropdown @select="handleSelect" :popup-max-height="false">
                    <a-button>筛选<icon-down/></a-button>
                    <template #content>
                      <a-doption>Option 3</a-doption>
                      <a-doption>Option 4</a-doption>
                    </template>
              </a-dropdown>
          </a-space>

          <div  class="selStyle">
            <a-dropdown @select="handleSelect" :popup-max-height="false">
              <a-button>排序<icon-down/></a-button>
              <template #content>
                <a-doption>Option 1</a-doption>
                <a-doption>Option 3</a-doption>
              </template>
            </a-dropdown>
          </div>

          <a-input :style="{width:'300px',height: '30px'}" placeholder="输入需求名称(支持模糊)" allow-clear class="selStyle">
            <template #prefix>
              <icon-search />
            </template>
          </a-input>
        </div>
        <div style="display: flex;justify-content: flex-end">
          <a-button type="primary" @click="handclickdefect">新建缺陷</a-button>
        </div>

        <!--        弹窗-->
        <a-drawer :width="1000" :visible="visible"  @ok="handleOk" @cancel="handleCancel" unmountOnClose>
          <template #title>
            新建缺陷
          </template>
          <DefectNewForm></DefectNewForm>
          <template #footer>
            <a-button @click="handleCancel">取消</a-button>
            <a-button @click="handleOk" type="primary">确认创建</a-button>
          </template>

        </a-drawer>

      </div>

      <div>
          <section>
            <a-radio-group type="button" default-value="beijing" >
              <a-radio value="beijing">我的缺陷</a-radio>
              <a-radio value="shanghai">全部缺陷</a-radio>
            </a-radio-group>
          </section>
      </div>

      <div style="margin-top: 20px;overflow: hidden">
        <DefectTables></DefectTables>
        <div :style="{marginTop:'20px',float:'right'}">
          <a-pagination :total="50" :size="size" show-total show-page-size />
        </div>
      </div>
    </a-card>
  </div>

</template>

<script setup>

import { ref } from 'vue'
import DefectTables from '@/components/Tables/DefectTables'
import DefectNewForm from '@/views/project-management-page/defect/newCreateDefect'

const size = ref('Large')
const visible = ref(false)

const handclickdefect = () => {
  visible.value = !visible.value
}
const handleCancel = () => {
  visible.value = false
}

const handleOk = () => {
  visible.value = false
}

</script>

<style scoped lang="scss">

</style>
