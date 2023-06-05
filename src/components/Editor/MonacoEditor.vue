<template>

  <div  :style = "{'height':'16px','background-color': '#fff'}">
  <!--    #1e1e1e-->
  </div>

  <div id="codeEditBox" ></div>
  <div  :style="{paddingTop:'2px'}">
    <a-button type="primary" @click="handleValue">复制</a-button>
  </div>
</template>

<script setup>
import * as monaco from 'monaco-editor'
import { copyText } from '@/utils/copy'
import {
  ref,
  toRaw,
  defineProps,
  defineEmits,
  onMounted
} from 'vue'
import $ from 'jquery'
// import { jsDatda } from '@/mock/editorMock'

const props = defineProps({
  EditData: {
    type: String,
    required: true
  }
})

// toRaw使用场景
// ref/reactive数据类型每次修改都会被追踪，都会更新UI界面，但是这样是非常消耗性能的，所以如果我们有一些操作不需要追踪，
// 不需要更新UI界面，那么这个时候我们就可以通过toRaw方法拿到它的原始数据，
// 对原始数据进行修改，这样就不会被追踪，这样就不会更新UI界面，这样性能就好了。

const editor = ref(null)
// eslint-disable-next-line vue/no-setup-props-destructure
const content = props.EditData

const initEditor = () => {
  // 初始化编辑器，确保dom已经渲染
  editor.value = monaco.editor.create(document.getElementById('codeEditBox'), {
    value: '{}', // 编辑器初始显示文字
    language: 'json', // 此处使用的python，其他语言支持自行查阅demo  javscript、python、json
    theme: 'vs', // 官方自带三种主题vs, hc-black, or vs-dark
    selectOnLineNumbers: true, // 显示行号
    roundedSelection: false,
    readOnly: false, // 只读
    cursorStyle: 'line', // 光标样式   'line' | 'block' | 'underline' | 'line-thin' | 'block-outline' | 'underline-thin';
    automaticLayout: true, // 自动布局
    glyphMargin: true, // 字形边缘 false true
    useTabStops: false,
    fontSize: 15, // 字体大小
    autoIndent: true, // 自动布局
    quickSuggestionsDelay: 100, // 代码提示延时
    renderLineHighlight: 'line' // 当前的行突出 方式 "all" | "line" | "none" | "gutter"
  })

  // 监听值的内容值的变化 onDidChangeModelContent  编辑事件
  editor.value.onDidChangeModelContent((val) => {
    // console.log(val.changes[0].text)
    const modifyContent = toRaw(editor.value).getValue()
    emits('getdata', modifyContent)
  })
}

onMounted(() => {
  initEditor()
  setTimeout(() => {
    toRaw(editor.value).setValue(content)
    editor.value.getAction('editor.action.formatDocument').run() // 自动格式化代
    console.log(toRaw(editor.value).getRawOptions().theme) // 获取本项目中的options
  }, 2000)
})

// 点击复制获取编辑器中的值
const handleValue = () => {
  const modifyContent = toRaw(editor.value).getValue()
  // console.log(modifyContent)
  // toRaw(editor.value).setValue('1111')
  // console.log(content.value)
  copyText(modifyContent)
}

// // 定义父组件的传过来的方法,构建emits对象     getdata是父组件传过来的方法  写最后
const emits = defineEmits(['getdata'])
// emits('getdata', modifyContent)

</script>

<style scoped lang="scss">

#codeEditBox {
  width:100%;
  height:303px;
}

</style>
