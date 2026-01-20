<template>
  <div class="header">
    <div class="l-content">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item> -->
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getImageUrl('fav')" alt="头像" srcset="" class="fav">
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
const getImageUrl = (user) => {
  return new URL(`../assets/images/${user}.jpg`, import.meta.url).href
}

</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.l-content {
  display: flex;
  align-items: center;

  .bread {
    color: #fff;
  }

}

.r-content {
  .fav {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

:deep(.bread span) {
  color: #fff!important;
  cursor: pointer!important;
}
</style>