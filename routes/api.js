const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.KEY;

/*
Checks to see if API key is present in environment variables, returns HTTP 500 if key is absent
Then will return HTTP 200 and a page of search results for movies that contain 'newton'
TODO - Check to see if pageNumber is a number, return HTTP 400 if it isn't a number
TODO - Check to see if OMDb returns 400 or 500 and return error corresponding to that
*/
exports.newtonSearch = async (req, res) => {
    if (!(typeof apiKey === 'string') || apiKey.length <= 0) {
        return res.status(500).json({error:'API Key was not provided in the backend. Please provide a key in the .env file'});
    }

    const pageNumber = req.params.pageNumber;
    const apiResponse = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=newton&type=movie&page=${pageNumber}`);
    return res.status(200).json({data: apiResponse.data});
}
