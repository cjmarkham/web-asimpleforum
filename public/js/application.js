window.ASF = Ember.Application.create();

ASF.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://api.asimpleforum.com:1337'
});