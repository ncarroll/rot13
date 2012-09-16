requirejs.config({

    paths:{
        jquery:'libs/jquery/jquery-1.8.1.min',
        underscore:'libs/underscore/underscore-1.3.3.min',
        backbone:'libs/backbone/backbone-0.9.2.min',
        bootstrap:'libs/bootstrap/bootstrap-2.1.1.min',
        text:'libs/require/text',
        app:'app/app'
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

requirejs(['app'], function (App) {
    App.initialize();
});