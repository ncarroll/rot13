define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/show.html',
    'app/collections/messages',
    'app/views/messages-view',
    'app/views/new-message-view'
], function ($, _, Backbone, ShowHomeTemplate, Messages, MessagesView, NewMessageView) {
    var ShowHomeView = Backbone.View.extend({
        el:$('#content'),

        initialize:function(){
            this.collection = new Messages();
        },

        render:function () {
            $(this.el).html(ShowHomeTemplate);

            new NewMessageView({el: $('#new-message'), collection: this.collection});
            new MessagesView({el: $('#messages'), collection: this.collection});

            return this;
        }
    });

    return new ShowHomeView();
});