import Ember from 'ember';

export default Ember.Controller.extend({
  isNew: true,
  newTodo: {},
  actions: {
    saveTodo() {
      console.log(this.get('isNew'));
      console.log(this.get('newTodo'));
      let newTodo = this.get('newTodo');
      if(this.get('isNew')){
        console.log("A new record");
        let todo = this.store.createRecord('todo', newTodo);
        todo.save().then(()=>{
          this.set('newTodo', {});
          this.transitionToRoute('index');
        },{
        });
      } else {
        console.log(newTodo.get('title'));
        this.store.findRecord('todo',newTodo.id).then((todo)=>{
          todo.set('title', newTodo.get('title'));
          todo.set('priority', newTodo.get('priority'));
          todo.save().then(() => {
            this.set('newTodo', {});
            this.transitionToRoute('index');
          });
        });
      }
      //  timestamp: new Date().getTime()
    }
  }
});
