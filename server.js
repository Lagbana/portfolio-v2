// Important dependencies
require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const initializeRoutes = require('./routes')

// Initialize express and set up middlewares
const app = express()
app.use(cors())
app.use(logger('dev'))

// Connect to Mongo DB
mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  })
)
app.use(bodyParser.json())

initializeRoutes(app)


// Access react app
app.use(express.static(path.join(__dirname, 'client/build')))

// Display the index page
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
