const db = require('../models')
class ArticlesService {
  test() {
    return {
      message: 'Articles service is working!',
    }
  }
  async findAll() {
    return await db.database.Articles.findAll({
      order: [['createdAt', 'DESC']],
    })
  }

  async create(data) {
    return await db.database.Articles.create(data)
  }

  async findOne(id) {
    return await db.database.Articles.findByPk(id)
  }

  async update(id, data) {
    const article = await db.database.Articles.findByPk(id)
    if (!article) return null
    return await article.update(data)
  }

  async delete(id) {
    const article = await db.database.Articles.findByPk(id)
    if (!article) return null
    await article.destroy()
    return article
  }
}
module.exports = new ArticlesService()
