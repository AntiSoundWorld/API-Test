const axios = require('axios');

request(0, 1000);

function request(i, end)
{
  if(i >= end){
    return;
  }
  
  const promise = axios({
    method: 'post',
    url: 'http://127.0.0.1:8090/tasks',
    data: {
      firstName: 'Fred',
      id: i,
      lastName: 'Flintstone'
    }
  });
  
  promise.then(() => processResponse(i, end)).catch(console.log);
}

function processResponse(i, end){
  console.log(i);
  request(i++, end);
}