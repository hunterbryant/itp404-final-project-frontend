import Ember from 'ember';

export default Ember.Route.extend({
	titleToken: "Details - Coffee Now!",
	model(params) {
		let shopID = params.id;
		let shops = this.modelFor("search");

		return shops.find(function(shop) {
			return shop.id === shopID;
		});
	}
});