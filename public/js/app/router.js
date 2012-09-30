define([
    'jquery',
    'underscore',
    'backbone',
    'app/views/header/show',
    'app/views/home/show',
    'app/views/about/show'
], function ($, _, Backbone, ShowHeaderView, ShowHomeView, ShowAboutView) {
    var Router = Backbone.Router.extend({
        routes:{
            "":"showHome",
            "about":"showAbout",
            '*actions':'defaultAction'
        },

        initialize:function () {
            ShowHeaderView.render();
        },

        showHome:function () {
            ShowHomeView.render();
            ShowHeaderView.selectMenuItem('home-menu');
        },

        showAbout:function () {
            ShowAboutView.render();
            ShowHeaderView.selectMenuItem('about-menu');
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