import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('polls', function() {
    this.route('poll', { path: '/:poll_id' });
    this.route('results', { path: '/:poll_id/results' });
  });
});

export default Router;
