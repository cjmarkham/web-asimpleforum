export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('forum', params.id);
  },
  activate: function () {
    document.title = this.modelFor('forum.view').get('name') + ' - ' + this.board.title;
  },
  serialize: function (model) {
    return {
        name: model.get('name').replace(/\s/g, '-'),
        id: model.id
    };
  }
});