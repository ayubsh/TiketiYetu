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

function references(table, table_name){
	//TODO - create references 
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
		// TODO create reference to OrginizortID
		table.timestamps(false, true);
	});

	await knex.schema.createTable('Ticket', (table) => {
		table.increments('TicketID').notNullable().primary();
		table.string('Title').notNullable();
		table.text('Description');
		table.string('Type').notNullable();
		table.float('Price').notNullable();
		table.integer('Quantity').notNullable();
		//TODO create reference to EVENTID
	});

	await knex.schema.createTable('Cart', (table) => {
		table.increments('CardID').notNullable().primary();
		//TODO create ref to UserID
	})

	await knex.schema.createTable('CartItem', (table) => {
		table.increments('CartItemID').notNullable().primary();
		//TODO create ref to CardID
		//TODO create ref to TicketID
		table.integer('Quantity').notNullable();
	})

	await knex.schema.createTable('Purchase', (table) => {
		table.increments('PurchaseID').notNullable().primary();
		//TODO create ref to UserID
		table.timestamps('PurchasedDate');
		table.float('TotalAmount').notNullable();
		
	})

	await knex.schema.createTable('PurchaseItem', (table) => {
		table.increments('PurchaseItemID').notNullable().primary();
		//TODO create ref to PurchaseID
		//TODO create ref to TicketID
		table.integer('Quantity').notNullable();

	})

	await knex.schema.createTable('Review', (table) => {
		table.increments('ReviewID').notNullable().primary();
		//TODO create ref to UserID
		//TODO create ref to EventID
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
