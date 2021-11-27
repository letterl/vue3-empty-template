<script setup lang="ts">
import { Ref, ref, StyleValue } from 'vue'
import { useUserStore } from '@/store/modules'
import { useRoute, useRouter } from 'vue-router'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

var a = 1
var a = 1

let liStyle: Ref<StyleValue> = ref({
  backgroundColor: '#fff'
})

const login = () => {
  // userStore.login()
  router.push('/home')
}

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1></h1>

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
    <a-button :style="{ width: '320px' }" type="primary" @click="login"
      >登入</a-button
    >
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
