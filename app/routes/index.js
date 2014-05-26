export default Ember.Route.extend({
  model: function() {
    return this.store.find('forum');
  },
  enter: function () {
    document.title = 'Home - ' + this.board.title;
  }
});