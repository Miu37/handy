<script setup>

const userStore = useUserStore();

onMounted(()=>{
  userStore.getUserData();
})


// 上傳圖片預覽
function uploadFile(event) {
  console.log(event)
  const reader = new FileReader();
    reader.onload = function(){
      const output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

</script>

<template>
  <NuxtLayout>
    <div class="all">
      <div class="usrSetting">
        <div class="settingContent">
          <table>
            <tbody>
              <tr>
                <th>會員名稱</th>
                <td><input type="text" v-model="userStore.usrData.name"/></td>
              </tr>
              <tr>
                <th>帳號</th>
                <td>{{ userStore.usrData.account }}</td>
              </tr>
              <tr>
                <th>密碼</th>
                <td>
                  <nuxt-link to="/editPassword"
                    ><button class="btn editPassword">
                      修改密碼
                    </button></nuxt-link
                  >
                </td>
              </tr>
              <tr>
                <th>大頭貼</th>
                <td>
                  <div class="photo">
                    <img id="output"/>
                  </div>
                  <input type="file" class="uploadImg" accept="image/*" @change="uploadFile($event)"/>
                </td>
              </tr>
              <tr>
                <th>電子信箱</th>
                <td><input type="text" v-model="userStore.usrData.email"/></td>
              </tr>
              <tr>
                <th>聯絡方式</th>
                <td><input type="text" v-model="userStore.usrData.phone"/></td>
              </tr>
            </tbody>
          </table>
          <div class="editSubmit">
            <button class="btn me-4 submit" @click="userStore.editUserData()">確認修改</button>
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
