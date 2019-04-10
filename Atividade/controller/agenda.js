const agendaModel = require('../models/agenda.js')

const getContacts = (_, res) => {
	const contacts = agendaModel.getAll()
	res.render('index', { contacts })
}

const create = (_, res) => {
	res.render('insert')
}

const edit = (_, res) => {
	res.render('edit')
}

const createContact = (req, res) => {
	req.body.id = new Date().getTime()
	agendaModel.insert(req.body)
	res.redirect('/agenda')
}

const editContact = (req, res) => {
	const id = req.params.id
	const contact = agendaModel.find(id)
	res.render('edit', { contact })
}

const handlerEditContact = (req, res) => {
	agendaModel.edit(req.body)
	res.redirect('/agenda')
}

const remove = (req, res) => {
	const id = req.params.id
	agendaModel.remove(id)
	res.redirect('/agenda')
}

module.exports = { getContacts, create, edit, createContact, remove, editContact, handlerEditContact }