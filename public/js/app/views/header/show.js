define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/header/show.html'
], function ($, _, Backbone, ShowHeaderTemplate) {
    var ShowHeaderView = Backbone.View.extend({
        el:$('#header'),

        render: function(){
            $(this.el).html(ShowHeaderTemplate);
            return this;
        },

        selectMenuItem:function (menuItem) {
            $('.nav li').removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }
    });

    return new ShowHeaderView();
});