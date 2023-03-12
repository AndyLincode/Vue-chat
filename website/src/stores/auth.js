import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLogin = defineStore('login', () => {
  const user = reactive({
    account: '',
    password: '',
    name: '',
    token: '',
    login: false,
  });

  return { user };
});
