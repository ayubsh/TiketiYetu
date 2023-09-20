const express = require('express');
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');

const router = express.Router();

const User = require('../users/user-model');
const jwtgen = require('./jwtgen');
const authorize = require('./authorize');

router.get('/', async (req, res) => {
	try {
		const users = await User.query();
		res.json(users);
	} catch (error) {
		next(error);
	}
});

router.post('/register', async (req, res, next) => {

	const {Username, Email, Password} = req.body;
	try {
		const userexist =  await User.query().where('Email', Email);

		console.log(userexist.length);
		if (userexist.length){
			const error = new Error("Email in use");
			res.status(403);
			throw error;
		}
		const salt = await bcrypt.genSalt(10);
		const hashedpassword = await bcrypt.hash(Password, salt);
	
		const newUser = {
			"Username": Username,
			"Password": hashedpassword,
			"Email": Email
		}
		
		const inserteduser = await User.query().insert(newUser);

		const jwtToken = jwtgen(inserteduser.id);
		return res.json({jwtToken});
	} catch (error) {
		next(error);
	}
});

router.post('/login', async (req, res, next) => {
	const {Email, Password} = req.body;

	try {
		const userexist = await User.query().where("Email", Email).first();

		if (userexist.length === 0){
			const error = new Error("Email does not exist");
			res.status(401);
			throw error
		}
		const validpassword = await bcrypt.compare(Password, userexist.Password);
		if (!validpassword){
			const error = new Error("Invalid Password");
			res.status(403);
			throw error;
		}
		const jwtToken = jwtgen(userexist.id);
		return res.json({jwtToken});
	} catch (error) {
		next(error);
	}
});

router.post('/verify', authorize, (req, res, next) => {
	try {
		res.json(true);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
