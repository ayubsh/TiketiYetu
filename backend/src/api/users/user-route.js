const express = require('express');
const router = express.Router();


const User = require('./user-model.js');
const queries = require('./user-queries');


router.get('/', async (req, res) => {
//	const users = await queries.find();
	const users = await User.query();
	console.log('users is', users);
	res.json(users);
});

router.post('/singup', async (req, res) => {
	const {Username, Email, Password} = req.body;
	const inserted = await User.query().insert({
		Username,
		Email,
		Password
	});

	console.log('inserted is', inserted);
	res.json(inserted);
});

module.exports = router;
