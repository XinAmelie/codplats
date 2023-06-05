<template>

  <div class="InterRoot" >
    <div class="InterfaceTest_interface-layout__top">
      <a-card hoverable :style="{ width: '100%', marginBottom: '20px'}">
            <div
              style="margin-bottom: 16px "
            >接口测试工具</div>
            <div>

              <div>
                <a-alert closable>{{tips}}</a-alert>
              </div>

               <div>
                 <div style="margin-bottom: 20px">
                   <a-space size="large">
                     <a-radio-group type="button" default-value="shanghai" >
                       <a-radio value="beijing">Thrift 协议</a-radio>
                       <a-radio value="shanghai">HTTP 协议</a-radio>
                     </a-radio-group>
                   </a-space>
                 </div>
                 <div>

                   <a-form :model="toolForm">
<!--                     第一行-->
                     <a-row :gutter="8">

                       <a-col :span="5">
                         <div class="t_tille">PSM</div>
                         <a-form-item field="psm"  label-col-flex="0px">

                           <a-select placeholder="Please select ..."  v-model="toolForm.psm"  allow-create  allow-clear >
                             <a-option value="section one">Section One</a-option>
                             <a-option value="section two">Section Two</a-option>
                             <a-option value="section three">Section Three</a-option>
                           </a-select>

                         </a-form-item>
                       </a-col>

                       <a-col :span="5">
                         <div class="t_tille">请求类型</div>
                         <a-form-item field="methods"  label-col-flex="0px">
                           <a-select placeholder="Please select ..."   v-model="toolForm.methods" allow-clear >
<!--                             <a-option value="section one">GET</a-option>-->
                             <a-option value="section two">POST</a-option>
                             <a-option value="section three">PUT</a-option>
                             <a-option value="section four">DELETE</a-option>
                           </a-select>
                         </a-form-item>
                       </a-col>

                       <a-col :span="5">
                         <div class="t_tille">接口</div>
                         <a-form-item field="funcName"  label-col-flex="0px">
                           <a-input :style="{width:'650px'}"
                                    placeholder="Please enter url"
                                    v-model="toolForm.funcName"
                                    :max-length="200"
                                    allow-clear
                                    show-word-limit
                           />
<!--                           <a-select placeholder="Please select ..."   v-model="toolForm.funcName" allow-create  allow-clear>-->
<!--                           </a-select>-->
                         </a-form-item>
                       </a-col>

                     </a-row>

                     <!-- 第二行   gutter每一栏左右各8       span表示每栏占8-->

                     <a-row :gutter="8">

                       <a-col :span="5">
                         <div class="t_tille">区域</div>
                         <a-form-item field="zone"  label-col-flex="0px">
                           <a-select placeholder="Please select ..."   v-model="toolForm.zone" allow-create  allow-clear>
                             <a-option value="section one">Section One</a-option>
                             <a-option value="section two">Section Two</a-option>
                             <a-option value="section three">Section Three</a-option>
                           </a-select>
                         </a-form-item>
                       </a-col>

                       <a-col :span="5">
                         <div class="t_tille">环境</div>
                         <a-form-item field="env"  label-col-flex="0px">
                           <a-select placeholder="Please select ..."   v-model="toolForm.env" allow-create  allow-clear>
                             <a-option value="section one">Section One</a-option>
                             <a-option value="section two">Section Two</a-option>
                             <a-option value="section three">Section Three</a-option>
                           </a-select>
                         </a-form-item>
                       </a-col>

                       <a-col :span="5">
                         <a-button type="primary" @click="submethods" :loading="loading">请求</a-button>
                       </a-col>

                     </a-row>

                   </a-form>
                 </div>

               </div>
            </div>

      </a-card>
    </div>

