const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')

require('dotenv').config()

const { PORT, REACT_APP_MONGODB_URI } = process.env
mongoose.connect(REACT_APP_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true  })

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//   next()
// })

// "scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)

app.listen(PORT, () => {
  console.log(`UP AND ALIVE ON PORT ${PORT}`)
})
