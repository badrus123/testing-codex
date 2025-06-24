const DataTypes = require('sequelize').DataTypes
const articles = require('./articles')
const users = require('./users')

function initModels(sequelize) {
  const Articles = articles(sequelize, DataTypes)
  const Users = users(sequelize, DataTypes)

  Users.hasMany(Articles, { foreignKey: 'userId' })
  Articles.belongsTo(Users, { foreignKey: 'userId' })

  return {
    Articles,
    Users,
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
