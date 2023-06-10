<template>
  <div>
    <div>
      <router-link class="btn btn-primary" to="/course/Java">Java</router-link>
      <router-link class="btn btn-primary" to="/course/html">html+css</router-link>
      <router-link class="btn btn-primary" to="/course/vue">vue</router-link>
      <router-link class="btn btn-primary" to="/course/js">js</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>


</template>

<script>
export default {
  name: "MyCourse"
};
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>