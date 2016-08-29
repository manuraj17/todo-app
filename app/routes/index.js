import Ember from 'ember';
/*
let todos = [{
  id: 1,
  title: "Finish todo app",
  priority: "high"
}, {
  id: 2,
  title: "Create a slack bot",
  priority: "medium"
}, {
  id: 3,
  title: "Get some sleep",
  priority: "low"
}];
*/

export default Ember.Route.extend({
  model(){
     // return todos;
     return this.store.findAll('todo');
  },
  actions: {
    renderNew(){
      this.transitionTo('new');
    }
  }
});
