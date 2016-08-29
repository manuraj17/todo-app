import { test } from 'qunit';
import moduleForAcceptance from 'todo-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list-todos');

test('should link to about', function(assert){
  visit('/');
  click('a:contains("About")');
  andThen(function(){
    assert.equal(currentURL(), '/about', 'should navigate to contact');
  });
});

test('shoud link to contact', function(assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

});

test('adding new Todo', function(assert){
  visit('/new');
  // fillIn('textarea', 'Make some coffee');
  // fillIn('input', 'high');
  // click('button');
  // visit('/');
  // andThen(()=> assert.equal(find('.listing h3').text(), 'Make some coffee'));
});

test('should list available todos', function(assert){
  visit('/');
  andThen(function(){
    assert.equal(find('.listing').length,0,'should see 3 todos');
  });
});

test('deleting the created record', function(assert){
  // visit('/');
  // andThen(()=> assert.equal(find('.listing h3').text(), 'Make some coffee'));
  // click('button');
  // andThen(()=> assert.equal(find('.listing').length,0,'should see  todos'));
});

test('visiting /', function(assert){
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
