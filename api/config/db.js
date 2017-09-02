const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const ObjectId = require('mongodb').ObjectID
const url = 'mongodb://localhost:27017/test'
const db = {
  open () {
    return new Promise((resolve, reject)=>{
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
    if(db){
      db.close()
    }
  }
}

module.exports = db
