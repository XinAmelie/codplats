<template>
  <div>
    <div class="app-root" >
      <a-card  hoverable class="card-demo" >
<!--        顶部搜索框-->
        <div style="display: flex;justify-content: space-between;margin: 10px">
          <a-input-search
            :style="{width:'320px'}"
            placeholder="请输入搜索内容"
            search-button
          />
          <a-button type="primary" @click="goTo">
            <template #icon>
              <icon-send />
            </template>
            <template #default>
              创作
            </template>
          </a-button>

        </div>
        <div>
          <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="综合">

<!--         内容区域   -->

              <p v-for="(item,index) of Array(40)" :key="index">
                <ArcoContent></ArcoContent>
              </p>

            </a-tab-pane>

            <a-tab-pane key="2" title="文章">
              Content of Tab Panel 2

              <p v-for="(item,index) of Array(40)" :key="index">
                <ArcoContent></ArcoContent>
              </p>
            </a-tab-pane>

            <a-tab-pane key="3">
              <template #title>问答</template>
              Content of Tab Panel 3

              <p v-for="(item,index) of Array(40)" :key="index">
                <ArcoContent></ArcoContent>
              </p>
            </a-tab-pane>

            <a-tab-pane key="4">
              <template #title>活动</template>
              Content of Tab Panel 4

              <p v-for="(item,index) of Array(40)" :key="index">
                <ArcoContent></ArcoContent>
              </p>
            </a-tab-pane>

            <a-tab-pane key="5">
              <template #title>标签</template>
              Content of Tab Panel 5

              <p v-for="(item,index) of Array(40)" :key="index">
                <ArcoContent></ArcoContent>
              </p>
            </a-tab-pane>

          </a-tabs>
        </div>
      </a-card>
    </div>

  </div>
</template>
<script setup>
import ArcoContent from '@/components/ArcoContent'
import { IconSend } from '@arco-design/web-vue/es/icon'
import { useRouter } from 'vue-router'
const router = useRouter()

const goTo = () => {
  const routerData = router.resolve({
    path: '/docx/create'
  })
  window.open(routerData.href, '_blank')
}

</script>
<style scoped lang="scss">
.card-demo {
  transition-property: all;
  width: 850px;
  left: 50%;
  margin-left: -425px !important;
  height: 100%;

}
.card-demo:hover {
  //margin: 8px;
  box-shadow: 0px 0px 8px 1px rgb(0 0 0 / 12%);
  border-radius: 4px;
}

:deep(.arco-card-body){
  padding: 0;
}

:deep(.arco-tabs-nav-tab){
  margin-top: 10px;
}

</style>
