<template>
  <a-row class="grid-demo-2" :style="{'display': visible }"  >
    <a-col :span="6" :order="1" >
      <div>
        <p>
          <a-form :model="HeaderPars" ref="keform">
            <a-form-item field="key"  label-col-flex="0px" >
              <a-select placeholder="Please select ..."   v-model="HeaderPars.key" allow-create  allow-clear >
                <a-option value="Content-Type">Content-Type</a-option>
                <a-option value="Authorization">Authorization</a-option>
                <a-option value="cookie">cookie</a-option>
              </a-select>
            </a-form-item>
          </a-form>
        </p>

      </div>

    </a-col>

    <a-col :span="6" :order="2">
      <div>
        <p>
          <a-form :model="HeaderPars">
            <a-form-item field="value"  label-col-flex="0px">
              <a-input :style="{width:'320px'}" placeholder="Please enter something" v-model="HeaderPars.value" allow-clear />
            </a-form-item>
          </a-form>
        </p>
      </div>
    </a-col>

    <a-col :span="6" :order="3">
      <div>
        <a-form :model="HeaderPars">
          <a-form-item field="type">
            <a-radio-group   @change="handleClick"   default-value="A">
              <a-radio value="A">persistent</a-radio>
              <a-radio value="B">transient</a-radio>
            </a-radio-group>
          </a-form-item>

        </a-form>

      </div>

    </a-col>

    <a-col :span="6" :order="4">
      <div style="text-align: center;line-height: 60px">
<!--        v-bind:model-value（单向的）和v-model的作用类似都是数据绑定。  -->
        <a-checkbox   style="color: white !important;"   :model-value="isCheck"  @change="handleSetCheck" default-checked=""></a-checkbox>
        <icon-delete  style=" margin-left: 20px;margin-bottom: 2px;cursor: pointer"  @click="decChild"  />
      </div>
    </a-col>
  </a-row>

</template>

<script setup>

import { IconDelete } from '@arco-design/web-vue/es/icon'
import { reactive, ref, defineExpose, watch, defineEmits, defineProps } from 'vue'

const props = defineProps({
  indexData: {
    type: Number,
    required: true
  }
})

// 利用ref获取dom

const RadioGroup = ref('A')

// 选择框需要单绑定
// 单选值逻辑
const handleClick = () => {
  if (RadioGroup.value === 'A') {
    RadioGroup.value = 'B'
  } else {
    RadioGroup.value = 'A'
  }
}

// 复选框逻辑
const isCheck = ref(true)

const handleSetCheck = () => {
  isCheck.value = !isCheck.value
  console.log(isCheck.value)
}

const HeaderPars = reactive({
  key: '',
  value: '',
  type: RadioGroup, // 切记不要填写RadioGroup.value;填写了就不是响应的了
  isCheck: isCheck,
  indexData: props.indexData
})

watch([() => HeaderPars.key, () => HeaderPars.value, () => HeaderPars.isCheck, () => HeaderPars.type], () => {
  emits('getHeadData', HeaderPars)
}, { deep: true })

// immediate 设为 true 后，则监听的这个属性会立即输出，也就是说一刷新页面就会在控制台输出，
// 当然此时页面上的数据我们还没来得及手动让其发生变化，所以在控制台输出的newValue为我们在代码中默认设置的值，oldValue输出为“undefined”。

// const obj = Object.assign({}, HeaderPars)// obj是深拷贝的对象

// emits实例
const emits = defineEmits(['getHeadData'])
// emits('getHeadData', HeaderPars)
const rrr = 1

// 把子组件的信息暴露出去

defineExpose({
  HeaderPars,
  rrr
})

// 定义删除header的方法
const visible = ref('')
const decChild = () => {
  visible.value = 'none'
}

</script>

<style scoped lang="scss">

.grid-demo-2 .arco-col {
  border-top: 1px #d1dbe5 solid ;
  border-bottom: 1px #d1dbe5 solid ;
  border-right: 1px  #d1dbe5 solid;
  height: 60px;
}
.grid-demo-2 .arco-col:nth-child(2n) {
  background-color: #f7f8fa;

}

:deep(.arco-form-item-content-flex){
  margin-top: 13px;
}

:deep(.arco-radio-group){
  display: flex;
  flex-wrap: nowrap;
}

</style>
