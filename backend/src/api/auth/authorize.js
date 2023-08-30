const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
	const token = req.header("jwt_token");

	if (!token){
		const error = new Error("unauthorize");
		res.status(401);
		throw error;
	}

	try {
		const verify = jwt.verify(token, 'somesecret');

		req.user = verify.user;
		next();
	} catch (error) {
		next(error);
	}ycatch
	tr
};


module.exports = authorize;
