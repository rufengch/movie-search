const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('search');
});

app.get('/results', async (req, res) => {
	const {search} = req.query;
	// console.log('search:', search);
	const result = await axios.get(`http://www.omdbapi.com/?apikey=26cc215e&s=${search}`);
	// console.log(result.data.Search[0].Title);
	res.render('results', {data: result.data});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));