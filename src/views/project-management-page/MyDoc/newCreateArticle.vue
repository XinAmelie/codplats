<template>
  <div style="border: 1px solid red">这是图片区域</div>
  <div style="display: flex;justify-content: space-between">
    <div style="background-color: red;width: 20%">1</div>
    <div style="width: 60%"><editor-content   :editor="editor" /></div>
    <div style="background-color: #79c41b;width: 20%">3</div>
  </div>

</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [
    StarterKit
  ]
})

</script>

<style scoped lang="scss">

</style>
