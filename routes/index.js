const Router = require('express').Router()

// Routes
const PostRoute = require('./postRoute')

// Services
const { PostService } = require('../services')

// Initialize all routes
const initializeRoutes = app => {
  const routesArray = [new PostRoute({ PostService, Router })]

  routesArray.forEach(route => {
    route.initialize()
    app.use(process.env.PREFIX, route.router)
  })
}

module.exports = initializeRoutes
