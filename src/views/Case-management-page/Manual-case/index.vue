<template>
    <div class="app_root">
      <div  class="LeftMenuArea-module" style="background-color: #fff">
        <div class="LeftMenuArea-module-title">
          用例目录
          <span style="margin-left: auto">
        <a-tooltip content="全部收起" position="top" style="cursor: pointer;">
                  <icon-select-all  style="cursor: pointer"  @click="toggleExpanded"/>
                </a-tooltip>
      </span>
          <span class="LeftMenuArea-module__iconWrap--66FVp">
             <a-tooltip content="新建分组" position="top" style="cursor: pointer">
               <icon-folder-add  style="cursor: pointer" @click="handleClick" />
                </a-tooltip>
            </span>
        </div>

        <!--        对话框-->
        <div>
          <a-modal v-model:visible="visible" title="创建子目录"   :mask-closable=false>
            <a-form :model="form">
              <a-form-item field="Dirname" label="目录名称" required>
                <a-input v-model="form.Dirname" />
              </a-form-item>
            </a-form>
          </a-modal>
        </div>

        <div class="LeftMenuArea-module__menuSearchBox">
          <div class="arco-select-popup-0" style=" margin: 20px 20px 16px;">
            <a-space direction="vertical" size="large">
              <a-input-search :style="{width:'260px'}" placeholder="搜索分组名称" search-button>
                <template #button-icon>
                  <icon-search/>
                </template>
                <template #button-default>
                  Search
                </template>
              </a-input-search>
            </a-space>
          </div>
        </div>
        <div class="LeftMenuArea-module__menuBox">
          <div class="LeftMenuArea-module__specItem">
            <span> <icon-storage style="margin-right: 5px"/>全部用例</span>
            <span style="margin-left: 10px">(666648)</span>
          </div>
          <div style="margin: 20px 16px !important;">
            <a-divider :margin="30"><icon-star /></a-divider>
          </div>

          <div class="LeftMenuArea-module__menuTree">
            <div class="LeftMenuArea-module__menuTree_file">
              <a-tree blockNode
                      :data="treeData"
                      :default-expand-all="false"
                      v-model:expanded-keys="expandedKeys"
              >
                <template #icon>
                  <icon-folder style="width: 16px;height: 16px"/>
                </template>
              </a-tree>
            </div>

          </div>

        </div>
      </div>

      <div style="width: 80%;padding: 20px;margin-left: 2px;background-color: #fff;overflow: hidden" class="RightMenuArea-module"  >

        <div class="RightCaseList-module__top--mX1+z" style="display: flex;justify-content: space-between;background-color: #fff">
          <div class="right_title"
               style="
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;"
          >订单域</div>

          <div class="arco-space-horizontal" style="display: flex;width: 184px;justify-content: end" >
            <div style="margin-right: 10px">
              <a-dropdown position="br">
                <a-button>导入文件</a-button>
                <template #content>
                  <a-doption>从本地excell导入</a-doption>
                  <a-doption>从本地xmind导入</a-doption>
                </template>
              </a-dropdown>
            </div>
            <div >
              <a-dropdown position="br">
                <a-button type="primary">新建用例</a-button>
                <template #content>
                  <div><icon-layers />用例集</div>
                  <a-doption @click="handeXminds"><icon-relation />脑图用例集</a-doption>
                  <a-doption><icon-list />表格用例集合</a-doption>
                </template>
              </a-dropdown>
            </div>
          </div>

        </div>

        <div class="RightCaseList-module" style="background-color: #fff">
          <div class="select_setviews" style="height: 44px;margin-top: 12px">
            <a-space direction="vertical" size="large">
              <a-input-search :style="{width:'172px'}" placeholder="搜索用例名称"/>
            </a-space>
          </div>
        </div>

        <div class="RightCaseList-module" style="background-color: white !important;overflow: hidden">
          <varityTables />
          <div style="margin-top: 20px;float: right">
            <a-pagination :total="50" show-total  show-page-size/>
          </div>
        </div>

      </div>
    </div>

</template>

<script setup>
import {
  IconSelectAll,
  IconFolderAdd,
  IconStar,
  IconFolder,
  IconSearch,
  IconLayers,
  IconList,
  IconRelation
} from '@arco-design/web-vue/es/icon'

import { ref, reactive, h, onMounted, onBeforeMount } from 'vue'
import varityTables from '@/components/Tables/varityTables'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()

// 页面加载时请求tree的接口

const store = useStore()
const treeData = ref('')
store.dispatch('testcases/getCaseTreeDir')
  .then((data) => {
    treeData.value = data[0]
  })
  .catch((err) => {
    console.log(err)
  })

// 收起目录
const allExpandedKeys = ['0-0', '0-1', '0-0-2'] // 后期想展开的话，处理数据
const expandedKeys = ref([])
const toggleExpanded = () => {
  // 原型：?. expandedKeys && expandedKeys.value.length  可选链操作符?.
  expandedKeys.value = expandedKeys?.value.length ? [] : allExpandedKeys
}

// 对话框
const visible = ref(false)

const handleClick = () => {
  visible.value = !visible.value
}
const form = reactive({
  Dirname: 'demo'
})

// 处理脑图
const handeXminds = () => {
  router.push('/manageCase/manuCase/Create')
}

</script>

<style scoped lang="scss">

.app_root{
  display: flex;
  padding-top: 10px;
}

// appmain区域，左侧的布局

.LeftMenuArea-module-title{
  width: 260px;
  margin: 20px 20px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
}

.LeftMenuArea-module__iconWrap--66FVp{
  margin-left: 10px;
}

.LeftMenuArea-module__specItem{
  width: 260px;
  line-height: 22px;
  margin-left: 16px;
  display: flex;
}

.LeftMenuArea-module__menuTree{
  width: 260px;
  margin-left: 16px;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
}

:deep(.arco-tree-node-custom-icon){
  margin-right: 5px;
}

// table的长度
:deep(.arco-table-tr){
  height: 50px !important;
}

:deep(.arco-menu-inner){
  margin-top: 20px !important;
}

:deep(.arco-table-filters){
  &:hover{
    background-color: rgba(242,243,245,1);
    cursor: auto;
  }
}
:deep(.arco-table-filters-open){
  background-color: rgba(242,243,245,1);
}

// 不显示分页
:deep(.arco-table-pagination){
    display: none;
}

</style>

<style>

.arco-table-filters-content{
  display: none;
}

</style>
