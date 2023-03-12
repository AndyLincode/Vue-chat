<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useLogin } from '@/stores/auth';
// const user = reactive({
//   account: '',
//   password: '',
//   token: '',
// });
const auth = useLogin();
const { user } = auth;

const submitHandler = async () => {
  const res = await axios.post('http://localhost:6001/login', user)
  // console.log(res.data);
  const { success, auth, error } = res.data;
  if (success) {
    user.token = auth.token;
    user.login = success;
    user.name = auth.name;
    alert('登入成功');
  } else {
    alert(error)
  }
}

</script>

<template>
  <div class="login">
    <div class="form" v-if="!user.login">
      <label for="account">帳號：
        <input type="text" name="account" v-model="user.account" />
      </label>
      <label for="password">密碼：
        <input type="password" name="password" v-model="user.password" />
      </label>
      <button @click.prevent="submitHandler">登入</button>
    </div>
    <div v-else>
      已登入
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login {
  .form {
    display: flex;
    flex-direction: column;

    button {
      width: 50px;
    }
  }
}
</style>