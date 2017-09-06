const should = require('should')
const config = require('../config/db')
const Database = require('../helpers/Database')
const ObjectId = require('mongodb').ObjectID

describe('Vehicle CRUD', () => {

  before(() => {
    return Database.deleteAll().then((success, err) => {
      success.result.ok.should.eql(1)
      should.not.exist(err)
    })
  })

  it('create', () => {
    const vehicle = {
      veiculo: 'Corsa',
      marca: 'Chevrolet',
      ano: '2014',
      vendido: false,
      descricao: 'Carro do ano pela revista de carros do ano'
    }
    return Database.insert(vehicle).then((inserted, err) => {
      inserted.insertedCount.should.eql(1)
      should.not.exist(err)
      return Database.findOne({_id: ObjectId(inserted.insertedId)}).then((vehicle, err) => {
        vehicle[0].veiculo.should.eql('Corsa')
        vehicle[0].marca.should.eql('Chevrolet')
        vehicle[0].ano.should.eql('2014')
        vehicle[0].vendido.should.eql(false)
        vehicle[0].descricao.should.eql('Carro do ano pela revista de carros do ano')
      })
    })
  })

  it('get', () => {
    return Database.query(null).then((vehicles, err) => {
      vehicles.length.should.eql(1)
    })
  })

  it('update', () => {
    return Database.query(null).then((vehicles, err) => {
      should.not.exist(err)
      
      return Database.update({_id: ObjectId(vehicles[0]._id)}, {veiculo: 'Fusca', ano: '1900'}).then((vehicle, err) => {
        vehicle.modifiedCount.should.eql(1)
        should.not.exist(err)
      })
    })
  })

  it('replace', () => {
    return Database.query(null).then((vehicles, err) => {
      should.not.exist(err)
      return Database.replace({_id: ObjectId(vehicles[0]._id)}, {veiculo: 'Fusca', ano: '1900'}).then((replaced, err) => {
        replaced.modifiedCount.should.eql(1)
        should.not.exist(err)
        return Database.findOne({_id: ObjectId(vehicles[0]._id)}).then((vehicle, err) => {
          Object.keys(vehicle[0]).length.should.eql(3)
          should.not.exist(err)
        })
      })
    })
  })

  it('query', () => {
    const vehicle = {
      veiculo: 'Corsa novo',
      marca: 'Chevrolet',
      ano: '2014',
      vendido: true,
      descricao: 'Carro do ano pela revista de carros do ano'
    }
    return Database.insert(vehicle).then((inserted, err) => {
      inserted.insertedCount.should.eql(1)
      should.not.exist(err)
      return Database.query({veiculo: 'Corsa novo', vendido: true}).then((vehicle, err) => {
        vehicle.length.should.eql(1)
      })
    })
  })

  it('delete', () => {
    return Database.query(null).then((vehicles, err) => {
      should.not.exist(err)
      return Database.delete({_id: ObjectId(vehicles[0]._id)}).then((deleted, err) => {
        deleted.deletedCount.should.eql(1)
        should.not.exist(err)
      })
    })
  })

  it('delete all', () => {
    return Database.deleteAll().then((deleted, err) => {
      should.not.exist(err)
    })
  })
})
