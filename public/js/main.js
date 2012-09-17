requirejs.config({

    baseUrl: 'assets',

    paths:{
        jquery:'js/libs/jquery/jquery-1.8.1.min',
        underscore:'js/libs/underscore/underscore-1.3.3.min',
        backbone:'js/libs/backbone/backbone-0.9.2.min',
        bootstrap:'js/libs/bootstrap/bootstrap-2.1.1.min',
        text:'js/libs/require/text',
        app:'js/app'
    },

    shim:{
        'backbone':{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        'underscore':{
            exports:'_'
        }
    }
});

requirejs(['app/router'], function (Router) {
    Router.initialize();
});