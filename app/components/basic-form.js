import Ember from 'ember';
import FormGroupComponent from 'ember-idx-forms/form';

export default FormGroupComponent.extend({
  labelSave: 'Save',
  labelSaving: 'Saving',
  labelSaved: 'Saved',

  isSaving: false,
  isSaved: false,

  errorMessage: '',

  validationNeeded: true,

  submit: function(e) {
    var self = this;
    self.set('errorMessage', '');

    if (e) {
      e.preventDefault();
    }

    var defer = Ember.RSVP.defer();

    defer.promise.then(function(){
      self.set('isSaving', false);
      self.set('isSaved', true);
    }).catch(function(error){
      if(error.status==403){
        self.set('errorMessage', 'Your current password is invalid');
      }

      self.set('isSaving', false);
    });

    if (self.get('validationNeeded')) {
      return this.get('model').validate()
        .then(function() {
          self.set('isSaving', true);
          return self.get('targetObject').send(self.get('action'), defer);
        })
        .catch(function() {
          self.showErrors(self);
        });
    } else {
      self.set('isSaving', true);
      return self.get('targetObject').send(self.get('action'), defer);
    }
  },

  showErrors: function (view) {
    var self = this;
    jQuery.each(view.childViews, function (key, validation) {
      if(validation.errors.length > 0){
        validation.set('canShowErrors', true);
      }
      if (validation._childViews) {
        self.showErrors(validation);
      }
    });
  },
});
