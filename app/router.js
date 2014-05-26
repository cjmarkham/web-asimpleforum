var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
  this.resource('forum', function () {
    this.route('view', {
        path: '/:name/:id'
    });
  });

  this.resource('auth', function () {
    this.route('login');
  });
});

Router.reopen({
    location: 'history'
});

export default Router;
