<script setup>
const userName = ref('');
onMounted(() => {
  const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
  console.log('userInfo',userInfo)
  userName.value = userInfo.name;
});



</script>

<template>
  <div class="sidebar">
    <nuxt-link to="/">
      <div class="logo">
        <NuxtImg src="/logo.png" />
      </div>
    </nuxt-link>
    <div class="mb-5">
      <nuxt-link to="/usr">
        <div class="photo">
          <NuxtImg src="/miu.png" />
        </div>
      </nuxt-link>
      <p class="text-center">Hi, {{ userName }}</p>
    </div>
    <ul>
      <nuxt-link to="/addPage"><li>新增頁面</li></nuxt-link>
      <nuxt-link to="/myNote"><li>我的筆記</li></nuxt-link>
      <nuxt-link to="/myFav"><li>我的收藏</li></nuxt-link>
      <nuxt-link to="/setting"><li>會員設定</li></nuxt-link>
    </ul>
    <div class="footer">
      <p class="text-center">登出</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  background-color: #e7c08d52;
  width: 100%;
  max-width: 200px;
  height: 100vh;
  p {
    font-family: 'JfOpen';
    font-size: 1.3rem;
  }
  .logo {
    width: 100%;
    max-width: 190px;
    img {
      width: 100%;
    }
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
      line-height: 0.9rem;
      font-family: 'JfOpen';
      cursor: pointer;
      padding: 10px;
      margin-bottom: 10px;
    }
    li:hover {
      background-color: #e1c6a4;
    }
  }
  .footer {
    position: absolute;
    bottom: 20px;
    right: 85px;
    p {
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
}
</style>
