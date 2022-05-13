const { Router } = require("express")
const { buscar } = require('../controllers/buscar')

const router = Router()

/**
 * @swagger
 * /api/buscar/{coleccion}/{termino}:
 *  get:
 *      summary: get news
 *      tags: [Noticias]
 *      parameters:
 *          in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: news id
 *      responses:
 *          200:
 *              description: a object news
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  format: int64
 *                                  example: 4
 *                              author:
 *                                  type: string
 *                                  example: 'George'
 *                              created_at:
 *                                  type: string
 *                                  example: '2022-05-13T07:57:57.000Z'
 *          404:
 *              description: []
 */


router.get('/:coleccion/:termino', buscar)


module.exports = router;