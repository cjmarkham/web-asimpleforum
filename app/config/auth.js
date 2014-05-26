export default Ember.Object.extend({
    init: function () {
        this._super();

        var token = $.cookie('token');
        var parts = token.split('-');

        var userId = token[0];
        token = token[1];

        if (!Ember.usEmpty(token) && !Ember.isEmpty(userId))
        {
            return this.authenticate(userId, token);
        }
    },

    authenticate: function (userId, token) {
        var user = User.find(userId);

        
    }
})