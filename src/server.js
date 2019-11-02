require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)

app.use(cors())
app.use(express.json)

app.get('/', (request, response) => {
    return response.json({
        message: 'ok'
    })
})

server.listen(process.env.PORT || 4000)