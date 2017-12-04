import Ember from 'ember';

export default Ember.Route.extend({
	toast: Ember.inject.service(),
	title: '404 - Coffee, now!',
	init: function() {
		this._super();
		var toast = this.get('toast');
		toast.error('You have reached a nonexistent page!', 'Uh oh! - 404');
	}
});