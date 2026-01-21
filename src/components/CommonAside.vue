<template>
  <el-aside :width="isCollapse? '64px' : '180px'">
    <h2 class="aside-title">{{ isCollapse ? '系统' : '后台管理系统' }}</h2>
    <el-menu :collapse="isCollapse" :collapse-transition="false" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <template v-for="item in menuList" :index="item.path" :key="item.path">
        <el-sub-menu v-if="item.children" :index="item.path">
          <template #title>
            <el-icon v-if="item.icon">
              <component :is="item.icon" />
            </el-icon>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
            <el-icon>
              <component class="icons" :is="child.icon" />
            </el-icon>
            <span>{{ child.label }}</span>
          </el-menu-item>
        </el-sub-menu>

        <!-- 无子菜单 -->
        <el-menu-item v-else :index="item.path">
          <el-icon>
            <component class="icons" :is="item.icon" />
          </el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>

    <div class="toggle-bar">
      <ToggleBar id="toggleBar-container" :is-collapse="isCollapse" class="toggleBar-container"
        @toggle="handleToggle" />
    </div>
  </el-aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/store/app';

import { MenuItem } from "@/types/components/commonAside";

import ToggleBar from "@/components/ToggleBar/index.vue"


// 获取APP Store里边的数据
const appStore = useAppStore();
const menuList = ref<MenuItem[]>([
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'house',
    url: 'Home'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    label: '仪表盘',
    icon: 'data-analysis',
    url: 'Dashboard'
  },
  {
    path: '/system',
    name: 'system',
    label: '系统管理',
    icon: 'setting',
    children: [
      {
        path: '/system/user',
        name: 'user',
        label: '用户管理',
        icon: 'user',
        url: 'User'
      },
      {
        path: '/system/role',
        name: 'role',
        label: '角色管理',
        icon: 'avatar',
        url: 'Role'
      },
      {
        path: '/system/menu',
        name: 'menu',
        label: '菜单管理',
        icon: 'menu',
        url: 'Menu'
      }
    ]
  },
  {
    path: '/other',
    name: 'other',
    label: '其他',
    icon: 'location',
    children: [
      {
        path: '/page1',
        name: 'page1',
        label: '页面 1',
        icon: 'document',
        url: 'Page1'
      },
      {
        path: '/page2',
        name: 'page2',
        label: '页面 2',
        icon: 'document',
        url: 'Page2'
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    label: '关于系统',
    icon: 'info-filled',
    url: 'About'
  }
])

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 处理侧边栏的折叠
const { isCollapse } = storeToRefs(appStore)
const handleToggle = () => {
  appStore.toggleCollapse()
}

</script>

<style scoped lang="less">
.el-aside {
  border: 0.8px solid #ccc;
  transition: width 0.3s;
  overflow: hidden;
}
.aside-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  white-space: nowrap;
}

.el-menu-vertical-demo {
  height: calc(100% - 56px - 50px);
  border: 0;
}

.toggle-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  border-top: 0.5px solid #ccc;

  &:hover {
    background-color: #d1e9ff;
    cursor: pointer;
  }
}

</style>