const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
	{
    	name:  String, // String is shorthand for {type: String}
    	password: String
	},
	{
		timestamps: 
		{ 
			createdAt: 'created_at', 
			updatedAt: 'updated_at' 
		}
	}
)

const User = mongoose.model('User', schema)

module.exports = User