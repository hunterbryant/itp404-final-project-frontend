import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
	findNearestShops(latlng, query) {
		return $.ajax({
				url: "https://api.foursquare.com/v2/venues/search",
				type: "GET",
				data: {
					"client_id": "JNNALOXXOEG4JC12NSO0EO0RTY3EAYF1R2SIOFV1B0MQNYH5",
					"client_secret": "QREUMPXT01B414P002RRITBYQL5EKC1VEEKRFCSE2EMIWYBV",
					"ll": `${latlng}`,
					"intent": "checkin",
					"query": `${query}`,
					"limit": "10",
					"v": "20171203",
					"categoryId": "4bf58dd8d48988d1e0931735"
				},
				dataType: 'jsonp',
				headers: {
					"Authorization": "Basic Og==",
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
				'cache': true
			})
			.then(function(data) {
				return data.response.venues;
			});
	}
});