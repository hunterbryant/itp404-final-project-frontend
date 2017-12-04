import Ember from 'ember';

export function formatDistance(value) {
	let conversion = 0.00062137;
	let convertedVal = (value * conversion).toFixed(1);

	return `${convertedVal}mi`;
}

export default Ember.Helper.helper(formatDistance);