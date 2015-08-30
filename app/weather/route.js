import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var lat = params.lat;
    var lng = params.lng;
    return Ember.$.ajax('http://mighty-lowlands-5553.herokuapp.com/' + lat + ',' + lng);
  }
});
