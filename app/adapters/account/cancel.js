import ApplicationAdapter from '../application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, record) {
    var json = {};
    var serializer = store.serializerFor(type.typeKey);
    serializer.serializeIntoHash(json, type, record);

    return this.ajax(this.buildURL(type.typeKey, ''), "DELETE", { data: json });
  },
});
