'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LevelSchema extends Schema {
  up () {
    this.create('levels', (table) => {
      table.increments()

      table
        .integer('curso_id')
        .unsigned()
        .references('id')
        .inTable('cursos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

        table
        .integer('livro_id')
        .unsigned()
        .references('id')
        .inTable('livros')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      //table.string('editora').notNullable()
      //table.string('edicao').notNullable()
      //table.string('isbn').notNullable()

      table
        .integer('modalidade_id')
        .unsigned()
        .references('id')
        .inTable('modalidades')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('proximo_nivel')
      table.integer('equiv_1')
      table.integer('equiv_2')
      table.integer('equiv_3')
      table.integer('equiv_4').nullable()
      table.boolean('ativo').notNullable()
      table.string('descricao').notNullable()
      table.integer('ordem')
      table.boolean('gera_certificado')
      table.integer('carga_horaria')
      table.boolean('iniciante').nullable()
      table.integer('idade_inicial')
      table.integer('idade_final')
      table.integer('idade')
      table.boolean('falta_reprova')
      table.boolean('nota_reprova')
      table.string('font_color')
      table.string('background ')

      table.integer('frequencia_minima').nullable()
      table.integer('peso_participacao').nullable()
      table.integer('peso_aval_1').nullable()
      table.integer('peso_aval_2').nullable()
      table.integer('peso_aval_3').nullable()
      table.boolean('permite_recuperacao').nullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('levels')
  }
}

module.exports = LevelSchema
