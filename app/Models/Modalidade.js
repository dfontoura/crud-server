'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Modalidade extends Model {

    levels () {
        return this.hasMany('App/Models/Level')
      }    

}

module.exports = Modalidade