<!-- 页面中间部分-->
    <div class="InterfaceTest_interface-layout__center">

      <div >

        <a-card
          class="card-demo"
        >
          <div style="padding-bottom: 16px;font-size: 16px;font-weight: bold">
            请求配置
            <span>
              <a-tooltip content="请求body,请填写json格式;" position="right" >
                <icon-question-circle  :style="{fontSize:'16px',color:'#409eff',cursor:'pointer'}"/>
            </a-tooltip>
            </span>

          </div>
          <a-tabs default-active-key="1" :trigger="trigger">
            <a-tab-pane key="1" title="请求Body">
                  <MonacoEditor   :EditData = 'jsDataPprops'  @getdata="getdata"/>
            </a-tab-pane>

            <a-tab-pane key="2">
              <template #title>请求Header</template>

              <a-row class="grid-demo-1">
                <a-col :span="6" :order="1">
                  <div>Key</div>
                </a-col>
                <a-col :span="6" :order="2">
                  <div>Value</div>
                </a-col>
                <a-col :span="6" :order="3">
                  <div>Type</div>
                </a-col>
                <a-col :span="6" :order="4">
                  <div>操作</div>
                </a-col>
              </a-row>

                <div   v-for=" (item,index) in counter" :key="index">
                  <GirdDemo2  ref="headParsRef" @getHeadData="getHeadData"  :indexData="index"/>
                </div>

              <a-row class="grid-demo-3">
                <a-col :span="24" :order="1">
                  <div style="cursor:pointer;" @click="addChildren">
                    <IconPlusCircle />添加Header参数
                  </div>

                </a-col>

              </a-row>

            </a-tab-pane>
          </a-tabs>

        </a-card>
      </div>

    </div>

    <div class="InterfaceTest_interface-layout__bootom">
      <a-card
        class="card-demo"
        hoverable
      >
        <div style="height: 24px;margin-bottom: 16px;font-size: 16px;font-weight: bold">
          请求结果
        </div>

        <div style="border: 1px #e5e6eb solid">
          <div style="height: 48px;line-height: 48px"><span style="color: rgb(134, 144, 156)">反馈状态：</span>
            <span style="font-weight: bold" v-if="isShow === false">等待请求</span>
            <span  v-else-if="isShow === true" ><span style="color:rgb(0, 180, 42);"><i class="circleStatus"></i>成功</span> <span style="color:rgb(134, 144, 156);">反馈时长：<span style="font-weight: bold;color: #1e1e1e">{{timeout}}&nbsp;ms</span></span> </span>

          </div>
          <div style="border: 1px #e5e6eb solid;padding: 12px">
            <a-empty v-if="isShow === false" />

<!--            pre 元素可定义预格式化的文本-->
            <pre v-else  style="word-break: break-all; white-space: pre-wrap;word-wrap: break-word">{{sourceData}}</pre>
          </div>
          <div style="padding: 20px" v-show="isShowtab">
            <div>
              <span style="display: flex;align-items: center;margin-bottom: 20px">关键参数</span>
              <div>
                <a-table :columns="column" :data="dataTables" :bordered="{bodyCell:true}">

                  <template #resOptions="{record}">
                    <a-tooltip content="复制结果"><span ref="logText" @click="copyLog">{{record.salary}}</span></a-tooltip>
                  </template>

                  <template #optional="{ record }">
                    <a-link><span>{{record.address}}<icon-launch /></span></a-link>
                  </template>

                </a-table>
              </div>
            </div>
          </div>

        </div>

      </a-card>
    </div>

  </div>

</template>

<script setup>

import { IconPlusCircle, IconDelete, IconQuestionCircle, IconLaunch } from '@arco-design/web-vue/es/icon'

import { ref, reactive, onMounted, getCurrentInstance, toRaw, watch } from 'vue'
import GirdDemo2 from '@/components/GirdDemo2'
import MonacoEditor from '@/components/Editor/MonacoEditor'
import { jsDatda } from '@/mock/editorMock'
import { useStore } from 'vuex'
// 直接读取json文件,也可以用axios去读public下的文件
import Testjson from '../../../public/Jsondata/ManoEdit.json'
import { copyText } from '@/utils/copy'

const lastTestjson = JSON.stringify(Testjson)
// loading
const loading = ref(false)
const isShow = ref(false)
const isShowtab = ref(false)
const store = useStore()
// js的数据源
const jsDataPprops = lastTestjson // 获取数据源

const jsda = ref('')

// 获取子组件的数据
const getdata = (params) => {
  jsda.value = params
}

const checked1 = ref(true)

// click  hover
const trigger = ref('click')
const customeTip = '首先欢迎使用 Neptune 平台，在新的微服务治理产品体系下，Neptune 平台将承载 MS 平台的流量治理及接口测试能力以提供更多的功能及更好的体验，望理解。\n' +
  '应安全组要求，使用接口测试必须获取到指定权限。在以 Lark 卡片提醒该信息近 4个月后，现在正式开启全量鉴权，若无权限，可在「请求」后弹出的弹窗中进行申请。\n' +
  '当由于超时和访问控制导致请求失败时，可以点击下方「配置」Tab 进行变更申请。'
const tips = ref(customeTip)

// header的数据
const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Salary',
    dataIndex: 'salary'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]
const data = reactive([{
  key: '1',
  name: 'Jane Doe',
  salary: 23000,
  address: '32 Park Road, London',
  email: 'jane.doe@example.com'
}, {
  key: '2',
  name: 'Alisa Ross',
  salary: 25000,
  address: '35 Park Road, London',
  email: 'alisa.ross@example.com'
}])

// 动态headers
const array = new Array('girdInput') // 默认一个
const counter = reactive(array)
const addChildren = () => {
  counter.push('再加一个')
}

