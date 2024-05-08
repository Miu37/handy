<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const userStore = useUserStore();


</script>
<template>
  <NuxtLayout>
    <div class="all">
      <div class="usrSetting">
        <div class="settingContent">
          <div class="text-center mt-2"><p>密碼長度至少8碼(需含大小寫英文+數字)</p></div>
          <table>
            <tbody>
              <tr>
                <th>輸入舊密碼</th>
                <td>
                  <input type="text" v-model="userStore.passwordObj.oldPassword"/>
                  <p v-if="userStore.isShow.old">密碼不得為空</p>
                </td>
              </tr>
              <tr>
                <th>輸入新密碼</th>
                <td>
                  <input type="text" v-model="userStore.passwordObj.newPassword"/>
                  <p v-if="userStore.isShow.new">密碼不得為空</p>
                  <p v-if="userStore.isShow.error">密碼格式錯誤</p>
                </td>
              </tr>
              <tr>
                <th>確認密碼</th>
                <td>
                  <input type="text" v-model="userStore.passwordObj.checkPassword"/>
                  <p v-if="userStore.isShow.check">密碼不得為空</p>
                  <p v-if="userStore.isShow.diff">與新密碼不一致</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="editSubmit">
            <button class="btn me-4 submit" @click="userStore.editPassword(router)">
              確認修改
            </button>
            <nuxt-link to="/usr"
              ><button class="btn cancel">取消</button></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>


<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100vh;
  padding: 25px;
  .usrSetting {
    padding: 20px;
    width: 75%;
    height: 100%;
    margin: 0 auto;
    background-color: #fff8f1;
    .settingContent {
      position: relative;
      width: 100%;
      table {
        width: 70%;
        margin: 0 auto;
        tr th {
          line-height: 85px;
          width: 20%;
          color: #bd5858;
          padding: 5px 7px;
        }
        td {
          width: 455px;
          border-bottom: 2px dashed #ceb2b2;
          padding: 10px 5px;
          input[type='text'] {
            width: 100%;
            border-radius: 5px;
            border: 0px solid #ffdbd6;
            padding: 5px;
            background-color: #f0f0f0;
          }
          input[type='file'] {
            width: 40%;
          }
        }

        .photo {
          width: 25%;
          height: 150px;
          overflow: hidden;
          border: 1px solid black;
          margin-bottom: 10px;
          img {
            width: 100%;
            object-fit: contain;
          }
        }
        .editPassword {
          background-color: #ffb0ad66;
        }
      }
      .editSubmit {
        position: absolute;
        left: 42%;
        top: 112%;
        .submit {
          background-color: #e4c69d;
        }
        .cancel {
          background-color: #cacaca;
        }
      }
    }
  }
}
</style>
