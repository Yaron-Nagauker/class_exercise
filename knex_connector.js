

//  pg connector 
const connectedKnex = require('knex')({
  client: 'pg',
  version: '12',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',   
    password : 'admin',
    database : 'postgres'
  }
});

module.exports = connectedKnex;
  