<template>
  <NuxtLayout>
    <div class="main">
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="d-flex flex-wrap" style="margin-bottom: 52px">
              <div class="add">
                <input type="file" class="uploadImg" accept="image/*" @change="uploadFile($event)" />
              </div>
              <div class="card_image">
                <img
                  id="output"
                />
              </div>
            </div>

            <div class="card_content">
              <div class="card_title">
                <p>日期</p>
                <input type="date" />
              </div>
              <div class="card_title">
                <p>標題</p>
                <input type="text" />
              </div>
              <div class="card_text">
                <textarea name="" id="" cols="120" rows="25"></textarea>
              </div>
              <div class="addPageBtn">
                <button class="btn me-4" @click="login">存檔</button>
                <button class="btn">重設</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
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
<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.add {
  width: 100px;
  height: 100px;
  transition: color 0.25s;
  position: relative;
  top: 24%;
  color: burlywood;
}

.add:hover {
  color: #f1ab51;
}

.add::before {
  padding-top: 35px;
  content: '上傳圖片';
  position: absolute;
  left: 65%;
  top: 57%;
  width: 66px;
  margin-left: -40px;
  margin-top: -5px;
  border-top: 10px solid;
}
.add::after {
  content: '';
  position: absolute;
  left: 57%;
  top: 65%;
  height: 66px;
  margin-left: -5px;
  margin-top: -40px;
  border-left: 10px solid;
}

.uploadImg {
  display: inline-block;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

.card_image {
  width: 13rem;
  height: 10rem;
  padding: 1.2rem 1.2rem 0;
  position: relative;
}
.card_image:before,
.card_image:after {
  content: '';
  position: absolute;
  width: 20px;
  left: 60%;
  top: 0;
  height: 45px;
  background: #e6e6e6b8;
  transform: rotate(45deg);
}
.card_image:after {
  transform: rotate(-45deg);
  top: auto;
  bottom: -22px;
  left: 40%;
}
.card_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cards_item {
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 30px;
  background: repeating-linear-gradient(
        #0000 0 calc(1.2rem - 1px),
        #66afe1 0 1.2rem
      )
      right bottom / 100% 100%,
    linear-gradient(red 0 0) 30px 0/2px 100% #fff;
  background-repeat: no-repeat;
  line-height: 1.2rem;
  -webkit-mask: radial-gradient(circle 0.8rem at 2px 50%, #0000 98%, #000) 0 0/100%
    2.4rem;
}

.card_content {
  padding: 1.5rem;
  background-color: #e5e5e56b;
  .addPageBtn {
    margin-top: 10px;
    text-align: end;
    .btn:nth-child(1) {
      background-color: #f8b1af;
    }
    .btn:nth-child(2) {
      background-color: #d7d7e4;
    }
  }
}

.card_title {
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  p {
    font-size: 1.5em;
    font-weight: bolder;
    margin: 0;
  }
  input {
    margin-left: 10px;
    caret-color: auto;
    outline: none;
  }
}
textarea {
  margin-left: 10px;
  caret-color: auto;
  outline: none;
}
body {
  font-family: monospace;
  background: #eee;
}

html {
  font-size: 15px;
}

button {
  background-color: #add8e6;
}
</style>
