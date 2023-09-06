const { Model } = require('objection');


class Review extends Model {
	static get tableName() {
		return 'Review';
	}
}

module.exports = Review;
