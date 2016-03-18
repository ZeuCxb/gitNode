module.exports = app => {
	app.get('/',
		(req, res) => {
			res.send('Git Api App')
		}
	)
}