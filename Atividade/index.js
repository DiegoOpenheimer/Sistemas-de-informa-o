const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, err=>{
	if (err) {
		console.log('error to start server', err)
	} else {
		console.log('server running on port: ', PORT)
	}
})