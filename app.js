// Using dotenv module
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Router
const routes = require('./routers')
app.use(routes)

// ERROR Handlers
const ErrorHandler = require('./middleware/ErrorHandler')
app.use(ErrorHandler)

module.exports = app
