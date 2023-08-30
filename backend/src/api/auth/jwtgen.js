const jwt = require('jsonwebtoken');

const jwtgen = (user_id) => {
	const payload = {
		user: {
			id: user_id
		}
	}

	return jwt.sign(payload, 'somesecret', {expiresIn: '1hr'});
};


module.exports = jwtgen;
