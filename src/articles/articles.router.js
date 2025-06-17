//article router.js
const express = require('express')
const router = express.Router()
const {
  test,
  findAll,
  create,
  findOne,
  update,
  delete: deleteArticle,
} = require('./articles.controller')

// Define the routes for articles
router.get('/test', test)
router.get('/', findAll)
router.post('/', create)
router.get('/:id', findOne)
router.put('/:id', update)
router.delete('/:id', deleteArticle)
module.exports = router
