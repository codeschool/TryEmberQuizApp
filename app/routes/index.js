import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createPoll(poll) {
      this.get('store').createPoll(poll);
      this.transitionTo('polls.poll', poll);
    }
  },

  model() {
    return this.get('store').newPoll();
  },

  store: Ember.inject.service()
});
