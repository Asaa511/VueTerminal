<template>
  <div class="cnm">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <input class="input-item" name="username" placeholder="username" type="text">
        <input class="input-item" name="password" placeholder="password" type="password">
        <div class="bto">
          <router-link class="nav-link" to="/index">登录</router-link>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: "MyUser"
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

.cnm {
  height: 900px;
  width: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 400px;
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
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
}

a {
  text-decoration-line: none;
  color: #abc1ee;
}
</style>