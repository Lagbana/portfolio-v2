// Import dependencies
const { PostDao } = require('../dao')

/*
    PostService extends PostDao to access it's methods
    then it adds additional functionalities via external libraries and tools
*/
class PostService extends PostDao {
  constructor (options = {}) {
    super()
    this.options = options
  }

  async createPostService (context) {
    try {
      const newPost = await this.createPost(context)
      return newPost
    } catch (err) {
      throw err
    }
  }
}

module.exports = PostService
