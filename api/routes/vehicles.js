const Database = require('../helpers/Database')
const ObjectId = require('mongodb').ObjectID

module.exports = function (app) {
  app.post('/api/veiculos', (req, res) => {
    if (req.body.veiculo &&
        req.body.marca &&
        req.body.ano &&
        req.body.descricao &&
        req.body.vendido) {
      req.body = Object.assign(req.body, {created: new Date(), updated: new Date()})
      Database.insert(req.body).then(results => {
        res.status(200).send({error: false, message: results.insertedId})
      })
      .catch(err => {
        res.status(500).send({error: true, message: err.toString()})
      })
    } else {
      res.status(200).send({error: true, message: 'Missing body content'})
    }
  })

  app.get('/api/veiculos', (req, res) => {
    Database.query().then(results => {
      res.status(200).send({error: false, message: results})
    })
    .catch(err => {
      res.status(500).send({error: true, message: err.toString()})
    })
  })

  app.get('/api/veiculos/:id', (req, res) => {
    if (req.params.id) {
      Database.query({_id: ObjectId(req.params.id)}).then(results => {
        res.status(200).send({error: false, message: results})
      })
      .catch(err => {
        res.status(500).send({error: true, message: err.toString()})
      })
    } else {
      res.status(401).send({error: true, message: 'Missing param'})
    }
  })

  app.put('/api/veiculos/:id', (req, res) => {
    if (req.params.id) {
      if (req.body) {
        req.body = Object.assign(req.body, {updated: new Date()})
        Database.replace({_id: ObjectId(req.params.id)}, req.body).then(results => {
          res.status(200).send({error: false, message: results})
        })
        .catch(err => {
          res.status(500).send({error: true, message: err.toString()})
        })
      } else {
        res.status(401).send({error: true, message: 'Missing body content'})
      }
    } else {
      res.status(401).send({error: true, message: 'Missing param'})
    }
  })

  app.patch('/api/veiculos/:id', (req, res) => {
    if (req.params.id) {
      if (req.body) {
        req.body = Object.assign(req.body, {updated: new Date()})
        Database.update({_id: ObjectId(req.params.id)}, req.body).then(results => {
          res.status(200).send({error: false, message: results})
        })
        .catch(err => {
          res.status(500).send({error: true, message: err.toString()})
        })
      } else {
        res.status(401).send({error: true, message: 'Missing body content'})
      }
    } else {
      res.status(401).send({error: true, message: 'Missing param'})
    }
  })

  app.delete('/api/veiculos/:id', (req, res) => {
    if (req.params.id) {
      Database.delete({_id: ObjectId(req.params.id)}).then(results => {
        res.status(200).send({error: false, message: results})
      })
      .catch(err => {
        res.status(500).send({error: true, message: err.toString()})
      })
    } else {
      res.status(401).send({error: true, message: 'Missing param'})
    }
  })
}
