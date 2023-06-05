<template>
    <div>
      <div class="Doc-content">
        <div>
            <a-avatar :style="{ backgroundColor: '#00d0b6',width:'20px',height:'20px' }">Design</a-avatar>
            <span style="margin-left: 10px">刘备</span>
            <a-divider direction="vertical" />
            <span>2021-03-22</span>
            <a-divider direction="vertical" />

            <span>
                      <span class="_tag_1104z_1">React</span>
                      <span class="_tag_1104z_1">Lark messenger</span>
                    </span>

          </div>

<!--        标题和内容区域-->
        <div style="display: flex;justify-content: space-between">
          <div>
            <div style="margin-top: 10px">
                  <span class="_article-item-title_1fvvu_261">
                    <span>利用React组件扩展</span>
                    <mark class="_high-light_1fvvu_58">Markdown</mark>
                    <span>语法</span>
                  </span>
            </div>
            <div style="margin-top: 10px">
                  <span class="_text_1fvvu_5">
                    <span class="text-content" >背景Universe Design官网会展示组件使用文档。文档使用</span>
                    <mark class="_high-light_1fvvu_58 ">markdown</mark>
                    <span class="text-content">格式书写，然后转换成页面。文档不仅仅包含</span>
                    <mark class="_high-light_1fvvu_58 ">markdown</mark>
                    <span class="text-content">语法，还需要支持代码Demo、H5预览等功能，此时需要进行扩展。扩展功能示例技术背景</span>
                  </span>
            </div>
          </div>
          <div style="margin-left: 20px">
            <p>
              <img style="width: 144px;height: 96px"  :src="imgage">
            </p>
          </div>
        </div>

        <div class="_footer-box_1fvvu_483">
                  <span class="_icon-count_1k0cj_1">
                     <span><icon-eye /></span>
                     <span style="margin-left: 8px">89</span>
                  </span>
          <span class="_icon-count_1k0cj_1">
                     <span><icon-thumb-up /></span>
                     <span style="margin-left: 8px">6</span>
                  </span>
          <span class="_icon-count_1k0cj_1">
                     <span><IconMessage /></span>
                     <span style="margin-left: 8px">1</span>
                  </span>
          <span class="_icon-count_1k0cj_1">
                     <span><icon-star /> </span>
                     <span style="margin-left: 8px">1</span>
                  </span>
          <span  class="_icon-count_1k0cj_1">
                    <a-divider direction="vertical" />
                    <a-tooltip content="复制分享内容" position="bottom">
                        <icon-link />
                    </a-tooltip>

                  </span>

        </div>

        <a-divider />
      </div>
    </div>
</template>

<script setup>
import { IconEye, IconThumbUp, IconMessage, IconStar, IconLink } from '@arco-design/web-vue/es/icon'
// 导入图片
const imgage = require('@/assets/DocPng.jpg')

</script>

<style scoped lang="scss">
:deep(.Doc-content){
  padding: 10px 20px 0 20px;
}

._tag_1104z_1{
  font-size: 12px;
  line-height: 22px;
  color: #939aa3;
  padding: 1px 12px;
  margin-right: 12px;
  background-color: #f2f3f5;
  border-radius: 2px;
  display: inline-block;
  max-width: 130px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;
}

._article-item-title_1fvvu_261{
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: .2px;
  color: #282f38;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

._high-light_1fvvu_58{
  color: #eb3c36;
  background-color: #fff;
}
._recomends_1fvvu_193{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

}
._text_1fvvu_5{
  word-break: break-word;
}
._footer-box_1fvvu_483{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
}

._icon-count_1k0cj_1{
  margin-right: 24px;
  cursor: pointer;
}
.text-content{
 margin-top: 10px;
  line-height: 30px;
  font-size: 16px;
}

</style>
