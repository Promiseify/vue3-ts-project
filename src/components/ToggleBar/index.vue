<template>
  <div class="toggle-bar-inner" @click="onToggle">
    <svg class="icon" :class="{ 'is-active': isCollapse }" viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <path
        d="M896 832v64H128v-64h768zM361.376 297.376l45.248 45.248L237.248 512l169.376 169.376-45.248 45.248L146.752 512l214.624-214.624zM896 608v64H480v-64h416z m0-256v64H480v-64h416z m0-224v64H128V128h768z">
      </path>
    </svg>
    <span v-if="!isCollapse" class="text">收起侧边栏</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isCollapse: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

const onToggle = () => {
  emit('toggle')
}

</script>

<style scoped>
.toggle-bar-inner {
  padding: 0 14px;
  font-size: 13px;
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
  display: block;
  width: 20px;
  height: 20px;
  /* 添加过渡动画解决跳动问题 */
  transition: transform 0.1s ease-in-out;
}

.icon.is-active {
  transform: rotate(180deg);
}

.text {
  padding-left: 8px;
  white-space: nowrap;
}
</style>