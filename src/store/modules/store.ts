import { defineStore } from 'pinia'

interface UserInfo {
  id: string
  name: string
  token: string
}

export default defineStore('store', {
  state: () => {
    return {
      id: '',
      name: '',
      token: ''
    }
  }
})
