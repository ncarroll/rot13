define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about/show.html'
], function($, _, Backbone, showAboutTemplate){
    var ShowAboutView = Backbone.View.extend({
        el: $('#content'),
        render: function(){
            $(this.el).html(showAboutTemplate);
        }
    });

    return new ShowAboutView();
});