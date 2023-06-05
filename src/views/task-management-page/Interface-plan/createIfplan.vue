<template>

  <div>
    <section>
      <span style="background-color:white;display: block "><icon-left @click="handclickreturn" style="cursor: pointer" />新建任务</span>
      <a-modal v-model:visible="visible2" :mask-closable="false" @ok="handelok">
        <template #title>
          退出页面
        </template>
        <div>
          暂未完成创建接口测试计划，确定要离开此页面吗？<br>
          （退出后不会保留当前填写的内容）
        </div>
      </a-modal>
    </section>

    <a-card>
      <a-form :model="form">
        <a-form-item field="taskname" required label="任务名称">
          <a-input v-model="form.taskname" placeholder="自定义任务名称" />
        </a-form-item>

        <a-form-item field="psm" required label="PSM">
          <a-input v-model="form.psm" placeholder="请输入PSM服务" />
        </a-form-item>

        <span>协议类型</span>
        <a-radio-group :default-value="selectedtags"  @change="handradiogroup">
          <a-radio value="A">http</a-radio>
          <a-radio value="B">https</a-radio>
        </a-radio-group>

        <a-form-item  required label="地区/集群">
          <a-input v-model="form.area"></a-input>
        </a-form-item>

        <section>
          <a-card title="测试对象">
            <span>接口数量 0 </span>    <span>用例数量 0 </span>  <a-checkbox value="1">仅执行调试通过的用例</a-checkbox>
            <span style="display: block"><a-button type="priamry" @click="handselectCase">选择用例</a-button></span>
            <a-modal v-model:visible="visible" :mask-closable="false" width="1000px">
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
          </a-card>

        </section>

        <section>
          <span style="display:block;">周期执行<a-switch type="round"/></span>

          <a-form-item field="dataexpress">
                <a-input v-model="form.dataexpress" placeholder="请输入时间表达式"></a-input>
          </a-form-item>
          <p style="display: block">时间表达式参考：<a href="https://crontab.guru" target="_blank" style="text-decoration: none">https://crontab.guru</a> </p>
          <span style="display:block;">创建任务后立即执行<a-switch type="round"/></span>
        </section>

      </a-form>

      <a-divider />
      <a-button type="primary">保存</a-button>
      <a-button type="normal">取消</a-button>
    </a-card>
  </div>

</template>

<script setup>
import { IconLeft } from '@arco-design/web-vue/es/icon'
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  taskname: '',
  psm: '',
  area: '',
  dataexpress: ''

})
const visible = ref(false)

const handselectCase = () => {
  visible.value = !visible.value
}

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

const selectedtags = ref('B')

const handradiogroup = () => {
  if (selectedtags.value === 'B') {
    selectedtags.value = 'A'
  } else {
    selectedtags.value = 'B'
  }
}

const ischange = ref(false)
// 监控多个数值
watch([() => selectedtags.value, form], () => {
  ischange.value = true
}, { deep: true })

const visible2 = ref(false)
const handclickreturn = () => {
  if (ischange.value === true) {
    visible2.value = !visible2.value
  } else {
    router.push('/manageTask/IfPlan')
  }
}

const handelok = () => {
  router.push('/manageTask/IfPlan')
}

// 向前或者向后跳转n个页面，n可为正整数或负整数

// this.$router.go(n)

// 新开窗口;打开另外一个页面 绑定事件；另一种是a标签原生的
const goTo = () => {
  const routerData = router.resolve({
    path: '/manageTask/IfPlan'
  })
  window.open(routerData.href, '_blank')
}

</script>

<style scoped lang="scss">

</style>
