// api.js
export async function memberRegister(reqData) {
  const response = await fetch('https://jsonplaceholder.typicode.com', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(reqData)
  });
 
  if (!response.ok) {
     throw new Error('Network response was not ok');
  }
 
  return response.json();
 }
 