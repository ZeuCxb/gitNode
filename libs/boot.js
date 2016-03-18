module.exports = app => {
	app.listen(app.get('port'), () => {
		console.log(`Example runing on port ${app.get('port')}`)
	})
}
