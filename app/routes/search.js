import Ember from 'ember';

export default Ember.Route.extend({
	location: Ember.inject.service(),
	geolocation: Ember.inject.service(),
	postmates: Ember.inject.service(),
	foursquare: Ember.inject.service('foursquare'),
	model(params) {
		let lat = this.get('location').get('userLocation.lat');
		let lng = this.get('location').get('userLocation.lng');
		let string = lat.toFixed(2) + "," + lng.toFixed(2);

		let fourSquareArray = this.get('foursquare').findNearestShops(string, params.keywords);

		return fourSquareArray;
	}
});