import Ember from 'ember';

export default Ember.Controller.extend({
   actions:{
    remove(todo) {
      todo.destroyRecord().then(()=>{
        // alert("Todo has been removed");
        // this.transitionToRoute('index');
      });
    }
  }

});
