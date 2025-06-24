const usersService = require('./users.service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class UsersController {
  async register(req, res) {
    try {
      const user = await usersService.register(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error })
    }
  }

  async login(req, res) {
    try {
      const user = await usersService.findByEmail(req.body.email)
      if (!user) return res.status(401).json({ message: 'Invalid credentials' })

      const valid = await bcrypt.compare(req.body.password, user.password)
      if (!valid) return res.status(401).json({ message: 'Invalid credentials' })

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' },
      )
      res.status(200).json({ token })
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error })
    }
  }
}

module.exports = new UsersController()
