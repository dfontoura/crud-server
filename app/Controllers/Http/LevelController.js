'use strict'

const Database = use('Database')
const Level = use('App/Models/Level')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with levels
 */
class LevelController {
  /**
   * Show a list of all levels.
   * GET levels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //async index ({ request, response, view }) {
  //  const levels = Level.all()
  //  return levels
  //}

  async index (request, response) {
    return await Database
      .table('Levels')
      .where('curso_id', 1)  //ALTERAR HARDCODED
      //.fetch()
  }

//  async index ({ request }) {
//    const { curso } = request.all()
//  
//    const levels = Level.query()
//      .nearBy(curso, 10)
//      .fetch()
//  
//    return properties
//  }


  async show ({ params }) {
    const level = await Level.findOrFail(params.id)
  
    await level.load('livro')
    await level.load('modalidade')
  
    return level
  }

  async destroy ({ params, auth, response }) {
    const level = await Level.findOrFail(params.id)  
    await level.delete()
  }

  /**
   * Create/save a new level.
   * POST levels
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'curso_id',
      'livro_id',
      'modalidade_id',
      'proximo_nivel',
      'equiv_1',
      'equiv_2',
      'equiv_3',
      'equiv_4',
      'ativo',
      'descricao',
      'ordem',
      'gera_certificado',
      'carga_horaria',
      'iniciante',
      'idade_inicial',
      'idade_final',
      'idade',
      'falta_reprova',
      'nota_reprova',
      'font_color',
      'background',
      'frequencia_minima',
      'peso_participacao',
      'peso_aval_1',
      'peso_aval_2',
      'peso_aval_3',
      'permite_recuperacao'

    ])
  
    const level = await Level.create({ ...data })
  
    return level
  }

  /**
   * Display a single level.
   * GET levels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }



  /**
   * Update level details.
   * PUT or PATCH levels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
   async update ({ params, request, response }) {
    const level = await Level.findOrFail(params.id)
  
    const data = request.only([
      'curso_id',
      'livro_id',
      'modalidade_id',
      'proximo_nivel',
      'equiv_1',
      'equiv_2',
      'equiv_3',
      'equiv_4',
      'ativo',
      'descricao',
      'ordem',
      'gera_certificado',
      'carga_horaria',
      'iniciante',
      'idade_inicial',
      'idade_final',
      'idade',
      'falta_reprova',
      'nota_reprova',
      'font_color',
      'background',
      'frequencia_minima',
      'peso_participacao',
      'peso_aval_1',
      'peso_aval_2',
      'peso_aval_3',
      'permite_recuperacao'
    ])
  
    level.merge(data)
  
    await level.save()
  
    return level
  }

  /**
   * Delete a level with id.
   * DELETE levels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = LevelController
