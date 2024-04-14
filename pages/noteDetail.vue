<template>
  <NuxtLayout>
    <div class="main">
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="d-flex flex-wrap">
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
              <div class="card_image">
                <img
                  src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
                  alt="mixed vegetable salad in a mason jar. "
                />
              </div>
            </div>

            <div class="card_content">
              <h2 class="card_title">2024-03-19</h2>
              <h2 class="card_title">失眠了</h2>
              <div class="card_text">
                <p>
                  茨威格曾經提到過，寧可受苦而保持清醒，寧可忍受痛苦而思維，也勝似不進行思維。這把視野帶到了全新的高度。高爾基說過一句經典的名言，青春是一個普通的名稱，它是幸福美好的，但它也是充滿著艱苦的磨煉。這句話幾乎解讀出了問題的根本。在人類的歷史中，我們總是盡了一切努力想搞懂失眠。
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur a, soluta illum obcaecati nam praesentium voluptates repellat illo iste rerum voluptas tempora, ipsam nesciunt fugiat. Iure doloribus numquam quod!</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup></script>

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
  object-fit: cover;
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
  padding: 1.2rem;
}

h2.card_title,
p {
  margin: 1.1rem 0;
}
h2.card_title {
  font-size: 1.3em;
}
body {
  font-family: monospace;
  background: #eee;
}

html {
  font-size: 15px;
}
</style>
