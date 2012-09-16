define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/show.html'
], function($, _, Backbone, showHomeTemplate) {
    var ShowHomeView = Backbone.View.extend({
        el: $('#content'),
        render: function() {
            var data = {};
            var compiledTemplate = _.template(showHomeTemplate, data);
            this.el.append(compiledTemplate);
        }
    });

    return new ShowHomeView();
});