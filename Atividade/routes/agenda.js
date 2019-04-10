const router = require('express').Router()
const contactsController = require('../controller/agenda.js')

router.get('/', contactsController.getContacts)

router.get('/create', contactsController.create)
router.post('/create', contactsController.createContact)

router.get('/edit', contactsController.edit)
router.get('/edit/:id', contactsController.editContact)
router.post('/edit', contactsController.handlerEditContact)

router.get('/remove/:id', contactsController.remove)


module.exports = router