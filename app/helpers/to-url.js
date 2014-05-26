export default Ember.Handlebars.makeBoundHelper(function (string) {
    return string.replace(/\s/g, '-').toLowerCase();
});