<template>
  <NuxtLayout>
    <div class="all">
      <div class="usrSetting">
        <div class="settingContent">
          <table>
            <tbody>
              <tr>
                <th>會員名稱</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>帳號</th>
                <td>miu37</td>
              </tr>
              <tr>
                <th>密碼</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>大頭貼</th>
                <td>
                  <div class="photo">
                    <NuxtImg src="/miu.png" />
                  </div>
                  <input type="file" />
                </td>
              </tr>
              <tr>
                <th>密碼</th>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <th>聯絡方式</th>
                <td><input type="text" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script></script>

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
          input {
            width: 100%;
          }
        }

        .photo {
          width: 10%;
          height: 150px;
          overflow: hidden;
          border: 1px solid black;
          img {
            width: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
