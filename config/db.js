import mongoose from 'mongoose'

module.exports = app => {
	mongoose.connect('mongodb://localhost/users/')
  	mongoose.connection.on('connected', () => {
    	return console.log('Mongoose conectado')
  	})
  	mongoose.connection.on('disconnected', () => {
    	return console.log('Mongoose desconectado')
  	})
  	mongoose.connection.on('error', (error) => {
    	return console.log('Mongoose erro de conexão: ' + error)
  	})
  	return process.on('SIGINT', () => {
    	return mongoose.connection.close(() => {
      		console.log('Mongoose desconectado por termino da aplicação')
      		return process.exit(0)
    	})
  	})
};
