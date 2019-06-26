const server = require('./config/server')
require('./config/database')
//routes retorna uma funçao que recebe o servidor como parametro
require('./config/routes')(server)