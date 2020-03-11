<template>
    <div class="login-container">
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules" class="login-form">
        <div class="title-container">
          <h3 class="title">系统登录</h3>
        </div>

      <el-form-item prop="username" label="用户名">
        <el-input
          ref="username"
          v-model="loginForm.username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="password" label="密码">
        <el-input
          ref="password"
          v-model="loginForm.password"
          name="password"
          type="password"
          tabindex="2"
          autocomplete="on"
        />
      </el-form-item>

        <el-button :loading="loading" type="primary"  @click="login">登录</el-button>
      </el-form>
    </div>
</template>
<style lang="scss" scoped>
.login-container{
  background-color: #2d3a4b;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  .login-form{
    position: relative;
    width: 500px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container{
      position: relative;
      .title{
        font-size: 26px;
        color: #fff;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: blod;
      }
    }
    .el-form-item__label{
      color: #fff;
    }
  }

}
</style>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, message: '密码长度最短4位', trigger: 'blur' }
        ]
      },
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $router: (route) => {
      const query = route.query
      if (query) {
        this.redirect = query.redirect
        this.otherQuery = this.getOtherQuery(query)
      }
    }
  },
  methods: {
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({path: this.redirect || '/', query: this.otherQuery})
              this.loading = false
            }).catch((error) => {
              console.log(error.message)
              this.$message({
                message: '账号或密码错误',
                type: 'error'
              })
              this.loading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
