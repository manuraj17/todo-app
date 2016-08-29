import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

moduleForComponent('todo-filter', 'Integration | Component | todo filter', {
  integration: true
});

const ITEMS = [{priority: 'high'}, {priority: 'medium'}, {priority: 'low'}];
const FILTERED_ITEMS = [{priority: 'high'}];

test('should initially load all listings', function(assert){

  this.on('filterByPriority', (val) => {
    if ( val === '') {
      return  RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#list-filter filter=(action 'filterByPriority') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="priority">
          {{item.priority}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
      `);

  // The keyup event here should invoke an action that will cause the list to be filtered
  this.$('.list-filter input').val('Hig').keyup();

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.priority').length, 3);
    assert.equal(this.$('.priority').first().text().trim(), 'San Francisco');
  });
});
