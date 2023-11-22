const express = require("express");
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get("/messages", (req,res) => {
	res.json({message: "Hi this is from the backend! :)"});
});

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../build','index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});