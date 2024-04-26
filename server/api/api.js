import axios from 'axios';

export async function register(reqData) {
  const api = `http://localhost:8080/api/v1/register`;
  try {
    const res = await axios.post(api, reqData);
    console.log('a', res);
    return res.data;
  } catch {
    return ;
  }
}
