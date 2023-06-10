<template >
    <div id="tab-bar">

<!--      用户自定义内容-->

      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'bar',
}
</script>

<style  scoped>
    #tab-bar{
        margin: 0 auto;
        justify-content: center;
        display: flex;
        background: rgba(0,0,0,0.03);
        position: fixed;
        left: 0;
        font-size: 10px;
        right: 0;
        bottom: 0;
        box-shadow:  0 -1px 1px 1px rgba(0,0,0,0.3);
    }
</style>

