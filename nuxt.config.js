// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css', integrity: 'sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2', crossorigin: 'anonymous' }
      ]
    }
  },

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData:'@import "@/assets/scss/app.scss";'
        }
      }
    },
    server:{
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true
        }
      }
    }
  },
  css:['@fortawesome/fontawesome-svg-core/styles.css'],
  modules: ["@nuxt/image"],
  image: {
    dir: 'assets/img'
  },
  // axios:{
  //   proxy:true
  // },
  // proxy:{
  //   proxies:{
  //     '/api/':{
  //       target:'http://127.0.0.1:8080/',
  //       changeOrigin:true
  //     }
  //   }
  // }

//  nitro:{
//   devProxy:{
//     "/api":{
//       target: 'http://localhost:8080/MemberService/v1',
//       prependPath: true,
//       changeOrigin:true,
//     }
//   }
//  }
})