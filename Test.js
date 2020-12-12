let i = 0;
do
{
 
  i++

}
while(i != 100);

const axios = require('axios');

function request(i, end)
{
  const promise = axios({
    method: 'post',
    url: 'http://127.0.0.1:8090/tasks',
    data: {
      firstName: 'Fred',
      id: i,
      lastName: 'Flintstone'
    }
  });
  
  promise.then(() => processResponse(i)).catch(console.log);
}

function processResponse(i){
  console.log(i)
  request(i)
}