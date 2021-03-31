'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivrosSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()

      table.string('descricao').notNullable()
      table.string('editora').notNullable()
      table.string('edicao').notNullable()
      table.string('isbn').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivrosSchema
