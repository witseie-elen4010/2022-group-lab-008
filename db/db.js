// Used from the Database tutorial on ulwazi.
const mssql = require('mssql')
const config = {
  server: 'elen4010-group08-db.database.windows.net',
  database: 'WordleWithFriends',


  user: process.env.AzureDBAdmin,
  password: process.env.AzureDBPassword,
  port: 1433,
  options: {
    encrypt: true,
    enableArithAbort: true
  }, 
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  } 
}
let isConnected = true
let connectionError = null
const pools = new mssql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to DB')
    return pool
  })
  .catch(err => {
    isConnected = false
    connectionError = err
    console.log(err)
  })
module.exports = {
  sql: mssql,
  pools,
  isConnected,
  connectionError,
  config
}
