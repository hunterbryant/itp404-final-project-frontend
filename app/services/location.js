import Ember from 'ember';

export default Ember.Service.extend({
	toast: Ember.inject.service(),
	geolocation: Ember.inject.service(),
	gMap: Ember.inject.service(),
	userLocation: {
		// Default values
		lat: 34.21,
		lng: -118.04,
		addr: "Loading current address.."
	},
	updatedLocation: false,
	getUserLocation(callback) {
		this.get('geolocation').getLocation().then(function(geoObject) {
			// Get first geocode address
			let templat = parseFloat(geoObject.coords.latitude.toFixed(4));
			let templng = parseFloat(geoObject.coords.longitude.toFixed(4))

			this.get('gMap')
				.geocode({
					lat: templat,
					lng: templng
				})
				.then((geocodes) => {
					this.set('userLocation', {
						lat: templat,
						lng: templng,
						addr: geocodes[0].formatted_address
					});
					callback(this.get('userLocation'));
					this.set('updatedLocation', true);
					var toast = this.get('toast');
					toast.success(`You have been located at ${templat}, ${templng}`);
				});
		}.bind(this));
	}
});