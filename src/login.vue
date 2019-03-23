<template>
    <div class="login">
      <div class="login-bg">
        <img :src="login" alt="">
      </div>
      <div class="login-btn">
        <button>登录</button>
      </div>
      <div class="login-item">
        <a href="javascript:;" class="around">随便逛逛</a>
        <a href="javascript:;" class="reg">快速注册</a>
      </div>
    </div>
</template>

<script>
import login from '@/assets/images/login.png'
export default {
  name: 'login',
  data () {
    return {
      login
    }
  }
}
</script>

<style scoped lang="scss">
  .login{
    .login-bg{
      /*height: 35.53rem;*/
      /*background: url("assets/images/login.png") no-repeat center;*/
      background-size: 100%;
      img{
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
    .login-btn{
      text-align: center;
      color: #ffffff;
      button{
        height: 3rem;
        line-height: 3rem;
        background-color: #f53252;
        width: 100%;
      }
    }
    .login-item{
      text-align: center;
      font-size: 0.6rem;
      line-height: 3.2rem;
      .around{
        color: #222222;
        margin-right: 1.25rem;
        position: relative;
        &::after{
          content: '';
          display: block;
          position: absolute;
          top: 0.16rem;
          right: -1.25rem;
          width: 0.05rem;
          height: 0.5rem;
          background-color: #979797;
        }
      }
      .reg{
        color: #f53252;
        margin-left: 1.25rem;
      }
    }
  }
</style>
