Forums.Router.map(function () {
    this.resource('forums', {
        path: '/'
    });
});

Forums.ForumsRoute = Ember.Route.extend({
    model: function () {
        var data = this.store.find('forum');
        console.log(data);
        return data;
    }
});