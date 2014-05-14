ASF.Router.map(function () {
    
    this.resource('forums', {
        path: '/'
    }, function () {

        this.route('view', {
            path: '/:id'
        });
        
    });
    
});

ASF.ForumsRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('forum');
    }
});

ASF.ForumsIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor('forums');
    }
});

ASF.ForumsViewRoute = Ember.Route.extend({
    model: function (params) {
        console.log(params);
        return this.store.find('forum', params.id)
    }
});