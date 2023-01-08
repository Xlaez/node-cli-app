const { Schema, model } = require('mongoose');

const schema = new Schema({
	fistname: {
		type: String,
	},
	lastname: {
		type: String,
	},
	email: {
		type: String,
	},
});

module.exports = model('Customer', schema);
