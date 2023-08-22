const express = require("express");
const app = express();

const authrouter = require("./src/routes/authroute");

app.get('/', (req, res) => {
	res.send("hell, seaman");
});


app.use('/auth', authrouter);

const port = 5000;
app.listen(port, () => {
	console.log(`listening on port: {port}`);
})
