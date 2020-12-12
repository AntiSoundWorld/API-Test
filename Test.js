let i = 0;
do
{
  const axios = require('axios');
  
  const promise = axios({
    method: 'post',
    url: 'http://127.0.0.1:8090/tasks',
    data: {
      firstName: 'Fred',
      id: i,
      lastName: 'Flintstone'
    }
  });
  
  i++

}
while(i != 1000);

