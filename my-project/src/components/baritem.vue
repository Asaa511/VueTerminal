<template >
  <!-- 导航栏的每个元素item -->
  <div class="tab-bar-item">
    <!-- 下面就是一些定位，图片、标题、自以及点击后显示的图片的插槽定义 -->
    <div v-if="!active" @click="goview">
      <slot name="icon" ></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="judge()">
      <slot name="text"></slot>
    </div>
    <!--  到这里定义结束 -->
  </div>
</template>
<script>
export default {
  name: 'vueitem',
  props:{
    path:String,
    color:{
      type: String,
      default: 'red'
    }
  }
  ,methods: {
    goview(){
      //   console.log("你在点击...")
      //当用户点击后，切换路由
      this.$router.replace(this.path)
    },
    judge(){
      //当用户点击后，文字变为用户预定义的颜色。
      return this.active?{color:this.color}:{}
    }
  }
  ,computed: {
    active(){
      //如果用户点击了，那么这个组件的图片变为红色[可以自由定义]
      return this.$route.path.indexOf(this.path)!= -1;
    }

  }
}
</script>
<!-- 下面是定义格式标准的css，不解释 -->
<style  scoped>

.tab-bar-item{
  margin: 0 auto;
  height: 49px;
}
.tab-bar-item img{
  width: 30px;
  height: 30px;
}
.tab-bar-item span{
  margin: 0 auto;
  justify-content: center;
  display: flex;
}
.textcolor{
  color: red;
}
</style>

