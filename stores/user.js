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
  }),
  actions: {
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
  },
});
