const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [/.+@.+\..+/, 'Please enter a valid e-mail address']

    },
    password: {
      type: String,
      trim: true,
      required: 'Admin password is required',
      validate: [({length}) => length>=8, 'Admin password should be at least 8 characters']
    },
    image: {
      type: String
    },

    fullName: String

  },
  {
    timestamps: true
  }
)

adminSchema.methods.setFullName = function () {
  this.fullName = `${this.firstName} ${this.lastName}`

  return this
}

module.exports = mongoose.model('Admin', adminSchema)
