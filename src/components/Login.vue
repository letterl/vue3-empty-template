<script setup lang="ts">
import { Ref, ref, StyleValue } from 'vue'
import { useUserStore } from '@/store/modules'

const userStore = useUserStore()

let liStyle: Ref<StyleValue> = ref({
  backgroundColor: '#fff'
})

const ck = () => {}

const login = () => {
  // userStore.login()
}

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <a :style="liStyle" @click="ck">click</a>
  <a-space direction="vertical" size="large">
    <a-input :style="{ width: '320px' }" placeholder="用户名" allow-clear>
      <template #prefix>
        <icon-user />
      </template>
    </a-input>
    <a-input :style="{ width: '320px' }" placeholder="密码" allow-clear>
      <template #suffix>
        <icon-lock />
      </template>
    </a-input>
    <a-button :style="{ width: '320px' }" type="primary">登入</a-button>
  </a-space>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
