const { Model } = require('objection');


class Ticket extends Model {
	static get tableName() {
		return 'Ticket';
	}
}

module.exports = Ticket;
