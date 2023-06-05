<template>
  <div>
<!--    <mycharts :width = "widthF" :optionData="optionPie"></mycharts>-->
<!--    <a-button type="primary" @click="changeSize">改变大小</a-button>-->
    <div>
      <a-card  hoverable>
        <div>
          <p class="p_Style" > <span class="t_text"></span>测试用例结果分布 </p>
        </div>
        <div style="display: flex;justify-content: space-between">
          <div style="display: flex;justify-content: center">
            <mycharts  :optionData="optionPie"></mycharts>
            <div>
                 <ul style="list-style: none">
                   <li > <span></span>用例数 | 84</li>
                   <li > <span style="background-color: rgb(123, 198, 22)"></span> 已通过 | 22 26.2%</li>
                   <li> <span style="background-color: rgb(245, 63, 63)"></span>未通过 | 11 13.1%</li>
                   <li> <span style="background-color: rgb(15, 198, 194)"></span>阻塞 | 0 0%</li>
                   <li> <span style="background-color: rgb(254, 199, 69)"></span>跳过 | 0 0%</li>
                   <li> <span style="background-color: rgb(242, 243, 245)"></span>待执行 | 51 60.7%</li>
                 </ul>
            </div>
          </div>
          <div>
            <a-table :columns="columns" :data="data" />
          </div>

        </div>
        <div>
        </div>
      </a-card>

      <a-card   hoverable>
        <div>
          <p class="p_Style"> <span class="t_text"></span>执行人汇总 </p>
        </div>
        <div style="display: flex;justify-content: space-between">
          <div>
            <mychartsCol></mychartsCol>
          </div>
          <div>
            <a-table :columns="columns" :data="data" />
          </div>
        </div>

      </a-card>

      <a-card   hoverable>
        <div>
            <div style="font-weight: 700;">缺陷（0）</div>
            <div>
              <ManuTable
                :columns="columnsSub"
                :data="dataSub"

              />
            </div>
        </div>
      </a-card>
    </div>

    <p>目前的尺寸{{widthF}}</p>

  </div>

</template>
<script setup>
import mycharts from '@/components/Mycharts/mychartsPie'
import mychartsCol from '@/components/Mycharts/myEchartCol'
import { ref, reactive } from 'vue'
import { optionColumnar, optionPie } from '@/components/Mycharts/optionData'
import ManuTable from '@/components/Tables/ManuPlanTables'

const widthF = ref('600px')

const changeSize = () => {
  if (widthF.value === '600px') {
    widthF.value = '100px'
  } else if (widthF.value === '100px') {
    widthF.value = '200px'
  } else {
    widthF.value = '600px'
  }
}

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
}, {
  key: '3',
  name: 'Kevin Sandra',
  salary: 22000,
  address: '31 Park Road, London',
  email: 'kevin.sandra@example.com'
}, {
  key: '4',
  name: 'Ed Hellen',
  salary: 17000,
  address: '42 Park Road, London',
  email: 'ed.hellen@example.com'
}, {
  key: '5',
  name: 'William Smith',
  salary: 27000,
  address: '62 Park Road, London',
  email: 'william.smith@example.com'
}])

// 最后卡片的表格数据
// 表格数据
const columnsSub = reactive(
  [
    {
      title: '计划名称',
      dataIndex: 'name',
      fixed: 'left',
      width: 140,
      ellipsis: true,
      tooltip: true

    },
    {
      title: '用例数量',
      dataIndex: 'salary',
      width: 140,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '执行率',
      dataIndex: 'exacutiveRate1',
      width: 140,
      ellipsis: true,
      tooltip: true
    },
    {
      title: '执行率',
      dataIndex: 'exacutiveRate2',
      width: 140,
      ellipsis: true,
      tooltip: true

    },
    {
      title: '执行率',
      dataIndex: 'exacutiveRate3',
      ellipsis: true,
      tooltip: true

    },
    {
      title: 'Email',
      dataIndex: 'email',
      fixed: 'right',
      width: 200,
      ellipsis: true,
      tooltip: true

    }
  ]

)

const dataSub = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    exacutiveRate1: '32 Park Road, London',
    exacutiveRate2: 'jane.doe@example.com',
    exacutiveRate3: 'jane.doe@example.com',
    email: 'alisa.ross@example.com'
  }, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    exacutiveRate1: '32 Park Road, London',
    exacutiveRate2: 'jane.doe@example.com',
    exacutiveRate3: 'jane.doe@example.com',
    email: 'alisa.ross@example.com'
  }, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    exacutiveRate1: '32 Park Road, London',
    exacutiveRate2: 'jane.doe@example.com',
    exacutiveRate3: 'jane.doe@example.com',
    email: 'alisa.ross@example.com'
  }, {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    exacutiveRate1: '32 Park Road, London',
    exacutiveRate2: 'jane.doe@example.com',
    exacutiveRate3: 'jane.doe@example.com',
    email: 'alisa.ross@example.com'
  }, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    exacutiveRate1: '32 Park Road, London',
    exacutiveRate2: 'jane.doe@example.com',
    exacutiveRate3: 'jane.doe@example.com',
    email: 'alisa.ross@example.com'
  }
])

</script>

<style scoped lang="scss">

// 左上角的文本样式
.t_text{
  background: #648ed2;
  display: inline-block;
  height: 25px;
  margin-right: 8px;
  vertical-align: bottom;
  width: 7px;
}

.p_Style{
  line-height: 25px;
}

//更改样式
ul li span{
  border-radius: 50%;
  height: 18px;
  margin-right: 5px;
  width: 18px;
  display: flex;
  line-height: 18px;
}

ul li{
  display: flex;
  padding: 10px;
}

:deep(.arco-table-pagination){
  display: none;
}

</style>
