require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const ItemController = require('./controller/ItemController.js')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json)

app.get('/', (request, response) => {
    return response.json({
        message: 'ok'
    })
})

app.get('/items', ItemController.index)

server.listen(process.env.PORT || 4000)