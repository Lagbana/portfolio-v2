const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'A post needs to have a title'
    },
    author: {
      type: String,
      required: 'A post author is required'
    },
    content: {
      type: String,
      trim: true,
      required: true
    },
    image: {
      type: String
    },

    hidden: Boolean,

    wordCount: Number,

    charCount: Number
  },
  {
    timestamps: true
  }
)

postSchema.methods.getWordCount = function () {
  let contentArray = this.content.split(' ')
  this.wordCount = contentArray.length
  return this
}

postSchema.methods.getCharCount = function () {
  let contentArray = this.content.split('')
  this.charCount = contentArray.length
  return this
}

module.exports = mongoose.model('Post', postSchema)
