<template>
  <div class="menu-demo">
    <a-menu
      show-collapse-button
      :default-open-keys="['0']"
      :default-selected-keys="['0_1']"
      :style="{ width: `${width}px`, height: 'calc(100% - 28px)' }"
    >
      <a-sub-menu key="0">
        <template #title> <IconApps />Navigation 1 </template>
        <a-menu-item key="0_0">Menu 1</a-menu-item>
        <a-menu-item key="0_1">Menu 2</a-menu-item>
        <a-menu-item key="0_2" disabled>Menu 3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="1">
        <template #title> <IconBug />Navigation 2 </template>
        <a-menu-item key="1_0">Menu 1</a-menu-item>
        <a-menu-item key="1_1">Menu 2</a-menu-item>
        <a-menu-item key="1_2">Menu 3</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="2">
        <template #title> <IconBulb />Navigation 3 </template>
        <a-menu-item key="2_0">Menu 1</a-menu-item>
        <a-menu-item key="2_1">Menu 2</a-menu-item>
        <a-menu-item key="2_2">Menu 3</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  IconMenuFold,
  IconMenuUnfold,
  IconApps,
  IconBug,
  IconBulb
} from '@arco-design/web-vue/es/icon'
const width = 240
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
