<template>
  <div class="cnm">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <form @submit.prevent="loginUser">
        <div class="form-wrapper">
          <input class="input-item" type="text" v-model="newUser.username" placeholder="Username">
          <input class="input-item" type="password" v-model="newUser.password" placeholder="Password">
          <div class="bto">
            <div class="button-wrapper">
              <router-link class="nav-link" to="/LogInUser">Register</router-link>
            </div>
            <div class="button-wrapper">
              <button class="nav-link" type="submit">Login</button>
            </div>
          </div>
          <p v-if="error" class="error-message">{{ error }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from 'socket.io-client';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "MyUser",
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
            await this.setCurrentUser(userResponse.data);
            this.error = ''; // 清除错误消息
            // 登录成功后跳转至首页
            await this.$router.push('/index');
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

<style>
* {
  margin: 0;
  padding: 0;
}

.cnm {
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
}

.input-item::placeholder {
  text-transform: uppercase;
}

.bto {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  text-align: center;
  padding: 20px;
  width: 100%;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  border-radius: 5px;
}

.bto .nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
