const connection = require('../config/db')

const Database = {
  query (id = null) {
    return new Promise((resolve, reject) => {
      let database = null
      connection.open().then((db) => {
        database = db
        db.collection(connection.getCollection()).find(id).toArray((err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        database.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  delete (id) {
    return new Promise((resolve, reject) => {
      let database = null
      connection.open().then((db) => {
        database = db
        db.collection(connection.getCollection()).deleteOne(id, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        database.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  update (id, data) {
    return new Promise((resolve, reject) => {
      let database = null
      connection.open().then((db) => {
        database = db
        db.collection(connection.getCollection()).updateOne(id, { $set: data }, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        database.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  replace (id, data) {
    return new Promise((resolve, reject) => {
      let database = null
      connection.open().then((db) => {
        database = db
        db.collection(connection.getCollection()).replaceOne(id, data, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        database.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  },

  insert (items) {
    return new Promise((resolve, reject) => {
      let database = null
      connection.open().then((db) => {
        database = db
        db.collection(connection.getCollection()).insertOne(items, (err, result) => {
          if (err) reject(err)
          resolve(result)
        })
      })
      .then(() => {
        database.close()
      })
      .catch(err => {
        console.error(err.toString())
      })
    })
  }
}

module.exports = Database
