const router = require('express').Router();

const Review = require('./review-model');

router.get('/', async (req, res, next) => {
	try {
		const reviews = await Review.query();
		res.json(reviews);
	} catch (error) {
		next(error);
	}
});


router.post('/', async (req, res, next) => {
	const {User_id, Event_id, Rating, Comment} = req.body;
	try {
		const newreview = await Review.query().insert({
			User_id,
			Event_id,
			Rating,
			Comment
		});

		res.json(newreview);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
