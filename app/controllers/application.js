import Ember from 'ember';

export default Ember.Controller.extend({
	location: Ember.inject.service(),
	userLocation: {
		// Default values
		lat: 34.21,
		lng: -118.04,
		addr: "Loading delivery address.."
	},
	actions: {
		setLocation() {
			this.get('location').getUserLocation(function(response) {
				this.set('userLocation', response);
				console.log(this.get('userLocation'));
			}.bind(this));
		},
		searchForShops(event) {
			event.preventDefault();
			let keywords = this.get('searchTerm');
			this.transitionToRoute('search', keywords);
		},
		insertNewline() {
			Ember.$("#submit-button").click();
		},
	},
	init: function() {
		this._super();
		this.send('setLocation');
	}
});