const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');


const auth = require('./src/api/auth/auth-router');
const user = require('./src/api/users/user-route');
const event = require('./src/api/events/event-route');
const ticket = require('./src/api/ticket/ticket-route');
const review = require('./src/api/review/review-route');

const middlewares = require('./src/api/middlewares');

const app = express()
app.use(express.json())
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));


app.get('/', (req, res) => {
	res.send("hellow");
});


app.use('/api/users', user);
app.use('/api/auth', auth);
app.use('/api/event', event);
app.use('/api/ticket', ticket);
app.use('/api/review', review);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
console.log("tttttt");
const port = 5000;
app.listen(port, () => console.log(`Server has started on port: ${port}`))
