const Database = require('../helpers/Database')

module.exports = function(app){
  app.post('/api/veiculos', (req, res) => {
    if (req.body) {
      Database.insert(req.body).then(results => {
        res.status(200).send({error: false, message: results.insertedId })
      })
      .catch(err => {
        res.status(200).send({error: true, message: err.toString() })
      })
    } else {
      res.status(200).send({error: true, message: 'Missing body content'})
    }
  })
}