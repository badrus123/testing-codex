// articles.controller.js
const articlesService = require('./articles.service')

class ArticlesController {
  test(req, res) {
    const result = articlesService.test()
    res.status(200).json(result)
  }
  findAll(req, res) {
    articlesService
      .findAll()
      .then((articles) => {
        res.status(200).json(articles)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error retrieving articles', error })
      })
  }

  create(req, res) {
    articlesService
      .create(req.body)
      .then((article) => {
        res.status(201).json(article)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error creating article', error })
      })
  }

  findOne(req, res) {
    articlesService
      .findOne(req.params.id)
      .then((article) => {
        if (!article) {
          return res.status(404).json({ message: 'Article not found' })
        }
        res.status(200).json(article)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error retrieving article', error })
      })
  }

  update(req, res) {
    articlesService
      .update(req.params.id, req.body)
      .then((article) => {
        if (!article) {
          return res.status(404).json({ message: 'Article not found' })
        }
        res.status(200).json(article)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error updating article', error })
      })
  }

  delete(req, res) {
    articlesService
      .delete(req.params.id)
      .then((article) => {
        if (!article) {
          return res.status(404).json({ message: 'Article not found' })
        }
        res.status(200).json({ message: 'Article deleted successfully' })
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error deleting article', error })
      })
  }
}

module.exports = new ArticlesController()
