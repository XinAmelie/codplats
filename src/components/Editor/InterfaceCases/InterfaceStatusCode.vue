<template>

  <div  :style = "{'height':'16px','background-color': '#fff'}">
  </div>

  <div id="codeEditBoxStatus" ></div>
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
  defineEmits,
  onMounted
} from 'vue'

const editor = ref(null)

const initEditor = () => {
  editor.value = monaco.editor.create(document.getElementById('codeEditBoxStatus'), {
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
  copyText(modifyContent)
}

// // 定义父组件的传过来的方法,构建emits对象     getdata是父组件传过来的方法  写最后
const emits = defineEmits(['getdata'])

</script>

<style scoped lang="scss">

#codeEditBoxStatus {
  width:100%;
  height:303px;
}

</style>
