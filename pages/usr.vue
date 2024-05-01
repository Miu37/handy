<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
onMounted(() => {
  userStore.getUserData();
});
</script>

<template>
  <NuxtLayout>
    <div class="all">
      <div class="wallpaper">
        <NuxtImg src="/cat3.png" />
      </div>
      <div class="info">
        <div class="usr">
          <ul>
            <li>
              <nuxt-link to="/setting"><h5>會員資料</h5></nuxt-link>
            </li>
            <li>
              <label for="">會員名稱： </label>
              <p>謬謬</p>
            </li>
            <li>
              <label for="">帳號： </label>
              <p>Miu37</p>
            </li>
            <li>
              <label for="">Email： </label>
              <p>miumiu@gmail.com</p>
            </li>
            <li>
              <label for="">手機： </label>
              <p>09552784988</p>
            </li>
          </ul>
        </div>
        <div class="myNote">
          <ul>
            <li>
              <nuxt-link to="/myNote"><h5>我的筆記</h5></nuxt-link>
            </li>
            <li>
              <label for="">篇數：</label>
              <p>10 篇</p>
            </li>

            <li>
              <label for="">最後更新於：</label>
              <p>2024/3/18 14:03</p>
            </li>
          </ul>
        </div>
        <div class="myFav">
          <ul>
            <li>
              <nuxt-link to="/myFav"><h5>我的收藏</h5></nuxt-link>
            </li>
            <li>
              <label for="">篇數：</label>
              <p>5 篇</p>
            </li>
            <li>
              <label for="">最後更新於：</label>
              <p>2024/3/3 21:03</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.all {
  width: 100%;
  .wallpaper {
    margin: 20px auto;
    border-radius: 10px;
    width: 75%;
    height: 125px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    display: flex;
    width: 75%;
    margin: 0 auto;
    h5 {
      font-family: 'JfOpen';
      cursor: pointer;
    }
    h5:hover {
      color: rgb(215 157 72);
    }
    ul {
      padding: 0;
      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
        label {
          font-family: 'JfOpen';
          display: flex;
          align-items: center;
          width: 100px;
          margin-right: 10px;
        }
        p {
          font-family: 'JfOpen';
          margin: 0;
        }
      }
    }
    .usr {
      width: 25%;
      padding: 20px;
      margin-right: 1%;
      background-color: #fff8f1;
      border-radius: 18px;
    }
    .myNote {
      width: 25%;
      padding: 20px;
      margin-right: 1%;
      background-color: #fff8f1;
      border-radius: 18px;
    }
    .myFav {
      width: 25%;
      padding: 20px;
      margin-right: 1%;
      background-color: #fff8f1;
      border-radius: 18px;
    }
  }
}
</style>
