<script setup>
import { useRouter } from 'vue-router';
import { register } from '@/server/api/api';

const reqData = reactive({
  account: 'test',
  name: 'test',
  password: '123',
  email: '',
  phone: '',
  headshot: [],
});
const router = useRouter();

function confirm() {
  register(reqData).then((res) => {
    console.log('b',res)
  });
}

function cancel() {
  router.push('/');
}
</script>

<template>
  <div class="all">
    <div class="register">
      <div class="title">
        <p>註冊會員</p>
      </div>
      <div class="registerInfo">
        <div>
          <p>帳號</p>
          <input type="text" placeholder="英文或數字" />
        </div>
        <div>
          <p>會員名稱</p>
          <input type="text" placeholder="中文或英文或字母皆可" />
        </div>
        <div>
          <p>密碼</p>
          <input type="password" placeholder="8位數英文大小寫+數字" />
        </div>
        <div>
          <p>確認密碼</p>
          <input type="password" placeholder="再次輸入密碼" />
        </div>
      </div>
      <div class="registerBtn">
        <button class="btn me-4" @click="cancel">取消</button>
        <button class="btn" @click="confirm">確定</button>
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
  .register {
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
    .title {
      margin-top: 10px;
      p {
        text-align: center;
        font-size: 2.5rem;
        color: #de6a67;
        font-family: monospace;
      }
    }
    .registerInfo {
      height: 65%;
      div {
        margin-bottom: 10px;
        p {
          margin: 0px;
          font-size: 0.9rem;
        }
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
    }
    .registerBtn {
      button:nth-child(1) {
        background-color: #e2e2e2;
      }
      button:nth-child(2) {
        background-color: #add8e6;
      }
    }
  }
}
</style>
