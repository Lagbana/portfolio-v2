const Router = require('express').Router()

// Routes
const EmailRoute = require('./emailRoute')

// Services
const { EmailService } = require('../services')

// Initialize all routes
const initializeRoutes = app => {
  const routesArray = [new EmailRoute({ EmailService, Router })]

  routesArray.forEach(route => {
    route.initialize()
    app.use(route.router)
  })
}

module.exports = initializeRoutes
