<template>
  <div class="sidebar">
    <div class="mb-5">
      <div class="photo">
        <NuxtImg src="/miu.png" />
      </div>
      <p class="text-center">Hi, Miu</p>
    </div>

    <ul>
      <li>新增頁面</li>
      <li>我的筆記</li>
      <li>我的收藏</li>
      <li>會員設定</li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  background-color: #e7c08d52;
  width: 200px;
  height: 100vh;
  p {
    font-family: 'JfOpen';
    font-size: 1.3rem;
  }
  .photo {
    margin: 35px auto;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    border: 2px solid #deb887;
    img {
      width: 100%;
    }
  }
  ul {
    text-align: center;
    padding-left: 0px;
    li {
      line-height: 2rem;
      font-family: 'JfOpen';
      cursor: pointer;
      padding: 10px;
      margin-bottom: 10px;
    }
    li:hover {
      background-color: #e1c6a4; 
    }
  }
}
</style>
