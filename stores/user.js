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
    usrData:{
      account: '',
      name: '',
      password: '',
      email: '',
      phone: '',
      headshot: null,
    }
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
     * 取得會員資料
     */
     async getUserData(token) {
        const response = await fetch(
          'http://127.0.0.1:8080/MemberService/api/v1/members',
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              'Authorization': `Bearer ${token}`
            },
          }
        );
        const data = await response.json();
        if (data.status == 0) {
          Object.assign(this.usrData, data.data)
          window.sessionStorage.setItem("usrData", JSON.stringify(data.data))
        } else {
          alert(data.message);
        }
      },
  },
});
