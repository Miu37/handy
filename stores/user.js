import { defineStore } from 'pinia';
import { useHttp } from '@/composable/http';

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
    usrData: {
      account: '',
      name: '',
      password: '',
      email: '',
      phone: '',
      headshot: null,
    },
  }),
  actions: {
    /**
     * 註冊
     */
    async memberRegister(router) {
      try {
        await useHttp
          .post('/api/v1/register', this.registerData)
          .then((res) => {
            if (res.status == 0) {
              router.push('/');
            }
          });
      } catch (error) {
        return { data: null, error };
      }
    },
    /**
     * 取得會員資料
     */
    async getUserData() {
      await useHttp.get('/api/v1/members').then((res) => {
        if (res.status == 0) {
          this.usrData = res.data;
        }
      });
    },
    /**
     * 修改會員資料
     */
    async editUserData() {
      await useHttp.put('/api/v1/members', this.usrData).then((res) => {
        if (res.status == 0) {
          alert(res.message);
        }
      });
    },
  },
});
