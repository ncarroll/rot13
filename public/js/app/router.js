define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/show'
], function($, _, Backbone, ShowHomeView) {
    var Router = Backbone.Router.extend({
        routes: {
            ""     : "showHome",
            "about": "showAbout",
            '*actions': 'defaultAction'
        },

        showHome: function(){
            ShowHomeView.render();
        },

        showAbout: function(){
            ShowAboutView.render();
        },

        defaultAction: function(actions){
            console.log('No route:', actions);
        }
    });

    var initialize = function(){
        new Router();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});