const db = require('../../../db');


module.exports = {
	find(){
		return db('User').select();
	}
};
