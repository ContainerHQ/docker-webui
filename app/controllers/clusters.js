import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function(cluster) {
      cluster.destroyRecord();
    }
  }
});