// 子组件的暴露变量
const headParsRef = ref(null)
const HeadParsub = ref('')
const CodeContent = reactive([])
const kkk = []
onMounted(() => {
  // toRaw(headParsRef.value[0])  子组件把循环的proxy自动的传递,前提是必须把动态的添加定义在父组件
  for (let i = 0; i < headParsRef.value.length; i++) {
    // console.log(headParsRef.value[i])
    const { HeaderPars } = headParsRef.value[i]
    // 获取页面加载后的数据，不包含后期的数据更新,也就是数据初始值
    // 初始化的思想，当未勾选的时候
    if (HeaderPars.isCheck === false) {
      HeadParsub.value = '{}'
    } else {
      HeadParsub.value = HeaderPars
      CodeContent.push(HeadParsub.value)
    }
  }
})

// 获取子组件更新后的数据
const getHeadData = (par) => {
  // const obj = Object.assign({}, CodeContent)// obj是深拷贝的对象
  if (CodeContent.length === 0) {
    CodeContent.splice(par.indexData, 0, par)
  }

  for (let i = 0; i < CodeContent.length; i++) {
    if (par.indexData === CodeContent[i].indexData) {
      if (par.isCheck === true) {
        CodeContent[i] = par
      } else {
        // delete CodeContent[i]
        // 下标删除
        CodeContent.splice(par.indexData, 1)
      }
    } else if (par.indexData !== CodeContent[i].indexData) {
      console.log('继续找')
      if (par.isCheck === true) {
        CodeContent.splice(par.indexData, 0, par)
        // 立即停止
        return
      } else {
        CodeContent.splice(par.indexData, 1)
        return
      }
    }
  }
}

// 工具提交form

const toolForm = reactive({
  psm: 'oec.seller.reach',
  methods: 'GET',
  funcName: 'http://localhost.charlesproxy.com:8999/api/user/',
  zone: 'SGALI',
  env: 'prod',
  request: jsda,
  rpcContext: CodeContent
})
const sourceData = ref('')
const timeout = ref('')

// 点击请求的方法
const submethods = () => {
  console.log(toolForm)
  store.dispatch('caseDebug/caseDeugRun', toolForm)
    .then(res => {
      loading.value = !loading.value
      sourceData.value = res[0].raw_data.body
      timeout.value = (res[0].raw_data.totalSeconds * 1000).toFixed(2) // 保留两位小数
      setTimeout(() => {
        loading.value = false
      }, 500)
      // loading.value = false
      isShow.value = true
      isShowtab.value = true
    })
    .catch((err) => {
      loading.value = !loading.value
      sourceData.value = err
      loading.value = false
      isShow.value = true
      isShowtab.value = true
    })
}

// tab数据

const column = [
  {
    title: '参数名称',
    dataIndex: 'name'
  },
  {
    title: '返回值',
    // dataIndex: 'salary'
    slotName: 'resOptions'
  },
  {
    title: '操作',
    slotName: 'optional'
  }
]
const dataTables = reactive([{
  key: '1',
  name: 'Log Id',
  salary: '202212061508080101071832123457A53B',
  address: '前往日志查询'
}, {
  key: '2',
  name: 'Address',
  salary: '[fdbd:dc51:ff:12:0:244:229:86]:9487',
  address: '前往TCE'
}]
)

// copy logid的数值  获取根节点
const logText = ref(null)
const copyLog = () => {
  const text = logText.value.innerText
  console.log(text)
  copyText(text)
}

</script>

<style scoped lang="scss">

.card-demo {
  width: 100%;
  transition-property: all;
  margin-bottom: 20px;
}
//.card-demo:hover {
//  transform: translateY(-4px);
//  //transform: scale(0.5) translate(-100%, -100%);
//}

// alert提示图标
.arco-alert{
  align-items: flex-start;
  margin-bottom: 16px;
}

.t_tille{
  padding-left: 20px;
  padding-bottom: 5px;
}

:deep(.arco-row-align-start){
  align-items: center;
}

// tab标签
:deep(.arco-tabs){
  border: 1px #d1dbe5 solid;
}

// 栅格样式
.grid-demo-1 .arco-col {
  height: 48px;
  line-height: 48px;
  border-bottom: 1px #d1dbe5 solid ;
  padding-left: 20px;
}
.grid-demo-1 .arco-col:nth-child(2n) {
  background-color: #f7f8fa;
}
.grid-demo-1 .arco-col:nth-child(2n + 1) {
  background-color: #f7f8fa;
}

.grid-demo-3 .arco-col {
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.grid-demo-3 .arco-col:nth-child(2n) {
  background-color: #f7f8fa;
}
.grid-demo-3 .arco-col:nth-child(2n + 1) {
  background-color: #f7f8fa;
}

// a-form样式
:deep(.arco-form-item){
  display: block;
  padding: 0 16px;
  width: auto;
}

:deep(.arco-tabs-content){
  padding-top: 0;
}

:deep(.arco-col-5){
  width: auto !important;
}

//小圆球
.circleStatus{
  display: inline-block;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  background-color: rgb(0, 180, 42);
  vertical-align: middle;
  margin-right: 4px;
}

</style>
