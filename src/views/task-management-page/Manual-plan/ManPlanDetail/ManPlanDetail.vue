<template>
  <div>
    <div>
      <a-button type="primary">确认测试完成</a-button>
      <span>【App】【fulfillment】Order List refactor // 【履约】订单列表重构专项 ppe测试计</span>
      <a-dropdown trigger="hover" position="bottom">
        <span style="background-color: #94BFFF;cursor: pointer">需求1</span>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption>Option 2</a-doption>
          <a-doption>Option 3</a-doption>
        </template>
      </a-dropdown>

      <span><a-button>编辑</a-button></span>
      <span><a-button type="primary">查看报告</a-button></span>

    </div>

    <div>
      <span style="border-right: 4px solid darkolivegreen">已执行 （进度条）</span>
      <span style="border-right: 4px solid darkolivegreen">缺陷0    暂无缺陷</span>
      <span style="border-right: 4px solid darkolivegreen">代码覆盖率   暂未开启该功能</span>
    </div>

<!--    tab区域-->
    <div>
      <MplanPlanDetails></MplanPlanDetails>
    </div>

  </div>
</template>

<script setup>
import MplanPlanDetails from '@/components/Tables/ManPlanDetailTables'

</script>

<style scoped lang="scss">

</style>
