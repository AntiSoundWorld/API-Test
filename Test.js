const axios = require('axios');

axios({
  method: 'post',
  url: '127.0.0.1:8090/tasks',
  data: {
    firstName: 'Fred',
    id: '0',
    lastName: 'Flintstone'
  }
});