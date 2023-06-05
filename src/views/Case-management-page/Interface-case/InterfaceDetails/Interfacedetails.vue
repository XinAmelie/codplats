<template>
    <a-card>

      <div>
        <span>服务信息</span>
        <a-row class="grid-demo">
          <a-col :xs="{span: 5, offset: 1}">
            创建者:
          </a-col>
          <a-col :xs="{span: 5, offset: 1}">
            此版本变更者:
          </a-col>
          <a-col :xs="{span: 5, offset: 1}">
            变更时间:
          </a-col>
        </a-row>
      </div>

      <div>
        <span>API定义</span>
        <section>
            <span>POST xxxxxxxxxxxxxxxxxxxxx   复制</span>
            <h3 style="border-left: 4px solid rgb(153, 153, 153) ">接口信息</h3>
            <div style="background-color: rgb(248 248 248)">
              <span>接口名称: xxxxxxxx</span>
              <span>创建人: xxxxxxxx</span>
              <span>更新人: xxxxxxxxx</span>
              <span>接口等级: P0可编辑</span>
              <span>接口标签: xxxx</span>
              <span style="display:block;">接口描述: xxxxxxx</span>
            </div>
          <h3 style="border-left: 4px solid rgb(153, 153, 153)" >请求参数</h3>
          <div>
            <div style="display:flex;justify-content: space-between">
              <h4>Path参数</h4>
              <span>
              <a-radio-group  default-value="A">
                <a-radio value="A">表格</a-radio>
                <a-radio value="B">JSON示例</a-radio>
              </a-radio-group>
            </span>
            </div>

            <a-table
              :columns="columns"
              :data="data"
              :bordered="{bodyCell:true,wrapper:true,headerCell:true}"
              column-resizable
            />

          </div>

          <div>
            <div style="display:flex;justify-content: space-between">
              <h4>Query参数</h4>
              <span>
              <a-radio-group  default-value="A">
                <a-radio value="A">表格</a-radio>
                <a-radio value="B">JSON示例</a-radio>
              </a-radio-group>
            </span>
            </div>

<!--            扩展表格-->
            <a-table :columns="columns" :data="dataTree"
                     :bordered="{bodyCell:true,wrapper:true,headerCell:true}"
                     column-resizable />
          </div>
          <h3 style="border-left: 4px solid  rgb(153, 153, 153) ">响应参数</h3>
          <div>
            <div style="display: flex;justify-content: space-between">
              <h4>Body 参数</h4>
              <span>
              <a-radio-group  default-value="A">
                <a-radio value="A">表格</a-radio>
                <a-radio value="B">JSON示例</a-radio>
              </a-radio-group>
            </span>
            </div>

            <a-table
              :columns="columns"
              :data="dataTree"
              :bordered="{bodyCell:true,wrapper:true,headerCell:true}"
              column-resizable
            />
          </div>

        </section>

      </div>

    </a-card>
</template>

<script setup>

import { reactive } from 'vue'

const columns = [{
  title: '参数名称',
  dataIndex: 'paramName'
},
{
  title: '参数类型',
  dataIndex: 'paramType'

},
{
  title: '必需参数',
  dataIndex: 'RequiredParams'
},
{
  title: '备注',
  dataIndex: 'remarks'
}
]

const data = reactive([
  {
    key: '1',
    paramName: 'version',
    paramType: 'int',
    RequiredParams: '必填写',
    备注: 'xxxxxxxxxx'
  }
])

const dataTree = reactive([{
  key: '1',
  paramName: 'main_order_id',
  paramType: 'string',
  RequiredParams: '必填',
  备注: 'xxxxxxxxxx'
},
{
  key: '2',
  paramName: 'request_type',
  paramType: 'enum',
  RequiredParams: '选填',
  备注: 'xxxxxxxxxx',
  children: [
    {
      key: '3',
      paramName: 'request_type-1',
      paramType: 'enum',
      RequiredParams: '选填',
      备注: 'xxxxxxxxxx',
      children: [
        {
          key: '5',
          paramName: 'request_type-3',
          paramType: 'enum',
          RequiredParams: '选填',
          备注: 'xxxxxxxxxx'
        }
      ]
    },
    {
      key: '4',
      paramName: 'request_type-2',
      paramType: 'enum',
      RequiredParams: '选填',
      备注: 'xxxxxxxxxx'
    }

  ]
}

])

</script>

<style scoped lang="scss">

.grid-demo .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo .arco-col{
  color: #1e1e1e;
  margin-left: 0;
  margin-right: 120px;
}

//解决中文失效的问题
:deep(.arco-table-cell){
  min-width: 88px !important;
  box-sizing: border-box;
}

:deep(.arco-table-pagination){
  display: none;
}

</style>
