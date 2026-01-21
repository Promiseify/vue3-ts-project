<template>
  <div class="container">
    <el-container class="main-container">
      <common-aside />
      <el-container>
        <el-header>
          <common-header />
        </el-header>
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CommonAside from '@/components/CommonAside/index.vue';
import CommonHeader from '@/components/CommonHeader/index.vue';
</script>

<style scoped lang="less">
.container, .main-container {
  height: 100%;
}

.el-header {
  background-color: #333;
}

</style>