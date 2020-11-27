const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Working!')
})

// Runs Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
