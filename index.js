const express = require('express');
const axios = require('axios');

const app = express();

app.get('/results', async (req, res) => {
	const result = await axios.get('http://www.omdbapi.com/?apikey=26cc215e&s=california');
	console.log(result.data.Search[0].Title);
	res.send('result');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));