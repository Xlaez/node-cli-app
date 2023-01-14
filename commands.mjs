import { program } from 'commander';
import inquire from 'inquirer';
import { addCustomer, findCustomer } from './index.js';

program.version('1.0.0').description('Customer CLI');

const questions = [
	{
		type: 'input',
		name: 'firstname',
		message: 'Customer FIrst Name',
	},
	{
		type: 'input',
		name: 'lastname',
		message: 'Customer Last Name',
	},
	{
		type: 'input',
		name: 'email',
		message: 'Customer Email',
	},
];

// program
// 	.command('add <firstname> <lastname> <email>')
// 	.alias('a')
// 	.description('Add new customer')
// 	.action((firstname, lastname, email) => {
// 		addCustomer({ firstname, lastname, email });
// 	});

program
	.command('add')
	.alias('a')
	.description('Add a new customer')
	.action(() => {
		inquire.prompt(questions).then((answers) => addCustomer(answers));
	});

program
	.command('find <name>')
	.alias('f')
	.description('Find customer by name')
	.action((name) => findCustomer(name));
program.parse(process.argv);
