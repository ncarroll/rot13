define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var MessagesView = Backbone.View.extend({

        initialize:function () {
            this.collection.on('sync', this.appendMessage, this);
        },

        appendMessage:function(message){
            console.log('MessagesView#appendMessage: ' + JSON.stringify(message));

            $(this.el).append('<li>' + 'ROT13(' + message.escape('plainText') + ') = ' + message.escape('cipherText') + '</li>');
        }
    });

    return MessagesView;
});