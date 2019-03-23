<template>
    <div>
      <div>
        <a href="javascript:;" v-for="(item,index) of methods" :key = "index">{{ item }}</a>
      </div>
      <div class="box">
        <div v-show="newIndex === 0" class="box-cell">
          <div class="">
            <label>账号</label>
            <input type="text" v-model="account" />
          </div>
          <div>
            <label>密码</label>
            <input type="text" v-model="password" />
          </div>
        </div>
        <div v-show="newIndex===1">
          <div class="">
            <label>手机号</label>
            <input type="text" v-model="phone" />
          </div>
          <div>
            <label>验证码</label>
            <input type="text" v-model="code" />
            <a href="javascript:;">获取验证码</a>
          </div>
        </div>
        <div>
          <button>登录</button>
        </div>
        <div><a href="javascript:;">忘记密码</a></div>
        <div>
          <div><span>快速登录</span></div>
          <div><svg-icon class="wechat"></svg-icon></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data () {
          return {
            methods:['密码登录','验证码登录'],
            account:'',
            password:'',
            phone:'',
            code:'',
            newIndex:0
          }
      }
    }
</script>

<style scoped lang="scss">

</style>
