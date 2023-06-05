<template>
  <div>
    <div :style="{ display: 'flex' }">
      <a-card :style="{ width: '100%' }" title="小星星播放器" hoverable>
        <player></player>
      </a-card>
    </div>

  </div>

</template>
<script setup>
import {} from 'vue'
import player from '@/playerMedia/components/player'

</script>

<style scoped lang="scss">

:deep(.arco-card-header-title){
  text-align: center;
}

</style>
