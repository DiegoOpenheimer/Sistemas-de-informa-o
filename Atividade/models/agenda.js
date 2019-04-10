const contacts = new Array()

const getAll = () => contacts

const insert = contact => contacts.push(contact)

const find = id => contacts.find(v=>v.id.toString()===id.toString())

const edit = contact => {
	const index = contacts.map(v=>v.id.toString()).indexOf(contact.id.toString())
	if(index!==-1){
		contacts[ index ] = contact
	}
}

const remove = id => {
	const index = contacts.map(v=>v.id.toString()).indexOf(id.toString())
	if(index!==-1){
		contacts.splice(index, 1)
	}
}

module.exports = { getAll, insert, remove, find, edit }