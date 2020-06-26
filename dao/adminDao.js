const mongoose = require('mongoose')

class AdminDao {
  constructor (options = {}) {
    this.options = options
    this.admin = mongoose.model('Admin')
  }

  async createAdmin (context) {
    try {
      const newAdmin = await this.comedian.create(context)
      return newAdmin
    } catch (err) {
      throw err
    }
  }
}

module.exports = AdminDao
