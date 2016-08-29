import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  priority: DS.attr()
});
