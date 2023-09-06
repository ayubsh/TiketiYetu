const express = require('express')
const router = express.Router();

const Event = require('./event-model');

router.get('/', async (req, res, next) => {
	try {
		const events = await Event.query();
		res.json(events);
	} catch (error) {
		next(error);
	}
});

router.post('/', async (req, res, next) => {
	const {Title, Description, Venue, Category, User_id} = req.body;
	try {
		const newevent = await Event.query().insert({
			Title,
			Description,
			Venue,
			Category,
			User_id
		})
		res.json(newevent);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
