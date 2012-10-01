define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/header-view',
    'app/views/home-view',
    'app/views/about-view'
], function ($, _, Backbone, HeaderView, HomeView, AboutView) {
    var Router = Backbone.Router.extend({
        routes:{
            "":"showHome",
            "about":"showAbout",
            '*actions':'defaultAction'
        },

        initialize:function () {
            HeaderView.render();
        },

        showHome:function () {
            HomeView.render();
            HeaderView.selectMenuItem('home-menu');
        },

        showAbout:function () {
            AboutView.render();
            HeaderView.selectMenuItem('about-menu');
        },

        defaultAction:function (actions) {
            console.log('No route:', actions);
        }
    });

    var initialize = function () {
        new Router();
        Backbone.history.start();
    };

    return {
        initialize:initialize
    };
});