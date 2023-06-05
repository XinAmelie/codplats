<template>
  <div>
    <span>Basic Information</span>
    <a-form :model="defetForm">
      <a-form-item field="defectname" required label="缺陷名称">
        <a-input v-model="defetForm.defectname" placeholder="待填写" show-word-limit :max-length="100"/>
      </a-form-item>

      <a-form-item field="DefectPriority" required label="缺陷优先级">
        <a-select palceholder="待填写" v-model="defetForm.DefectPriority" allow-clear allow-search allow-create>
          <a-option value="1">P0</a-option>
          <a-option value="2">P1</a-option>
          <a-option value="3">P2</a-option>
          <a-option value="4">P3</a-option>
        </a-select>
      </a-form-item>

      <span>缺陷描述</span>
      <section>
        <a-form-item required label="缺陷描述" field="defecTDes">
          此处为富文本编辑器能力
        </a-form-item>
      </section>

      <a-form-item required label="业务线" field="LineofBusiness">
        <a-tree-select
          :allow-search="true"
          :allow-clear="true"
          :data="treeData"
          :filter-tree-node="filterTreeNode"
          placeholder="Please select ..."
          v-model="defetForm.LineofBusiness"
        ></a-tree-select>
      </a-form-item>

      <span>缺陷发现阶段*</span>
      <a-select placeholder="Please select ..." multiple
                :scrollbar="scrollbar"
                v-model="belongs"
      >
        <a-option value="FE前端">FE前端</a-option>
        <a-option value="Android端">Android端</a-option>
        <a-option value="IOS端">IOS端</a-option>
        <a-option value="服务端">服务端</a-option>
        <a-option value="其他">其他</a-option>
      </a-select>

      <a-form-item field="discoveryStage" required label="缺陷发现阶段">
        <a-select palceholder="待填写" v-model="defetForm.discoveryStage" allow-clear allow-search allow-create>
          <a-option value="1">冒烟准入阶段//Smoking Testing</a-option>
          <a-option value="2">测试阶段(第一轮)//Round 1 feature testing</a-option>
          <a-option value="3">测试阶段(第二轮)//Round 2 feature testing</a-option>
          <a-option value="4">集成回归阶段//Regression</a-option>
          <a-option value="5">灰度阶段//Grayscale//Regression</a-option>
          <a-option value="6">发布过程or小流量阶段//Canary Stage//Regression</a-option>
          <a-option value="7">线上阶段(全量发布后)//Online</a-option>
        </a-select>
      </a-form-item>

      <a-form-item field="defectType" required label="缺陷类型">
        <a-select palceholder="待填写" v-model="defetForm.defectType" allow-clear allow-search allow-create>
          <a-option value="1">配置问题</a-option>
          <a-option value="2">环境问题</a-option>
          <a-option value="3">第三方问题</a-option>
          <a-option value="4">体验问题//Regression</a-option>
          <a-option value="5">权限问题</a-option>
          <a-option value="6">兼容性问题</a-option>
          <a-option value="7">性能问题</a-option>
          <a-option value="8">文案翻译问题</a-option>
          <a-option value="9">UI问题</a-option>
          <a-option value="10">产品策略问题</a-option>
          <a-option value="11">本地化问题</a-option>
          <a-option value="12">服务端稳定性问题</a-option>
        </a-select>
      </a-form-item>

      <span>问题发现环境*</span>
      <a-radio-group>
        <a-radio value="A">开发环境</a-radio>
        <a-radio value="B">BOE环境</a-radio>
        <a-radio value="C">PPE环境</a-radio>
        <a-radio value="D">小流量灰度环境</a-radio>
        <a-radio value="E">线上环境</a-radio>
      </a-radio-group>

      <span>问题引入时间</span>
      <a-date-picker
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />

      <p>缺陷附件</p>
      <a-upload action="/">
        <template #upload-button>
          <div
            style="
          border: 1px dashed var(--color-fill-4);
          height: 158px;
          text-align: center;
          padding: 25px;
          background-color: #f9f9f9;

          "
          >
            <div style="margin: 30px 0 30px 0">
              <div><icon-cloud :style="{width:'24',height:'24',color: '#3a57ec'}"/></div>
              <span style="color:#262a31 ;font-weight: bold">点击上传或拖拽文件到这里</span>
              <div style="color: rgb(28 28 35 / 60%);font-size: 12px;font-family: SHSCN-Normal0,Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif">
                支持任意类型文件，最多上传 50份，单份文件大小不超过 2.0GB
              </div>
            </div>
          </div>
        </template>
      </a-upload>

      <a-form-item field="LinkedDemand" required label="关联需求">
        <a-select  :loading="loading"
                   placeholder="Please select ..."
                   @search="handleSearch"
                   :filter-option="false"
                   allow-search
                   v-model="defetForm.LinkedDemand"
        >
          <a-option v-for="item of options" :value="item">{{item}}</a-option>
        </a-select>
      </a-form-item>

      <span>Communication</span>
      <a-form-item required label="经办人" field="Handlers">
        <a-select v-model="defetForm.Handlers" placeholder="待填写" allow-search>
        </a-select>
      </a-form-item>

      <a-form-item required label="报告人" field="reporter">
        <a-select v-model="defetForm.reporter" placeholder="待填写" allow-search>
        </a-select>
      </a-form-item>

      <span>Monitor and Warning</span>
      <a-form-item required label="缺陷发现方法" field="methods">
        <a-select v-model="defetForm.methods" placeholder="待填写" allow-search>
          <a-option value="1">QA执行Case发现</a-option>
          <a-option value="2">QA发散性测试发现</a-option>
          <a-option value="3">回归测试(手工)</a-option>
          <a-option value="4">自动化测试</a-option>
          <a-option value="5">用户反馈(Angel Oncall)//Grayscale//Regression</a-option>
          <a-option value="6">产品走查/验收//Canary Stage//Regression</a-option>
          <a-option value="7">性能测试</a-option>

        </a-select>
      </a-form-item>

      <span>Automation</span>
      <span>已上线功能回归问题*
        <a-tooltip content="是否由于变更等导致已发布的功能出问题，这里不区分问题是在BOE、PPE还是线上发现。 线上从来没有正常过的漏测问题不算回归问题">
           <icon-info-circle-fill />
        </a-tooltip>

      </span>
      <a-radio-group>
        <a-radio value="A">是</a-radio>
        <a-radio value="B">否</a-radio>
      </a-radio-group>

      <span>自动化实现可行性*
        <a-tooltip content="Bug场景是否可实现自动化： - ”无法实现自动化“： 几乎很难用自动化的手段去发现； - ”自动化实现成本过高“: 可以实现自动化，但是实现方式复杂，成本过高，收益低。-- 判断相对经验主义一些。 - ”可实现自动化“： 在合理的成本内，可实现自动化测试发现此问题">
          <icon-info-circle-fill />
        </a-tooltip>

      </span>
      <a-radio-group>
        <a-radio value="A">无法实现自动化</a-radio>
        <a-radio value="B">实现自动化成本过高</a-radio>
        <a-radio value="C">可实现自动化</a-radio>
      </a-radio-group>

    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref, h } from 'vue'
