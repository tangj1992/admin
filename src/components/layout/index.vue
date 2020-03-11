<template>
  <el-container>
    <headbar />

    <el-container>
      <left />
        <el-main>
          <router-view />
        </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-container{
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}
.el-main{
  display: inline-block;
  height: 100%;
}
</style>

<script>
import { default as headbar } from './headbar.vue'
import { default as left } from './left.vue'

export default {
  components: {
    headbar,
    left
  }
}
</script>
