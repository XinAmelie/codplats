<template>
  <div>
<!--    手工测试计划容器-->
    <div id="ManualPlanContainer" ref="containerRef">
      <a-card
        class="card-demo is-shadow"
        hoverable
        :style="{height:'100vh',padding: '0 20px 20px'}"
      >
        <!-- 第一行 -->
        <div style="display: flex;justify-content: space-between;margin-bottom: 20px">
          <div style="display: flex;
          justify-content: flex-end;
          align-items: center;
                ">

            <div style="height: 34px" class="sel_height_1">
              <a-select :style="{width:'160px'}" placeholder="全部">
                <template #prefix>
                  <p>计划状态</p>
                </template>
                <a-option>全部</a-option>
                <a-option>进行中</a-option>
                <a-option>未开始</a-option>
                <a-option>已开始</a-option>
              </a-select>
            </div>

            <div class="sel_height">
              <div v-if="options.length <= 0 && options.length !== undefined">
                <a-select :style="{width:'160px'}"
                          placeholder="搜索创建人"
                          :loading="loading"
                          @search="handleSearch"
                          :filter-option="false"
                          allow-search
                >
                  <template #empty>
                    <a-empty />
                  </template>
                </a-select>
              </div>

            </div>
            <div class="sel_height">
              <div v-if="options.length <= 0 && options.length !== undefined">
                <a-select :style="{width:'160px'}"
                          placeholder="搜索执行人"
                          :loading="loading"
                          @search="handleSearch"
                          :filter-option="false"
                          allow-search
                >
                  <template #empty>
                    <a-empty />
                  </template>
                </a-select>
              </div>

            </div>
            <div class="sel_height">
              <a-input :style="{width:'165px'}" placeholder="搜索测试计划名称" allow-clear>
                <template #prefix>
                  <icon-search />
                </template>
              </a-input>
            </div>
          </div>

          <!--按钮-->
          <div style="margin-right: 5px">
            <p> <a-button type="primary" @click="handclickPlan">新建计划</a-button> </p>
          </div>

        </div>

<!--        tables区域-->
        <div style="overflow: hidden">

          <manuPlantables
            :columns="columnsSub"
            :data="datas"
          />
<!--          分页器-->
          <div style="float: right;margin-top: 20px">
            <a-pagination :total="100" show-total  show-page-size/>
          </div>
        </div>

      </a-card>
    </div>
  </div>

</template>
<script setup>
import { reactive, ref } from 'vue'
import { IconSearch } from '@arco-design/web-vue/es/icon'
import $ from 'jquery'
import manuPlantables from '@/components/Tables/ManuPlanTables'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)
const containerRef = ref()

const options = []

const widthCards = $(document).width() - 204 - 43
console.log(widthCards)

const handleSearch = (value) => {
  if (value) {
    loading.value = true
    window.setTimeout(() => {
      options.value = ['迅雷', '影音', '雷电']
      loading.value = false
    }, 200)
  } else {
    options.value = []
  }
}

const handclickPlan = () => {
  router.push('/manageTask/createPlan')
}

// 表格数据
const columnsSub = reactive(
  [
    {
      title: '计划名称',
      dataIndex: 'PlanName',
      fixed: 'left',
      width: 184,
      ellipsis: true,
      tooltip: true,
      slotName: 'PlanNameSlot'

    },
    {
      title: '用例数量',
      dataIndex: 'NumberCases',
      width: 100,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '用例执行率',
      dataIndex: 'exacutiveRate',
      width: 163,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '状态',
      dataIndex: 'state',
      width: 113,
      ellipsis: true,
      tooltip: true

    },
    {
      title: '结果',
      dataIndex: 'result',
      ellipsis: true,
      tooltip: true,
      width: 113

    },
    {
      title: '关联版本',
      dataIndex: 'AssociatedVersion',
      width: 200,
      ellipsis: true,
      tooltip: true

    },
    {
      title: '关联需求',
      dataIndex: 'LinkedDemand',
      width: 183,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '创建人',
      dataIndex: 'Creator',
      width: 83,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '执行人',
      dataIndex: 'Executor',
      width: 123,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '执行开始时间',
      dataIndex: 'ExecutionStartTime',
      width: 200,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '执行耗时',
      dataIndex: 'ExecutionTime',
      width: 143,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '计划排期',
      dataIndex: 'Planscheduling',
      ellipsis: true,
      tooltip: true
    },
    {
      title: '操作',
      dataIndex: 'Operator',
      width: 83,
      fixed: 'right',
      ellipsis: true,
      tooltip: true
    }

  ]

)

const store = useStore()
const datas = ref('')
store.dispatch('testcases/getPlanManListas')
  .then(data => {
    datas.value = data[0]
  })

</script>

<style scoped lang="scss">

:deep(.arco-card-body){
  padding: 20px 2px;
}

.sel_height{
  margin-left: 20px;
}

:deep(.arco-select-view-single){
  height: 32px;
}

.card-demo {
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}

.is-shadow{
  margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}

//:deep(.hoverstyle){
//  &:hover{
//      color: #0057fe;
//  }
//}

</style>
