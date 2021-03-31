'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Level extends Model {

    curso () {
        return this.belongsTo('App/Models/Curso')
      }

    livro () {
        return this.belongsTo('App/Models/Livro')
      }
      
    modalidade () {
        return this.belongsTo('App/Models/Modalidade')
      }

}

module.exports = Level
