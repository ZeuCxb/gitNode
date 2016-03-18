import mongoose from 'mongoose'
var Schema = mongoose.Schema

module.exports = () => {
	var usersSchema = new Schema({
		name: {
			type: String,
			lowercase: true,
			index: {
				unique: true
			}
		},
	    data: {
	    	type: Object
	    }
	})

	return mongoose.model('users', usersSchema)
}