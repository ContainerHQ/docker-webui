import Ember from 'ember';

export default Ember.Controller.extend({
  containersCount: function() {
    return this.get('model.length');
  }.property('model.length')
  // queryParams: ['all', 'page', 'perPage'],
  // all: false,
  // perPage: 10,
  // page: 1,
  //
  // pagesCount: function() {
  //   let containersCount = this.get('model.length'),
  //     perPage = this.get('perPage');
  //
  //   return containersCount >= perPage ? containersCount / perPage : 1;
  // }.property('model.length', 'perPage'),
  //
  // containers: function() {
  //   let perPage = this.get('perPage'),
  //     currentPage = (this.get('page') - 1),
  //     start = currentPage * perPage;
  //
  //   return this.get('model').slice(start, start + perPage);
  // }.property('model', 'page', 'perPage')
});
