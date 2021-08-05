const express = require('express')
const router = express.Router()

const Users = require('../models/User')

router.use('/', (req, res, next) => {
    Users.find()
    .then(users => res.json(users))
    .catch(e => res.status(400))
})

module.exports = router