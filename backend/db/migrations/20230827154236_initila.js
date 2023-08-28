const Knex = require('knex');

function addDefaultColumns(table) {
	table.timestamps(false, true);
	table.datetime('deleted-at');
}

function createNameTable(knex, table_name) {
	return knex.schema.createTable(table_name, (table) => {
		table.increments().notNullable();
		table.string('name').notNullable().unique();
		addDefaultColumns(table);
	});
}

function referencess(table, table_name){
	//TODO - create referencess 
	let fname = `${table_name}_id`;
	let t = `${table_name}.${table_name}ID`;
	table.integer(fname).unsigned();
	table.foreign(fname).references(t);
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await Promise.all([
  	knex.schema.createTable('User', (table) => {
  		table.increments('UserID').notNullable().primary();
			table.string('Username').notNullable();
			table.string('Email').notNullable().unique();
			table.string('Password').notNullable();
			table.timestamps(false, true);
  	})
  ]);

	await knex.schema.createTable('Event', (table) => {
		table.increments('EventID').primary();
		table.string('Title').notNullable();
		table.text('Description');
		table.string('Venue').notNullable();
		table.string('Category').notNullable();
		// TODO create references to OrginizortID
		referencess(table, 'User');
		table.timestamps(false, true);
	});

	await knex.schema.createTable('Ticket', (table) => {
		table.increments('TicketID').notNullable().primary();
		table.string('Title').notNullable();
		table.text('Description');
		table.string('Type').notNullable();
		table.float('Price').notNullable();
		table.integer('Quantity').notNullable();
		//TODO create references to EVENTID
		referencess(table, 'Event');
	});

	await knex.schema.createTable('Cart', (table) => {
		table.increments('CartID').notNullable().primary();
		//TODO create // to UserID
		referencess(table, 'User');
	})

	await knex.schema.createTable('CartItem', (table) => {
		table.increments('CartItemID').notNullable().primary();
		//TODO create // to CardID
		referencess(table, 'Cart');
		//TODO create // to TicketID
		referencess(table, 'Ticket');
		table.integer('Quantity').notNullable();
	})

	await knex.schema.createTable('Purchase', (table) => {
		table.increments('PurchaseID').notNullable().primary();
		//TODO create // to UserID
		referencess(table, 'User');
		table.timestamps('PurchasedDate');
		table.float('TotalAmount').notNullable();
		
	})

	await knex.schema.createTable('PurchaseItem', (table) => {
		table.increments('PurchaseItemID').notNullable().primary();
		//TODO create // to PurchaseID
		referencess(table, 'Purchase');
		//TODO create // to TicketID
		referencess(table, 'Ticket');
		table.integer('Quantity').notNullable();

	})

	await knex.schema.createTable('Review', (table) => {
		table.increments('ReviewID').notNullable().primary();
		//TODO create // to UserID
		referencess(table, 'User');
		//TODO create // to EventID
		referencess(table, 'Event');
		table.integer('Rating').notNullable();
		table.text('Comment');
	})

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await Promise.all([
  	'User',
		'Event',
		'Purchase',
		'PurchaseItem',
		'Ticket',
		'Review',
		'Cart',
		'CartItem'
  ].map(tableName => knex.schema.dropTable(tableName)));
};
