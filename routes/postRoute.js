class PostRoute {
  constructor (options = {}) {
    this.options = options
    this.router = options.Router
    this.postService = new options.PostService()
  }

  initialize () {
    this.router.get('/blog/posts', (req, res) => this.getPosts(req, res))
    this.router.post('/blog/newpost', (req, res) => this.newPost(req, res))
  }

  async getPosts (req, res) {
    try {
      const allPosts = await this.postService.getAllPostsService()
      res.status(200).json(allPosts)
    } catch (err) {
      res.status(404).json(err)
      throw err
    }
  }

  async newPost (req, res) {
    try {
      const newPost = await this.postService.createPostService(req.body)
      res.status(201).json(newPost)
    } catch (err) {
      res.status(404).json(err)
      throw err
    }
  }
}

module.exports = PostRoute
