<template>
  <div>
    <div>
      <form @submit.prevent="loginUser">
        <p>你可以在这进行用户切换操作</p>
        <input v-model="newUser.username" placeholder="Username" type="text">
        <input v-model="newUser.password" placeholder="Password" type="password">
        <button type="submit">Login</button>
        <p v-if="error" className="error-message">{{ error }}</p>
      </form>
    </div>
    <div v-if="currentUser">
      <h2>id：{{ currentUser.id }}</h2>
      <h4>获取到用户，信息如下：</h4>
      <p>Username: {{ currentUser.username }}</p>
      <p>Password: {{ currentUser.password }}</p>
      <p>Created: {{ currentUser.time }}</p>
      <!-- Add more information fields as needed -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from 'socket.io-client';
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      newUser: {
        username: '',
        password: '',
      },
      error: '', // 错误消息
    };
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  mounted() {
    const socket = io('http://localhost:3000');
    socket.on('connect', () => {
      console.log('io.true');
      socket.on('newUser', (newUser) => {
        console.log('new user', newUser);
      });
      this.fetchUsers();
    });
  },
  methods: {
    ...mapActions(['setCurrentUser']),
    validateForm() {
      if (!this.newUser.username || !this.newUser.password) {
        this.error = '请填写用户名和密码';
        return false;
      }
      return true;
    },
    fetchUsers() {
      axios
          .get('http://localhost:3000')
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    },
    async loginUser() {
      if (!this.validateForm()) {
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/signUser', this.newUser);
        console.log(response.data);
        if (response.data === 'ok') {
          const userResponse = await axios.get('http://localhost:3000/user');
          if (userResponse.status === 200) {
            await this.setCurrentUser(userResponse.data);
            this.error = ''; // 清除错误消息
          } else {
            this.error = '获取用户信息失败';
          }
        } else {
          this.error = '无效的用户名或密码';
        }
      } catch (error) {
        console.error(error);
        this.error = '登录失败，请重试';
      }
    },
  },
};
</script>

<style scoped>

</style>
