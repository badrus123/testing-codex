const express = require('express')
const router = express.Router()
const article = require('../articles/articles.router')
const users = require('../users/users.router')
router.use('/articles', article)
router.use('/users', users)

module.exports = router
