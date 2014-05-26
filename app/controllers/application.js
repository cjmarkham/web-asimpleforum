export default Ember.Controller.extend({

    failedLogin: false,
    processing: false,

    actions: {
        login: function () {
            this.set('processing', true);

            var self = this;

            $.post('http://api.asimpleforum.com:1337/login', {
                username: this.get('username'),
                password: this.get('password')
            }).done(function (user) {
                self.setProperties({
                    failedLogin: false,
                    processing: false
                });

                Ember.set('App.user', user);
            }).fail(function () {
                self.setProperties({
                    failedLogin: true,
                    processing: false
                });
            });
            
        }
    }

});