import { IconCloud, IconInfoCircleFill } from '@arco-design/web-vue/es/icon'

const defetForm = reactive({
  defectname: '',
  DefectPriority: '',
  defecTDes: '',
  LineofBusiness: '',
  discoveryStage: '',
  defectType: '',
  LinkedDemand: '',
  Handlers: '',
  reporter: '',
  methods: ''
})

const belongs = ref(['FE前端', '服务端'])

const treeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Branch 0-0-0',
        key: '0-0-0',
        children: [
          {
            title: 'Leaf',
            key: '0-0-0-0'
          },
          {
            title: 'Leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'Branch 0-0-1',
        key: '0-0-1',
        children: [
          {
            title: 'Leaf',
            key: '0-0-1-0'
          }
        ]
      }
    ]
  }
]

function filterTreeNode (searchValue, nodeData) {
  return nodeData.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
}

const scrollbar = ref(true)
const options = ref()
const loading = ref(false)
const handleSearch = (value) => {
  if (value) {
    loading.value = true
    window.setTimeout(() => {
      options.value = [`${value}-Option1`, `${value}-Option2`, `${value}-Option3`]
      loading.value = false
    }, 2000)
  } else {
    options.value = []
  }
}

</script>

<style scoped lang="scss">
:deep(.arco-upload){
  width: 100%;
}

:deep(.arco-select-dropdown){
  padding: 0;
}

</style>
