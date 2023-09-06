const router = require('express').Router();

const Ticket = require('./ticket-model');

router.get('/', async (req, res, next) => {
	try {
		const tickets = await Ticket.query();
		res.json(tickets);
	} catch (error) {
		next(error);
	}
});


router.post('/', async (req, res, next) => {
	const {Title, Desciption, Type, Price, Quantity, Event_id} = req.body;
	try {
		const newticket = await Ticket.query().insert({
			Title,
			Desciption,
			Type,
			Price,
			Quantity,
			Event_id
		})

		res.json(newticket);
	} catch (error) {
		next(error);
		
	}
});


module.exports = router;
