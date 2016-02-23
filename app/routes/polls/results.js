import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').getPollById(params.poll_id);
  },

  store: Ember.inject.service()
});
