const { Router } = require('express');
const { newsGet,
    newsDelete,
    OnenewsGet } = require('../controllers/news');

const router = Router();

// Get api
/**
 * @swagger
 * /api/news?desde=0:
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

router.get('/', newsGet)
// Get api one

/**
 * @swagger
 * /api/news/{id}:
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

router.get('/:id', OnenewsGet)

/**
 * @swagger
 * /api/news/{id}:
 *  delete:
 *      summary: delete a user
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
 *              description: news delete
 *          404:
 *              description: not found news delete
 */


// Delete api
router.delete('/:id', newsDelete)

module.exports = router;