<template>
  <div>
    <div>
      <form @submit="registerUser">
        <input type="text" v-model="newUser.username" placeholder="Username">
        <input type="password" v-model="newUser.password" placeholder="Password">
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
        <th>Actions</th> <!-- 添加一个列用于显示操作按钮 -->
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id" class="table-success">
        <td>{{ user.id }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.time }}</td>
        <td>
          <!-- 根据条件显示删除按钮 -->
          <button v-if="isCurrentUser(user) || isAdminUser()" @click="deleteUser(user)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions } from 'vuex';
import axios from "axios";
import io from 'socket.io-client';

export default {
  data() {
    return {
      users: [],
      newUser: {
        username: '',
        password: '',
      },
      currentUser: null, // 记录当前登录的用户
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
        this.newUser = { username: '', password: '' }; // 重置表单
        this.fetchUsers(); // 获取最新的用户列表
      } catch (error) {
        console.error(error);
      }
    },
    isCurrentUser(user) {
      // 判断当前用户是否是登录用户
      return this.currentUser && this.currentUser.id === user.id;
    },
    isAdminUser() {
      // 判断当前用户是否是管理员账号（示例中使用 username 为 'admin' 判断）
      return this.currentUser && this.currentUser.username === 'admin';
    },
    deleteUser(user) {
      if (!this.isCurrentUser(user) && !this.isAdminUser()) {
        return; // 只有当前用户或管理员才能删除用户
      }
      if (this.isCurrentUser(user)) {
        // 只有当前用户才能删除自己的数据
        // 发送删除请求
        axios
            .delete(`http://localhost:3000/users/${user.id}`)
            .then((response) => {
              console.log(response.data);
              this.fetchUsers(); // 删除成功后刷新用户列表
            })
            .catch((error) => {
              console.error(error);
            });
      } else {
        // 非当前用户是管理员，可以删除任意用户数据
        // 根据需求实现相应的逻辑
        // ...
      }
    },
  }
}
</script>

<style scoped>
</style>
