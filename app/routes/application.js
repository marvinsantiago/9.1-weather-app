import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    currentLocation: function(lag, lng) {
      this.transitionTo('weather', lag, lng);
    },
  }
});
