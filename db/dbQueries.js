const db = require('./db.js')

async function getRandomWord () {
  try {
    const pool = await db.sql.connect(db.config)
    const product = await pool.request()
      .query('SELECT TOP 1 Word FROM [dbo].[WordListFiveLetter] ORDER BY NEWID()')
    return product.recordsets
  } catch (error) {
    console.log(error)
  }
}

async function getAllWords () {
  try {
    const pool = await db.sql.connect(db.config)
    const product = await pool.request()
      .query('SELECT Word FROM [dbo].[WordListFiveLetter]')
    return product.recordsets
  } catch (error) {
    console.log(error)
  }
}

async function getAllUserInfo () {
  try {
    const pool = await db.sql.connect(db.config)
    const product = await pool.request()
      .query('SELECT UserName, Password FROM [dbo].[Player]')
    return product.recordsets
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getRandomWord,
  getAllWords,
  getAllUserInfo
}
