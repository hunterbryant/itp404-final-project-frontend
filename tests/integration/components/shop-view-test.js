import {
	moduleForComponent,
	test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('shop-view', 'Integration | Component | shop view', {
	integration: true
});

test('it renders', function(assert) {
	// Set any properties with this.set('myProperty', 'value');
	// Handle any actions with this.on('myAction', function(val) { ... });

	this.render(hbs `{{shop-view}}`);

	assert.equal(this.$().text().trim(), '0.0mi');

	// Template block usage:
	this.render(hbs `
    {{#shop-view}}
      template block text
    {{/shop-view}}
  `);

	assert.equal(this.$().text().trim(), '0.0mi');
});