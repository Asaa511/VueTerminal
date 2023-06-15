<template>
  <div>
    <div>
      <form @submit="registerUser">
        <input v-model="newUser.username" placeholder="Username" type="text">
        <input v-model="newUser.password" placeholder="Password" type="password">
        <button type="submit">Register</button>
      </form>
    </div>
    <table class="table table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>name</th>
        <th>pwd</th>
        <th>time</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id" class="table-success">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.time }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
import io from 'socket.io-client';
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser']),
  },
  data() {
    return {
      users: [],
      newUser: {
        username: '',
        password: '',
      },
    };
  },
  created() {
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
    async registerUser() {
      if (!this.validateForm()) {
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/logUser', this.newUser);
        console.log(response.data);
        this.newUser = {username: '', password: ''}; // 重置表单
        this.fetchUsers(); // 获取最新的用户列表
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>


<style scoped>
</style>
