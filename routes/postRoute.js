const { findByIdAndUpdate } = require("../models/Post")

class PostRoute {
  constructor (options = {}) {
    this.options = options
    this.router = options.Router
    this.postService = new options.PostService()
  }

  initialize () {
    this.router.get('/blog/posts', (req, res) => this.getAllPosts(req, res))
    this.router.post('/blog/posts', (req, res) => this.newPost(req, res))
    this.router.patch('/blog/posts/:id', (req, res) => this.updatePost(req, res))
  }


  async getAllPosts (req, res) {
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

  async updatePost (req, res) {
    try {
        const updatedPost = await this.postService.updatePostService(req.params.id, req.body)
        res.status(201).json(updatedPost)
    } catch (err) {
      res.status(404).json(err)
      throw err
    }
  }
}

module.exports = PostRoute
