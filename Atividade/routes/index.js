const router = require('express').Router()
const homeController = require('../controller/index')

router.get('/', homeController.home)

router.use('/agenda', require('./agenda'))

router.use('**', (_, res) => res.redirect('/'))

module.exports = router