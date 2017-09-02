const db = require('../config/db')

const Database = {
  query (query) {
    return new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })

    })
  },
  insert (items) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection('test').insertOne(items, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  }
}

module.exports = Database
