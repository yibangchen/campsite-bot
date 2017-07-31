var request = require('request')

// Campground as National/ State;
// The Campsite Search API is designed to return information about campsites within 
// a given campground that match a set of filters like ammenities 
// (RV friendly, electricity, hunting, fishing).

activity_key = '8tkvsxun2uh6jm26vskemegy' //500,000 per day
campground_key = 'zdhqz6s4d47cmutamqtkp5ep'
uri = 'http://api.amp.active.com/camping/campgrounds?pstate=CA&amenity=4004&api_key='


const BASE_URL = "http://www.recreation.gov"
const UNIF_SEARCH = "/unifSearch.do"
const UNIF_RESULTS = "/unifSearchResults.do"

request(uri+campground_key, function(err, res, body){
	console.log('statusCode: ', res && res.statusCode);
})