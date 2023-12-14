<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
.layout {
  width: 800px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 60px;
}
</style>
