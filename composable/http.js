// const handleError = function (response) {
//   const err = function (text) {
//     Message.error({
//       content: response?._data?.message ?? text,
//       icon: function () {
//         return;
//       },
//     });
//   };
//   if (!response._data) {
//     err('請求超時！');
//     return;
//   }
// };

const fetch = $fetch.create({
  // 請求攔截器
  onRequest({ options }) {
    const token = JSON.parse(window.sessionStorage.getItem('token'));
    if (!token) return;
    options.headers = new Headers(options.headers);
    options.headers.append('Authorization', `Bearer ${token}`);
  },
  // 響應攔截器
  onResponse({ response }) {
    // if (response.headers.get('content-disposition') && response.status === 200)
    //   return response;
    // 判斷錯誤
    //   if (response._data.code !== 200) {
    //     handleError(response)
    //     return Promise.reject(response._data)
    //   }
    // 成功返回
    return response._data;
  },
  // 错误处理
  // onResponseError({ response }) {
  //   handleError(response)
  //   return Promise.reject(response?._data ?? null)
  // },
});

export const useHttp = {
  baseUrl: 'http://127.0.0.1:8080/MemberService',
  get: function (url, params) {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'get',
      params,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  },

  post: function (url, body) {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'post',
      body,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  },

  put: function (url, body) {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'put',
      body,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  },

  delete: function (url, body) {
    return fetch(`${this.baseUrl}${url}`, {
      method: 'delete',
      body,
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  },
};
