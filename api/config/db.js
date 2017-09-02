const MongoClient = require('mongodb').MongoClient
const collection = 'test'
const url = `mongodb://localhost:27017/${collection}`

const db = {
  getCollection () {
    return collection
  },
  open () {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, db) => {
        if (err) {
          reject(err)
        } else {
          resolve(db)
        }
      })
    })
  },
  close (db) {
    if (db) {
      db.close()
    }
  }
}

module.exports = db
