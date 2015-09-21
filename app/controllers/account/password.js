import Ember from 'ember';
import errorHandler from '../../utils/errorHandler';

export default Ember.Controller.extend({
  actions: {
    submit: function(defer) {
      let self = this;

      this.get('model').save()
      .then(() => {
        defer.resolve();
      })
      .catch(response => {
        errorHandler(self);
        defer.reject(response.errors[0]);
      });
    }
  }
});
