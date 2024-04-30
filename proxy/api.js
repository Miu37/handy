// api.js
export async function memberRegister(reqData) {
  try {
     const response = await fetch('http://127.0.0.1:8080/MemberService/api/v1/register', {
       method: 'POST',
       body: JSON.stringify(reqData),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       },
     });
     const data = await response.json();
     return { data, error: null };
  } catch (error) {
     return { data: null, error };
  }
 }
 