import https from 'https'

module.exports = app => {
	app.get('/users/:username',
		(req, res) => {
			var username = req.params.username.toLowerCase()

			let Users = app.models.users
			
			Users.findOne({name: username}, (err, doc) => {
				if(doc == null) {
					let options = {
						host:'api.github.com',
						path: '/users/' + username,
						method: 'GET',
						headers: {'User-Agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
					}

					https.get(options, (r) => {
						var body = '';
						r.on('data', (data) => {
						    body += data
						})

						r.on('end', () => {
		    				let json = JSON.parse(body)

		    				let user = new Users({
		    					name: username,
								data: json
							})

							user.save((err, u) => {
								if (err) return console.log(err)
							})

		    				res.send(json)
		    			})
					})
				} else {
					res.send(doc.data)
				}
			})
		}
	)
}