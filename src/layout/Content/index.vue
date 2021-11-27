<template>
  <div class="beicai-content">
    <router-view v-slot="{ Component, route }">
      <div><transition :name="route.meta.transition || 'fade'" mode="out-in" appear>
        <component :is="Component" />
      </transition></div>

    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.beicai-content {
  width: calc(100vw - 200px);
  height: 100px;
}
</style>
