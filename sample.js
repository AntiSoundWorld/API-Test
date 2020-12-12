const start = new Date();

const axios = require('axios');

const promise = axios({
    method: 'get',
    url: 'http://127.0.0.1:8090/tasks?id=9999'
});

promise.then(processResponse);
  
function processResponse(response) {
  console.log(response);
} 

const end = new Date();

const result = end - start;

console.log(result);

