'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Livro extends Model {

    levels () {
        return this.hasMany('App/Models/Level')
      }    

}

module.exports = Livro
