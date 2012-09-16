define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/show.html'
], function($, _, Backbone, showAboutTemplate){
    var ShowAboutView = Backbone.View.extend({
        el: $('#content'),
        render: function(){
            var data = {};
            var compiledTemplate = _.template(showAboutTemplate, data);
            this.el.append(compiledTemplate);
        }
    });

    return new ShowAboutView();
});