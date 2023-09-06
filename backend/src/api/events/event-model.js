const { Model } = require('objection');


class Event extends Model {
	static get tableName() {
		return 'Event';
	}
}

module.exports = Event;
