const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const usersRouter = require('./routes/Users')

app.use(cors())

mongoose
    .connect(require('./config/index').MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Mongo is connected successfully!'))
    .catch((err) => console.log(err))


// app.get('/api', (req, res) => {
//     res.send('<h1>Hello from node</h1>')
// })

app.use(express.json({extended: false}))

app.use('/', usersRouter)



const port = require('./config/index').PORT

app.listen(port, () => console.log(`Server is listening on ${port}`))