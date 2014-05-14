window.Forums = Ember.Application.create();

Forums.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://api.asimpleforum.com:1337'
});