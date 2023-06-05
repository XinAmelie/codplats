<template>
  <div>
    <span style="display: inline-block;background-color: white;width: 100%">
      <span class="icoStyle"><icon-left  @click="handclickreturn"/></span>新建计划
<!--      对话dialog-->
      <a-modal v-model:visible="visible" :mask-closable="false">
          <template #title>
            退出页面
          </template>
          <div>
              暂未完成创建测试计划，确定要离开此页面吗？<br>
              （退出后不会保留当前填写的内容）
          </div>
      </a-modal>
    </span>
    <a-card style="height: 100vh">
      <div style="display: flex;justify-content: space-between">
        <div style="display: flex;flex-direction: column;align-items: center">
          <section style="border: 1px solid yellow;width: 716px;" id="basic" >
            <span>基本信息</span>

<!--             :model是v-bind:model的缩写-->
            <a-form :model="form" >
              <a-form-item field="basicInfo" label="测试计划名称" required>
                <a-input  v-model="form.basicInfo" placeholder="请输入测试计划名称"></a-input>
              </a-form-item>
            </a-form>
            <a-divider />

          </section>

          <section style="border: 1px solid yellow;width: 716px;" id="line-less">
            <span>选择用例</span>
            <span style="display:block;">选择用例集/用例</span>
            <a-card :style="{ width: '360px' }" title="自定义添加用例" hoverable>
              <span>从用例列表选择完成编写的用例、用例集</span>
              <a-button type="primary" @click="handselected">立即选择</a-button>
            </a-card>

<!--            dialog-->
            <a-modal v-model:visible="visible2" :mask-closable="false" width="1000px">
              <template #title>
               选择用例
              </template>
              <div>
                <a-card title="全部用例">
                  <a-form :model="form" >
                    <a-form-item field="searchCase"  required>
                      <a-input  v-model="form.searchCase" placeholder="搜索文件夹/用例名称"></a-input>
                    </a-form-item>
                  </a-form>
                  <a-tree
                    :checkable="true"
                    v-model:checked-keys="checkedKeys"
                    :data="treeData"
                  />

                </a-card>

              </div>
            </a-modal>

          </section>
          <section style="border: 1px solid yellow;width: 716px;" id="boundary">
            <span>分配执行人</span>
            <div>
              <span>分配方式</span>
              <span style="display: block">
                <a-radio>按顺序平均分配</a-radio>
              </span>
              <a-form :model="form" >
                <a-form-item field="Executor" label="执行人" required>
                  <a-input  v-model="form.Executor" placeholder="搜索执行人"></a-input>
                </a-form-item>
              </a-form>

            </div>

          </section>
          <section style="border: 1px solid yellow;width: 716px;" id="hash">
            <span>计划信息</span>
            <span style="display: block">
              关联需求 ?
              <a-form :model="form" >
                <a-form-item field="demand"  required>
                  <a-input  v-model="form.demand" placeholder="请选择需求"></a-input>
                </a-form-item>
                <a-form-item field="signal" label="Meego信号" required>
                  <a-input  v-model="form.signal" placeholder="请选择信号"></a-input>
                </a-form-item>
              </a-form>

            </span>

            <div>
              <span>关联版本</span>
              <a-form :model="form" >
                <a-form-item field="AssVersion"  required>
                  <a-input  v-model="form.AssVersion" placeholder="请选择"></a-input>
                </a-form-item>
              </a-form>
            </div>

            <div>
              <span>计划排期</span>
              <div>占位置日历组件</div>

            </div>

            <div>
              <span>测试标签</span>
              <a-radio-group style="display: block" :default-value="selectedtags" @change="handradiogroup">
                <a-radio value="A">QA测试</a-radio>
                <a-radio value="B">RD测试</a-radio>
              </a-radio-group>
            </div>
          </section>
        </div>

        <div style="width: 200px">
          <a-affix :offsetTop="120">
            <!--   hash值不需要改变-->
            <a-anchor :style="{backgroundColor: 'var(--color-bg-1)'}" :change-hash="false">
              <a-anchor-link href="#basic">基本信息</a-anchor-link>
              <a-anchor-link href="#line-less">选择用例</a-anchor-link>
              <a-anchor-link href="#boundary">选择用例</a-anchor-link>
              <a-anchor-link href="#hash">计划信息</a-anchor-link>
            </a-anchor>
          </a-affix>
        </div>
      </div>
      <a-divider />
      <a-button type="primary">确定</a-button>
      <a-button type="primary">取消</a-button>

    </a-card>
  </div>

</template>

<script setup>

import { reactive, ref, watch } from 'vue'
import { IconLeft } from '@arco-design/web-vue/es/icon'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedtags = ref('B')

const handradiogroup = () => {
  if (selectedtags.value === 'B') {
    selectedtags.value = 'A'
  } else {
    selectedtags.value = 'B'
  }
}

const form = reactive({
  basicInfo: '',
  Executor: '',
  demand: '',
  signal: '',
  AssVersion: '',
  searchCase: ''
})

// 是否有变化
const ischange = ref(false)
// 监控多个数值
watch([() => selectedtags.value, form], () => {
  ischange.value = true
}, { deep: true })

const visible = ref(false)

const handclickreturn = () => {
  if (ischange.value) {
    visible.value = true
  } else {
    router.push('/manageTask/manuPlan')
  }
}

// 选择用例
const visible2 = ref(false)
const handselected = () => {
  visible2.value = true
}

const checkedKeys = ref(['0-1-1-1'])

const treeData = [
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'Leaf ',
            key: '0-1-1-1'
          },
          {
            title: 'Leaf ',
            key: '0-1-1-2'
          }
        ]
      }

    ]
  }
]

</script>

<style scoped lang="scss">
.icoStyle {
  cursor: pointer;
  &:hover{
    background-color: #f2f3f5;
  }
}

</style>
