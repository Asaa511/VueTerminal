<template>
  <div>
    <div>
      <form @submit.prevent="loginUser">
        <input type="text" v-model="newUser.username" placeholder="Username">
        <input type="password" v-model="newUser.password" placeholder="Password">
        <button type="submit">Login</button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
    </div>
    <div v-if="currentUser">
      <h2>{{ currentUser.username }}'s Information</h2>
      <p>Username: {{ currentUser.username }}</p>
      <p>Password: {{ currentUser.password }}</p>
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
      users: [],
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
        this.users.push(newUser);
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
            this.users = response.data;
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
          // 登录成功，获取用户信息
          const userResponse = await axios.get('http://localhost:3000/user');
          if (userResponse.status === 200) {
            await this.setCurrentUser(userResponse.data); // 使用 mapActions 分发 setCurrentUser action
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
.error-message {
  color: red;
}
</style>
