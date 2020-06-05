const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      trim: true
    },
    guestName: {
      type: String,
      default: 'Guest'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Comment', commentSchema)
