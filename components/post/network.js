const express = require('express')
const router = express.Router()
const controller = require('./controller')
const response = require('../../network/response')

router.get('/', (req, res) => {
  if (req.query.name) {
    controller.readUserMessages(req.query.name)
  } else {
    controller.readMessages().then()
  }
})

router.post('/', (req, res) => {
  controller
    .newMessage(req.body)
    .then((msg) => response.success(req, res, msg, 201))
    .catch((err) =>
      response.error(req, res, err, 400, 'No se trae el usuario')
    )
})

module.exports = router
