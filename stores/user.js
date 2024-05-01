import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    registerData: {
      account: '',
      name: '',
      password: '',
      email: '',
      phone: '',
      headshot: null,
    },
    loginData: {
      account: '',
      password: '',
      token:''
    },
  }),
  actions: {
    /**
     * 註冊
     */
    async memberRegister(router) {
      try {
        const response = await fetch(
          'http://127.0.0.1:8080/MemberService/api/v1/register',
          {
            method: 'POST',
            body: JSON.stringify(this.registerData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }
        );
        const data = await response.json();
        alert(data.message);
        router.push({
          path: '/',
        });
      } catch (error) {
        return { data: null, error };
      }
    },
    /**
     * 登入
     */
    async login(router) {
      const response = await fetch(
        'http://127.0.0.1:8080/MemberService/api/v1/login',
        {
          method: 'POST',
          body: JSON.stringify(this.loginData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      if (data.status == 0) {
        console.log('data.token',data.token)
        Object.assign(this.loginData.token, data.token)
        console.log('this.loginData.token',this.loginData.token)

        router.push({
          path: '/usr',
        });
      } else {
        alert(data.message);
      }
    },
     /**
     * 取得會員資料
     */
     async getUserData() {
        // console.log(this.loginData.token)
        // const response = await fetch(
        //   'http://127.0.0.1:8080/MemberService/api/v1/members',
        //   {
        //     method: 'GET',
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8',
        //       'Authorization': `Bearer ${this.loginData.token}`
        //     },
        //   }
        // );
        // const data = await response.json();
        // if (data.status == 0) {
        //  console.log(data)
        // } else {
        //   alert(data.message);
        // }
      },
  },
});
