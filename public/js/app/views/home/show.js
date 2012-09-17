define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/show.html'
], function($, _, Backbone, showHomeTemplate) {
    var ShowHomeView = Backbone.View.extend({
        el: $('#content'),
        render: function() {
            $(this.el).html(showHomeTemplate);
        }
    });

    return new ShowHomeView();
});