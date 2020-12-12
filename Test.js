const http = require('http');
const { url } = require('inspector');

let i = 0;

do
{
  const req = http.request({
    method: 'POST',
    http: '1.1',
    port: 8090,
    path: '/tasks',
    headers: 
    {
      'Content-length': '48',
      'Content-type': 'application/json',
      'Connection': 'close',
      'Host': '127.0.0.1:8090',
      'accept': '*/*\r\n\r\n',
    },
    
    body:
    {
      'name:': 'Dmitry',
      'id:': '0',
      'lastname:': 'Ivanov'
    }
  });

    req.on('response', function(response){
      let body = '';

      response.on('data', function(chunk){
        body += chunk;
      });

      response.on('end', function(){
        console.info(body);
      });
    });

    req.end();

    i++
}
while(i != 1000);

