const express = require('express')
const cors = require('cors')

const contactRoute = require('./route/contactRoute')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', contactRoute)

app.listen(5000, (err) => {
  console.log('Listening')
})
