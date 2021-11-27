import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
  // state: 返回对象的函数
  state: () => ({
    id: '', //用户id
    token: '' //用户token
  })
})
