'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModalidadesSchema extends Schema {
  up () {
    this.create('modalidades', (table) => {
      table.increments()

    table.string('descricao').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('modalidades')
  }
}

module.exports = ModalidadesSchema
