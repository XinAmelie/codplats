<template>
  <div class="TiaoStyle"  >
    <p>
<!--      <a-spin tip="加载中" :size='32'/>-->
      <a-skeleton :animation="animation">
        <a-space direction="vertical" :style="{width:'100%'}" size="large">
<!--          <a-skeleton-line :rows="3" :line-height="100" :line-spacing="60" />-->
          <a-skeleton-line :rows="3"  />
          <a-skeleton-shape shape="circle" size="large" />
        </a-space>
      </a-skeleton>
    </p>
  </div>

</template>

<script setup>

import { ref } from 'vue'

const animation = ref(true)

</script>

<style scoped lang="scss">
:deep(.arco-spin-tip){
  color: #1e1e1e;
}
</style>
