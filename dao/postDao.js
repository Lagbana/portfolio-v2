const { Post } = require('../models')


class PostDao {
  constructor (options = {}) {
    this.options = options
    this.post = Post
  }

  async createPost (context) {
    try {
      const newPost = await this.post.create(context)
      return newPost
    } catch (err) {
      throw err
    }
  }
  /*
        method to update post by it's id
        context = req.body, to be inserted in the put '/:id' route handler
    */
  async updatePost (context) {
    try {
      const updatedPost = await this.post.findOneAndUpdate(
        { _id: require.param.id },
        { $set: { context } },
        { new: true }
      )
      return updatedPost
    } catch (err) {
      throw err
    }
  }
}




module.exports = PostDao
