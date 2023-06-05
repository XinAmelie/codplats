<template>
  <div>
    <div class="app-root">
      <a-card
        class="card-demo is-shadow"
        hoverable
        :style="{height:'100vh',padding: '0 20px 20px'}"
      >
        <div>
          <span style="font-weight: 600;font-size: larger">接口计划</span>
        </div>

        <div>

          <div style="display: flex;
          justify-content: space-between;
          margin: 20px auto;
          align-items: center;
                ">
            <div >
              <a-space size="large">
                <a-radio-group type="button" default-value="shanghai" >
                  <a-radio value="beijing">全部任务</a-radio>
                  <a-radio value="shanghai">周期执行任务</a-radio>
                </a-radio-group>
              </a-space>
            </div>

            <div style="display: flex;justify-content: center">
              <div class="InputStyle">
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

              <div class="InputStyle">
                <div v-if="options.length <= 0 && options.length !== undefined">
                  <a-select :style="{width:'200px',height: '30px'}"
                            :loading="loading"
                            @search="handleSearch"
                            :filter-option="false"
                            allow-search
                            placeholder="输入用户名或邮箱前缀"

                  >
                    <template #empty>
                      <a-empty />
                    </template>
                  </a-select>
                </div>

              </div>

              <div class="InputStyle">
                <a-input :style="{width:'165px'}" placeholder="搜索任务名称" allow-clear>
                  <template #prefix>
                    <icon-search />
                  </template>
                </a-input>
              </div>

<!--              按钮-->
              <div>
                <a-button type="primary" @click="handifclick">新建接口计划</a-button>
              </div>
              <div>

              </div>
            </div>

            </div>

        </div>

          <div>
            <IfPlanTables></IfPlanTables>
            <!--            分页器-->
            <div :style="{float:'right',marginTop:'20px'}">
              <a-pagination :total="50" :size="size" show-total show-page-size />
            </div>
          </div>

      </a-card>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue'
import IfPlanTables from '@/components/Tables/IfcaseTablesPlans'
import { useRouter } from 'vue-router'

const size = ref('medium')
const options = []

const router = useRouter()

const handifclick = () => {
  router.push('/manageTask/createIfPlan')
}

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

.InputStyle{
    margin-right: 10px !important;
}

.is-shadow{
  margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}

</style>
