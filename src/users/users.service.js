const bcrypt = require('bcrypt')
const db = require('../models')

class UsersService {
  async register(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    return await db.database.Users.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      address: data.address,
    })
  }

  async findByEmail(email) {
    return await db.database.Users.findOne({ where: { email } })
  }
}

module.exports = new UsersService()
