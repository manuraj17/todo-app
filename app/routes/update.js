import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition){
    return this.store.find('todo', params.todo);
  },
  setupController(controller,model){
    this.controllerFor('new').setProperties({isNew:false, newTodo:model});
  },
  renderTemplate(){
    this.render('new');
  }
});
