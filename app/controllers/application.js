import Ember from 'ember';

export default Ember.Controller.extend({
	title: function(tokens) {
		return tokens.join(' - ') + ' - Coffee Now';
	},
	location: Ember.inject.service(),
	userLocation: {
		// Default values
		lat: 34.07,
		lng: -118.3,
		addr: "Loading delivery address.."
	},
	actions: {
		setLocation() {
			this.get('location').getUserLocation(function(response) {
				this.set('userLocation', response);
				console.log(response);
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