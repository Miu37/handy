<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function login() {
  router.push('/usr');
}

function register() {
  router.push('/register');
}
</script>

<template>
  <div class="all">
    <div class="login">
      <div class="pic">
        <p>Handy</p>
        <NuxtImg src="/loginPic.png" />
      </div>
      <div class="usrInfo">
        <div><input type="text" placeholder="筆記本主人" /></div>
        <div>
          <input type="password" placeholder="密碼" />
          <p>忘記密碼</p>
        </div>
      </div>
      <div class="loginBtn">
        <button class="btn me-4" @click="login">登入</button>
        <button class="btn" @click="register">註冊</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all {
  background-color: burlywood;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  .login {
    margin: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 315px;
    height: 525px;
    border-radius: 10px;
    padding: 10px;
    background-color: papayawhip;
    box-shadow: 0 0 5px inset #de6a67, 5px 11px 5px #a1865c;
    .pic {
      width: 200px;
      margin-top: 10px;
      p {
        text-align: center;
        font-size: 2.5rem;
        color: #de6a67;
        font-family: monospace;
      }
      img {
        width: 100%;
      }
    }
    .usrInfo {
      margin-top: 40px;
      div {
        margin-bottom: 10px;
        input {
          border-radius: 16px;
          border: 1px solid burlywood;
          padding: 5px;
          background-color: #f0f0f0;
        }
        input[type='text']::placeholder,
        input[type='password']::placeholder {
          font-size: 14px; 
        }
      }
      p {
        text-align: end;
        font-size: 0.9rem;
      }
    }
    .loginBtn {
      button {
        background-color: #add8e6;
      }
    }
  }
}
</style>
