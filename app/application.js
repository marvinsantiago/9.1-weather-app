import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    currentWeather: function(lag, lng) {
      this.transitionTo('weather', lag, lng);
    },
  }
});
