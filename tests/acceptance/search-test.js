import {
	test
} from 'qunit';
import moduleForAcceptance from 'coffee-now/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | search');

test('Search for a starbucks', function(assert) {
	visit('/');
	fillIn('input', 'starbucks');
	click('button');
	andThen(function() {
		assert.equal(currentURL(), '/search/starbucks');
	});
});