<template>
  <div class="container">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <h3>后台管理系统</h3>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MenuItem } from "@/types/components/commonAside";

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

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped></style>