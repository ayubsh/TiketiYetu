const express = require('express');
//const sequelize = require('./src/models/db');
//const authrouter = require('./src/routes/authroute');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send("hellow");
});

//app.use('/auth', authrouter);

//(async () => {
	//try {
		//await sequelize.sync(
			//{force: false}
		//)
		console.log("tttttt");
		const port = 5000;
		app.listen(port, () => console.log(`Server has started on port: ${port}`))
//	} catch (error) {
	//	console.log(error);
	//}
//})();

