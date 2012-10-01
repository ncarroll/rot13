define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/show.html'
], function ($, _, Backbone, ShowAboutTemplate) {
    var ShowAboutView = Backbone.View.extend({
        el:$('#content'),

        render:function () {
            $(this.el).html(ShowAboutTemplate);
            return this;
        }
    });

    return new ShowAboutView();
});