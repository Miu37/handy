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
    passwordObj: {
      oldPassword: '',
      newPassword: '',
      checkPassword: '',
    },
    isShow: {
      old: false,
      new: false,
      check: false,
      error: false,
      diff: false,
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
          window.sessionStorage.setItem('userInfo',JSON.stringify(res.data))
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
          location.reload()
        }
      });
    },
    /**
     * 判斷密碼
     */
    editPassword(router) {
      const oldPasswordEmpty = this.passwordObj.oldPassword == '';
      const newPasswordEmpty = this.passwordObj.newPassword == '';
      const checkPasswordEmpty = this.passwordObj.checkPassword == '';
      const allCorrect =
        !newPasswordEmpty &&
        !checkPasswordEmpty &&
        !oldPasswordEmpty &&
        this.passwordObj.newPassword == this.passwordObj.checkPassword;

      this.isShow.old = oldPasswordEmpty;
      this.isShow.new = newPasswordEmpty;
      this.isShow.check = checkPasswordEmpty;

      if (
        !newPasswordEmpty &&
        !checkPasswordEmpty &&
        this.passwordObj.newPassword != this.passwordObj.checkPassword
      ) {
        this.isShow.diff = true;
      } else if (allCorrect) {
        const password = this.passwordObj.newPassword;
        this.passwordValid(password,router);
        this.isShow.diff = false;
      }
    },
    /**
     * 密碼正規表達式驗證 + 修改密碼
     */
    async passwordValid(password, router) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      const isValid = regex.test(password);
      if (isValid) {
        await useHttp
          .put('/api/v1/members/password', this.passwordObj)
          .then((res) => {
            if (res.status == 0) {
              alert('修改成功，請重新登入');
              router.push('/')
            } else {
              alert(res.message);
            }
          });
      }else{
        alert('格式不正確')
        this.$reset();
      }
    },
  },
});
