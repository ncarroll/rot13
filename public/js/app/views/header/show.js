define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/header/show.html'
], function($, _, Backbone, showHeaderTemplate){
    var ShowHeaderView = Backbone.View.extend({
        el: $('#header'),

        render: function(){
            $(this.el).html(showHeaderTemplate);
        },

        selectMenuItem: function(menuItem){
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });

    return new ShowHeaderView();
});