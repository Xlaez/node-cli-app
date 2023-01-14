const { connect, default: mongoose } = require('mongoose');
require('dotenv').config({});

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
const db = connect(process.env.MONGO_URI, {
	dbName: 'customer-cli',
});

const Customer = require('./models/customer');

// Add customer
const addCustomer = async (customer) => {
	const newCustomer = await Customer.create(customer);
	if (newCustomer) {
		console.info('New Customer Added! ');
	}
};

// Find customer by name
const findCustomer = async (name) => {
	const search = {
		$or: [
			{ firstname: { $regex: name, $options: 'i' } },
			{ lastname: { $regex: name, $options: 'i' } },
		],
	};

	const customer = await Customer.find(search);
	if (customer) {
		console.info(customer);
		console.info(`${customer.length} matches ${name}`);
	} else {
		console.info(`Did not find any customer that matches ${name}`);
	}
};

module.exports = {
	addCustomer,
	findCustomer,
};
