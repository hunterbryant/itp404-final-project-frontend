import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
	getDeliveryTime(pickupAddr, deliveryAddr) {
		$.ajax({
				url: "https://api.postmates.com/v1/customers/cus_LV3iQljOY8vQOV/delivery_quotes",
				type: "POST",
				headers: {
					"Cookie": "__cfduid=d2ab6e3e00dec6ae7b0e8e597db468b751510029405",
					"Authorization": "Basic NGJlMjhmODctYmUyOS00ZmY2LWJmMTItYjM1YTYyNDg3MDM0Og==",
					"Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
				},
				dataType: 'jsonp',
				contentType: "application/x-www-form-urlencoded",
				data: {
					"pickup_address": `${pickupAddr}`,
					"dropoff_address": `${deliveryAddr}`,
				},
			})
			.then(function(data) {
				return data.dropoff_eta;
			});
	}
});