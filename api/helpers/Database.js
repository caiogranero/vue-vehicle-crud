const db = require('../config/db')

const Database = {
  query (id = null) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection(db.getCollection()).find(id).toArray((err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        db.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  delete (id) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection(db.getCollection()).deleteOne(id, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        db.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  update (id, data) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection(db.getCollection()).updateOne(id, { $set: data }, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        db.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  replace (id, data) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection(db.getCollection()).replaceOne(id, data, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        db.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  insert (items) {
    return new Promise((resolve, reject) => {
      db.open()
      .then((db) => {
        db.collection(db.getCollection()).insertOne(items, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        db.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  }
}

module.exports = Database
