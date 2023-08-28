const express = require('express');
const auth = require('./src/api/auth/auth-router');
const user = require('./src/api/users/user-route');
const middlewares = require('./src/api/middlewares');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send("hellow");
});


app.use('/api/users', user);
app.use('/api/auth', auth);


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
console.log("tttttt");
const port = 5000;
app.listen(port, () => console.log(`Server has started on port: ${port}`))
