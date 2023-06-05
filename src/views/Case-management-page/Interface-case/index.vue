<template>
  <div>
    <div class="app-root">
      <a-card
        class="card-demo is-shadow"
        hoverable
        :style="{height:'100vh',padding: '0 20px 20px'}"
      >
        <div>
          <span style="font-weight: 600;font-size: larger">接口管理</span>
        </div>

          <div style="display: flex;
          justify-content: space-between;
          margin: 20px auto;
                ">
            <div style="display:flex;justify-content: flex-start">
              <div style="height: 34px" class="sel_height_1">
                <a-select :style="{width:'160px',height: '30px'}" placeholder="全部">
                  <template #prefix>
                    <p>协议类型:</p>
                  </template>
                  <a-option>http</a-option>
                  <a-option>https</a-option>
                </a-select>
              </div>
              <div class="sel_height">
                <div v-if="options.length <= 0 && options.length !== undefined">
                  <a-select :style="{width:'160px',height: '30px'}"
                            :loading="loading"
                            @search="handleSearch"
                            :filter-option="false"
                            allow-search
                  >
                    <template #prefix>
                      <p>PSM:</p>
                    </template>

                    <template #empty>
                      <a-empty />
                    </template>
                  </a-select>
                </div>
              </div>
              <div class="sel_height">
                <div v-if="options.length <= 0 && options.length !== undefined">
                  <a-select :style="{width:'160px',height: '30px'}"
                            :loading="loading"
                            @search="handleSearch"
                            :filter-option="false"
                            allow-search
                  >
                    <template #prefix>
                      <p>Route:</p>
                    </template>
                    <template #empty>
                      <a-empty />
                    </template>
                  </a-select>
                </div>
              </div>
  <!--            日期选择器start time和 end time-->
              <div class="sel_height">
                <a-range-picker
                  style=" width: 380px; "
                />
              </div>
            </div>

            <div style="display:flex;justify-content: flex-end">
              <a-button type="primary" @click="handclickCase">新建用例</a-button>
            </div>

          </div>

        <!-- dialog框 -->
        <div>
          <a-modal v-model:visible="visible" title="新建用例(API接口)"   :mask-closable=false  size="large" width="1000px">
            <a-tabs default-active-key="1">
              <a-tab-pane key="1" title="请求">
                <a-tabs :type="type">
                  <a-tab-pane key="1" title="Query">
                    <Interfacequery></Interfacequery>
                  </a-tab-pane>
                  <a-tab-pane key="2" title="Header">
                    <InterfaceHeaders></InterfaceHeaders>
                  </a-tab-pane>
                  <a-tab-pane key="3" title="Body">
                    <InterfaceBody></InterfaceBody>
                  </a-tab-pane>
                </a-tabs>
              </a-tab-pane>

              <a-tab-pane key="2" title="返回">
                <a-tabs :type="type">
                  <a-tab-pane key="1" title="Response">
                    <InterfaceResponse></InterfaceResponse>
                  </a-tab-pane>
                  <a-tab-pane key="2" title="StatusCode">
                    <InterfaceStatusCode></InterfaceStatusCode>
                  </a-tab-pane>
                  <a-tab-pane key="3" title="LogID">
                    <InterfaceLog></InterfaceLog>
                  </a-tab-pane>
                </a-tabs>
              </a-tab-pane>

              <a-tab-pane key="3" title="预期结果">
                <a-tabs :type="type">
                  <a-tab-pane key="1" title="Expected-Results">
                    <InterfaceExprised></InterfaceExprised>
                  </a-tab-pane>
                </a-tabs>
              </a-tab-pane>

            </a-tabs>
          </a-modal>
        </div>

        <div>

          <div>
            <IfCaseTables></IfCaseTables>
<!--            分页器-->
            <div :style="{float:'right',marginTop:'20px'}">
              <a-pagination :total="50" :size="size" show-total show-page-size />
            </div>
          </div>

        </div>

      </a-card>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import IfCaseTables from '@/components/Tables/InterfaceCaseTables'
import Interfacequery from '@/components/Editor/InterfaceCases/InterfaceQuery'
import InterfaceHeaders from '@/components/Editor/InterfaceCases/InterfaceHeaders'
import InterfaceBody from '@/components/Editor/InterfaceCases/InterfaceBody'
import InterfaceResponse from '@/components/Editor/InterfaceCases/InterfaceResponse'
import InterfaceStatusCode from '@/components/Editor/InterfaceCases/InterfaceStatusCode'
import InterfaceLog from '@/components/Editor/InterfaceCases/InterfaceLog'
import InterfaceExprised from '@/components/Editor/InterfaceCases/InterfaceExprised'

const size = ref('medium')
const options = []

const visible = ref(false)

const handclickCase = () => {
  visible.value = !visible.value
}

const type = ref('card')

</script>

<style scoped lang="scss">
.card-demo {
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}

.sel_height{
    margin-left: 20px;
    height: 30px;
    line-height: 30px;
}

.is-shadow{
  margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}

</style>
