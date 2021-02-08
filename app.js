const express = require('express');
const {newtonSearch} = require("./routes/api");

const app = express();

/*Route to query OMDb for a page of movies that contain 'newton' in the title*/
app.get('/newtonMovie/:pageNumber', newtonSearch);

module.exports = app;