<template>
  <el-header>
    <div class="user">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" >
          <router-link to="/usercenter">
            <el-dropdown-item>个人中心</el-dropdown-item>
          </router-link>
          <el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </el-header>
</template>

<style lang="scss" scoped>
.el-header{
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  background-color: white;
  border-bottom: black solid 1px;
  .user{
    float: right;
    height: 50px;
    .el-dropdown{
      line-height: 50px;
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      username: this.$store.getters.username
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
        .then(() => {
          this.$router.push({path: 'login'})
        }).catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
