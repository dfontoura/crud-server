'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Curso extends Model {


    levels () {
        return this.hasMany('App/Models/Level')
      }    


}

module.exports = Curso
