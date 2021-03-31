'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacoesSchema extends Schema {
  up () {
    this.create('avaliacoes', (table) => {
      table.increments()

      table.integer('frequencia_minima').notNullable()
      table.integer('peso_participacao').notNullable()
      table.integer('peso_aval_1').notNullable()
      table.integer('peso_aval_2').nullable()
      table.integer('peso_aval_3').nullable()
      table.boolean('permite_recuperacao').nullable()

      
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacoes')
  }
}

module.exports = AvaliacoesSchema
