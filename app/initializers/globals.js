import boardSettings from 'appkit/config/board';

export default {
    name: 'globals',

    initialize: function (container, application) {
        application.register('globals:board', boardSettings, {
            singleton: true
        });

        application.inject('controller', 'board', 'globals:board'); 
        application.inject('route', 'board', 'globals:board'); 
    }
};